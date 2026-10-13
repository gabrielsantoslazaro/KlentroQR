const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  const inputPath = 'public/KlentroQR-preview.jpg';
  const outputPath = 'public/KlentroQR-preview.png';

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const totalPixels = width * height;

  // Create an RGBA buffer
  const rgba = Buffer.alloc(totalPixels * 4);

  // Background color reference: [246, 247, 249]
  // Let's create a visited map for flood fill from the edges
  const isBackground = new Uint8Array(totalPixels);
  const queue = new Int32Array(totalPixels);
  let queueStart = 0;
  let queueEnd = 0;

  function isBgColor(r, g, b) {
    // If it's very close to the off-white background
    // [246, 247, 249], tolerance around 235-255
    return r >= 238 && g >= 238 && b >= 238;
  }

  // Seed boundary pixels into queue if they match background
  for (let x = 0; x < width; x++) {
    // Top row
    let idx0 = x;
    let r0 = data[idx0 * 3], g0 = data[idx0 * 3 + 1], b0 = data[idx0 * 3 + 2];
    if (isBgColor(r0, g0, b0) && !isBackground[idx0]) {
      isBackground[idx0] = 1;
      queue[queueEnd++] = idx0;
    }

    // Bottom row
    let idxB = (height - 1) * width + x;
    let rB = data[idxB * 3], gB = data[idxB * 3 + 1], bB = data[idxB * 3 + 2];
    if (isBgColor(rB, gB, bB) && !isBackground[idxB]) {
      isBackground[idxB] = 1;
      queue[queueEnd++] = idxB;
    }
  }

  for (let y = 0; y < height; y++) {
    // Left col
    let idxL = y * width;
    let rL = data[idxL * 3], gL = data[idxL * 3 + 1], bL = data[idxL * 3 + 2];
    if (isBgColor(rL, gL, bL) && !isBackground[idxL]) {
      isBackground[idxL] = 1;
      queue[queueEnd++] = idxL;
    }

    // Right col
    let idxR = y * width + (width - 1);
    let rR = data[idxR * 3], gR = data[idxR * 3 + 1], bR = data[idxR * 3 + 2];
    if (isBgColor(rR, gR, bR) && !isBackground[idxR]) {
      isBackground[idxR] = 1;
      queue[queueEnd++] = idxR;
    }
  }

  // BFS Flood Fill
  while (queueStart < queueEnd) {
    const curr = queue[queueStart++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // Neighbors: Up, Down, Left, Right
    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1,
    ];

    for (const n of neighbors) {
      if (n !== -1 && !isBackground[n]) {
        const nr = data[n * 3];
        const ng = data[n * 3 + 1];
        const nb = data[n * 3 + 2];

        if (isBgColor(nr, ng, nb)) {
          isBackground[n] = 1;
          queue[queueEnd++] = n;
        }
      }
    }
  }

  // Construct RGBA output with smooth edge blending
  for (let i = 0; i < totalPixels; i++) {
    const srcIdx = i * 3;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    rgba[dstIdx] = r;
    rgba[dstIdx + 1] = g;
    rgba[dstIdx + 2] = b;

    if (isBackground[i]) {
      rgba[dstIdx + 3] = 0; // Completely transparent
    } else {
      // Check if near border for slight feathering
      const x = i % width;
      const y = Math.floor(i / width);
      let bgNeighbors = 0;
      if (x > 0 && isBackground[i - 1]) bgNeighbors++;
      if (x < width - 1 && isBackground[i + 1]) bgNeighbors++;
      if (y > 0 && isBackground[i - width]) bgNeighbors++;
      if (y < height - 1 && isBackground[i + width]) bgNeighbors++;

      if (bgNeighbors > 0 && (r > 220 && g > 220 && b > 220)) {
        // Semi-transparent edge feathering to avoid halos
        rgba[dstIdx + 3] = Math.max(0, 255 - bgNeighbors * 55);
      } else {
        rgba[dstIdx + 3] = 255; // Fully opaque
      }
    }
  }

  // Save as high-res PNG with subtle sharpening
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .png({ compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Successfully created transparent PNG at:', outputPath);
}

processImage().catch(console.error);
