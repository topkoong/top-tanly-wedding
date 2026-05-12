import type { VenueContent } from "@/content/schema";

export const venueContentEn: VenueContent = {
  title: "Venue",
  summary:
    "Our wedding takes place at Conrad Bangkok, with the morning ceremony in Beverly Hills and the wedding reception in Conrad Ballroom.",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 Wireless Rd, Lumpini, Pathumwan, Bangkok 10330",
  gettingHereTitle: "Getting here",
  eventSpaces: [
    {
      room: "Beverly Hills",
      floor: "Floor — to be reconfirmed nearer the wedding date",
      eventName: "Engagement & Rubwai Ceremony",
    },
    {
      room: "Conrad Ballroom",
      floor: "Floor — to be reconfirmed nearer the wedding date",
      eventName: "Wedding Reception",
    },
  ],
  transport: [
    {
      icon: "train",
      label: "BTS skytrain",
      detail:
        "Take the Sukhumvit Line to BTS Ploenchit, then follow mall / All Seasons Place signage toward Conrad Bangkok (the best exit and indoor walking route may be updated nearer the wedding date).",
      note: "If anything changes close to the wedding day, we’ll share updates on this site and our LINE Official Account.",
    },
    {
      icon: "car",
      label: "Private car / taxi",
      detail:
        "Set your destination to Conrad Bangkok or All Seasons Place on Wireless Road. Please use the “Open in Google Maps” button on this page for live directions.",
    },
  ],
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
