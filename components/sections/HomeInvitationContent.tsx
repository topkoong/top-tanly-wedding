"use client";

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
        <div className="rounded-[1.75rem] border border-charcoal/10 bg-ivory px-6 py-9 shadow-[0_26px_60px_-32px_rgba(31,29,24,0.2)] sm:rounded-[2rem] sm:px-8">
          <p
            className={cn(
              "text-body-s uppercase tracking-[0.14em] text-olive-deep",
              isThai ? "font-thai" : "font-display",
            )}
          >
            {content.homeShell.invitationCardEyebrow}
          </p>
          <p className={cn("mt-3 font-display text-h2 text-olive-deep", isThai && "font-thai")}>
            {content.homeShell.dateLabel}
          </p>
          <div className="my-4">
            <InvitationBotanicalRule />
          </div>
          <p
            className={cn(
              "text-body leading-relaxed text-stone",
              isThai ? "font-thai" : "font-display",
            )}
          >
            {content.homeShell.invitationProgrammeSummary}
          </p>
          <div className="mx-auto my-5 h-px max-w-xs bg-gold/50" />
          <p
            className={cn(
              "font-display text-body-l text-charcoal",
              !isThai && "text-sm uppercase tracking-[0.1em] text-stone sm:text-body-l sm:tracking-[0.12em]",
            )}
          >
            {content.homeShell.locationLabel}
          </p>
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
