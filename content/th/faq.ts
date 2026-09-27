import type { FaqPageContent } from "@/content/schema";

export const faqContentTh: FaqPageContent = {
  title: "คำถามที่พบบ่อย",
  intro: "รวมคำถามสำคัญก่อนวันงานไว้ในที่เดียว เพื่อให้ทุกท่านตรวจสอบข้อมูลได้สะดวก",
  categories: ["ข้อมูลทั่วไป", "การเดินทางและที่จอดรถ"],
  items: [
    {
      id: "faq-date",
      category: "ข้อมูลทั่วไป",
      question: "งานจัดวันไหน?",
      answer: "งานจัดขึ้นในวันอาทิตย์ที่ 29 พฤศจิกายน 2569 ที่โรงแรม Conrad Bangkok",
    },
    {
      id: "faq-event-parts",
      category: "ข้อมูลทั่วไป",
      question: "งานมีกี่ช่วง?",
      timelineGroups: [
        {
          id: "morning",
          sessionLabel: "พิธีช่วงเช้า",
          roomName: "Beverly Hills Room",
          floorLabel: "ชั้น 2 (Annex)",
          timeline: [
            { id: "soo-khor", time: "07.09", title: "พิธีสู่ขอ" },
            { id: "engagement", time: "07.39", title: "พิธีหมั้น (สวมแหวน)" },
            { id: "paying-respects", time: "08.09", title: "พิธีรับไหว้ผู้ใหญ่" },
          ],
        },
        {
          id: "reception",
          sessionLabel: "งานเลี้ยงกลางวัน",
          roomName: "Conrad Ballroom",
          floorLabel: "ชั้น 4 (อาคารหลัก)",
          timeline: [{ id: "reception", time: "11.30", title: "งานเลี้ยงฉลองมงคลสมรส" }],
        },
      ],
    },
    {
      id: "faq-arrival",
      category: "ข้อมูลทั่วไป",
      question: "ควรมาถึงก่อนเวลากี่นาที?",
      answer:
        "แนะนำให้มาถึงก่อนเวลาเริ่มงานประมาณ 20–30 นาที เพื่อเผื่อเวลาสำหรับการเดินทาง จอดรถ และลงทะเบียน",
    },
    {
      id: "faq-dress",
      category: "ข้อมูลทั่วไป",
      question: "มีข้อกำหนดเรื่องการแต่งกายไหม?",
      answer:
        "ไม่มีธีมหรือข้อกำหนดเรื่องการแต่งกายเป็นพิเศษ แขกสามารถแต่งกายได้ตามสไตล์ที่สะดวกและมั่นใจ หากต้องการแต่งแบบสุภาพหรือกึ่งทางการก็ยินดีมากค่ะ/ครับ",
    },
    {
      id: "faq-venue",
      category: "การเดินทางและที่จอดรถ",
      question: "สถานที่จัดงานอยู่ที่ไหน?",
      answer:
        "งานจัดที่โรงแรม Conrad Bangkok · Beverly Hills ชั้น 2 อาคาร Annex (พิธีช่วงเช้า) · Conrad Ballroom ชั้น 4 อาคารหลัก (งานเลี้ยงฉลองมงคลสมรส)",
      relatedHref: "/th/venue",
    },
    {
      id: "faq-maps",
      category: "การเดินทางและที่จอดรถ",
      question: "เปิดแผนที่ได้จากที่ไหน?",
      answer:
        "ดูแผนที่ด้านล่างเพื่อตรวจสอบตำแหน่ง Conrad Bangkok แล้วกดเปิด Google Maps เพื่อเปิดเส้นทางในแอป",
      mapPreview: {
        venueName: "Conrad Bangkok",
        embedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
        buttonUrl: "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
        buttonLabel: "เปิด Google Maps",
        helperText: "กดเพื่อเปิดเส้นทางใน Google Maps",
      },
      relatedHref: "/th/venue",
    },
    {
      id: "faq-parking",
      category: "การเดินทางและที่จอดรถ",
      question: "มีที่จอดรถไหม?",
      answer:
        "แขกสามารถจอดรถได้ที่ Conrad Bangkok หรือ All Seasons Place กรุณาตรวจสอบป้ายทางเข้าและพื้นที่จอดรถเมื่อเดินทางถึงสถานที่",
    },
    {
      id: "faq-grab",
      category: "การเดินทางและที่จอดรถ",
      question: "สามารถเรียก Grab หรือแท็กซี่ไปที่โรงแรมได้ไหม?",
      answer:
        "ได้ค่ะ/ครับ สามารถตั้งปลายทางเป็น Conrad Bangkok ได้โดยตรงจากแอปเรียกรถหรือ Google Maps",
    },
  ],
};
