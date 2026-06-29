import type { VenueContent } from "@/content/schema";

export const venueContentEn: VenueContent = {
  title: "Venue",
  summary:
    "Our wedding takes place at Conrad Bangkok — the morning ceremony in the Beverly Hills room (Floor 2, Annex Building), followed by the reception in the Conrad Ballroom (Floor 4).",
  mainVenue: "Conrad Bangkok",
  address: "All Seasons Place, 87 Wireless Rd, Lumpini, Pathumwan, Bangkok 10330",
  gettingHereTitle: "Getting here",
  eventSpacesTitle: "Ceremony & reception spaces",
  eventSpaces: [
    {
      sessionLabel: "Morning ceremonies",
      room: "Beverly Hills",
      floor: "Floor 2 · Annex Building",
      eventName: "Paying respects · Engagement · Paying respects to elders",
    },
    {
      sessionLabel: "Luncheon reception",
      room: "Conrad Ballroom",
      floor: "Floor 4 · Main Building",
      eventName: "Wedding reception",
    },
  ],
  transport: [
    {
      icon: "car",
      label: "Grab / Taxi",
      detail:
        'Search "Conrad Bangkok" on Wireless Road — drop-off at the main hotel entrance.',
    },
    {
      icon: "train",
      label: "BTS Skytrain",
      detail: "Ploenchit Station · Exit 2 (Park Ventures building side) or Exit 4",
      steps: [
        "Hotel Shuttle Bus — free white hotel shuttle waits at Park Ventures building (Exit 2 side). Runs continuously to Conrad Bangkok.",
        "Taxi / Motorbike taxi — approx. 600–700m along Wireless Rd to All Seasons Place.",
      ],
    },
    {
      icon: "train",
      label: "MRT + One Bangkok Free Shuttle",
      detail: "Lumpini Station · then One Bangkok EV Shuttle to BTS Ploenchit",
      steps: [
        "Alight at Lumpini Station and walk to One Bangkok building.",
        "Take the free One Bangkok EV Shuttle (Ground floor, The Stories zone) to BTS Ploenchit — runs every 15 minutes.",
        "From BTS Ploenchit, take the hotel shuttle bus or a short taxi/motorbike ride to Conrad Bangkok.",
      ],
      note: "One Bangkok EV Shuttle: Mon–Fri 07:00–22:00 · Sat–Sun & Holidays 09:00–23:00. Free of charge.",
    },
  ],
  parking: [
    "Conrad Bangkok car park (main hotel building)",
    "All Seasons Place car park (connected to hotel)",
  ],
  parkingNote:
    "Parking is available at Conrad Bangkok and the adjacent All Seasons Place. Both are directly connected to the hotel. Follow the venue signage on arrival.",
  mapEmbedUrl: "https://www.google.com/maps?q=Conrad%20Bangkok&output=embed",
  mapButtonUrl:
    "https://www.google.com/maps/search/?api=1&query=Conrad%20Bangkok",
  mapButtonLabel: "Open in Google Maps",
  helperText: "Tap to open directions in Google Maps.",
};
