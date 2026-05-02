const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const compress = async (file) => {
  const inputPath = path.join(publicDir, file);
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const outputPath = path.join(publicDir, `${base}.webp`);

  console.log(`Optimizing ${file}...`);
  try {
    await sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath);
    console.log(`Success: ${outputPath}`);
    // If it was a PNG, we might want to delete it or keep it.
    // For now, let's just create the webp versions.
  } catch (err) {
    console.error(`Error optimizing ${file}:`, err);
  }
};

const run = async () => {
  const files = ['pickles.png', 'tahina.png', 'logo.webp', 'hero-bg.webp'];
  for (const file of files) {
    await compress(file);
  }
};

run();
