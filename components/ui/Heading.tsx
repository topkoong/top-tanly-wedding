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
        <p className="max-w-full font-sans text-eyebrow uppercase tracking-[0.12em] text-stone sm:tracking-[0.15em]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "max-w-full text-pretty break-words text-charcoal",
          headingStyles[as],
          headingClassName,
        )}
      >
        {children}
      </Tag>
    </div>
  );
}
