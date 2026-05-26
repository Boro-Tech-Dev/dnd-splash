import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = join(__dirname, '../dist/index.html');
const html = readFileSync(indexPath, 'utf8');

const checks = [
  ['<title>DeployDeliver</title>', 'page title'],
  ['href="/favicon.ico', 'favicon.ico link'],
  ['href="/favicon.svg', 'favicon.svg link'],
  ['name="deploy-build"', 'deploy-build meta tag'],
];

for (const [needle, label] of checks) {
  if (!html.includes(needle)) {
    console.error(`Build verification failed: missing ${label} (${needle})`);
    process.exit(1);
  }
}

console.log('Build verification passed: DeployDeliver title and favicons present in dist/index.html');
