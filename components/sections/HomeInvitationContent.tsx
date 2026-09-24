"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import TNMonogram from "@/components/icons/TNMonogram";
import Countdown from "@/components/ui/Countdown";
import { InvitationRevealItem } from "@/components/ui/InvitationReveal";
import PhotoFrame from "@/components/ui/PhotoFrame";
import PhotoStrip from "@/components/ui/PhotoStrip";
import type { SiteContent } from "@/content/schema";
import type { PhotoMap } from "@/lib/photos";
import { cn } from "@/lib/utils";

type HomeInvitationContentProps = {
  content: SiteContent;
  photos: PhotoMap;
};

/** Seconds between collage pieces — the flat lay builds top to bottom. */
const STAGGER = 0.12;

const PAPER_SHADOW = "shadow-[0_18px_34px_-22px_rgba(31,29,24,0.5)]";

const eyebrowClass = (isThai: boolean) =>
  cn(
    "text-stone",
    isThai
      ? "font-thai text-[0.75rem] leading-snug"
      : "font-display text-[0.625rem] uppercase leading-relaxed tracking-[0.2em] sm:text-[0.6875rem]",
  );

const bodyClass = (isThai: boolean) =>
  cn(
    "text-charcoal",
    isThai ? "font-thai text-[0.75rem] leading-snug" : "font-display text-[0.75rem] leading-snug",
  );

type PaperProps = {
  children: ReactNode;
  className?: string;
};

