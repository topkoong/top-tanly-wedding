import fs from "node:fs";
import path from "node:path";

import { publicAssetPath } from "@/lib/publicAssetPath";

/**
 * Couple photos live in `public/images/photos/<slot>.webp`. Resolved at build
 * time (server components only): a missing file renders a placeholder frame,
 * so photos can be dropped in later without touching code.
 *
 * Recommended exports (WebP, sRGB, quality ≈75, metadata stripped):
 *   intro      1080×1920  9:16  ≤250 KB — full-screen backdrop behind the envelope
 *   oval       800×1000   4:5   ≤120 KB — oval frame in the hero collage
 *   strip-1…3  600×480    5:4   ≤60 KB  — photo-strip frames
 *   band-1…3   1200×1500  4:5   ≤200 KB — home photo band
 */
export const PHOTO_SLOTS = [
  "intro",
  "oval",
  "strip-1",
  "strip-2",
  "strip-3",
  "band-1",
  "band-2",
  "band-3",
] as const;

export type PhotoSlot = (typeof PHOTO_SLOTS)[number];
export type PhotoMap = Record<PhotoSlot, string | null>;

const PHOTO_DIR = path.join(process.cwd(), "public", "images", "photos");

export function getPhotos(): PhotoMap {
  return Object.fromEntries(
    PHOTO_SLOTS.map((slot) => {
      const file = `${slot}.webp`;
      return [
        slot,
        fs.existsSync(path.join(PHOTO_DIR, file))
          ? publicAssetPath(`/images/photos/${file}`)
          : null,
      ];
    }),
  ) as PhotoMap;
}
