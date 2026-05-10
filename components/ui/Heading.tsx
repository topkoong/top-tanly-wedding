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
    <div className={cn("space-y-3", className)}>
      {eyebrow ? (
        <p className="font-sans text-eyebrow uppercase tracking-[0.15em] text-stone">
          {eyebrow}
        </p>
      ) : null}
      <Tag className={cn("text-charcoal", headingStyles[as], headingClassName)}>
        {children}
      </Tag>
    </div>
  );
}
