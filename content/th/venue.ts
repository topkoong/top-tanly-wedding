import type { VenueContent } from "@/content/schema";

export const venueContentTh: VenueContent = {
  title: "สถานที่",
  summary:
    "งานแต่งงานของเราจัดขึ้น ณ โรงแรม Conrad Bangkok พิธีช่วงเช้าในห้อง Beverly Hills (ชั้น 2 อาคาร Annex) และงานเลี้ยงฉลองใน Conrad Ballroom (ชั้น 4)",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 ถนนวิทยุ แขวงลุมพินี เขตปทุมวัน กรุงเทพฯ 10330",
  gettingHereTitle: "การเดินทาง",
  eventSpacesTitle: "ห้องจัดงาน",
  eventSpaces: [
    {
      room: "Beverly Hills",
      floor: "ชั้น 2 · อาคาร Annex",
      eventName: "พิธีหมั้นและพิธีรับไหว้",
    },
    {
      room: "Conrad Ballroom",
      floor: "ชั้น 4 · อาคารหลัก",
      eventName: "งานเลี้ยงฉลองมงคลสมรส",
    },
  ],
  transport: [
    {
      icon: "car",
      label: "Grab / แท็กซี่",
      detail:
        'ค้นหา "Conrad Bangkok" ถนนวิทยุ — รับส่งที่ทางเข้าหลักของโรงแรม',
    },
    {
      icon: "train",
      label: "รถไฟฟ้า BTS",
      detail: "สถานีเพลินจิต · ทางออก 2 (ตึก Park Ventures) หรือทางออก 4",
      steps: [
        "Shuttle Bus โรงแรม — รถ Shuttle Bus สีขาวของโรงแรมจอดรอที่ตึก Park Ventures (ฝั่งทางออก 2) วิ่งรับ-ส่งตลอดเวลา ไม่มีค่าบริการ",
        "แท็กซี่ / วินมอเตอร์ไซค์ — ระยะทางประมาณ 600–700 เมตร ตามถนนวิทยุไปยัง All Seasons Place",
      ],
    },
    {
      icon: "train",
      label: "MRT + One Bangkok Free Shuttle",
      detail: "สถานีลุมพินี · ต่อด้วย One Bangkok EV Shuttle ไป BTS เพลินจิต",
      steps: [
        "ลงสถานีลุมพินีแล้วเดินไปยังอาคาร One Bangkok",
        "ขึ้น One Bangkok EV Shuttle ฟรีที่ชั้น G โซน The Stories ไปลง BTS เพลินจิต — ออกทุก 15 นาที",
        "จาก BTS เพลินจิต นั่ง Shuttle Bus โรงแรมหรือแท็กซี่/วินมอเตอร์ไซค์ต่อไปยัง Conrad Bangkok",
      ],
      note: "One Bangkok EV Shuttle: จ.–ศ. 07:00–22:00 · ส.–อ./วันหยุด 09:00–23:00 ไม่มีค่าบริการ",
    },
  ],
  parking: [
    "ที่จอดรถ Conrad Bangkok (อาคารหลักของโรงแรม)",
    "ที่จอดรถ All Seasons Place (เชื่อมต่อกับโรงแรมโดยตรง)",
  ],
  parkingNote:
    "แขกสามารถจอดรถได้ที่ Conrad Bangkok และ All Seasons Place ซึ่งเชื่อมต่อกับโรงแรมโดยตรง กรุณาตรวจสอบป้ายทางเข้าและพื้นที่จอดรถเมื่อเดินทางถึง",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "เปิด Google Maps",
  helperText: "กดเพื่อเปิดเส้นทางใน Google Maps",
};
