import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentEn: SchedulePageContent = {
  title: "Schedule",
  intro:
    "The wedding day includes a morning ceremony followed by a wedding reception.",
  venueHeadline: "Conrad Bangkok",
  locationGroups: [
    {
      id: "morning",
      sessionLabel: "Morning ceremonies",
      roomName: "Beverly Hills",
      floorLabel: "Floor 2 · Annex Building",
      timeline: [
        { id: "soo-khor", time: "07:09", title: "Paying respects (Soo Khor)" },
        { id: "engagement", time: "07:39", title: "Engagement (ring exchange)" },
        { id: "paying-respects", time: "08:09", title: "Paying respects to elders" },
      ],
    },
    {
      id: "reception",
      sessionLabel: "Luncheon reception",
      roomName: "Conrad Ballroom",
      floorLabel: "Floor 4 · Main Building",
      timeline: [{ id: "reception", time: "11:30", title: "Wedding reception" }],
    },
  ],
  arrivalNote:
    "We recommend arriving around 20–30 minutes before the event starts to allow time for travel, parking, and registration.",
  updateNote:
    "Some details may be updated closer to the wedding date. Please check this website or our LINE Official Account for the latest information.",
  venueButtonLabel: "View map and directions",
  venuePageHref: "/en/venue",
};
