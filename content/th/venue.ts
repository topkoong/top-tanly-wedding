import type { VenueContent } from "@/content/schema";

export const venueContentTh: VenueContent = {
  title: "สถานที่",
  summary:
    "งานแต่งงานของเราจัดขึ้นที่ Conrad Bangkok โดยพิธีช่วงเช้าในห้อง Beverly Hills และงานเลี้ยงฉลองมงคลสมรสในห้อง Conrad Ballroom",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
  eventSpaces: [
    { room: "Beverly Hills", eventName: "พิธีหมั้นและพิธีรับไหว้" },
    { room: "Conrad Ballroom", eventName: "งานเลี้ยงฉลองมงคลสมรส" },
  ],
  transport: [],
  parking: [
    "ที่จอดรถ Conrad Bangkok (อาคารหลักของโรงแรม)",
    "ที่จอดรถ All Seasons Place (เชื่อมต่อกับโรงแรมโดยตรง)",
  ],
  parkingNote:
    "แขกสามารถจอดรถได้ที่ Conrad Bangkok หรือ All Seasons Place กรุณาตรวจสอบป้ายทางเข้าและพื้นที่จอดรถเมื่อเดินทางถึงสถานที่",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "เปิด Google Maps",
  helperText: "กดเพื่อเปิดเส้นทางใน Google Maps บนมือถือ",
};
