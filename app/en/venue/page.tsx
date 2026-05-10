import VenueSection from "@/components/sections/VenueSection";
import { siteContentEn } from "@/content/en/site";
import { venueContentEn } from "@/content/en/venue";

export default function VenuePageEn() {
  return <VenueSection site={siteContentEn} content={venueContentEn} />;
}
