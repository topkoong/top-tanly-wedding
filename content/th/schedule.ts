import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentTh: SchedulePageContent = {
  title: "กำหนดการ",
  intro:
    "กำหนดการหลักของวันงาน แบ่งออกเป็นพิธีช่วงเช้าและงานเลี้ยงฉลองมงคลสมรส",
  arrivalNote:
    "แนะนำให้มาถึงก่อนเวลาเริ่มงานประมาณ 20–30 นาที เพื่อเผื่อเวลาสำหรับการเดินทาง จอดรถ และลงทะเบียน",
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
      venue: "Conrad Bangkok",
      venuePageHref: "/venue",
      description:
        "ช่วงเช้าสำหรับพิธีหมั้นและพิธีรับไหว้แบบอบอุ่น ร่วมกับครอบครัวและแขกคนสำคัญ",
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
      venue: "Conrad Bangkok",
      venuePageHref: "/venue",
      description:
        "งานเลี้ยงฉลองมงคลสมรสในบรรยากาศอบอุ่น เรียบง่าย และเป็นกันเอง",
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
