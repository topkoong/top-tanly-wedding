import type { GalleryItem, GalleryPageContent } from "@/content/schema";

const portraitItems: GalleryItem[] = Array.from({ length: 6 }, (_, index) => ({
  id: `th-portrait-${index + 1}`,
  src: null,
  alt: `ภาพแนวตั้งพิธีหมั้น ${index + 1}`,
  caption: index % 2 === 0 ? "ภาพความทรงจำ" : "เร็ว ๆ นี้",
  categoryLabel: "พิธีหมั้น",
  width: 800,
  height: 1000,
  tone: index % 3 === 0 ? "rose" : index % 2 === 0 ? "champagne" : "ivory",
  category: "engagement",
}));

const landscapeItems: GalleryItem[] = Array.from({ length: 6 }, (_, index) => ({
  id: `th-landscape-${index + 1}`,
  src: null,
  alt: `ภาพแนวนอนพรีเวดดิ้ง ${index + 1}`,
  caption: index % 2 === 0 ? "ภาพพรีเวดดิ้ง" : "ภาพความทรงจำ",
  categoryLabel: "พรีเวดดิ้ง",
  width: 900,
  height: 600,
  tone: index % 3 === 0 ? "champagne" : index % 2 === 0 ? "ivory" : "rose",
  category: "pre-wedding",
}));

const squareItems: GalleryItem[] = Array.from({ length: 6 }, (_, index) => ({
  id: `th-square-${index + 1}`,
  src: null,
  alt: `ภาพวันงาน ${index + 1}`,
  caption: index % 2 === 0 ? "ภาพบรรยากาศวันงาน" : "เร็ว ๆ นี้",
  categoryLabel: "วันงาน",
  width: 900,
  height: 900,
  tone: index % 3 === 0 ? "ivory" : index % 2 === 0 ? "rose" : "champagne",
  category: "wedding-day",
}));

const items: GalleryItem[] = [];
for (let i = 0; i < 6; i += 1) {
  items.push(portraitItems[i], landscapeItems[i], squareItems[i]);
}

export const galleryContentTh: GalleryPageContent = {
  title: "แกลเลอรี",
  intro:
    "พื้นที่รวบรวมภาพความทรงจำของเรา ทั้งภาพก่อนวันงาน ภาพพรีเวดดิ้ง และภาพบรรยากาศในวันสำคัญ โดยจะมีการอัปเดตรูปภาพเพิ่มเติมภายหลัง",
  note: "ภาพจริงจะถูกเพิ่มเข้ามาเมื่อพร้อม",
  categoryTabs: ["ทั้งหมด", "พิธีหมั้น", "พรีเวดดิ้ง", "วันงาน"],
  items,
};
