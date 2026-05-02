const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const compressAndReplace = async (file) => {
  const inputPath = path.join(publicDir, file);
  const tempPath = path.join(publicDir, `temp-${file}`);

  console.log(`Optimizing ${file}...`);
  try {
    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(tempPath);
    
    fs.unlinkSync(inputPath);
    fs.renameSync(tempPath, inputPath);
    console.log(`Success: ${file} updated.`);
  } catch (err) {
    console.error(`Error optimizing ${file}:`, err);
  }
};

const run = async () => {
  const files = ['logo.webp', 'hero-bg.webp'];
  for (const file of files) {
    await compressAndReplace(file);
  }
};

run();
