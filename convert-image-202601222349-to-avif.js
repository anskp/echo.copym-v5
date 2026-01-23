import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Specific file to convert
const inputFile = './src/components/images/Image_202601222349.jpeg';
const outputFile = './src/components/images/Image_202601222349.avif';

// Check if input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`Input file does not exist: ${inputFile}`);
  process.exit(1);
}

// Convert the specific JPEG file to AVIF
async function convertSingleFile() {
  try {
    await sharp(inputFile)
      .avif({
        quality: 80,           // Quality level (0-100)
        effort: 4,             // CPU effort (0-9, where 9 is fastest)
        chromaSubsampling: '4:2:0' // Chroma subsampling
      })
      .toFile(outputFile);

    console.log(`✓ Successfully converted ${path.basename(inputFile)} to AVIF`);
    console.log(`✓ Output saved to: ${outputFile}`);
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputFile)}:`, error.message);
    process.exit(1);
  }
}

console.log('Converting Image_202601222349.jpeg to AVIF format...\n');
convertSingleFile();