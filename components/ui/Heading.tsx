import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  as?: HeadingLevel;
  className?: string;
  headingClassName?: string;
  children: ReactNode;
  eyebrow?: string;
};

const headingStyles: Record<HeadingLevel, string> = {
  h1: "font-display text-h1",
  h2: "font-display text-h2",
  h3: "font-display text-h3",
  h4: "font-display text-xl",
};

/** Primary headings lean olive for invitation hierarchy; H4 stays neutral for denser UI. */
const headingTone: Record<HeadingLevel, string> = {
  h1: "text-olive-deep",
  h2: "text-olive-deep",
  h3: "text-olive-deep",
  h4: "text-charcoal",
};

export default function Heading({
  as = "h2",
  className,
  headingClassName,
  children,
  eyebrow,
}: HeadingProps) {
  const Tag = as as ElementType;

  return (
    <div className={cn("min-w-0 space-y-3", className)}>
      {eyebrow ? (
        <p className="max-w-full font-display text-eyebrow uppercase tracking-[0.08em] text-olive-deep sm:tracking-[0.11em]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "max-w-full text-pretty break-words",
          headingTone[as],
          headingStyles[as],
          headingClassName,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
