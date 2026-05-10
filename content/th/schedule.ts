import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentTh: SchedulePageContent = {
  title: "กำหนดการ",
  intro:
    "วันงานแบ่งออกเป็นสองช่วง — พิธีช่วงเช้าตามประเพณีไทย และงานเลี้ยงฉลองมงคลสมรสช่วงเที่ยง",
  arrivalNote:
    "แนะนำให้เดินทางมาถึงก่อนช่วงที่ต้องการเข้าร่วมประมาณ 15–20 นาที เพื่อลงทะเบียนและเตรียมพร้อมอย่างสบายใจ",
  updateNote:
    "รายละเอียดบางส่วนอาจมีการอัปเดตเพิ่มเติมเมื่อใกล้ถึงวันงาน กรุณาตรวจสอบข้อมูลล่าสุดจากเว็บไซต์หรือ LINE Official Account",
  venueButtonLabel: "ดูรายละเอียดสถานที่ →",
  events: [
    {
      id: "engagement-rubwai",
      number: "01",
      thaiName: "พิธีหมั้นและพิธีรับไหว้",
      englishName: "Engagement & Rubwai Ceremony",
      title: "พิธีหมั้นและพิธีรับไหว้",
      date: "วันอาทิตย์ที่ 29 พฤศจิกายน 2569",
      time: "07:00–11:00",
      room: "Beverly Hills",
      floor: "ชั้น 2 (อาคาร Annex) · Conrad Bangkok",
      navigationNote:
        "ขึ้นลิฟต์ไปชั้น 2 อาคาร Annex ตาม Follow ป้ายบอกทางไปยังห้อง Beverly Hills",
      venue: "Beverly Hills, Conrad Bangkok",
      venuePageHref: "/venue",
      description:
        "พิธีหมั้นและพิธีรับไหว้ตามประเพณีไทย ร่วมกับครอบครัวและผู้ใกล้ชิด เป็นช่วงเวลาอันมีความหมายที่เปิดฉากวันสำคัญของเราอย่างอบอุ่น",
      chips: [
        "ต้อนรับแขก",
        "ลงทะเบียน",
        "พิธีหมั้น",
        "พิธีรับไหว้",
        "ถ่ายภาพร่วมกัน",
      ],
    },
    {
      id: "wedding-reception",
      number: "02",
      thaiName: "งานเลี้ยงฉลองมงคลสมรส",
      englishName: "Wedding Reception",
      title: "งานเลี้ยงฉลองมงคลสมรส",
      date: "วันอาทิตย์ที่ 29 พฤศจิกายน 2569",
      time: "11:00–14:00",
      room: "Conrad Ballroom",
      floor: "ชั้น 4 (อาคารหลัก) · Conrad Bangkok",
      navigationNote:
        "ขึ้นลิฟต์ไปชั้น 4 อาคารหลัก Conrad Ballroom อยู่บริเวณ Pre-function Area ติดกับลิฟต์",
      venue: "Conrad Ballroom, Conrad Bangkok",
      venuePageHref: "/venue",
      description:
        "งานเลี้ยงฉลองมงคลสมรสใน Conrad Ballroom ห้องบอลรูมไร้เสาที่มีเพดานสูง 9 เมตร และจอ LED ที่ใหญ่ที่สุดแห่งหนึ่งในประเทศไทย",
      chips: [
        "ต้อนรับแขก",
        "งานเลี้ยงฉลอง",
        "ถ่ายภาพ",
        "พบปะแขก",
        "กล่าวขอบคุณ",
      ],
    },
  ],
};
