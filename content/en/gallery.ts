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

const squareItems: GalleryItem[] = Array.from({ length: 3 }, (_, index) => ({
  id: `en-square-${index + 1}`,
  src: null,
  alt: `Square placeholder in wedding-day category ${index + 1}`,
  caption: index % 2 === 0 ? "Wedding-day highlight" : "Coming soon",
  categoryLabel: "Wedding Day",
  width: 900,
  height: 900,
  tone: index % 2 === 0 ? "ivory" : "rose",
  category: "wedding-day",
}));

export const galleryContentEn: GalleryPageContent = {
  title: "Gallery",
  intro:
    "A collection of our memories, including moments before the wedding, pre-wedding photos, and wedding-day highlights. More photos will be added later.",
  note: "Real photos will be added when available.",
  categoryTabs: ["All", "Engagement", "Pre-wedding", "Wedding Day"],
  items: [...portraitItems, ...landscapeItems, ...squareItems],
};
