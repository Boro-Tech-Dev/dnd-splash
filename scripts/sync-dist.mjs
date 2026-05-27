import { cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const outDir = join(root, 'out');

if (!existsSync(join(outDir, 'index.html'))) {
  console.error('sync-dist: missing out/index.html — run next build first');
  process.exit(1);
}

const distDir = join(root, 'dist');
rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });
console.log('sync-dist: copied out/ → dist/');
