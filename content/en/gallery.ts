import type { GalleryItem, GalleryPageContent } from "@/content/schema";

/* Placeholder shapes cycle portrait → landscape → square; swap `src` (and the
   real width/height printed by `pnpm photos`) as photos arrive. */
const shapes = [
  { width: 800, height: 1000 },
  { width: 900, height: 600 },
  { width: 900, height: 900 },
] as const;
const tones = ["ivory", "champagne", "rose"] as const;

const items: GalleryItem[] = Array.from({ length: 18 }, (_, index) => ({
  id: `en-photo-${index + 1}`,
  src: null,
  alt: `Pre-wedding photo placeholder ${index + 1}`,
  caption: index % 2 === 0 ? "Memory placeholder" : "Coming soon",
  ...shapes[index % 3],
  tone: tones[(index + Math.floor(index / 3)) % 3],
}));

export const galleryContentEn: GalleryPageContent = {
  title: "Gallery",
  intro:
    "A collection of our pre-wedding photos. More photos will be added later.",
  note: "Real photos will be added when available.",
  items,
};
