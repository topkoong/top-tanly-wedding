"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import CoupleScriptMark from "@/components/brand/CoupleScriptMark";
import Button from "@/components/ui/Button";
import Countdown from "@/components/ui/Countdown";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import { InvitationRevealItem } from "@/components/ui/InvitationReveal";
import type { SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type HomeInvitationContentProps = {
  content: SiteContent;
};

const invitationFieldLabelClass = (isThai: boolean) =>
  cn(
    "text-[1.125rem] uppercase tracking-[0.12em] text-charcoal sm:text-body-l sm:tracking-[0.1em]",
    isThai
      ? "font-thai font-semibold normal-case tracking-normal sm:tracking-normal"
      : "font-display font-medium",
  );

const venueValueClass = (isThai: boolean) =>
  cn(
    "text-[clamp(1.25rem,4.5vw,2.125rem)] font-medium leading-tight text-charcoal",
    isThai ? "font-thai" : "font-display",
  );

const timeSummaryClass = (isThai: boolean) =>
  cn(
    "text-[0.8125rem] leading-relaxed text-charcoal sm:text-body-s",
    isThai ? "font-thai" : "font-display",
  );

type InvitationDateDisplayProps = {
  date: SiteContent["homeShell"]["invitationDateDisplay"];
  isThai: boolean;
};

/** Stacked date block — weekday eyebrow, day/month + year on one line. */
function InvitationDateDisplay({ date, isThai }: InvitationDateDisplayProps) {
  return (
    <div className="mx-auto w-full space-y-1.5 text-center">
      <p
        className={cn(
          "text-body font-medium uppercase tracking-[0.2em] text-charcoal sm:text-body-l sm:tracking-[0.18em]",
          isThai ? "font-thai normal-case tracking-normal sm:tracking-normal" : "font-display",
        )}
      >
        {date.weekday}
      </p>
      <p
        className={cn(
          "whitespace-nowrap text-[1.125rem] font-medium leading-snug text-charcoal sm:text-[clamp(1.25rem,5vw,2.125rem)]",
          isThai ? "font-thai" : "font-display",
        )}
      >
        {date.dayMonth}
        {"\u00a0"}
        {date.year}
      </p>
    </div>
  );
}

/**
 * Hero invitation copy revealed in a staggered cascade after the sealed
 * envelope opens — matching digital wedding-invite reel pacing.
 */
export default function HomeInvitationContent({ content }: HomeInvitationContentProps) {
  const isThai = content.locale === "th";

  return (
    <div className="flex flex-col items-center text-center">
      <InvitationRevealItem delay={0}>
        <p
          className={cn(
            "max-w-xs text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-charcoal/[0.65] sm:text-body-s sm:tracking-[0.2em]",
            !isThai && "font-display",
          )}
        >
          {content.homeShell.invitationLeadIn}
        </p>
      </InvitationRevealItem>

      <InvitationRevealItem delay={0.08}>
        <CoupleScriptMark
          as="h1"
          size="hero"
          name={content.coupleFriendlyName}
          className="mt-1"
        />
      </InvitationRevealItem>

      <InvitationRevealItem delay={0.16}>
        <p
          className={cn(
            "mt-5 max-w-md text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-stone sm:text-body-s",
            !isThai && "font-display",
          )}
        >
          {content.homeShell.invitationInviteLine}
        </p>
      </InvitationRevealItem>

      <InvitationRevealItem delay={0.24} className="mt-9 w-full max-w-md">
        <Countdown
          targetISO={content.weddingDateISO}
          labels={content.homeShell.countdownLabels}
          isThai={isThai}
        />
      </InvitationRevealItem>

      <InvitationRevealItem delay={0.34} className="relative mx-auto mt-10 w-full max-w-md">
        <div className="rounded-[1.75rem] border border-charcoal/10 bg-cream px-6 py-9 shadow-[0_26px_60px_-32px_rgba(31,29,24,0.2)] sm:rounded-[2rem] sm:px-8">
          <p
            className={cn(
              "text-body-s uppercase tracking-[0.14em] text-charcoal",
              isThai ? "font-thai" : "font-display",
            )}
          >
            {content.homeShell.invitationCardEyebrow}
          </p>

          <div className="mt-7 space-y-3">
            <p className={invitationFieldLabelClass(isThai)}>{content.homeShell.dateHeading}</p>
            <InvitationDateDisplay date={content.homeShell.invitationDateDisplay} isThai={isThai} />
            <p className={timeSummaryClass(isThai)}>{content.homeShell.invitationTimeSummary}</p>
          </div>

          <div className="my-7">
            <InvitationBotanicalRule />
          </div>

          <div className="space-y-2">
            <p className={invitationFieldLabelClass(isThai)}>{content.homeShell.venueHeading}</p>
            <Link
              href={content.homeShell.invitationVenueHref}
              className={cn(
                venueValueClass(isThai),
                "inline-block transition-colors duration-200 hover:text-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
              )}
            >
              {content.homeShell.locationLabel}
            </Link>
            <p
              className={cn(
                "pt-0.5 text-body leading-relaxed text-charcoal",
                isThai ? "font-thai" : "font-display",
              )}
            >
              {content.homeShell.locationDetail}
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              href={content.homeShell.invitationCtaHref}
              endIcon={<ChevronDown className="h-4 w-4 shrink-0 opacity-95" strokeWidth={2} aria-hidden />}
            >
              {content.homeShell.invitationCtaLabel}
            </Button>
          </div>
        </div>
      </InvitationRevealItem>
    </div>
  );
}
