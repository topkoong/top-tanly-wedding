import type { VenueContent } from "@/content/schema";

export const venueContentEn: VenueContent = {
  title: "Venue",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 Wireless Rd, Lumpini, Pathumwan, Bangkok 10330",
  eventSpacesTitle: "Ceremony & reception",
  eventSpaces: [
    {
      sessionLabel: "Morning ceremonies",
      room: "Beverly Hills",
      floor: "Floor 2 · Annex Building",
    },
    {
      sessionLabel: "Luncheon reception",
      room: "Conrad Ballroom",
      floor: "Floor 4 · Main Building",
    },
  ],
  gettingHereTitle: "Getting here",
  transport: [
    {
      icon: "car",
      label: "Grab / Taxi",
      detail: "Drop-off at the main entrance of Conrad Bangkok, Wireless Road.",
    },
    {
      icon: "train",
      label: "BTS Ploenchit",
      detail: "Exit 2 — free hotel shuttle from the Park Ventures building.",
    },
    {
      icon: "shuttle",
      label: "MRT Lumpini",
      detail: "Free One Bangkok EV shuttle to BTS Ploenchit, then the hotel shuttle.",
    },
  ],
  parkingTitle: "Parking",
  parkingNote: "Park at Conrad Bangkok or the connected All Seasons Place car park.",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "Open in Google Maps",
  helperText: "Tap to open directions in Google Maps.",
};
