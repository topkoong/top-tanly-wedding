import VenueSection from "@/components/sections/VenueSection";
import { siteContentTh } from "@/content/th/site";
import { venueContentTh } from "@/content/th/venue";

export default function VenuePage() {
  return <VenueSection site={siteContentTh} content={venueContentTh} />;
}
