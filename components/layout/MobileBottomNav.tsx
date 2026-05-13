"use client";

import { Calendar, CircleHelp, Home, Images, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getSiteContent } from "@/content/site";
import type { BottomNavIconKey } from "@/content/schema";
import { getLocaleFromPathname } from "@/lib/locale";
import { isRouteActive } from "@/lib/nav";
import { cn } from "@/lib/utils";

const iconMap: Record<BottomNavIconKey, typeof Home> = {
  home: Home,
  calendar: Calendar,
  mapPin: MapPin,
  images: Images,
  circleHelp: CircleHelp,
};

export default function MobileBottomNav() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const site = getSiteContent(locale);

  return (
    <nav
      aria-label={locale === "th" ? "เมนูล่าง" : "Bottom navigation"}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-charcoal/10 bg-cream/97 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_-8px_28px_-16px_rgba(45,38,32,0.1)] backdrop-blur-md lg:hidden"
    >
      <div className="mx-auto flex min-h-[3.25rem] max-w-lg min-w-0 items-stretch justify-between gap-0.5 px-2">
        {site.bottomNav.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isRouteActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[0.65rem] font-medium leading-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:text-xs",
                active ? "text-olive-deep" : "text-stone hover:text-charcoal",
              )}
            >
              <Icon className="h-[1.125rem] w-[1.125rem] shrink-0 sm:h-5 sm:w-5" strokeWidth={active ? 2 : 1.5} aria-hidden />
              <span className="max-w-full truncate text-center">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
