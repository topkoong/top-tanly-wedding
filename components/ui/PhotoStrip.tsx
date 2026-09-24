import TNMonogram from "@/components/icons/TNMonogram";
import type { SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type PhotoStripProps = {
  /** When omitted every frame carries the monogram. */
  date?: SiteContent["homeShell"]["invitationDateDisplay"];
  isThai?: boolean;
  className?: string;
};

const FRAME_CLASS =
  "relative grid aspect-[5/4] place-items-center overflow-hidden text-paper " +
  "bg-[radial-gradient(120%_95%_at_50%_30%,#5c5441_0%,var(--color-night)_55%,var(--color-night-deep)_100%)] " +
  "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.25)]";

/**
 * Photo-booth print: three dark "exposures" on cream stock. Purely decorative —
 * the same date is announced in readable text elsewhere. Type scales with the
 * strip's own width (container query units) so it works at any size.
 */
export default function PhotoStrip({ date, isThai = false, className }: PhotoStripProps) {
  const [day, ...monthParts] = date?.dayMonth.split(" ") ?? [];
  const month = monthParts.join(" ");
  const monogram = <TNMonogram className="h-[46%] w-auto opacity-90 invert" title="" />;

  return (
    <div
      aria-hidden
      className={cn("@container bg-paper shadow-[0_18px_30px_-18px_rgba(0,0,0,0.55)]", className)}
    >
      <div className="flex flex-col gap-[6cqw] p-[8cqw] pb-[14cqw]">
        <div className={FRAME_CLASS}>{monogram}</div>
        <div className={FRAME_CLASS}>
          {date ? (
            <div className="flex flex-col items-center leading-none">
              <span className="font-display text-[27cqw] leading-none">{day}</span>
              <span
                className={cn(
                  "mt-[3cqw]",
                  isThai
                    ? "font-thai text-[10cqw]"
                    : "font-display text-[8.5cqw] uppercase tracking-[0.18em]",
                )}
              >
                {month}
              </span>
            </div>
          ) : (
            monogram
          )}
        </div>
        <div className={FRAME_CLASS}>
          {date ? (
            <span
              className={cn(
                "leading-none",
                isThai ? "font-thai text-[12cqw]" : "font-display text-[13cqw] tracking-[0.14em]",
              )}
            >
              {date.year}
            </span>
          ) : (
            monogram
          )}
        </div>
      </div>
    </div>
  );
}
