import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';

// Directory containing your videos
const inputDir = './public/assets/videos'; // Adjust this path to where your videos are located
const outputDir = './public/assets/videos'; // Output directory (can be the same)

// Supported input formats
const inputFormats = ['.mp4', '.mov', '.avi', '.wmv', '.flv', '.mkv'];

// Function to convert a video to AV1/WebM format
function convertToAv1(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v', 'libvpx-vp9', // Use VP9 codec (similar to AV1, widely supported)
        '-crf', '30',         // Quality (lower = higher quality)
        '-b:v', '0',          // Bitrate (0 means automatic)
        '-c:a', 'libopus',    // Audio codec
        '-quality', 'good',
        '-cpu-used', '4',
        '-deadline', 'good'
      ])
      .toFormat('webm')
      .on('end', () => {
        console.log(`✓ Converted ${path.basename(inputPath)} to WebM (AV1-like)`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`✗ Error converting ${path.basename(inputPath)}:`, err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

// Function to convert a video to HEVC/MP4 format
function convertToHevc(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .outputOptions([
        '-c:v', 'libx265',    // Use HEVC codec
        '-crf', '28',         // Quality (lower = higher quality)
        '-preset', 'medium',   // Encoding speed vs compression ratio
        '-c:a', 'aac',        // Audio codec
        '-strict', 'experimental'
      ])
      .toFormat('mp4')
      .on('end', () => {
        console.log(`✓ Converted ${path.basename(inputPath)} to HEVC MP4`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`✗ Error converting ${path.basename(inputPath)}:`, err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

// Function to process all videos in a directory
async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist, skipping...`);
    return;
  }
  
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
        // Convert to AV1/WebM
        const av1Path = path.join(path.dirname(fullPath), path.basename(item, ext) + '.webm');
        await convertToAv1(fullPath, av1Path);
        
        // Convert to HEVC/MP4
        const hevcPath = path.join(path.dirname(fullPath), path.basename(item, ext).replace(ext, '-hevc.mp4'));
        await convertToHevc(fullPath, hevcPath);
      }
    }
  }
}

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Starting video conversion to modern formats...\n');
processDirectory(inputDir)
  .then(() => {
    console.log('\nVideo conversion completed!');
  })
  .catch(err => {
    console.error('Error during conversion:', err);
  });