import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const CONTENT_DIR = 'content/gallery';
const OUTPUT_DIR = 'public/gallery';
const WIDTHS = [3840, 1920, 1080];
const FORMATS = ['avif', 'webp'];

const slugs = readdirSync(CONTENT_DIR).filter(
  (f) => existsSync(join(CONTENT_DIR, f, 'sonicture.png'))
);

console.log(`Optimizing ${slugs.length} sonictures...`);

for (const slug of slugs) {
  const src = join(CONTENT_DIR, slug, 'sonicture.png');
  const outDir = join(OUTPUT_DIR, slug);
  mkdirSync(outDir, { recursive: true });

  for (const width of WIDTHS) {
    for (const format of FORMATS) {
      const outPath = join(outDir, `sonicture-${width}w.${format}`);
      await sharp(src)
        .resize(width, null, { withoutEnlargement: true })
        .toFormat(format, {
          quality: format === 'avif' ? 65 : 80,
        })
        .toFile(outPath);

      console.log(`  [OK] ${slug}/sonicture-${width}w.${format}`);
    }
  }
}

console.log('Done.');
