import type { VenueContent } from "@/content/schema";

export const venueContentEn: VenueContent = {
  title: "Venue",
  summary:
    "Our wedding takes place at Conrad Bangkok, with the morning ceremony in Beverly Hills and the wedding reception in Conrad Ballroom.",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 Wireless Rd, Lumpini, Pathumwan, Bangkok 10330",
  eventSpaces: [
    { room: "Beverly Hills", eventName: "Engagement & Rubwai Ceremony" },
    { room: "Conrad Ballroom", eventName: "Wedding Reception" },
  ],
  transport: [],
  parking: [
    "Conrad Bangkok car park (main hotel building)",
    "All Seasons Place car park (connected to hotel)",
  ],
  parkingNote:
    "Parking is available at Conrad Bangkok and All Seasons Place. Please follow the venue signage when you arrive.",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "Open in Google Maps",
  helperText: "Tap to open directions in Google Maps on mobile.",
};
