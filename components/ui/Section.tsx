import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackground = "cream" | "ivory" | "transparent";

type SectionProps = {
  className?: string;
  children: ReactNode;
  background?: SectionBackground;
};

const backgroundClasses: Record<SectionBackground, string> = {
  cream: "bg-cream",
  ivory: "bg-ivory",
  transparent: "bg-transparent",
};

export default function Section({
  className,
  children,
  background = "transparent",
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", backgroundClasses[background], className)}>
      {children}
    </section>
  );
}
