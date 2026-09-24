import HomePage from "@/components/pages/HomePage";
import { getPhotos } from "@/lib/photos";

export default function HomeThai() {
  return <HomePage photos={getPhotos()} />;
}
