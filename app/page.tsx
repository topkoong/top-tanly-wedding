import HomePage from "@/components/pages/HomePage";
import { getPhotos } from "@/lib/photos";

export default function HomeEnglish() {
  return <HomePage photos={getPhotos()} />;
}
