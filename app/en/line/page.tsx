import LineSection from "@/components/sections/LineSection";
import { lineContentEn } from "@/content/en/line";
import { siteContentEn } from "@/content/en/site";

export default function LinePageEn() {
  return <LineSection site={siteContentEn} content={lineContentEn} />;
}
