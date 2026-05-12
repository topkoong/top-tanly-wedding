import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex min-h-11 max-w-full items-center justify-center whitespace-normal rounded-full bg-rose-deep px-6 py-3 text-center text-body font-medium tracking-[0.02em] text-cream shadow-[0_10px_24px_-14px_rgba(45,38,32,0.35)] transition-colors duration-200 hover:bg-charcoal hover:text-cream active:bg-charcoal active:text-cream focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2",
  secondary:
    "inline-flex min-h-11 max-w-full items-center justify-center whitespace-normal rounded-full border border-charcoal/35 bg-cream px-6 py-3 text-center text-body font-medium text-charcoal transition-colors duration-200 hover:border-charcoal hover:bg-charcoal/8 hover:text-charcoal active:border-charcoal active:bg-charcoal/12 active:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  tertiary:
    "inline-flex min-h-11 max-w-full items-center gap-1 whitespace-normal text-body text-rose-deep underline decoration-rose-deep/40 underline-offset-4 transition-colors duration-200 hover:text-charcoal hover:decoration-charcoal/60 focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2",
};

export default function Button({
  className,
  children,
  href,
  variant = "primary",
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
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cn("text-body", variantClasses[variant], className)}
    >
      {children}
    </Link>
  );
}