/** Ivory stationery card with a letterpress hairline frame. */
function Paper({ children, className }: PaperProps) {
  return (
    <div
      className={cn(
        "relative rounded-[3px] bg-ivory ring-1 ring-charcoal/[0.07]",
        PAPER_SHADOW,
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[6px] rounded-[2px] border border-charcoal/10"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** The opened olive envelope from the intro, with the monogram letter tucked inside. */
function CollageEnvelope() {
  return (
    <div aria-hidden className="relative aspect-[140/130] w-full">
      <svg viewBox="0 0 140 130" className="absolute inset-0 h-full w-full overflow-visible">
        <path d="M0 30L70 0L140 30Z" className="fill-envelope-deep" />
        <path d="M0 30L70 0L140 30" fill="none" className="stroke-envelope-soft" strokeWidth="0.5" />
        <rect y="30" width="140" height="100" rx="2" className="fill-envelope-deep" />
      </svg>
      <div className="absolute inset-x-[11%] top-[9%] bottom-[16%] flex justify-center rounded-[2px] bg-paper pt-[9%] ring-1 ring-charcoal/[0.07]">
        <TNMonogram className="h-[34%] w-auto" title="" />
      </div>
      <svg viewBox="0 0 140 130" className="absolute inset-0 h-full w-full overflow-visible">
        <path d="M0 30L70 80L140 30V128a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2Z" className="fill-envelope" />
        <path d="M0 130L62 76M140 130L78 76" fill="none" className="stroke-envelope-ink" strokeWidth="0.6" opacity="0.5" />
        <path d="M0 30L70 80L140 30" fill="none" className="stroke-envelope-soft" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * Hero flat lay revealed after the envelope intro: the opened envelope,
 * tilted stationery and photos fly in from different sides one after
 * another, echoing digital wedding-invite reels.
 */
export default function HomeInvitationContent({ content, photos }: HomeInvitationContentProps) {
  const isThai = content.locale === "th";
  const hs = content.homeShell;
  const date = hs.invitationDateDisplay;
  const [day, ...monthParts] = date.dayMonth.split(" ");
  const month = monthParts.join(" ");

  return (
    <div className="mx-auto w-full max-w-[25rem] sm:max-w-[32rem]">
      <InvitationRevealItem delay={0} from={{ y: 20, scale: 0.96 }} className="flex flex-col items-center text-center">
        <p className={cn(eyebrowClass(isThai), "max-w-xs")}>{hs.invitationLeadIn}</p>
        <CoupleScriptMark as="h1" size="envelope" name={content.coupleFriendlyName} className="mt-2" />
        <p className={cn(eyebrowClass(isThai), "mt-2 text-charcoal/80")}>{content.weddingDate}</p>
      </InvitationRevealItem>

      <div className="mt-5 flex items-start sm:mt-8">
        <div className="relative z-10 flex w-[46%] flex-col pt-6">
          <InvitationRevealItem delay={STAGGER} from={{ x: -60, y: -20, rotate: -14 }}>
            <div className="-rotate-6 drop-shadow-[0_14px_18px_rgba(31,29,24,0.18)]">
              <CollageEnvelope />
            </div>
          </InvitationRevealItem>

          <InvitationRevealItem delay={STAGGER * 3} from={{ x: -50, y: 30, rotate: -10 }} className="relative z-20 -mt-4 ml-[6%]">
            <Paper className="-rotate-3 px-4 py-5 text-center">
              <p className={eyebrowClass(isThai)}>{hs.dateHeading}</p>
              <p className={cn(bodyClass(isThai), "mt-2 uppercase tracking-[0.14em] [&:lang(th)]:tracking-normal")}>
                {date.weekday}
              </p>
              <p className="mt-1 font-display text-[2.25rem] leading-none text-charcoal sm:text-[2.75rem]">
                {day}
              </p>
              <p
                className={cn(
                  "mt-1 leading-tight text-charcoal",
                  isThai
                    ? "font-thai text-[0.9375rem] font-medium"
                    : "font-display text-[0.9375rem] uppercase tracking-[0.14em] sm:text-[1.0625rem]",
                )}
              >
                {month}
              </p>
              <p className={cn(bodyClass(isThai), "mt-1")}>{date.year}</p>
            </Paper>
          </InvitationRevealItem>
        </div>

        <div className="relative z-20 -ml-[6%] flex w-[60%] flex-col">
          <InvitationRevealItem delay={STAGGER * 2} from={{ x: 60, y: -10, rotate: 10 }}>
            <Paper className="rotate-[2.5deg] px-5 pb-6 pt-6 text-center">
              <p className={eyebrowClass(isThai)}>{hs.invitationInviteLine}</p>
              <TNMonogram className="mx-auto mt-3 h-10 w-auto" title="" />
              <p className={cn(eyebrowClass(isThai), "mt-4")}>{hs.venueHeading}</p>
              <Link
                href={hs.invitationVenueHref}
                className={cn(
                  "mt-1 inline-block rounded-sm leading-tight text-charcoal transition-colors duration-200 hover:text-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                  isThai ? "font-thai text-[1rem] font-medium" : "font-display text-[1.25rem] sm:text-[1.5rem]",
                )}
              >
                {hs.locationLabel}
              </Link>
              <p className={cn(bodyClass(isThai), "mt-1 text-stone")}>{hs.locationDetail}</p>
              <p className={cn(bodyClass(isThai), "mt-3")}>{hs.invitationTimeSummary}</p>
            </Paper>
          </InvitationRevealItem>

          <InvitationRevealItem delay={STAGGER * 4} from={{ x: 50, y: 30, rotate: 8 }} className="mt-4 ml-[8%]">
            <Paper className="rotate-[1.5deg] px-3 pb-3 pt-4 text-center">
              <p className={eyebrowClass(isThai)}>{hs.countdownTitle}</p>
              <Countdown
                targetISO={content.weddingDateISO}
                labels={hs.countdownLabels}
                isThai={isThai}
                className="mt-2 grid-cols-2 gap-1.5 sm:gap-2"
              />
            </Paper>
          </InvitationRevealItem>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-[6%]">
        <InvitationRevealItem delay={STAGGER * 5} from={{ x: -40, y: 40, rotate: -12 }} className="w-[40%]">
          <div className={cn("-rotate-3 rounded-[50%] bg-paper p-[5%] ring-1 ring-charcoal/[0.07]", PAPER_SHADOW)}>
            <PhotoFrame src={photos.oval} width={800} height={1000} className="rounded-[50%]" />
          </div>
        </InvitationRevealItem>
        <InvitationRevealItem delay={STAGGER * 6} from={{ x: 40, y: 50, rotate: 14 }} className="w-[27%]">
          <PhotoStrip
            photos={[photos["strip-1"], photos["strip-2"], photos["strip-3"]]}
            className="rotate-[5deg]"
          />
        </InvitationRevealItem>
      </div>

      <InvitationRevealItem delay={STAGGER * 7} from={{ y: 40, rotate: -4 }} className="mx-auto mt-8 w-[72%] sm:w-[60%]">
        <Link
          href={hs.invitationCtaHref}
          className={cn(
            "group relative block -rotate-2 rounded-[3px] bg-ivory px-5 pb-5 pt-9 text-center ring-1 ring-charcoal/[0.07] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
            PAPER_SHADOW,
          )}
        >
          <svg
            aria-hidden
            viewBox="0 0 100 24"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-0 h-7 w-full"
          >
            <path d="M0 0L50 22L100 0" fill="none" stroke="rgba(31,29,24,0.14)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
          </svg>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-charcoal",
              isThai ? "font-thai text-[1rem] font-medium" : "font-display text-[1.25rem] uppercase tracking-[0.12em]",
            )}
          >
            {hs.invitationCtaLabel}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" strokeWidth={1.75} aria-hidden />
          </span>
        </Link>
      </InvitationRevealItem>
    </div>
  );
}
