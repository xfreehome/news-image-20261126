// World in One Frame — news-image-20261126 entry (Node 22, standard library only).
// Verifies entry.png beside this file (PNG, at most 1024x1024 px, at most 1 MiB),
// copies it byte-for-byte to /output/entry.png (or $MAKEFUN_OUTPUT_DIR), then
// reads the copy back and checks its SHA-256 matches the input. Deterministic:
// the same input always yields the same output bytes.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const srcPath = join(here, 'entry.png');
const dstPath = join(outDir, 'entry.png');

if (!existsSync(srcPath)) {
  throw new Error('entry.png not found beside main.ts');
}
const data = readFileSync(srcPath);
if (data.length > 1048576) {
  throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB cap`);
}

// PNG signature, then the IHDR chunk's width and height (big-endian).
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!data.subarray(0, 8).equals(PNG_SIG)) {
  throw new Error('entry.png is not a PNG file');
}
if (data.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('entry.png has no IHDR chunk');
}
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}
// IHDR bit depth (offset 24) must be 8 and color type (offset 25) must be 2
// (truecolor RGB), matching what the generator writes; a palette or
// grayscale PNG would render differently for the judge.
const bitDepth = data[24];
const colorType = data[25];
if (bitDepth !== 8 || colorType !== 2) {
  throw new Error(`entry.png is bit depth ${bitDepth} color type ${colorType}, expected 8-bit RGB`);
}

const hashIn = createHash('sha256').update(data).digest('hex');
mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, dstPath);
// Read the copy back: the output must be byte-identical to the input.
const back = readFileSync(dstPath);
const hashOut = createHash('sha256').update(back).digest('hex');
if (hashOut !== hashIn) {
  throw new Error('output hash does not match input hash');
}
console.log(`news-image-20261126 entry.png ${width}x${height} ${data.length} bytes sha256 ${hashOut} -> ${dstPath}`);
