const sharp = require('sharp');
const fs = require('fs');

// Convert RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
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

// Convert HSL to RGB
function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
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

async function transformGreenToKlentroBlue(inputPath, outputPath) {
  const image = sharp(inputPath);
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

    // Check if pixel is visibly green, lime, or teal-green
    const [h, s, l] = rgbToHsl(r, g, b);

    // Cover from lime-green (55°) to cyan-green (185°)
    if (h >= 55 && h <= 185 && s > 0.12 && l > 0.05 && l < 0.95) {
      greenCount++;
      // Map to exact Klentro Electric Blue hue (212°)
      const targetHue = 212;
      const targetSat = Math.min(1.0, s * 1.15);
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

  console.log(`Processed ${inputPath}: found ${greenCount} green/teal pixels. Saving to ${outputPath}...`);

  await sharp(output, {
    raw: {
      width,
      height,
      channels
    }
  }).png().toFile(outputPath);
}

async function run() {
  const files = [
    'KlentroQR-class-attendance.png',
    'KlentroQR-present.png',
    'KlentroQR-export.png',
    'KlentroQR-offline.png'
  ];

  for (const file of files) {
    const backup = `public/images/backup_${file}`;
    const output = `public/images/${file}`;
    await transformGreenToKlentroBlue(backup, output);
    fs.copyFileSync(output, `public/${file}`);
  }
}

run().catch(console.error);
