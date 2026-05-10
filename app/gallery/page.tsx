import GallerySection from "@/components/sections/GallerySection";
import { galleryContentTh } from "@/content/th/gallery";
import { siteContentTh } from "@/content/th/site";

export default function GalleryPage() {
  return <GallerySection site={siteContentTh} content={galleryContentTh} />;
}
