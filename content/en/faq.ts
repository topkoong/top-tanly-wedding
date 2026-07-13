import type { FaqPageContent } from "@/content/schema";

export const faqContentEn: FaqPageContent = {
  title: "FAQ",
  intro: "Quick answers to the most common questions before the wedding day.",
  categories: [
    "General Information",
    "Travel & Parking",
    "During the Event",
    "Photos & Contact",
  ],
  lineCtaLabel:
    "If you have any other questions, please follow updates through our LINE Official Account.",
  items: [
    {
      id: "faq-date",
      category: "General Information",
      question: "When is the wedding?",
      answer: "The wedding will take place on Sunday, 29 November 2026 at Conrad Bangkok.",
    },
    {
      id: "faq-event-parts",
      category: "General Information",
      question: "How many parts are there?",
      answer:
        "Morning at Beverly Hills: paying respects (Soo Khor) 07:09 · engagement (ring exchange) 07:39 · paying respects to elders 08:09 · wedding reception 11:30 at Conrad Ballroom.",
    },
    {
      id: "faq-arrival",
      category: "General Information",
      question: "What time should I arrive?",
      answer:
        "We recommend arriving around 20–30 minutes before the event starts to allow time for travel, parking, and registration.",
    },
    {
      id: "faq-dress",
      category: "General Information",
      question: "Is there a dress code?",
      answer:
        "There is no specific dress code. Please wear whatever makes you feel comfortable and happy. Smart casual or formal attire is welcome, but not required.",
    },
    {
      id: "faq-venue",
      category: "Travel & Parking",
      question: "Where is the venue?",
      answer:
        "Conrad Bangkok · Beverly Hills, Floor 2, Annex Building (morning ceremonies) · Conrad Ballroom, Floor 4, Main Building (wedding reception).",
      relatedHref: "/venue",
    },
    {
      id: "faq-map",
      category: "Travel & Parking",
      question: "How do I open the map?",
      answer:
        "Please use the “Open in Google Maps” button on the Venue page to open directions to Conrad Bangkok.",
      relatedHref: "/venue",
    },
    {
      id: "faq-parking",
      category: "Travel & Parking",
      question: "Is parking available?",
      answer:
        "Parking is available at Conrad Bangkok and All Seasons Place. Please follow the venue signage when you arrive.",
    },
    {
      id: "faq-grab",
      category: "Travel & Parking",
      question: "Can I use Grab or taxi?",
      answer:
        "Yes. You can set your destination as Conrad Bangkok in Google Maps or your preferred ride-hailing app.",
    },
    {
      id: "faq-both",
      category: "During the Event",
      question: "Do I need to attend both events?",
      answer:
        "You are welcome to attend the part that is most convenient for you or the part stated on your invitation. For questions, please contact us via LINE Official Account.",
    },
    {
      id: "faq-children",
      category: "During the Event",
      question: "Can I bring children?",
      answer:
        "If you have questions about bringing children, please contact us via LINE Official Account so we can help confirm the details.",
      relatedHref: "/line",
    },
    {
      id: "faq-bring",
      category: "During the Event",
      question: "Do I need to bring anything?",
      answer:
        "Nothing special is required. Please allow enough time for travel and come celebrate with us.",
    },
    {
      id: "faq-contact-day",
      category: "During the Event",
      question: "Who should I contact on the wedding day?",
      answer:
        "Please use our LINE Official Account or check this website for the latest information.",
      relatedHref: "/line",
    },
    {
      id: "faq-photos",
      category: "Photos & Contact",
      question: "Where can I view photos?",
      answer:
        "Photos will be available on the Gallery page. At first, the gallery may show placeholders or pre-wedding photos, with more photos added later.",
      relatedHref: "/gallery",
    },
    {
      id: "faq-photo-policy",
      category: "Photos & Contact",
      question: "Can I take photos during the event?",
      answer:
        "Yes, photos are welcome where appropriate. We kindly ask guests not to block the official photographers during key moments.",
    },
    {
      id: "faq-updates",
      category: "Photos & Contact",
      question: "Will this website be updated?",
      answer:
        "Yes. Some details may be updated closer to the wedding date. Please check this website for the latest information.",
    },
    {
      id: "faq-contact-channel",
      category: "Photos & Contact",
      question: "How can I contact you?",
      answer:
        "Please visit the LINE Official Account page for the latest updates and contact information.",
      relatedHref: "/line",
    },
  ],
};
