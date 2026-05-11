"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { NavigationItem } from "@/content/schema";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  className?: string;
  items: NavigationItem[];
  languageSwitchLabel: string;
  languageSwitchHref: string;
  openLabel: string;
  closeLabel: string;
};

export default function MobileMenu({
  className,
  items,
  languageSwitchHref,
  languageSwitchLabel,
  openLabel,
  closeLabel,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("md:hidden", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-charcoal/20 px-3 py-3 text-charcoal transition-colors duration-200 hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        aria-label={isOpen ? closeLabel : openLabel}
      >
        {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>

      <div
        id="mobile-menu-panel"
        className={cn(
          "absolute left-0 right-0 top-full border-t border-charcoal/10 bg-cream/98 px-5 py-6 shadow-[0_14px_32px_-14px_rgba(45,38,32,0.24)] backdrop-blur-lg transition-all",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="min-h-11 rounded-full px-4 py-3 text-body text-charcoal transition-colors duration-200 hover:bg-charcoal/8 hover:text-rose-deep focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={languageSwitchHref}
            onClick={() => setIsOpen(false)}
            className="min-h-11 rounded-full border border-charcoal/30 px-4 py-3 text-body font-medium tracking-wide text-charcoal transition-colors duration-200 hover:border-charcoal/50 hover:bg-charcoal/8 hover:text-charcoal focus-visible:ring-2 focus-visible:ring-charcoal/40 focus-visible:ring-offset-1"
          >
            {languageSwitchLabel}
          </Link>
        </nav>
      </div>
    </div>
  );
}
