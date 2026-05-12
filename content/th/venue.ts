import type { VenueContent } from "@/content/schema";

export const venueContentTh: VenueContent = {
  title: "สถานที่",
  summary:
    "งานแต่งงานของเราจัดขึ้นที่ Conrad Bangkok โดยพิธีช่วงเช้าในห้อง Beverly Hills และงานเลี้ยงฉลองมงคลสมรสในห้อง Conrad Ballroom",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
  gettingHereTitle: "การเดินทาง",
  eventSpaces: [
    {
      room: "Beverly Hills",
      floor: "ชั้น — ยืนยันอีกครั้งใกล้วันงาน",
      eventName: "พิธีหมั้นและพิธีรับไหว้",
    },
    {
      room: "Conrad Ballroom",
      floor: "ชั้น — ยืนยันอีกครั้งใกล้วันงาน",
      eventName: "งานเลี้ยงฉลองมงคลสมรส",
    },
  ],
  transport: [
    {
      icon: "train",
      label: "รถไฟฟ้า BTS",
      detail:
        "ใช้บริการ BTS สายสุขุมวิทและลงที่สถานีเพลินจิท จากนั้นเดินเชื่อมไปยัง All Seasons Place / Conrad Bangkok ตามป้ายบอกทาง (เลือกทางออกและเส้นทางเดินล่าสุดจะอัปเดตใกล้วันงาน)",
      note: "หากเปลี่ยนแปลงเมื่อใกล้วันงาน จะประกาศผ่านเว็บไซต์และ LINE Official Account",
    },
    {
      icon: "car",
      label: "รถยนต์ส่วนตัว / แท็กซี่",
      detail:
        "ตั้งจุดหมายปลายทางไปที่ Conrad Bangkok หรือ All Seasons Place ถนนวิทยุ กรุณาใช้ปุ่ม “เปิด Google Maps” ด้านข้างหน้านี้เพื่อนำทางแบบเรียลไทม์",
    },
  ],
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
