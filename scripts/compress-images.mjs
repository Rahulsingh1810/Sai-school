import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

// Parse CLI flags
const args = process.argv.slice(2);
const options = {
  targetDir: path.resolve(ROOT_DIR, getArgValue("--dir", "public")),
  quality: parseInt(getArgValue("--quality", "80"), 10),
  maxWidth: parseInt(getArgValue("--max-width", "1920"), 10),
  maxHeight: parseInt(getArgValue("--max-height", "1920"), 10),
  backup: args.includes("--backup"),
  dryRun: args.includes("--dry-run"),
  convertToWebp: args.includes("--convert-to-webp"),
};

function getArgValue(flag, defaultValue) {
  const arg = args.find((a) => a.startsWith(`${flag}=`));
  return arg ? arg.split("=")[1] : defaultValue;
}

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".JPG",
  ".JPEG",
  ".PNG",
  ".WEBP",
]);

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

async function getFilesRecursively(dir) {
  let results = [];
  try {
    const list = await fs.readdir(dir, { withFileTypes: true });
    for (const item of list) {
      const fullPath = path.join(dir, item.name);
      if (item.isDirectory()) {
        results = results.concat(await getFilesRecursively(fullPath));
      } else {
        const ext = path.extname(item.name);
        if (SUPPORTED_EXTENSIONS.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }
  return results;
}

async function compressImage(filePath, sharp) {
  const originalStat = await fs.stat(filePath);
  const originalSize = originalStat.size;
  const ext = path.extname(filePath).toLowerCase();

  try {
    let pipeline = sharp(filePath, { failOnError: false }).rotate(); // auto-orient based on EXIF
    const metadata = await pipeline.metadata();

    // Resize if larger than max dimensions without enlarging
    if (
      (metadata.width && metadata.width > options.maxWidth) ||
      (metadata.height && metadata.height > options.maxHeight)
    ) {
      pipeline = pipeline.resize({
        width: options.maxWidth,
        height: options.maxHeight,
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    let targetExt = ext;
    if (options.convertToWebp) {
      pipeline = pipeline.webp({ quality: options.quality });
      targetExt = ".webp";
    } else if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({
        quality: options.quality,
        mozjpeg: true,
        progressive: true,
      });
    } else if (ext === ".png") {
      pipeline = pipeline.png({
        quality: options.quality,
        compressionLevel: 9,
        palette: true,
      });
    } else if (ext === ".webp") {
      pipeline = pipeline.webp({ quality: options.quality });
    }

    const compressedBuffer = await pipeline.toBuffer();
    const compressedSize = compressedBuffer.length;

    // Check if compression saved space
    const savedBytes = originalSize - compressedSize;
    const percentSaved = ((savedBytes / originalSize) * 100).toFixed(1);

    const relativePath = path.relative(ROOT_DIR, filePath);

    if (savedBytes <= 0 && targetExt === ext) {
      return {
        path: relativePath,
        originalSize,
        compressedSize: originalSize,
        savedBytes: 0,
        percentSaved: "0.0",
        skipped: true,
        reason: "Already optimal",
      };
    }

    if (!options.dryRun) {
      if (options.backup) {
        await fs.copyFile(filePath, `${filePath}.bak`);
      }

      if (options.convertToWebp && targetExt !== ext) {
        const newPath = filePath.replace(new RegExp(`${path.extname(filePath)}$`), ".webp");
        await fs.writeFile(newPath, compressedBuffer);
        if (newPath !== filePath) {
          await fs.unlink(filePath);
        }
      } else {
        // Write via temp file for atomic replacement
        const tempPath = `${filePath}.tmp`;
        await fs.writeFile(tempPath, compressedBuffer);
        await fs.rename(tempPath, filePath);
      }
    }

    return {
      path: relativePath,
      originalSize,
      compressedSize,
      savedBytes: Math.max(0, savedBytes),
      percentSaved: Math.max(0, percentSaved),
      skipped: false,
      dimensions: `${metadata.width || "?"}x${metadata.height || "?"}`,
    };
  } catch (err) {
    return {
      path: path.relative(ROOT_DIR, filePath),
      originalSize,
      compressedSize: originalSize,
      savedBytes: 0,
      percentSaved: "0.0",
      skipped: true,
      reason: `Error: ${err.message}`,
    };
  }
}

async function main() {
  let sharp;
  try {
    const sharpModule = await import("sharp");
    sharp = sharpModule.default || sharpModule;
  } catch (e) {
    console.error("\n❌ 'sharp' is not installed.");
    console.error("Please install it using: npm install -D sharp (or pnpm add -D sharp)\n");
    process.exit(1);
  }

  console.log("==================================================");
  console.log("          🖼️  IMAGE COMPRESSION TOOL");
  console.log("==================================================");
  console.log(`Directory:   ${options.targetDir}`);
  console.log(`Quality:     ${options.quality}`);
  console.log(`Max Bounds:  ${options.maxWidth}x${options.maxHeight}px`);
  console.log(`Backup:      ${options.backup ? "Enabled (.bak)" : "Disabled"}`);
  console.log(`Dry Run:     ${options.dryRun ? "YES (no files will be modified)" : "NO"}`);
  console.log(`Convert WebP:${options.convertToWebp ? "YES" : "NO"}`);
  console.log("--------------------------------------------------\n");

  const files = await getFilesRecursively(options.targetDir);

  if (files.length === 0) {
    console.log("No images found in the target directory.");
    return;
  }

  console.log(`Found ${files.length} images. Processing...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  const results = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const progress = `[${i + 1}/${files.length}]`;
    const res = await compressImage(file, sharp);
    results.push(res);
    totalOriginal += res.originalSize;
    totalCompressed += res.compressedSize;

    if (res.skipped) {
      console.log(
        `${progress} ⏭️  ${res.path} (${formatBytes(res.originalSize)}) - Skipped (${res.reason})`
      );
    } else {
      console.log(
        `${progress} ✅ ${res.path}: ${formatBytes(res.originalSize)} -> ${formatBytes(
          res.compressedSize
        )} (-${res.percentSaved}%) [${res.dimensions}]`
      );
    }
  }

  const totalSaved = totalOriginal - totalCompressed;
  const totalPercent = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0;

  console.log("\n==================================================");
  console.log("                   SUMMARY");
  console.log("==================================================");
  console.log(`Total images processed: ${files.length}`);
  console.log(`Original total size:    ${formatBytes(totalOriginal)}`);
  console.log(`Compressed total size:  ${formatBytes(totalCompressed)}`);
  console.log(`Total space saved:      ${formatBytes(totalSaved)} (${totalPercent}% reduction)`);
  console.log("==================================================\n");

  if (options.dryRun) {
    console.log("ℹ️  This was a dry run. Run without --dry-run to apply compression.");
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
