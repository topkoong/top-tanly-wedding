import type { VenueContent } from "@/content/schema";

export const venueContentTh: VenueContent = {
  title: "สถานที่",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
  eventSpacesTitle: "ห้องจัดงาน",
  eventSpaces: [
    {
      sessionLabel: "พิธีช่วงเช้า",
      room: "Beverly Hills",
      floor: "ชั้น 2 · อาคาร Annex",
    },
    {
      sessionLabel: "งานเลี้ยงฉลองมงคลสมรส",
      room: "Conrad Ballroom",
      floor: "ชั้น 4 · อาคารหลัก",
    },
  ],
  gettingHereTitle: "การเดินทาง",
  transport: [
    {
      icon: "car",
      label: "Grab / แท็กซี่",
      detail: "ลงที่ทางเข้าหลักของโรงแรม Conrad Bangkok ถนนวิทยุ",
    },
    {
      icon: "train",
      label: "BTS เพลินจิต",
      detail: "ทางออก 2 — Shuttle Bus ของโรงแรมรอรับที่ตึก Park Ventures ไม่มีค่าบริการ",
    },
    {
      icon: "shuttle",
      label: "MRT ลุมพินี",
      detail: "ต่อ One Bangkok EV Shuttle ฟรีไป BTS เพลินจิต แล้วขึ้น Shuttle Bus โรงแรม",
    },
  ],
  parkingTitle: "ที่จอดรถ",
  parkingNote: "จอดรถได้ที่ Conrad Bangkok หรือ All Seasons Place ซึ่งเชื่อมต่อกับโรงแรม",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "เปิด Google Maps",
  helperText: "กดเพื่อเปิดเส้นทางใน Google Maps",
};
