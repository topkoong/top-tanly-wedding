import LineSection from "@/components/sections/LineSection";
import { lineContentTh } from "@/content/th/line";
import { siteContentTh } from "@/content/th/site";

export default function LinePage() {
  return <LineSection site={siteContentTh} content={lineContentTh} />;
}
