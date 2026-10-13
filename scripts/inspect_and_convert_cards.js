const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

async function convertImageGreenToBlue(inputPath, outputPath) {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const totalPixels = width * height;
  const output = Buffer.alloc(totalPixels * channels);

  let greenCount = 0;

  for (let i = 0; i < totalPixels; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;

    const [h, s, l] = rgbToHsl(r, g, b);

    // Green range detection (including faint/dark fringes):
    const isGreenHue = h >= 45 && h <= 185 && s > 0.07 && l > 0.03 && l < 0.97;
    const isDominantGreen = g > r * 1.05 && g > b * 1.05 && g > 20;

    if (isGreenHue || isDominantGreen) {
      greenCount++;
      // Convert to Klentro Electric Blue (hue ~212, RGB ~ #007AFF)
      const targetHue = 212; // Apple system blue / Klentro electric blue
      const targetSat = Math.max(0.70, Math.min(1.0, s * 1.15));
      const [nr, ng, nb] = hslToRgb(targetHue, targetSat, l);

      output[idx] = nr;
      output[idx + 1] = ng;
      output[idx + 2] = nb;
    } else {
      output[idx] = r;
      output[idx + 1] = g;
      output[idx + 2] = b;
    }

    if (channels === 4) {
      output[idx + 3] = a;
    }
  }

  console.log(`${path.basename(inputPath)}: found and replaced ${greenCount} green pixels.`);

  let sharpInstance = sharp(output, {
    raw: { width, height, channels }
  });

  if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
    await sharpInstance.jpeg({ quality: 95 }).toFile(outputPath);
  } else {
    await sharpInstance.png().toFile(outputPath);
  }
}

async function main() {
  const imagesDir = path.join(__dirname, '../public/images');
  const cardFiles = [
    'KlentroQR-card1.jpg',
    'KlentroQR-card2.jpg',
    'KlentroQR-card3.jpg',
    'KlentroQR-card4.jpg',
    'KlentroQR-card5.jpg',
  ];

  for (const card of cardFiles) {
    const fullPath = path.join(imagesDir, card);
    const backupPath = path.join(imagesDir, `backup_${card}`);

    // If backup does not exist yet, save original as backup
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(fullPath, backupPath);
      console.log(`Created backup: backup_${card}`);
    }

    const tempOut = path.join(imagesDir, `temp_${card}`);
    await convertImageGreenToBlue(backupPath, tempOut);

    // Overwrite the original card with the blue version
    fs.copyFileSync(tempOut, fullPath);
    fs.unlinkSync(tempOut);
    console.log(`Updated ${card} with Klentro Blue palette!`);
  }

  // Also check other mockup images in public/images/ and public/
  const otherImages = [
    'KlentroQR-checking.png',
    'KlentroQR-dashboard.png',
    'KlentroQR-data.jpg',
    'KlentroQR-preview.png'
  ];

  for (const imgName of otherImages) {
    const fullPath = path.join(imagesDir, imgName);
    if (fs.existsSync(fullPath)) {
      const backupPath = path.join(imagesDir, `backup_${imgName}`);
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(fullPath, backupPath);
      }
      const tempOut = path.join(imagesDir, `temp_${imgName}`);
      await convertImageGreenToBlue(backupPath, tempOut);
      fs.copyFileSync(tempOut, fullPath);
      fs.unlinkSync(tempOut);

      // Also copy to public/ root if it exists there
      const publicRootPath = path.join(__dirname, '../public', imgName);
      if (fs.existsSync(publicRootPath)) {
        fs.copyFileSync(fullPath, publicRootPath);
      }
    }
  }

  console.log('All image transformations completed successfully!');
}

main().catch(console.error);
