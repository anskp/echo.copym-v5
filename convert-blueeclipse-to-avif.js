import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Specific image to convert
const inputPath = './src/components/images/blueeclipse.png';
const outputPath = './src/components/images/blueeclipse.avif';

// Check if input file exists
if (!fs.existsSync(inputPath)) {
  console.error(`Input file does not exist: ${inputPath}`);
  process.exit(1);
}

// Convert the image to AVIF
async function convertToAvif() {
  try {
    await sharp(inputPath)
      .avif({
        quality: 80,           // Quality level (0-100)
        effort: 4,             // CPU effort (0-9, where 9 is fastest)
        chromaSubsampling: '4:2:0' // Chroma subsampling
      })
      .toFile(outputPath);

    console.log(`✓ Converted ${path.basename(inputPath)} to AVIF`);
    console.log(`✓ Output saved to: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
    process.exit(1);
  }
}

console.log('Starting AVIF conversion for blueeclipse.png...\n');
convertToAvif();