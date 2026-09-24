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
  id: `th-photo-${index + 1}`,
  src: null,
  alt: `ภาพพรีเวดดิ้ง ${index + 1}`,
  caption: index % 2 === 0 ? "ภาพความทรงจำ" : "เร็ว ๆ นี้",
  ...shapes[index % 3],
  tone: tones[(index + Math.floor(index / 3)) % 3],
}));

export const galleryContentTh: GalleryPageContent = {
  title: "แกลเลอรี",
  intro:
    "พื้นที่รวบรวมภาพพรีเวดดิ้งของเรา โดยจะมีการอัปเดตรูปภาพเพิ่มเติมภายหลัง",
  note: "ภาพจริงจะถูกเพิ่มเข้ามาเมื่อพร้อม",
  items,
};
