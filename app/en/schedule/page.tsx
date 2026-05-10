import ScheduleSection from "@/components/sections/ScheduleSection";
import { scheduleContentEn } from "@/content/en/schedule";
import { siteContentEn } from "@/content/en/site";

export default function SchedulePageEn() {
  return <ScheduleSection site={siteContentEn} content={scheduleContentEn} />;
}
