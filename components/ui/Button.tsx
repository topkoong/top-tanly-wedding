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
    "bg-rose-deep text-cream hover:bg-charcoal hover:text-cream active:bg-charcoal active:text-cream focus-visible:ring-2 focus-visible:ring-rose-deep focus-visible:ring-offset-2 transition-colors duration-200 rounded-full px-6 py-3 font-medium tracking-wide inline-flex items-center justify-center",
  secondary:
    "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:border-charcoal hover:text-cream active:bg-charcoal active:text-cream focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 transition-colors duration-200 rounded-full px-6 py-3 font-medium inline-flex items-center justify-center",
  tertiary:
    "text-rose-deep underline underline-offset-4 decoration-rose-deep/40 hover:text-charcoal hover:decoration-charcoal/60 transition-colors duration-200 inline-flex items-center gap-1",
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
