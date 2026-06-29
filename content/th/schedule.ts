import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentTh: SchedulePageContent = {
  title: "กำหนดการ",
  intro:
    "กำหนดการหลักของวันงาน แบ่งออกเป็นพิธีช่วงเช้าและงานเลี้ยงฉลองมงคลสมรส",
  venueHeadline: "Conrad Bangkok",
  locationGroups: [
    {
      id: "morning",
      sessionLabel: "พิธีช่วงเช้า",
      roomName: "Beverly Hills",
      floorLabel: "ชั้น 2 · อาคาร Annex",
      timeline: [
        { id: "soo-khor", time: "07.09", title: "พิธีสู่ขอ" },
        { id: "engagement", time: "07.39", title: "พิธีหมั้น (สวมแหวน)" },
        { id: "paying-respects", time: "08.09", title: "พิธีรับไหว้" },
      ],
    },
    {
      id: "reception",
      sessionLabel: "งานเลี้ยงฉลองมงคลสมรส",
      roomName: "Conrad Ballroom",
      floorLabel: "ชั้น 4 · อาคารหลัก",
      timeline: [{ id: "reception", time: "11.30", title: "งานเลี้ยงฉลองมงคลสมรส" }],
    },
  ],
  arrivalNote:
    "แนะนำให้มาถึงก่อนเวลาเริ่มงานประมาณ 20–30 นาที เพื่อเผื่อเวลาสำหรับการเดินทาง จอดรถ และลงทะเบียน",
  updateNote:
    "รายละเอียดบางส่วนอาจมีการอัปเดตเพิ่มเติมเมื่อใกล้ถึงวันงาน กรุณาตรวจสอบข้อมูลล่าสุดจากเว็บไซต์หรือ LINE Official Account",
  venueButtonLabel: "ดูแผนที่และวิธีเดินทาง",
  venuePageHref: "/venue",
};
