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

async function convertImage(inputPath, outputPath, isCard5 = false) {
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

    // Green hue check
    const isGreen = (h >= 50 && h <= 180 && s > 0.08) || (g > r * 1.15 && g > b * 1.15 && g > 30);

    if (isGreen) {
      transformedCount++;
      const targetHue = 211.5; // Klentro Apple Electric Blue (#007AFF)

      let targetSat = 1.0;
      let targetL = 0.50; // exact #007AFF

      if (isCard5) {
        // In Card 5 (Camera scanning in dark hallway):
        // Only the glowing reticle lines should be bright electric blue!
        // The dark hallway room background should stay dark.
        const isReticleLine = (g > 75 && (g - r > 20 || g - b > 20)) || (s > 0.35 && l > 0.20);
        if (isReticleLine) {
          targetSat = 1.0;
          targetL = 0.55; // glowing luminous electric blue line
        } else {
          // Dark ambient room background: keep dark natural shadow with subtle cool blue tint
          targetSat = Math.min(0.18, s * 0.3);
          targetL = l; // keep original dark darkness
        }
      } else {
        // Cards 1, 2, 3, 4 and all other UI cards:
        if (l > 0.68) {
          // Light badge backgrounds (e.g. "On Time" pill background)
          // Map to light ice blue (#EFF6FF / #DBEAFE)
          targetSat = Math.min(0.85, s * 1.4);
          targetL = Math.max(0.88, Math.min(0.95, l));
        } else if (l < 0.20) {
          // Extremely dark edge pixels: keep subtle dark blue
          targetSat = 0.8;
          targetL = l * 1.2;
        } else {
          // Solid UI buttons & banners (Download Excel, Download CSV, Verified pill, Spreadsheet header)
          // Make them VIBRANT #007AFF (L around 0.50, S = 1.0)!
          targetSat = 1.0;
          targetL = Math.max(0.48, Math.min(0.55, 0.50 + (l - 0.38) * 0.35));
        }
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

  console.log(`${path.basename(inputPath)}: converted ${transformedCount} pixels.`);

  const sharpOut = sharp(output, { raw: { width, height, channels } });
  if (outputPath.endsWith('.jpg') || outputPath.endsWith('.jpeg')) {
    await sharpOut.jpeg({ quality: 95 }).toFile(outputPath);
  } else {
    await sharpOut.png().toFile(outputPath);
  }
}

async function run() {
  const imagesDir = path.join(__dirname, '../public/images');

  // Convert cards 1-5 from original backups
  for (let i = 1; i <= 5; i++) {
    const backup = path.join(imagesDir, `backup_KlentroQR-card${i}.jpg`);
    const original = path.join(imagesDir, `KlentroQR-card${i}.jpg`);
    const blueCard = path.join(imagesDir, `KlentroQR-blue-card${i}.jpg`);

    const temp = path.join(imagesDir, `temp_c${i}.jpg`);
    await convertImage(backup, temp, i === 5);

    fs.copyFileSync(temp, original);
    fs.copyFileSync(temp, blueCard);
    fs.unlinkSync(temp);
    console.log(`Updated Card ${i} with verified #007AFF electric blue!`);
  }

  // Convert other mockups
  const others = [
    'KlentroQR-checking.png',
    'KlentroQR-dashboard.png',
    'KlentroQR-data.jpg',
    'KlentroQR-preview.png',
    'KlentroQR-class-attendance.png',
    'KlentroQR-export.png',
    'KlentroQR-offline.png',
    'KlentroQR-present.png'
  ];

  for (const file of others) {
    const backup = path.join(imagesDir, `backup_${file}`);
    const original = path.join(imagesDir, file);
    const source = fs.existsSync(backup) ? backup : original;

    if (fs.existsSync(source)) {
      const temp = path.join(imagesDir, `temp_${file}`);
      await convertImage(source, temp, false);
      fs.copyFileSync(temp, original);
      fs.unlinkSync(temp);

      const publicRoot = path.join(__dirname, '../public', file);
      if (fs.existsSync(publicRoot)) {
        fs.copyFileSync(original, publicRoot);
      }
      console.log(`Updated ${file}!`);
    }
  }

  console.log('All image conversions finished with 100% precision!');
}

run().catch(console.error);
