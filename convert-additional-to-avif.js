import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Specific files to convert
const filesToConvert = [
  './public/assets/Images/hockey.png',
  './public/assets/Images/real estate2l.png',
  './public/assets/Images/real estate1l.jpeg'
];

// Function to convert an image to AVIF
async function convertToAvif(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .avif({
        quality: 80,           // Quality level (0-100)
        effort: 4,             // CPU effort (0-9, where 9 is fastest)
        chromaSubsampling: '4:2:0' // Chroma subsampling
      })
      .toFile(outputPath);

    console.log(`✓ Converted ${path.basename(inputPath)} to AVIF`);
  } catch (error) {
    console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
  }
}

console.log('Starting AVIF conversion for hockey.png, real estate2l.png, and real estate1l.jpeg...\n');

// Convert specific files
for (const file of filesToConvert) {
  if (fs.existsSync(file)) {
    const avifPath = file.replace(path.extname(file), '.avif');
    await convertToAvif(file, avifPath);
  } else {
    console.log(`File ${file} does not exist, skipping...`);
  }
}

console.log('\nAVIF conversion completed!');