import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  /** Optional icon after label (e.g. chevron for invitation CTAs). */
  endIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex min-h-11 max-w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-charcoal px-6 py-3 text-center text-body-s font-medium uppercase tracking-[0.14em] text-cream shadow-[0_10px_26px_-16px_rgba(31,29,24,0.5)] transition-colors duration-200 hover:bg-olive-deep active:bg-olive-deep focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  secondary:
    "inline-flex min-h-11 max-w-full items-center justify-center whitespace-normal rounded-full border border-charcoal/30 bg-transparent px-6 py-3 text-center text-body-s font-medium uppercase tracking-[0.14em] text-charcoal transition-colors duration-200 hover:border-charcoal/60 hover:bg-charcoal/[0.04] active:bg-charcoal/[0.06] focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  tertiary:
    "inline-flex min-h-11 max-w-full items-center gap-1 whitespace-normal text-body text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors duration-200 hover:text-stone hover:decoration-charcoal/60 focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
};

export default function Button({
  className,
  children,
  href,
  variant = "primary",
  endIcon,
}: ButtonProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("text-body", variantClasses[variant], className)}
      >
        {children}
        {endIcon}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("text-body", variantClasses[variant], className)}
    >
      {children}
      {endIcon}
    </Link>
  );
}
