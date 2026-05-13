import { ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import BotanicalBackdrop from "@/components/ui/BotanicalBackdrop";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import FadeIn from "@/components/ui/FadeIn";
import Heading from "@/components/ui/Heading";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Section from "@/components/ui/Section";
import TNMonogram from "@/components/icons/TNMonogram";
import type { SiteContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type HomeShellProps = {
  content: SiteContent;
};

export default function HomeShell({ content }: HomeShellProps) {
  const isThai = content.locale === "th";

  return (
    <>
      <Section
        background="cream"
        className={cn(
          "relative overflow-hidden bg-gradient-to-b from-cream via-cream to-olive-soft/25 py-16 md:py-24",
        )}
      >
        <BotanicalBackdrop />
        <Container className="relative z-10">
          <FadeIn className="mx-auto max-w-lg">
            <div className="flex flex-col items-center text-center">
              <TNMonogram className="h-14 w-14 text-olive/40" title="" />
              <p className="mt-6 max-w-xs text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-stone sm:text-body-s sm:tracking-[0.2em]">
                {content.homeShell.invitationLeadIn}
              </p>
              <Heading
                as="h1"
                headingClassName={cn(
                  "mt-5 font-display text-display-xl leading-[1.02] text-charcoal",
                  !isThai && "uppercase tracking-[0.08em]",
                )}
              >
                {content.coupleFriendlyName}
              </Heading>
              <p className="mt-3 max-w-full font-display text-body-l text-stone">{content.homeShell.formalNames}</p>
              <p className="mt-5 max-w-md text-center text-[0.6875rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-stone sm:text-body-s sm:tracking-[0.14em]">
                {content.homeShell.invitationInviteLine}
              </p>

              <div className="mt-10 w-full max-w-full rounded-[1.75rem] border border-charcoal/[0.08] bg-white px-6 py-8 shadow-[0_28px_64px_-32px_rgba(45,38,32,0.35)] sm:rounded-[2rem] sm:px-8">
                <p className="text-body-s uppercase tracking-[0.14em] text-olive-deep">
                  {content.homeShell.invitationCardEyebrow}
                </p>
                <p className={cn("mt-3 font-display text-h2 text-charcoal", isThai && "font-thai")}>
                  {content.homeShell.dateLabel}
                </p>
                <div className="my-4">
                  <InvitationBotanicalRule />
                </div>
                <p className={cn("text-body leading-relaxed text-stone", isThai && "font-thai")}>
                  {content.homeShell.invitationProgrammeSummary}
                </p>
                <div className="mx-auto my-5 h-px max-w-xs bg-gold/50" />
                <p
                  className={cn(
                    "font-display text-body-l text-charcoal",
                    !isThai && "text-sm uppercase tracking-[0.12em] text-stone sm:text-body-l",
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
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section background="transparent" className="scroll-mt-4 bg-cream py-14 md:py-20" id="quick-actions">
        <Container>
          <div className="mx-auto min-w-0 max-w-3xl">
            <div className="grid min-w-0 grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {content.homeShell.quickActionCards.map((card) => (
                <QuickActionCard
                  key={card.href}
                  href={card.href}
                  title={card.title}
                  subtitle={card.subtitle}
                  icon={card.icon}
                  isThai={isThai}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <DecorativeDivider />

      <Section background="transparent" className="bg-cream pt-0">
        <Container size="narrow">
          <div className="min-w-0 max-w-full space-y-5 rounded-[1.75rem] border border-charcoal/[0.08] bg-white p-6 shadow-[0_16px_40px_-28px_rgba(45,38,32,0.18)] sm:p-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <InvitationBotanicalRule className="max-w-[160px] text-olive/30" />
              <Heading
                as="h2"
                headingClassName={
                  isThai ? "font-thai text-h3 leading-[1.35] text-charcoal" : "font-display text-h3 text-charcoal"
                }
              >
                {content.homeShell.welcomeTitle}
              </Heading>
            </div>
            <p className={cn("max-w-full text-body leading-relaxed text-stone", isThai && "font-thai")}>
              {content.homeShell.welcomeMessage}
            </p>
            <Button href={content.linePageHref} variant="tertiary" className="max-w-full text-left sm:text-center">
              {content.homeShell.supportLineLabel}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
