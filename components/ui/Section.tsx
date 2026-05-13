import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionBackground = "cream" | "ivory" | "transparent";

type SectionProps = {
  className?: string;
  children: ReactNode;
  background?: SectionBackground;
  id?: string;
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
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("min-w-0 py-16 md:py-24", backgroundClasses[background], className)}>
      {children}
    </section>
  );
}
