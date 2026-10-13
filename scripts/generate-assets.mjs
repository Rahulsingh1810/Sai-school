import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const APP_DIR = path.join(ROOT_DIR, 'app');
const LOGO_PATH = path.join(PUBLIC_DIR, 'logo.png');

if (!fs.existsSync(LOGO_PATH)) {
  console.error('Logo file not found at:', LOGO_PATH);
  process.exit(1);
}

// Function to construct a multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  // ICO header: 6 bytes
  // 0-1: Reserved (0)
  // 2-3: Image type (1 for ICO)
  // 4-5: Number of images
  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  // Directory entries: 16 bytes each
  const dirSize = 16 * numImages;
  let offset = 6 + dirSize;

  const entries = [];
  for (const { width, height, buffer } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(width >= 256 ? 0 : width, 0); // Width (0 for 256)
    entry.writeUInt8(height >= 256 ? 0 : height, 1); // Height (0 for 256)
    entry.writeUInt8(0, 2); // Color palette (0 = no palette)
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes (1)
    entry.writeUInt16LE(32, 6); // Bits per pixel (32 for RGBA)
    entry.writeUInt32LE(buffer.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function generateIcons() {
  console.log('Generating favicons and icons from logo.png...');

  // 1. Trim transparency or keep logo centered with slight padding
  const logoMeta = await sharp(LOGO_PATH).metadata();
  console.log(`Original logo: ${logoMeta.width}x${logoMeta.height}`);

  // We make a square bounded version with gentle transparent padding so it looks great at all icon sizes
  const squareSize = 512;
  const baseSquareBuffer = await sharp(LOGO_PATH)
    .resize(squareSize, squareSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Create standard resolutions
  const sizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' },
    { size: 96, name: 'icon-96.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 180, name: 'apple-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
    { size: 512, name: 'icon-512.png' },
    { size: 48, name: 'icon.png' },
  ];

  const generatedPngs = {};

  for (const { size, name } of sizes) {
    const buf = await sharp(baseSquareBuffer)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    
    generatedPngs[name] = buf;
    fs.writeFileSync(path.join(PUBLIC_DIR, name), buf);
  }

  // Also write app/icon.png and app/apple-icon.png
  fs.writeFileSync(path.join(APP_DIR, 'icon.png'), generatedPngs['icon.png']);
  fs.writeFileSync(path.join(APP_DIR, 'apple-icon.png'), generatedPngs['apple-icon.png']);

  // Build ICO file with 16, 32, 48
  const icoBuffers = [
    { width: 16, height: 16, buffer: generatedPngs['favicon-16x16.png'] },
    { width: 32, height: 32, buffer: generatedPngs['favicon-32x32.png'] },
    { width: 48, height: 48, buffer: generatedPngs['favicon-48x48.png'] },
  ];
  const icoBuffer = createIco(icoBuffers);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(APP_DIR, 'favicon.ico'), icoBuffer);

  // Generate web manifest
  const manifest = {
    name: "Sri Sai English High School",
    short_name: "Sri Sai High School",
    description: "Quality Education & Holistic Development in Adugodi, Bangalore",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#005d98",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };

  fs.writeFileSync(path.join(PUBLIC_DIR, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
  console.log('✓ Favicons and app manifest created successfully!');
}

async function generateOgImage() {
  console.log('Generating Open Graph (og-image.jpeg) image...');

  const width = 1200;
  const height = 630;

  // Prepare a resized version of the logo for embedding into the OG banner
  const logoOgBuffer = await sharp(LOGO_PATH)
    .resize(360, 360, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const logoBase64 = `data:image/png;base64,${logoOgBuffer.toString('base64')}`;

  // Create an SVG card overlay with modern design and crisp vector graphics
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Background Gradient -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#031b33" />
        <stop offset="50%" stop-color="#003e6b" />
        <stop offset="100%" stop-color="#005d98" />
      </linearGradient>

      <!-- Gold Accent Gradient -->
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="50%" stop-color="#fbbf24" />
        <stop offset="100%" stop-color="#f59e0b" />
      </linearGradient>

      <!-- Glass overlay for badge -->
      <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.15)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.05)" />
      </linearGradient>

      <!-- Drop shadow -->
      <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.35" />
      </filter>
    </defs>

    <!-- Background Base -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

    <!-- Subtle Decorative Geometric Circles / Grid -->
    <circle cx="1150" cy="50" r="320" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2" />
    <circle cx="1150" cy="50" r="220" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="2" />
    <circle cx="80" cy="580" r="260" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="2" />

    <!-- Top Accent Bar -->
    <rect x="0" y="0" width="${width}" height="8" fill="url(#goldGrad)" />

    <!-- Content Container Card -->
    <!-- Logo Badge Circle Background on the Left -->
    <g transform="translate(70, 115)">
      <circle cx="190" cy="190" r="195" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" stroke-width="2" />
      <circle cx="190" cy="190" r="180" fill="#ffffff" filter="url(#cardShadow)" />
      <!-- Logo inside the white badge -->
      <image href="${logoBase64}" x="25" y="25" width="330" height="330" preserveAspectRatio="xMidYMid meet" />
    </g>

    <!-- Text & Information on the Right -->
    <g transform="translate(500, 110)">
      <!-- Badge Pill -->
      <g>
        <rect x="0" y="0" width="340" height="38" rx="19" fill="url(#goldGrad)" />
        <text x="170" y="24" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#031b33" text-anchor="middle" letter-spacing="1.5">
          ★ 25+ YEARS OF EXCELLENCE
        </text>
      </g>

      <!-- Main Heading: Sri Sai English High School -->
      <text x="0" y="95" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="#ffffff" letter-spacing="0.5">
        Sri Sai English
      </text>
      <text x="0" y="145" font-family="'Georgia', serif" font-size="44" font-weight="bold" fill="#fbbf24" letter-spacing="0.5">
        High School
      </text>

      <!-- Tagline -->
      <text x="0" y="195" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="500" fill="#e0e7ff" letter-spacing="0.2">
        Nurturing Future Leaders with Academic Excellence &amp; Values
      </text>

      <!-- Divider line -->
      <line x1="0" y1="225" x2="630" y2="225" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />

      <!-- Feature Badges / Highlights -->
      <g transform="translate(0, 245)">
        <!-- Highlight 1 -->
        <rect x="0" y="0" width="295" height="42" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <text x="15" y="26" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#ffffff">
          ✓ Pre-Primary to Class 10th (SSLC)
        </text>

        <!-- Highlight 2 -->
        <rect x="315" y="0" width="310" height="42" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <text x="330" y="26" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#ffffff">
          ✓ Karnataka State Board Recognized
        </text>

        <!-- Highlight 3 -->
        <rect x="0" y="52" width="295" height="42" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <text x="15" y="78" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#ffffff">
          ✓ Smart Classes &amp; Science Labs
        </text>

        <!-- Highlight 4 -->
        <rect x="315" y="52" width="310" height="42" rx="8" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
        <text x="330" y="78" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="600" fill="#ffffff">
          ✓ Admissions Open 2026 - 2027
        </text>
      </g>

      <!-- Bottom Info Row -->
      <g transform="translate(0, 375)">
        <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#fbbf24">
          📍 Adugodi, Bangalore – 560030
        </text>
        <text x="320" y="0" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#ffffff">
          🌐 srisaienglishhighschool.in
        </text>
      </g>
    </g>

    <!-- Bottom Accent Border -->
    <rect x="0" y="622" width="${width}" height="8" fill="url(#goldGrad)" />
  </svg>
  `;

  const ogJpegBuffer = await sharp(Buffer.from(svgOverlay))
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toBuffer();

  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.jpeg'), ogJpegBuffer);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.jpg'), ogJpegBuffer);
  
  const ogPngBuffer = await sharp(Buffer.from(svgOverlay))
    .png({ quality: 90 })
    .toBuffer();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'og-image.png'), ogPngBuffer);

  console.log('✓ og-image.jpeg (and .jpg, .png) generated successfully (1200x630)!');
}

async function main() {
  try {
    await generateIcons();
    await generateOgImage();
    console.log('All icons and OG images successfully created!');
  } catch (err) {
    console.error('Error generating assets:', err);
    process.exit(1);
  }
}

main();
