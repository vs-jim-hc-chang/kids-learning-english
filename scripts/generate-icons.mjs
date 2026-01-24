import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const svgPath = path.join(projectRoot, 'public/icons/icon.svg');
const outputDir = path.join(projectRoot, 'public/icons');

const svg = fs.readFileSync(svgPath);

// Generate 192x192
await sharp(svg)
  .resize(192, 192)
  .png()
  .toFile(path.join(outputDir, 'icon-192.png'));

// Generate 512x512
await sharp(svg)
  .resize(512, 512)
  .png()
  .toFile(path.join(outputDir, 'icon-512.png'));

// Generate apple-touch-icon (180x180)
await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile(path.join(outputDir, 'apple-touch-icon.png'));

console.log('Icons generated successfully!');
