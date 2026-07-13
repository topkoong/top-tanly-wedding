import type { ScheduleTimelineEntry } from "@/content/schema";
import { publicAssetPath } from "@/lib/publicAssetPath";
import { cn } from "@/lib/utils";

type ScheduleTimelineIconId =
  | "soo-khor"
  | "engagement"
  | "paying-respects"
  | "reception";

const scheduleIconPaths: Record<ScheduleTimelineIconId, `/${string}`> = {
  "soo-khor": "/images/schedule/formal-proposal-ceremony.svg",
  engagement: "/images/schedule/engagement-ceremony.svg",
  "paying-respects": "/images/schedule/paying-respects-to-elders.svg",
  reception: "/images/schedule/luncheon-reception.svg",
};

type ScheduleTimelineIconProps = {
  id: ScheduleTimelineEntry["id"];
  className?: string;
};

/** Printed-invitation schedule pictograms — one asset per timeline step. */
export default function ScheduleTimelineIcon({ id, className }: ScheduleTimelineIconProps) {
  if (!(id in scheduleIconPaths)) return null;

  const path = scheduleIconPaths[id as ScheduleTimelineIconId];

  return (
    <img
      src={publicAssetPath(path)}
      alt=""
      aria-hidden
      width={24}
      height={24}
      draggable={false}
      className={cn("block h-6 w-6 object-contain text-charcoal", className)}
    />
  );
}
