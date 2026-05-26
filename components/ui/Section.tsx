import type { ReactNode } from "react";

import SoftPageBotanical from "@/components/ui/SoftPageBotanical";
import { cn } from "@/lib/utils";

type SectionBackground = "cream" | "ivory" | "transparent";

type SectionProps = {
  className?: string;
  children: ReactNode;
  background?: SectionBackground;
  id?: string;
  /** Subtle corner botanicals for inner invitation pages */
  botanical?: boolean;
};

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-cream/72",
  ivory: "bg-ivory/86",
  transparent: "bg-transparent",
};

export default function Section({
  className,
  children,
  background = "transparent",
  id,
  botanical,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "min-w-0 py-16 md:py-24",
        botanical && "relative overflow-hidden",
        backgroundClasses[background],
        className,
      )}
    >
      {botanical ? (
        <>
          <SoftPageBotanical />
          <div className="relative z-10">{children}</div>
        </>
      ) : (
        children
      )}
    </section>
  );
}
