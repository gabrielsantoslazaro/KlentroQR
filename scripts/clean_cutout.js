const sharp = require('sharp');
const fs = require('fs');

async function cleanCutout() {
  const inputPath = 'src/image/KlentroQR-preview.jpg';
  const outputPath = 'public/KlentroQR-preview.png';

  console.log('Processing original high-res image:', inputPath);

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const totalPixels = width * height;

  const rgba = Buffer.alloc(totalPixels * 4);
  const isBackground = new Uint8Array(totalPixels);
  const queue = new Int32Array(totalPixels);
  let queueStart = 0;
  let queueEnd = 0;

  // Background threshold:
  // In KlentroQR-preview.jpg, the background is off-white (RGB > 200)
  // The phone edge is darker (titanium frame < 190, bezel < 50)
  // The floating badges have a distinct blue checkmark and defined borders
  function isBg(r, g, b) {
    return (r + g + b) / 3 > 205;
  }

  // Seed boundary pixels from all 4 borders
  for (let x = 0; x < width; x++) {
    // Top row
    const iTop = x;
    if (isBg(data[iTop*3], data[iTop*3+1], data[iTop*3+2]) && !isBackground[iTop]) {
      isBackground[iTop] = 1;
      queue[queueEnd++] = iTop;
    }
    // Bottom row
    const iBot = (height - 1) * width + x;
    if (isBg(data[iBot*3], data[iBot*3+1], data[iBot*3+2]) && !isBackground[iBot]) {
      isBackground[iBot] = 1;
      queue[queueEnd++] = iBot;
    }
  }

  for (let y = 0; y < height; y++) {
    // Left column
    const iLeft = y * width;
    if (isBg(data[iLeft*3], data[iLeft*3+1], data[iLeft*3+2]) && !isBackground[iLeft]) {
      isBackground[iLeft] = 1;
      queue[queueEnd++] = iLeft;
    }
    // Right column
    const iRight = y * width + (width - 1);
    if (isBg(data[iRight*3], data[iRight*3+1], data[iRight*3+2]) && !isBackground[iRight]) {
      isBackground[iRight] = 1;
      queue[queueEnd++] = iRight;
    }
  }

  // BFS Flood fill
  while (queueStart < queueEnd) {
    const curr = queue[queueStart++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1,
    ];

    for (const n of neighbors) {
      if (n !== -1 && !isBackground[n]) {
        if (isBg(data[n*3], data[n*3+1], data[n*3+2])) {
          isBackground[n] = 1;
          queue[queueEnd++] = n;
        }
      }
    }
  }

  // Build RGBA buffer with edge anti-aliasing
  for (let i = 0; i < totalPixels; i++) {
    const s = i * 3;
    const d = i * 4;
    const r = data[s];
    const g = data[s + 1];
    const b = data[s + 2];

    rgba[d] = r;
    rgba[d + 1] = g;
    rgba[d + 2] = b;

    if (isBackground[i]) {
      rgba[d + 3] = 0;
    } else {
      // Check neighbors for smooth alpha edge
      const x = i % width;
      const y = Math.floor(i / width);
      let bgCount = 0;
      if (x > 0 && isBackground[i - 1]) bgCount++;
      if (x < width - 1 && isBackground[i + 1]) bgCount++;
      if (y > 0 && isBackground[i - width]) bgCount++;
      if (y < height - 1 && isBackground[i + width]) bgCount++;

      if (bgCount > 0 && (r + g + b) / 3 > 195) {
        rgba[d + 3] = Math.max(0, 255 - bgCount * 60);
      } else {
        rgba[d + 3] = 255;
      }
    }
  }

  // Save with Lanczos sharpening for maximum crispness
  await sharp(rgba, {
    raw: { width, height, channels: 4 },
  })
    // Sharpen the details (QR code, text, icons) so it's super crisp
    .sharpen({
      sigma: 1.5,
      m1: 1.5,
      m2: 3.0,
    })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Saved clean, sharp, transparent PNG to:', outputPath);
}

cleanCutout().catch(console.error);
