#!/usr/bin/env node
/**
 * Converts original photos in photos-src/ into pre-sized, fast-loading files
 * under public/ (the static export serves images as-is, so size them here).
 *
 *   photos-src/home/<slot>.jpg        → public/images/photos/<slot>.webp  (exact slot size, cropped)
 *   photos-src/gallery/*              → public/images/gallery/<name>.webp (long edge 1600)
 *   photos-src/og/og.jpg              → public/og-image.jpg (1200×630 JPEG for LINE/Facebook previews)
 *
 * Accepts .jpg .jpeg .png .webp .tif .tiff .avif. Export HEIC from Photos as JPEG first.
 *
 *   pnpm photos            convert new/changed files
 *   pnpm photos --force    reconvert everything
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SRC = path.join(ROOT, "photos-src");
const PUBLIC = path.join(ROOT, "public");
const FORCE = process.argv.includes("--force");
const INPUT_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif"]);

/** Keep in sync with PHOTO_SLOTS in lib/photos.ts. */
const HOME_SLOTS = {
  intro: [1080, 1920],
  oval: [800, 1000],
  "strip-1": [600, 480],
  "strip-2": [600, 480],
  "strip-3": [600, 480],
  "band-1": [1200, 1500],
  "band-2": [1200, 1500],
  "band-3": [1200, 1500],
};
const GALLERY_LONG_EDGE = 1600;
const WEBP = { quality: 75, effort: 5, smartSubsample: true };

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;
const slug = (name) =>
  name
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function listImages(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && INPUT_EXT.has(path.extname(e.name).toLowerCase()))
      .map((e) => path.join(dir, e.name))
      .sort();
  } catch {
    return [];
  }
}

async function isFresh(input, output) {
  if (FORCE) return false;
  try {
    const [i, o] = await Promise.all([fs.stat(input), fs.stat(output)]);
    return o.mtimeMs >= i.mtimeMs;
  } catch {
    return false;
  }
}

/* rotate(): honour camera EXIF orientation; toColorspace: phones often shoot Display P3. */
const load = (file) => sharp(file, { failOn: "none" }).rotate().toColorspace("srgb");

const results = [];
const warnings = [];

async function convert(input, output, pipeline, label) {
  await fs.mkdir(path.dirname(output), { recursive: true });
  if (await isFresh(input, output)) {
    results.push({ label, status: "unchanged", output });
    return;
  }
  const info = await pipeline(load(input)).toFile(output);
  results.push({ label, status: "written", output, info });
}

async function home() {
  const files = await listImages(path.join(SRC, "home"));
  const seen = new Set();
  for (const file of files) {
    const slot = slug(path.basename(file));
    const size = HOME_SLOTS[slot];
    if (!size) {
      warnings.push(`home/${path.basename(file)}: unknown slot — rename to one of ${Object.keys(HOME_SLOTS).join(", ")}`);
      continue;
    }
    if (seen.has(slot)) {
      warnings.push(`home/${path.basename(file)}: duplicate for "${slot}", skipped`);
      continue;
    }
    seen.add(slot);
    const meta = await sharp(file).metadata();
    const [w, h] = size;
    const shortSide = Math.min(meta.autoOrient?.width ?? meta.width, meta.autoOrient?.height ?? meta.height);
    if (shortSide < Math.min(w, h)) {
      warnings.push(`home/${path.basename(file)}: smaller than ${w}×${h}, will be upscaled (may look soft)`);
    }
    await convert(
      file,
      path.join(PUBLIC, "images", "photos", `${slot}.webp`),
      (img) => img.resize(w, h, { fit: "cover", position: sharp.strategy.attention }).webp(WEBP),
      `home/${slot}`,
    );
  }
  const missing = Object.keys(HOME_SLOTS).filter((s) => !seen.has(s));
  if (missing.length) warnings.push(`home: still using placeholders for ${missing.join(", ")}`);
}

async function gallery() {
  for (const file of await listImages(path.join(SRC, "gallery"))) {
    const name = slug(path.basename(file));
    await convert(
      file,
      path.join(PUBLIC, "images", "gallery", `${name}.webp`),
      (img) =>
        img
          .resize(GALLERY_LONG_EDGE, GALLERY_LONG_EDGE, { fit: "inside", withoutEnlargement: true })
          .webp(WEBP),
      `gallery/${name}`,
    );
  }
}

async function og() {
  const [file] = await listImages(path.join(SRC, "og"));
  if (!file) return;
  await convert(
    file,
    path.join(PUBLIC, "og-image.jpg"),
    (img) =>
      img
        .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
        .jpeg({ quality: 80, mozjpeg: true, progressive: true }),
    "og-image",
  );
}

await home();
await gallery();
await og();

for (const r of results) {
  const rel = path.relative(ROOT, r.output);
  if (r.status === "unchanged") {
    console.log(`  = ${r.label.padEnd(34)} ${rel} (unchanged)`);
    continue;
  }
  const { width, height, size } = r.info;
  console.log(`  ✓ ${r.label.padEnd(34)} ${rel}  ${width}×${height}  ${kb(size)}`);
  if (size > 300 * 1024) warnings.push(`${rel} is ${kb(size)} — consider a less detailed crop`);
}

const galleryWritten = results.filter((r) => r.label.startsWith("gallery/") && r.info);
if (galleryWritten.length) {
  console.log("\nGallery entries (src / width / height for content/*/gallery.ts):");
  for (const r of galleryWritten) {
    const src = "/" + path.relative(PUBLIC, r.output).split(path.sep).join("/");
    console.log(`  { src: "${src}", width: ${r.info.width}, height: ${r.info.height} }`);
  }
}

if (!results.length) console.log("No photos found in photos-src/ — see the header of scripts/optimize-photos.mjs.");
for (const w of warnings) console.warn(`  ! ${w}`);
