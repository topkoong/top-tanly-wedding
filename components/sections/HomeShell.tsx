import { ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import DecorativeDivider from "@/components/ui/DecorativeDivider";
import Heading from "@/components/ui/Heading";
import InvitationBotanicalRule from "@/components/ui/InvitationBotanicalRule";
import HomeInvitationContent from "@/components/sections/HomeInvitationContent";
import InvitationEnvelope from "@/components/sections/InvitationEnvelope";
import QuickActionCard from "@/components/ui/QuickActionCard";
import Section from "@/components/ui/Section";
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
          "relative flex min-h-[calc(100svh-4rem)] flex-col bg-cream pt-14 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-24",
        )}
      >
        <Container className="relative z-10 my-auto w-full">
          <InvitationEnvelope
            variant="hero"
            openLabel={content.homeShell.invitationOpenLabel}
            coupleName={content.coupleFriendlyName}
            className="mx-auto max-w-2xl"
          >
            <HomeInvitationContent content={content} />
          </InvitationEnvelope>
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
          <div className="min-w-0 max-w-full space-y-5 rounded-[1.75rem] border border-charcoal/10 bg-ivory p-6 shadow-[0_16px_40px_-28px_rgba(31,29,24,0.12)] sm:p-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <InvitationBotanicalRule className="max-w-[160px]" />
              <Heading
                as="h2"
                headingClassName={
                  isThai ? "font-thai text-h3 leading-[1.35]" : "font-display text-h3"
                }
              >
                {content.homeShell.welcomeTitle}
              </Heading>
            </div>
            <p
              className={cn(
                "max-w-full text-body leading-relaxed text-stone",
                isThai ? "font-thai" : "font-display",
              )}
            >
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
