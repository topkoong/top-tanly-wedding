import ScheduleSection from "@/components/sections/ScheduleSection";
import { scheduleContentTh } from "@/content/th/schedule";
import { siteContentTh } from "@/content/th/site";

export default function SchedulePage() {
  return <ScheduleSection site={siteContentTh} content={scheduleContentTh} />;
}
