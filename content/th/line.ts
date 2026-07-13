import type { LineContent } from "@/content/schema";

export const lineContentTh: LineContent = {
  title: "LINE OA",
  intro: "ช่องทางนี้ใช้สำหรับข่าวสารและประกาศสำคัญเกี่ยวกับงานแต่ง",
  linePageHref: "/th/line",
  lineOaUrl: "https://line.me/R/ti/p/[LINE-OA-ID-placeholder]",
  purpose:
    "LINE Official Account ใช้สำหรับอัปเดตอย่างเป็นทางการ การแจ้งเตือน และประกาศสำคัญเกี่ยวกับกำหนดการหรือสถานที่จัดงาน",
  updates: [
    "ประกาศอัปเดตล่าสุดก่อนวันงาน",
    "การแจ้งเตือนกำหนดการและสถานที่",
    "ประกาศสำคัญในวันงาน",
  ],
  notUsedFor: [
    "ไม่ใช่ช่องทางยืนยันการเข้าร่วมงาน",
    "ไม่มีการนับจำนวนผู้เข้าร่วม",
    "ไม่ใช่แชตบอตหรือ AI assistant",
  ],
  urgentHelp: "หากมีเหตุเร่งด่วนในวันงาน กรุณาติดตามข้อมูลล่าสุดผ่าน LINE Official Account",
  helperText: "ลิงก์นี้สำหรับอัปเดต แจ้งเตือน และประกาศสำคัญเกี่ยวกับงาน",
  ctaLabel: "ไปยังหน้า LINE Official Account",
};
