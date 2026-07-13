import type { SchedulePageContent } from "@/content/schema";

export const scheduleContentEn: SchedulePageContent = {
  title: "Schedule",
  intro:
    "Sunday 29 November 2026 at Conrad Bangkok — morning ceremonies followed by a luncheon reception.",
  venueHeadline: "Conrad Bangkok",
  locationGroups: [
    {
      id: "morning",
      sessionLabel: "Morning ceremonies",
      roomName: "Beverly Hills Room",
      floorLabel: "2nd Floor (Annex)",
      timeline: [
        { id: "soo-khor", time: "7:09 AM", title: "Formal proposal ceremony" },
        { id: "engagement", time: "7:39 AM", title: "Engagement ceremony" },
        { id: "paying-respects", time: "8:09 AM", title: "Paying respects to elders" },
      ],
    },
    {
      id: "reception",
      sessionLabel: "Luncheon reception",
      roomName: "Conrad Ballroom",
      floorLabel: "4th Floor (Main Building)",
      timeline: [{ id: "reception", time: "11:30 AM", title: "Luncheon reception" }],
    },
  ],
  arrivalNote:
    "We recommend arriving around 20–30 minutes before the event starts to allow time for travel, parking, and registration.",
  updateNote:
    "Some details may be updated closer to the wedding date. Please check this website for the latest information.",
  venueButtonLabel: "View map and directions",
  venuePageHref: "/en/venue",
};
