import type { FaqPageContent } from "@/content/schema";

export const faqContentTh: FaqPageContent = {
  title: "คำถามที่พบบ่อย",
  intro: "รวมคำถามสำคัญก่อนวันงานไว้ในที่เดียว เพื่อให้ทุกท่านตรวจสอบข้อมูลได้สะดวก",
  categories: [
    "ข้อมูลทั่วไป",
    "การเดินทางและที่จอดรถ",
    "ภายในงาน",
    "รูปภาพและการติดต่อ",
  ],
  lineCtaLabel: "หากมีคำถามเพิ่มเติม สามารถติดตามข้อมูลอัปเดตผ่าน LINE Official Account",
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
    {
      id: "faq-both",
      category: "ภายในงาน",
      question: "จำเป็นต้องเข้าร่วมทั้งสองช่วงไหม?",
      answer:
        "แขกสามารถเข้าร่วมตามช่วงเวลาที่สะดวกหรือช่วงที่ได้รับเชิญ หากไม่แน่ใจสามารถตรวจสอบรายละเอียดจากการ์ดเชิญหรือสอบถามผ่าน LINE Official Account",
    },
    {
      id: "faq-children",
      category: "ภายในงาน",
      question: "สามารถพาเด็กมาด้วยได้ไหม?",
      answer:
        "หากมีข้อสงสัยเกี่ยวกับการพาเด็กมาร่วมงาน สามารถสอบถามผ่าน LINE Official Account เพื่อให้ทีมงานช่วยตรวจสอบรายละเอียดเพิ่มเติม",
      relatedHref: "/th/line",
    },
    {
      id: "faq-bring",
      category: "ภายในงาน",
      question: "ต้องเตรียมอะไรมาในวันงานไหม?",
      answer:
        "ไม่จำเป็นต้องเตรียมอะไรเป็นพิเศษ เพียงเผื่อเวลาเดินทางและมาร่วมฉลองด้วยกันก็เพียงพอแล้ว",
    },
    {
      id: "faq-contact-day",
      category: "ภายในงาน",
      question: "ควรติดต่อใครหากมีคำถามในวันงาน?",
      answer:
        "สามารถติดต่อผ่าน LINE Official Account หรือดูข้อมูลล่าสุดจากเว็บไซต์นี้",
      relatedHref: "/th/line",
    },
    {
      id: "faq-photos",
      category: "รูปภาพและการติดต่อ",
      question: "จะดูรูปภาพได้จากที่ไหน?",
      answer:
        "สามารถดูรูปภาพได้ที่หน้าแกลเลอรี โดยช่วงแรกอาจเป็นภาพตัวอย่างหรือภาพพรีเวดดิ้ง และจะมีการอัปเดตภาพเพิ่มเติมภายหลัง",
      relatedHref: "/th/gallery",
    },
    {
      id: "faq-take-photos",
      category: "รูปภาพและการติดต่อ",
      question: "สามารถถ่ายรูปในงานได้ไหม?",
      answer:
        "สามารถถ่ายรูปได้ตามความเหมาะสม และขอความร่วมมือไม่บังช่างภาพหลักในช่วงพิธีสำคัญ",
    },
    {
      id: "faq-site-updates",
      category: "รูปภาพและการติดต่อ",
      question: "เว็บไซต์นี้จะมีการอัปเดตข้อมูลไหม?",
      answer:
        "ใช่ค่ะ/ครับ รายละเอียดบางส่วนอาจมีการอัปเดตเมื่อใกล้ถึงวันงาน โดยสามารถตรวจสอบข้อมูลล่าสุดได้จากเว็บไซต์นี้",
    },
    {
      id: "faq-contact-channel",
      category: "รูปภาพและการติดต่อ",
      question: "ติดต่อผ่านช่องทางไหนได้บ้าง?",
      answer:
        "สามารถดูรายละเอียดการติดต่อและติดตามข้อมูลอัปเดตได้ที่หน้า LINE Official Account",
      relatedHref: "/th/line",
    },
  ],
};
