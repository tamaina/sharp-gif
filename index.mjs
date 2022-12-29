import sharp from 'sharp';

sharp('duckdance.gif', { animated: true })
  .resize({
    height: 128,
    withoutEnlargement: true,
  })
  .webp({})
  .toFile('duckdance.webp');
