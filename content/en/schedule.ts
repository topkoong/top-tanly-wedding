import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentEn: SchedulePageContent = {
  title: "Schedule",
  intro:
    "Our wedding day unfolds in two parts — a traditional morning ceremony, followed by a lunch reception.",
  arrivalNote:
    "We recommend arriving 15–20 minutes before the part you plan to join, to register and settle in comfortably.",
  updateNote:
    "Details may be updated closer to the date. Check this page or our LINE Official Account for the latest.",
  venueButtonLabel: "View Venue Details →",
  events: [
    {
      id: "engagement-rubwai",
      number: "01",
      thaiName: "พิธีหมั้นและพิธีรับไหว้",
      englishName: "Engagement & Rubwai Ceremony",
      title: "Engagement & Rubwai Ceremony",
      date: "Sunday, 29 November 2026",
      time: "07:00–11:00",
      room: "Beverly Hills",
      floor: "Floor 2 (Annex Building) · Conrad Bangkok",
      navigationNote:
        "Take the lift to Floor 2 in the Annex Building. Follow hotel signage to Beverly Hills room.",
      venue: "Beverly Hills, Conrad Bangkok",
      venuePageHref: "/en/venue",
      description:
        "A traditional Thai ceremony shared with family and those closest to us. The Engagement and Rubwai rites mark the beginning of our journey together.",
      chips: [
        "Guest arrival",
        "Registration",
        "Engagement ceremony",
        "Rubwai ceremony",
        "Photo session",
      ],
    },
    {
      id: "wedding-reception",
      number: "02",
      thaiName: "งานเลี้ยงฉลองมงคลสมรส",
      englishName: "Wedding Reception",
      title: "Wedding Reception",
      date: "Sunday, 29 November 2026",
      time: "11:00–14:00",
      room: "Conrad Ballroom",
      floor: "Floor 4 (Main Building) · Conrad Bangkok",
      navigationNote:
        "Take the lift to Floor 4 in the Main Building. The Conrad Ballroom pre-function area is directly off the lift lobby.",
      venue: "Conrad Ballroom, Conrad Bangkok",
      venuePageHref: "/en/venue",
      description:
        "A celebration lunch in the Conrad Ballroom — a pillar-free venue with 9-metre high ceilings and one of the largest LED screens in Thailand. We look forward to raising a glass with everyone we love.",
      chips: [
        "Guest arrival",
        "Wedding reception",
        "Photo moments",
        "Guest greetings",
        "Thank-you",
      ],
    },
  ],
};
