import type { GalleryItem, GalleryPageContent } from "@/content/schema";

const portraitItems: GalleryItem[] = Array.from({ length: 3 }, (_, index) => ({
  id: `en-portrait-${index + 1}`,
  src: null,
  alt: `Portrait placeholder in engagement category ${index + 1}`,
  caption: index % 2 === 0 ? "Memory placeholder" : "Coming soon",
  categoryLabel: "Engagement",
  width: 800,
  height: 1000,
  tone: index % 3 === 0 ? "rose" : "ivory",
  category: "engagement",
}));

const landscapeItems: GalleryItem[] = Array.from({ length: 3 }, (_, index) => ({
  id: `en-landscape-${index + 1}`,
  src: null,
  alt: `Landscape placeholder in pre-wedding category ${index + 1}`,
  caption: index % 2 === 0 ? "Pre-wedding moment" : "Memory placeholder",
  categoryLabel: "Pre-wedding",
  width: 900,
  height: 600,
  tone: index % 2 === 0 ? "champagne" : "ivory",
  category: "pre-wedding",
}));

export const galleryContentEn: GalleryPageContent = {
  title: "Gallery",
  intro:
    "A collection of our memories — moments from before the wedding and our pre-wedding photoshoot. We'll add highlights from the wedding day itself after the celebration.",
  note: "More photos will be added after the wedding.",
  categoryTabs: ["All", "Engagement", "Pre-wedding"],
  items: portraitItems.flatMap((portrait, i) => [
    portrait,
    landscapeItems[i],
  ]).filter(Boolean),
};
