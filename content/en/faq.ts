import type { FaqPageContent } from "@/content/schema";

export const faqContentEn: FaqPageContent = {
  title: "FAQ",
  intro: "Quick answers to the most common questions before the wedding day.",
  categories: ["General Information", "Travel & Parking"],
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
      timelineGroups: [
        {
          id: "morning",
          sessionLabel: "Morning ceremonies",
          roomName: "Beverly Hills Room",
          floorLabel: "2nd Floor (Annex)",
          timeline: [
            { id: "soo-khor", time: "7:09 AM", title: "Paying respects (Soo Khor)" },
            { id: "engagement", time: "7:39 AM", title: "Engagement (ring exchange)" },
            { id: "paying-respects", time: "8:09 AM", title: "Paying respects to elders" },
          ],
        },
        {
          id: "reception",
          sessionLabel: "Luncheon reception",
          roomName: "Conrad Ballroom",
          floorLabel: "4th Floor (Main Building)",
          timeline: [{ id: "reception", time: "11:30 AM", title: "Wedding reception" }],
        },
      ],
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
        "Use the map below to preview Conrad Bangkok, then tap Open in Google Maps to launch directions in the app.",
      mapPreview: {
        venueName: "Conrad Bangkok",
        embedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
        buttonUrl: "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
        buttonLabel: "Open in Google Maps",
        helperText: "Tap to open directions in Google Maps.",
      },
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
  ],
};
