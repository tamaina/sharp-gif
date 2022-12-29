import fs from 'node:fs/promises';
import sharp from 'sharp';

const buf = await sharp('duckdance.gif', { animated: true })
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

fs.writeFile('duckdance.webp', buf);
