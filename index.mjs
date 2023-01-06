import fs from 'node:fs/promises';
import sharp from 'sharp';

const buf = await sharp('emergency.png', { animated: true })
  .resize({
    height: 128,
    withoutEnlargement: true,
  })
  .webp({
    quality: 85,
    alphaQuality: 95,
    lossless: false,
    smartSubsample: true,
    nearLossless: false,
  })
  .toBuffer();

fs.writeFile('emergency.webp', buf);
