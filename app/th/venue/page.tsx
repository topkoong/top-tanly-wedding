import VenuePage from "@/components/pages/VenuePage";
import { getPhotos } from "@/lib/photos";

export default function VenuePageTh() {
  return <VenuePage photos={getPhotos()} />;
}
