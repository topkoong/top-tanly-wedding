import VenuePage from "@/components/pages/VenuePage";
import { getPhotos } from "@/lib/photos";

export default function VenuePageEn() {
  return <VenuePage photos={getPhotos()} />;
}
