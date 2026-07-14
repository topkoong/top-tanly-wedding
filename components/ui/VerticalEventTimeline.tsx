import ScheduleTimelineIcon from "@/components/icons/ScheduleTimelineIcon";
import type { ScheduleLocationGroup } from "@/content/schema";
import { cn } from "@/lib/utils";

type VerticalEventTimelineProps = {
  groups: ScheduleLocationGroup[];
  isThai: boolean;
  className?: string;
};

export default function VerticalEventTimeline({
  groups,
  isThai,
  className,
}: VerticalEventTimelineProps) {
  return (
    <div className={cn("min-w-0 space-y-8", className)}>
      {groups.map((group) => (
        <div key={group.id} className="min-w-0">
          <div className="mb-4 space-y-1">
            <p
              className={cn(
                "text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-stone sm:text-body-s sm:tracking-[0.16em]",
                isThai && "font-thai normal-case tracking-normal sm:tracking-normal",
              )}
            >
              {group.sessionLabel}
            </p>
            <p
              className={cn(
                "text-pretty text-body font-medium leading-snug text-charcoal",
                isThai && "font-thai",
              )}
            >
              {group.roomName}, {group.floorLabel}
            </p>
          </div>

          <ol className="relative ml-5 border-l border-charcoal/20 pl-8">
            {group.timeline.map((entry) => (
              <li key={entry.id} className="relative pb-6 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[calc(2rem+1px)] top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-charcoal ring-4 ring-cream"
                />
                <div className="flex min-w-0 items-start gap-3">
                  <ScheduleTimelineIcon
                    id={entry.id}
                    className="mt-0.5 shrink-0 text-charcoal/80"
                  />
                  <div className="min-w-0 space-y-1">
                    <p
                      className={cn(
                        "text-body font-medium tabular-nums leading-none text-charcoal",
                        isThai && "font-thai",
                      )}
                    >
                      {entry.time}
                    </p>
                    <p
                      className={cn(
                        "text-pretty text-body-s leading-snug text-stone",
                        isThai && "font-thai",
                      )}
                    >
                      {entry.title}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}
