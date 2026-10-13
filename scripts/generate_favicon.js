const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function main() {
  const logoPath = path.join(__dirname, '../public/images/KlentroQR-logo.png');
  if (!fs.existsSync(logoPath)) {
    console.error('Logo not found at:', logoPath);
    process.exit(1);
  }

  // Generate 48x48 PNG for favicon
  const png48 = await sharp(logoPath)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Generate 32x32 PNG for crisp favicon
  const png32 = await sharp(logoPath)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // ICO header + directory + PNG payload (Standard PNG-in-ICO format)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(1, 4); // 1 image

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0);
  entry.writeUInt8(32, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png32.length, 8);
  entry.writeUInt32LE(22, 12);

  const icoBuffer = Buffer.concat([header, entry, png32]);

  // Write favicon.ico to src/app and public
  fs.writeFileSync(path.join(__dirname, '../src/app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);

  // Write icon.png to src/app and public
  const iconPngBuffer = await sharp(logoPath)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../src/app/icon.png'), iconPngBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/icon.png'), iconPngBuffer);

  // Write apple-icon.png
  const appleIconBuffer = await sharp(logoPath)
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(__dirname, '../src/app/apple-icon.png'), appleIconBuffer);
  fs.writeFileSync(path.join(__dirname, '../public/apple-icon.png'), appleIconBuffer);

  console.log('Successfully generated and updated all favicon and tab icon files!');
}

main().catch(console.error);
