import GallerySection from "@/components/sections/GallerySection";
import { galleryContentEn } from "@/content/en/gallery";
import { siteContentEn } from "@/content/en/site";

export default function GalleryPageEn() {
  return <GallerySection site={siteContentEn} content={galleryContentEn} />;
}
