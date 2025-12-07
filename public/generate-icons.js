const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 180, 192, 384, 512];
const inputLogo = path.join(__dirname, 'images', 'CUBES_logo.png');
const outputDir = path.join(__dirname, 'icons');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Generating PWA icons from CUBES logo...\n');

// Check if logo exists
if (!fs.existsSync(inputLogo)) {
  console.error('Error: CUBES_logo.png not found in public/images/');
  process.exit(1);
}

// Generate all icon sizes
Promise.all(
  sizes.map(async (size) => {
    const outputFile = path.join(outputDir, `icon-${size}x${size}.png`);
    console.log(`  Creating ${size}x${size} icon...`);
    
    await sharp(inputLogo)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(outputFile);
    
    return outputFile;
  })
)
  .then((files) => {
    console.log('\n✓ All PWA icons generated successfully!\n');
    console.log('Icons created:');
    files.forEach((file) => {
      const stats = fs.statSync(file);
      console.log(`  ${path.basename(file)} - ${(stats.size / 1024).toFixed(2)} KB`);
    });
  })
  .catch((err) => {
    console.error('Error generating icons:', err);
    process.exit(1);
  });
