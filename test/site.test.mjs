// Static checks on index.html: local files and in-page links resolve, images are described and sized,
// and the share-card image matches its meta tags. Run with `node --test`.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const root = new URL('../', import.meta.url);
const html = fs.readFileSync(new URL('index.html', root), 'utf8');
const all = (re) => [...html.matchAll(re)].map((m) => m[1]);

// Width and height from a JPEG's SOF segment.
function jpegSize(path) {
  const buf = fs.readFileSync(new URL(path, root));
  let i = 2;
  while (i + 9 <= buf.length) {
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error(`${path}: no SOF segment`);
}

test('every local src and href points to a file in the repo', () => {
  const local = all(/(?:src|href)="([^"#$][^"]*)"/g).filter((u) => !/^(https?:|mailto:|tel:|data:)/.test(u));
  assert.ok(local.length > 0);
  for (const path of local) assert.ok(fs.existsSync(new URL(path, root)), `${path} is missing`);
});

test('every in-page link has a target, and ids are unique', () => {
  const ids = all(/\sid="([^"]+)"/g);
  assert.equal(new Set(ids).size, ids.length, 'duplicate id');
  for (const hash of all(/href="#([^"]+)"/g)) assert.ok(ids.includes(hash), `#${hash} has no element`);
});

test('images have alt text and the right width and height', () => {
  const imgs = html.match(/<img\b[^>]*>/g) ?? [];
  assert.ok(imgs.length > 0);
  for (const tag of imgs) {
    const attr = (name) => tag.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1];
    assert.ok(attr('alt')?.trim(), `${tag} has no alt text`);
    // width/height reserve the space before the image loads; they must match its aspect ratio.
    const { w, h } = jpegSize(attr('src'));
    assert.ok(Math.abs(w / h - attr('width') / attr('height')) < 0.01, `${attr('src')} is ${w}x${h}`);
  }
});

test('the share-card image exists at the size the meta tags give', () => {
  const meta = (p) => html.match(new RegExp(`property="${p}" content="([^"]+)"`))?.[1];
  const path = meta('og:image').replace('https://carsoreo.github.io/', '');
  assert.deepEqual(jpegSize(path), { w: Number(meta('og:image:width')), h: Number(meta('og:image:height')) });
});

test('the page declares its language and has a title', () => {
  assert.match(html, /<html lang="en">/);
  assert.match(html, /<title>[^<]+<\/title>/);
});
