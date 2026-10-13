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

async function convertFile(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const totalPixels = width * height;
  const output = Buffer.alloc(totalPixels * channels);

  let transformedCount = 0;

  for (let i = 0; i < totalPixels; i++) {
    const idx = i * channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = channels === 4 ? data[idx + 3] : 255;

    const [h, s, l] = rgbToHsl(r, g, b);

    // Green range detection (lime to teal-cyan)
    const isGreenHue = h >= 48 && h <= 180 && s > 0.08 && l > 0.04 && l < 0.98;
    const isDominantGreen = g > r * 1.08 && g > b * 1.08 && g > 25;

    if (isGreenHue || isDominantGreen) {
      transformedCount++;
      const targetHue = 211.5; // Klentro Apple Electric Blue (#007AFF)

      let targetSat = 1.0;
      let targetL = 0.50; // default to exact #007AFF (L=0.50)

      if (l > 0.70) {
        // Light badges (e.g. "On Time" badge background originally light mint green)
        // Map to light ice blue (#EFF6FF / #DBEAFE)
        targetSat = Math.min(0.90, s * 1.5 + 0.2);
        targetL = Math.max(0.85, Math.min(0.94, l));
      } else if (l < 0.25) {
        // Darker green elements (like reticle in dark room or dark button shadows)
        // Boost them so they GLOW with #007AFF electric blue instead of dark navy!
        targetSat = 1.0;
        targetL = Math.max(0.48, Math.min(0.55, 0.45 + l * 0.4));
      } else {
        // Solid buttons and pills (original green buttons with l around 0.30 - 0.60)
        // Center around exact #007AFF (L = 0.50), retaining slight natural shading
        targetSat = 1.0;
        targetL = Math.max(0.46, Math.min(0.56, 0.50 + (l - 0.38) * 0.5));
      }

      const [nr, ng, nb] = hslToRgb(targetHue, targetSat, targetL);
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

  console.log(`${path.basename(inputPath)}: converted ${transformedCount} pixels to Klentro Electric Blue.`);

  const sharpOut = sharp(output, { raw: { width, height, channels } });
  if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
    await sharpOut.jpeg({ quality: 95 }).toFile(outputPath);
  } else {
    await sharpOut.png().toFile(outputPath);
  }
}

async function main() {
  const imagesDir = path.join(__dirname, '../public/images');

  // Process all 5 cards
  for (let i = 1; i <= 5; i++) {
    const backupFile = path.join(imagesDir, `backup_KlentroQR-card${i}.jpg`);
    const originalFile = path.join(imagesDir, `KlentroQR-card${i}.jpg`);
    const blueCardFile = path.join(imagesDir, `KlentroQR-blue-card${i}.jpg`);

    const source = fs.existsSync(backupFile) ? backupFile : originalFile;

    const tempPath = path.join(imagesDir, `temp_card${i}.jpg`);
    await convertFile(source, tempPath);

    // Save to both KlentroQR-card[i].jpg and KlentroQR-blue-card[i].jpg
    fs.copyFileSync(tempPath, originalFile);
    fs.copyFileSync(tempPath, blueCardFile);
    fs.unlinkSync(tempPath);
    console.log(`Saved Card ${i} as vibrant Klentro Blue!`);
  }

  // Also process all other mockups
  const otherFiles = [
    'KlentroQR-checking.png',
    'KlentroQR-dashboard.png',
    'KlentroQR-data.jpg',
    'KlentroQR-preview.png',
    'KlentroQR-class-attendance.png',
    'KlentroQR-export.png',
    'KlentroQR-offline.png',
    'KlentroQR-present.png'
  ];

  for (const file of otherFiles) {
    const backupFile = path.join(imagesDir, `backup_${file}`);
    const originalFile = path.join(imagesDir, file);
    const source = fs.existsSync(backupFile) ? backupFile : originalFile;

    if (fs.existsSync(source)) {
      const tempPath = path.join(imagesDir, `temp_${file}`);
      await convertFile(source, tempPath);
      fs.copyFileSync(tempPath, originalFile);
      fs.unlinkSync(tempPath);

      const publicRootFile = path.join(__dirname, '../public', file);
      if (fs.existsSync(publicRootFile)) {
        fs.copyFileSync(originalFile, publicRootFile);
      }
      console.log(`Updated ${file} to vibrant Klentro Blue!`);
    }
  }

  console.log('All images updated to #007AFF Klentro Electric Blue!');
}

main().catch(console.error);
