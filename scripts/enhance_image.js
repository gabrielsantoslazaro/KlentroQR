const sharp = require('sharp');
const fs = require('fs');

async function enhanceImage() {
  const origPath = 'src/image/KlentroQR-preview.jpg';
  const cutoutPath = 'public/KlentroQR-preview.png';
  const outputPath = 'public/KlentroQR-preview.png';

  console.log('Reading files...');
  const origMeta = await sharp(origPath).metadata();
  const cutoutMeta = await sharp(cutoutPath).metadata();

  console.log('Original resolution:', origMeta.width, 'x', origMeta.height);
  console.log('Cutout resolution:', cutoutMeta.width, 'x', cutoutMeta.height);

  // 1. Extract the alpha channel from the cutout and upscale it to match the high-res original
  const alphaMask = await sharp(cutoutPath)
    .extractChannel('alpha')
    .resize(origMeta.width, origMeta.height, {
      kernel: sharp.kernel.lanczos3,
    })
    .toBuffer();

  // 2. Read the full-resolution original RGB image
  const origRgb = await sharp(origPath)
    .toColourspace('srgb')
    .toBuffer();

  // 3. Join the original high-res RGB with the upscaled alpha mask
  const highResCutout = await sharp(origRgb)
    .joinChannel(alphaMask)
    // 4. Upscale 1.5x with Lanczos3 for ultra-crisp display on Retina/1080p/4K screens
    .resize(origMeta.width * 2, origMeta.height * 2, {
      kernel: sharp.kernel.lanczos3,
    })
    // 5. Apply subtle unsharp mask to make the text, QR codes, and phone edges razor sharp
    .sharpen({
      sigma: 1.2,
      m1: 1.0,
      m2: 2.5,
    })
    .png({
      compressionLevel: 7,
      adaptiveFiltering: true,
    })
    .toBuffer();

  fs.writeFileSync(outputPath, highResCutout);
  
  const finalMeta = await sharp(outputPath).metadata();
  console.log('SUCCESS! Final enhanced image resolution:', finalMeta.width, 'x', finalMeta.height);
}

enhanceImage().catch(console.error);
