import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Directory containing your images
const inputDirs = ['./public', './src']; // Process images in both public and src directories
const outputDirs = ['./public', './src']; // Output directories (can be the same)

// Supported input formats
const inputFormats = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

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

// Function to process all images in a directory
async function processDirectory(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(fullPath);
    } else {
      const ext = path.extname(item).toLowerCase();

      if (inputFormats.includes(ext)) {
        const avifPath = path.join(path.dirname(fullPath), path.basename(item, ext) + '.avif');
        await convertToAvif(fullPath, avifPath);
      }
    }
  }
}

console.log('Starting AVIF conversion...\n');

// Process all input directories
Promise.all(inputDirs.map(dir => {
  if (fs.existsSync(dir)) {
    return processDirectory(dir);
  } else {
    console.log(`Directory ${dir} does not exist, skipping...`);
    return Promise.resolve();
  }
}))
.then(() => {
  console.log('\nAVIF conversion completed!');
})
.catch(err => {
  console.error('Error during conversion:', err);
});