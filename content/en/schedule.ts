import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentEn: SchedulePageContent = {
  title: "Schedule",
  pageVenueSummary: "Venue: Conrad Bangkok",
  intro:
    "The wedding day includes a morning ceremony followed by a wedding reception.",
  arrivalNote:
    "We recommend arriving around 20–30 minutes before the event starts to allow time for travel, parking, and registration.",
  updateNote:
    "Some details may be updated closer to the wedding date. Please check this website or our LINE Official Account for the latest information.",
  venueButtonLabel: "View map and directions",
  events: [
    {
      id: "engagement-rubwai",
      number: "01",
      thaiName: "พิธีหมั้นและพิธีรับไหว้",
      englishName: "Engagement & Rubwai Ceremony",
      title: "Engagement & Rubwai Ceremony",
      date: "Sunday, 29 November 2026",
      time: "07:00–11:00",
      roomAccessLabel: "Beverly Hills room · 2nd Floor · Annex Building",
      venuePageHref: "/en/venue",
      description:
        "A warm morning ceremony for the engagement and Rubwai traditions with family and close guests.",
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
      roomAccessLabel: "Conrad Ballroom · 4th Floor · Main Building",
      venuePageHref: "/en/venue",
      description:
        "A warm and elegant wedding reception to celebrate our special day with family and friends.",
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
