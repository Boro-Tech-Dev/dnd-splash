import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, 'out');
const PORT = Number(process.env.PORT) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

const STATIC_EXTENSIONS = new Set(Object.keys(MIME_TYPES).filter((ext) => ext !== '.html'));

function isStaticAssetPath(urlPath) {
  const ext = extname(urlPath).toLowerCase();
  return ext !== '' && STATIC_EXTENSIONS.has(ext);
}

async function serveFile(res, filePath) {
  const data = await readFile(filePath);
  const ext = extname(filePath);
  res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
  res.end(data);
}

async function resolveFilePath(urlPath) {
  const safePath = urlPath.replace(/\.\./g, '');
  if (safePath === '/' || safePath === '') {
    return join(DIST, 'index.html');
  }

  const direct = join(DIST, safePath);
  try {
    const directStat = await stat(direct);
    if (directStat.isFile()) return direct;
    if (directStat.isDirectory()) {
      const indexInDir = join(direct, 'index.html');
      const indexStat = await stat(indexInDir);
      if (indexStat.isFile()) return indexInDir;
    }
  } catch {
    // continue
  }

  if (!safePath.endsWith('/') && !extname(safePath)) {
    const withIndex = join(DIST, safePath, 'index.html');
    try {
      const indexStat = await stat(withIndex);
      if (indexStat.isFile()) return withIndex;
    } catch {
      // continue
    }
  }

  if (!safePath.endsWith('.html')) {
    const htmlPath = join(DIST, `${safePath.replace(/\/$/, '')}.html`);
    try {
      const htmlStat = await stat(htmlPath);
      if (htmlStat.isFile()) return htmlPath;
    } catch {
      // continue
    }
  }

  return null;
}

createServer(async (req, res) => {
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const filePath = await resolveFilePath(urlPath);

  if (filePath) {
    try {
      await serveFile(res, filePath);
      return;
    } catch {
      // fall through
    }
  }

  if (isStaticAssetPath(urlPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not Found');
    return;
  }

  try {
    await serveFile(res, join(DIST, 'index.html'));
  } catch {
    res.writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Build output not found. Run npm run build first.');
  }
}).listen(PORT, () => {
  console.log(`Serving ${DIST} on port ${PORT}`);
});
