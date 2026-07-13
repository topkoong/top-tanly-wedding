import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentTh: SchedulePageContent = {
  title: "กำหนดการ",
  intro:
    "วันอาทิตย์ที่ 29 พฤศจิกายน 2569 ณ โรงแรม Conrad Bangkok — พิธีช่วงเช้าและงานเลี้ยงกลางวัน",
  venueHeadline: "Conrad Bangkok",
  locationGroups: [
    {
      id: "morning",
      sessionLabel: "พิธีช่วงเช้า",
      roomName: "Beverly Hills Room",
      floorLabel: "ชั้น 2 (Annex)",
      timeline: [
        { id: "soo-khor", time: "07.09", title: "พิธีสู่ขอ" },
        { id: "engagement", time: "07.39", title: "พิธีหมั้น" },
        { id: "paying-respects", time: "08.09", title: "พิธีรับไหว้ผู้ใหญ่" },
      ],
    },
    {
      id: "reception",
      sessionLabel: "งานเลี้ยงกลางวัน",
      roomName: "Conrad Ballroom",
      floorLabel: "ชั้น 4 (อาคารหลัก)",
      timeline: [{ id: "reception", time: "11.30", title: "งานเลี้ยงกลางวัน" }],
    },
  ],
  arrivalNote:
    "แนะนำให้มาถึงก่อนเวลาเริ่มงานประมาณ 20–30 นาที เพื่อเผื่อเวลาสำหรับการเดินทาง จอดรถ และลงทะเบียน",
  updateNote:
    "รายละเอียดบางส่วนอาจมีการอัปเดตเพิ่มเติมเมื่อใกล้ถึงวันงาน กรุณาตรวจสอบข้อมูลล่าสุดจากเว็บไซต์นี้",
  venueButtonLabel: "ดูแผนที่และวิธีเดินทาง",
  venuePageHref: "/th/venue",
};
