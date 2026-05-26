import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const size = 32;
const bg = [0x0a, 0x0a, 0x0f, 0xff];
const fg = [0x00, 0xd9, 0xff, 0xff];

const pixels = new Uint8Array(size * size * 4).fill(0);
for (let i = 0; i < size * size; i++) {
  pixels.set(bg, i * 4);
}

function fillRect(x0, y0, x1, y1) {
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      if (x < 0 || y < 0 || x >= size || y >= size) continue;
      pixels.set(fg, (y * size + x) * 4);
    }
  }
}

// Block "D" for small sizes (no font dependency).
fillRect(7, 5, 10, 26);
fillRect(7, 5, 17, 8);
fillRect(7, 23, 17, 26);
fillRect(14, 9, 17, 22);
fillRect(11, 9, 14, 11);
fillRect(11, 20, 14, 22);

const xor = Buffer.alloc(size * size * 4);
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const src = ((size - 1 - y) * size + x) * 4;
    const dst = (y * size + x) * 4;
    xor[dst] = pixels[src + 2];
    xor[dst + 1] = pixels[src + 1];
    xor[dst + 2] = pixels[src];
    xor[dst + 3] = pixels[src + 3];
  }
}

const andMaskRowBytes = Math.ceil(size / 32) * 4;
const andMask = Buffer.alloc(andMaskRowBytes * size, 0);
const bmpHeaderSize = 40;
const imageSize = bmpHeaderSize + xor.length + andMask.length;
const offset = 6 + 16;

const out = Buffer.alloc(offset + imageSize);
out.writeUInt16LE(0, 0);
out.writeUInt16LE(1, 2);
out.writeUInt16LE(1, 4);
out.writeUInt8(size, 6);
out.writeUInt8(size, 7);
out.writeUInt16LE(0, 8);
out.writeUInt16LE(1, 10);
out.writeUInt16LE(32, 12);
out.writeUInt32LE(imageSize, 14);
out.writeUInt32LE(offset, 18);
out.writeUInt32LE(bmpHeaderSize, offset);
out.writeInt32LE(size, offset + 4);
out.writeInt32LE(size * 2, offset + 8);
out.writeUInt16LE(1, offset + 12);
out.writeUInt16LE(32, offset + 14);
xor.copy(out, offset + bmpHeaderSize);
andMask.copy(out, offset + bmpHeaderSize + xor.length);

writeFileSync(join(__dirname, '../public/favicon.ico'), out);
