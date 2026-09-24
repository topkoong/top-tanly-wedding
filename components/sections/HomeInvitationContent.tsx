"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import Countdown from "@/components/ui/Countdown";
import { InvitationRevealItem } from "@/components/ui/InvitationReveal";
import LaceHeart from "@/components/ui/LaceHeart";
import PhotoFrame from "@/components/ui/PhotoFrame";
import PhotoStrip from "@/components/ui/PhotoStrip";
import ScallopFrame from "@/components/ui/ScallopFrame";
import type { SiteContent } from "@/content/schema";
import type { PhotoMap } from "@/lib/photos";
import { cn } from "@/lib/utils";

type HomeInvitationContentProps = {
  content: SiteContent;
  photos: PhotoMap;
};

/** Seconds between collage pieces — each one is tossed onto the table in turn. */
const STAGGER = 0.16;

const PRINT_SHADOW = "shadow-[0_22px_30px_-18px_rgba(0,0,0,0.65)]";

/**
 * Hero collage revealed after the envelope intro, laid over a soft-focus
 * photo: a black-and-white booth strip, a postcard with a stamp, a bordered
 * print and a lace save-the-date heart land one by one, then the countdown.
 */
export default function HomeInvitationContent({ content, photos }: HomeInvitationContentProps) {
  const isThai = content.locale === "th";
  const hs = content.homeShell;

  return (
    <div className="mx-auto w-full max-w-[26rem] sm:max-w-[34rem]">
      <div className="flex items-start">
        <InvitationRevealItem
          delay={0}
          from={{ x: -70, y: -30, rotate: -18, scale: 0.9 }}
          className="relative z-20 w-[27%] shrink-0"
        >
          <PhotoStrip
            photos={[photos["strip-1"], photos["strip-2"], photos["strip-3"]]}
            className={cn("-rotate-[4deg] grayscale", PRINT_SHADOW)}
          />
        </InvitationRevealItem>

        <InvitationRevealItem
          delay={STAGGER}
          from={{ x: 80, y: -20, rotate: 12, scale: 0.9 }}
          className="relative z-10 -ml-[4%] mt-[5%] min-w-0 flex-1"
        >
          <div
            className={cn(
              "relative flex aspect-[3/2] rotate-[3deg] flex-col items-start justify-center rounded-[2px] bg-ivory pl-[9%] pr-[30%]",
              PRINT_SHADOW,
            )}
          >
            <p
              className={cn(
                "text-stone",
                isThai
                  ? "font-thai text-[0.6875rem]"
                  : "font-display text-[0.5625rem] uppercase tracking-[0.22em] sm:text-[0.6875rem]",
              )}
            >
              {hs.postcardEyebrow}
            </p>
            <CoupleScriptMark
              as="h1"
              size="postcard"
              name={content.coupleFriendlyName}
              className="mt-2 items-start text-charcoal"
            />
            <div className="absolute right-[6%] top-[9%] w-[23%] rotate-[5deg]">
              <ScallopFrame
                scallop={7}
                margin={4}
                className="drop-shadow-[0_3px_3px_rgba(31,29,24,0.25)]"
              >
                <PhotoFrame src={photos.stamp} width={400} height={480} />
              </ScallopFrame>
              <svg
                aria-hidden
                viewBox="0 0 60 40"
                fill="none"
                className="absolute -bottom-[34%] -left-[42%] w-[120%] text-charcoal/35"
              >
                <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="0.5" />
                <path
                  d="M30 12c5 -3 9 3 14 0s9 3 14 0M30 20c5 -3 9 3 14 0s9 3 14 0M30 28c5 -3 9 3 14 0s9 3 14 0"
                  stroke="currentColor"
                  strokeWidth="0.7"
                />
              </svg>
            </div>
          </div>
        </InvitationRevealItem>
      </div>

      <div className="relative -mt-[3%] pb-[6%]">
        <InvitationRevealItem
          delay={STAGGER * 2}
          from={{ y: 70, rotate: -10, scale: 0.92 }}
          className="relative z-10 ml-auto w-[72%]"
        >
          <div className={cn("-rotate-[3deg] bg-ivory p-[3.5%] pb-[7%]", PRINT_SHADOW)}>
            <PhotoFrame src={photos.postcard} width={1200} height={800} />
          </div>
        </InvitationRevealItem>

        <InvitationRevealItem
          delay={STAGGER * 3}
          from={{ x: -60, y: 20, rotate: -28, scale: 0.6 }}
          className="absolute left-[1%] top-[26%] z-20 w-[40%]"
        >
          <LaceHeart className="-rotate-[8deg]">
            <p className="font-display text-[clamp(0.875rem,3.8vw,1.25rem)] uppercase leading-[1.1] tracking-[0.06em] [&:lang(th)]:tracking-normal">
              {hs.saveTheDateLabel}
            </p>
            <p className="mt-[0.35em] font-display text-[clamp(0.625rem,2.6vw,0.875rem)] tracking-[0.08em] text-paper/85">
              {hs.saveTheDateNumeric}
            </p>
          </LaceHeart>
        </InvitationRevealItem>
      </div>

      <InvitationRevealItem delay={STAGGER * 4} from={{ y: 30 }} className="mt-[12%] text-center">
        <p
          className={cn(
            "text-paper",
            isThai
              ? "font-thai text-[1.125rem]"
              : "font-display text-[1.375rem] uppercase tracking-[0.14em] sm:text-[1.625rem]",
          )}
        >
          {hs.countdownTitle}
        </p>
        <Countdown
          targetISO={content.weddingDateISO}
          labels={hs.countdownLabels}
          isThai={isThai}
          variant="inline"
          className="mt-4"
        />
      </InvitationRevealItem>

      <InvitationRevealItem delay={STAGGER * 5} from={{ y: 24 }} className="mt-10 flex justify-center">
        <Link
          href={hs.invitationCtaHref}
          className={cn(
            "group inline-flex min-h-11 items-center gap-2 rounded-full border border-paper/45 px-6 text-paper/90 transition-colors duration-200 hover:bg-paper/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-paper/60 focus-visible:ring-offset-2 focus-visible:ring-offset-backdrop",
            isThai ? "font-thai text-sm" : "font-display text-[0.75rem] uppercase tracking-[0.24em]",
          )}
        >
          {hs.invitationCtaLabel}
          <ChevronDown
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5"
            strokeWidth={1.5}
            aria-hidden
          />
        </Link>
      </InvitationRevealItem>
    </div>
  );
}
