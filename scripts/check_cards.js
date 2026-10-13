const sharp = require('sharp');

async function inspectPixels(file) {
  const { data, info } = await sharp('public/images/' + file).raw().toBuffer({ resolveWithObject: true });
  let greenish = 0;
  const samples = [];
  for (let i = 0; i < info.width * info.height; i++) {
    const idx = i * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    if (g > 50 && g > r * 1.1 && g > b * 1.1) {
      greenish++;
      if (samples.length < 5) {
        samples.push({ r, g, b, i });
      }
    }
  }
  console.log(file, 'greenish pixels count:', greenish, 'samples:', samples);
}

async function run() {
  await inspectPixels('KlentroQR-card1.jpg');
  await inspectPixels('KlentroQR-card2.jpg');
  await inspectPixels('KlentroQR-card3.jpg');
  await inspectPixels('KlentroQR-card4.jpg');
  await inspectPixels('KlentroQR-card5.jpg');
}

run();
