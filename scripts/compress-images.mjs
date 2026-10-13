import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
// Files we don't want to re-compress or alter (like generated ICO or manifest)
const IGNORE_PATTERNS = [/favicon\.ico$/i, /site\.webmanifest$/i];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.has(ext)) {
        if (!IGNORE_PATTERNS.some((pattern) => pattern.test(entry.name))) {
          arrayOfFiles.push(fullPath);
        }
      }
    }
  }

  return arrayOfFiles;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  try {
    // Read whole file into buffer to avoid Windows file descriptor locks
    const inputBuffer = fs.readFileSync(filePath);
    const originalSize = inputBuffer.length;

    const pipeline = sharp(inputBuffer);
    const meta = await pipeline.metadata();

    let compressedBuffer;

    if (ext === '.jpg' || ext === '.jpeg') {
      // High quality mozjpeg compression with progressive scan
      compressedBuffer = await sharp(inputBuffer)
        .jpeg({
          quality: 80,
          mozjpeg: true,
          progressive: true,
        })
        .toBuffer();
    } else if (ext === '.png') {
      compressedBuffer = await sharp(inputBuffer)
        .png({
          compressionLevel: 9,
          effort: 8,
          palette: meta.width > 256,
        })
        .toBuffer();
    } else if (ext === '.webp') {
      compressedBuffer = await sharp(inputBuffer)
        .webp({
          quality: 80,
          effort: 6,
        })
        .toBuffer();
    }

    if (compressedBuffer && compressedBuffer.length < originalSize) {
      fs.writeFileSync(filePath, compressedBuffer);
      const newSize = compressedBuffer.length;
      const savedBytes = originalSize - newSize;
      const percent = ((savedBytes / originalSize) * 100).toFixed(1);
      return {
        filePath,
        originalSize,
        newSize,
        savedBytes,
        percent,
        success: true,
      };
    } else {
      return {
        filePath,
        originalSize,
        newSize: originalSize,
        savedBytes: 0,
        percent: '0.0',
        success: false,
        note: 'Already optimal',
      };
    }
  } catch (err) {
    const stats = fs.statSync(filePath);
    return {
      filePath,
      originalSize: stats.size,
      newSize: stats.size,
      savedBytes: 0,
      percent: '0.0',
      success: false,
      error: err.message,
    };
  }
}

async function run() {
  console.log('='.repeat(70));
  console.log('🖼️   Sri Sai English High School - Image Compression Utility');
  console.log('='.repeat(70));
  console.log(`Scanning directory: ${PUBLIC_DIR}\n`);

  const files = getAllFiles(PUBLIC_DIR);
  console.log(`Found ${files.length} image files to process...\n`);

  let totalOriginal = 0;
  let totalCompressed = 0;
  let compressedCount = 0;

  for (const file of files) {
    const relPath = path.relative(ROOT_DIR, file).replace(/\\/g, '/');
    const result = await compressImage(file);
    totalOriginal += result.originalSize;
    totalCompressed += result.newSize;

    if (result.success) {
      compressedCount++;
      console.log(
        `✓ ${relPath.padEnd(45)} ${formatBytes(result.originalSize).padStart(10)} -> ${formatBytes(result.newSize).padStart(10)} (-${result.percent}%)`
      );
    } else if (result.error) {
      console.log(`✗ ${relPath.padEnd(45)} Error: ${result.error}`);
    } else {
      console.log(`- ${relPath.padEnd(45)} ${formatBytes(result.originalSize).padStart(10)} (${result.note})`);
    }
  }

  const totalSaved = totalOriginal - totalCompressed;
  const overallPercent = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : '0';

  console.log('\n' + '='.repeat(70));
  console.log('📊 Compression Summary:');
  console.log('='.repeat(70));
  console.log(`Total images scanned:    ${files.length}`);
  console.log(`Images compressed:       ${compressedCount}`);
  console.log(`Original total size:     ${formatBytes(totalOriginal)}`);
  console.log(`Optimized total size:    ${formatBytes(totalCompressed)}`);
  console.log(`Total space saved:       ${formatBytes(totalSaved)} (${overallPercent}% reduction)`);
  console.log('='.repeat(70) + '\n');
}

run();
