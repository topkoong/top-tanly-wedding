#!/usr/bin/env node
/**
 * Converts original photos in photos-src/ into pre-sized, fast-loading files
 * under public/ (the static export serves images as-is, so size them here).
 *
 *   photos-src/home/<slot>.jpg        → public/images/photos/<slot>.webp  (exact slot size, cropped)
 *   photos-src/gallery/*              → public/images/gallery/<name>.webp (long edge 1600)
 *   photos-src/video/save-the-date.mp4 → public/videos/save-the-date.mp4 + public/images/photos/reel-poster.webp
 *   photos-src/og/og.jpg              → public/og-image.jpg (1200×630 JPEG for LINE/Facebook previews)
 *
 * Accepts .jpg .jpeg .png .webp .tif .tiff .avif. Export HEIC from Photos as JPEG first.
 *
 *   pnpm photos            convert new/changed files
 *   pnpm photos --force    reconvert everything
 */
import { execFile, spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import sharp from "sharp";

const execFileAsync = promisify(execFile);

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ["ignore", "ignore", "inherit"] });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited ${code}`));
    });
  });
}

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
  postcard: [1200, 800],
  stamp: [400, 480],
  frame: [1200, 1500],
  venue: [1600, 1067],
  "venue-2": [1600, 1067],
};
/* Crop anchor per slot; others use sharp's attention (salient-region) crop. */
const HOME_POSITION = {
  intro: "centre",
  oval: "centre",
  "strip-2": "east",
  postcard: "centre",
  stamp: "centre",
  "band-1": "north",
  "band-2": "centre",
  "band-3": "north",
  frame: "centre",
  venue: "north",
  "venue-2": "centre",
};
const HOME_SOURCE_OVERRIDES = {
  intro: ["all-photos", "street", "Prewedding-120.jpg"],
  "strip-1": ["all-photos", "street", "Prewedding-43.jpg"],
  "strip-2": ["home", "Prewedding-306.jpg"],
  "strip-3": ["all-photos", "street", "Prewedding-264.jpg"],
  postcard: ["all-photos", "street", "Prewedding-118.jpg"],
  stamp: ["all-photos", "street", "Prewedding-225.jpg"],
  "band-1": ["all-photos", "shutterbooth", "12SEP2026-42.jpg"],
  frame: ["all-photos", "street", "Prewedding-278.jpg"],
};
const REEL_SRC = path.join(SRC, "video", "save-the-date.mp4");
const REEL_OUT = path.join(PUBLIC, "videos", "save-the-date.mp4");
const REEL_POSTER = path.join(PUBLIC, "images", "photos", "reel-poster.webp");
const REEL_WIDTH = 720;
const REEL_HEIGHT = 1280;
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
  const sourceSlots = new Map();
  for (const [slot, parts] of Object.entries(HOME_SOURCE_OVERRIDES)) {
    const source = path.join(SRC, ...parts);
    try {
      await fs.access(source);
      const existing = files.findIndex((file) => slug(path.basename(file)) === slot);
      if (existing !== -1) files.splice(existing, 1);
      files.push(source);
      sourceSlots.set(source, slot);
    } catch {
      warnings.push(`home/${slot}: canonical source ${parts.join("/")} is missing`);
    }
  }
  files.sort();
  const seen = new Set();
  for (const file of files) {
    const slot = sourceSlots.get(file) ?? slug(path.basename(file));
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
      (img) =>
        img
          .resize(w, h, { fit: "cover", position: HOME_POSITION[slot] ?? sharp.strategy.attention })
          .webp(WEBP),
      `home/${slot}`,
    );
  }
  const intro = files.find((file) => (sourceSlots.get(file) ?? slug(path.basename(file))) === "intro");
  if (intro) {
    /* Tiny pre-blurred copy: scaled up behind the hero it looks like a soft-focus photo at ~10 KB. */
    await convert(
      intro,
      path.join(PUBLIC, "images", "photos", "intro-blur.webp"),
      (img) => img.resize(216, 384, { fit: "cover", position: "centre" }).blur(6).webp({ quality: 55 }),
      "home/intro-blur",
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

async function ffmpegAvailable() {
  try {
    await execFileAsync("ffmpeg", ["-version"], { timeout: 5000 });
    return true;
  } catch {
    return false;
  }
}

async function reel() {
  try {
    await fs.access(REEL_SRC);
  } catch {
    return;
  }
  if (!(await ffmpegAvailable())) {
    warnings.push("video/save-the-date.mp4: ffmpeg not found — skip reel encode");
    return;
  }
  const posterFresh = await isFresh(REEL_SRC, REEL_POSTER);
  const videoFresh = await isFresh(REEL_SRC, REEL_OUT);
  if (posterFresh && videoFresh) {
    results.push({ label: "video/save-the-date", status: "unchanged", output: REEL_OUT });
    return;
  }
  await fs.mkdir(path.dirname(REEL_OUT), { recursive: true });
  await fs.mkdir(path.dirname(REEL_POSTER), { recursive: true });
  const tmpPoster = path.join(path.dirname(REEL_POSTER), ".reel-poster.jpg");
  await run("ffmpeg", [
    "-y",
    "-hide_banner",
    "-loglevel",
    "error",
    "-i",
    REEL_SRC,
    "-vf",
    `scale=${REEL_WIDTH}:${REEL_HEIGHT}:force_original_aspect_ratio=decrease,pad=${REEL_WIDTH}:${REEL_HEIGHT}:(ow-iw)/2:(oh-ih)/2`,
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-profile:v",
    "main",
    "-movflags",
    "+faststart",
    "-crf",
    "27",
    "-preset",
    "medium",
    "-c:a",
    "aac",
    "-b:a",
    "128k",
    "-ac",
    "2",
    REEL_OUT,
  ]);
  await run("ffmpeg", [
    "-y",
    "-hide_banner",
    "-loglevel",
    "error",
    "-ss",
    "1.2",
    "-i",
    REEL_SRC,
    "-frames:v",
    "1",
    "-vf",
    `scale=${REEL_WIDTH}:${REEL_HEIGHT}:force_original_aspect_ratio=decrease,pad=${REEL_WIDTH}:${REEL_HEIGHT}:(ow-iw)/2:(oh-ih)/2`,
    tmpPoster,
  ]);
  const info = await load(tmpPoster)
    .resize(REEL_WIDTH, REEL_HEIGHT, { fit: "cover" })
    .webp(WEBP)
    .toFile(REEL_POSTER);
  await fs.unlink(tmpPoster).catch(() => {});
  const videoStat = await fs.stat(REEL_OUT);
  results.push({
    label: "video/save-the-date",
    status: "written",
    output: REEL_OUT,
    info: { width: REEL_WIDTH, height: REEL_HEIGHT, size: videoStat.size },
  });
  results.push({ label: "video/reel-poster", status: "written", output: REEL_POSTER, info });
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
await reel();
await og();

for (const r of results) {
  const rel = path.relative(ROOT, r.output);
  if (r.status === "unchanged") {
    console.log(`  = ${r.label.padEnd(34)} ${rel} (unchanged)`);
    continue;
  }
  const { width, height, size } = r.info;
  console.log(`  ✓ ${r.label.padEnd(34)} ${rel}  ${width}×${height}  ${kb(size)}`);
  if (!rel.endsWith(".mp4") && size > 300 * 1024) {
    warnings.push(`${rel} is ${kb(size)} — consider a less detailed crop`);
  }
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
