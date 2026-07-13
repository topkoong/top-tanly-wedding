"use client";

import { Calendar, CircleHelp, Home, Images, MapPin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getSiteContent } from "@/content/site";
import type { BottomNavIconKey } from "@/content/schema";
import { useLocale } from "@/lib/hooks/useLocale";
import { getLocalizedPathname } from "@/lib/locale";
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
  const locale = useLocale();
  const site = getSiteContent(locale);
  const effectivePathname = getLocalizedPathname(pathname, locale);

  return (
    <nav
      aria-label={locale === "th" ? "เมนูล่าง" : "Bottom navigation"}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-olive pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_32px_-12px_rgba(45,38,32,0.28)] lg:hidden"
    >
      <div className="mx-auto flex min-h-[3.35rem] max-w-lg min-w-0 items-stretch justify-between gap-0.5 px-1.5">
        {site.bottomNav.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isRouteActive(effectivePathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-11 min-w-0 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-0.5 py-1.5 text-[0.62rem] font-medium leading-tight text-cream/80 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/80 focus-visible:ring-offset-2 focus-visible:ring-offset-olive sm:text-[0.7rem]",
                active && "bg-white/10 text-cream",
              )}
            >
              <Icon
                className={cn(
                  "h-[1.125rem] w-[1.125rem] shrink-0 sm:h-5 sm:w-5",
                  active ? "text-cream" : "text-cream/85",
                )}
                strokeWidth={active ? 2.25 : 1.75}
                aria-hidden
              />
              <span className="max-w-full truncate text-center">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
