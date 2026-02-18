const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExtensions.includes(ext)) return;

  const outputPath = filePath.replace(ext, `_optimized${ext}`);
  const originalSize = fs.statSync(filePath).size;

  try {
    let pipeline = sharp(filePath);

    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    }

    // Resize if larger than 1920px width, maintaining aspect ratio
    const metadata = await sharp(filePath).metadata();
    if (metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
    }

    await pipeline.toFile(outputPath);

    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

    console.log(`${filePath}: ${originalSize} -> ${optimizedSize} bytes (${reduction}% reduction)`);

    // Replace original with optimized
    fs.renameSync(outputPath, filePath);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await walkDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('Starting image optimization...');
  await walkDirectory(assetsDir);
  console.log('Image optimization complete.');
}

main().catch(console.error);
