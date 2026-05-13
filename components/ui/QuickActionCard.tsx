import { Calendar, ChevronRight, CircleHelp, Images, MapPin } from "lucide-react";
import Link from "next/link";

import type { QuickActionIconKey } from "@/content/schema";
import { cn } from "@/lib/utils";

const icons: Record<QuickActionIconKey, typeof Calendar> = {
  calendar: Calendar,
  mapPin: MapPin,
  images: Images,
  circleHelp: CircleHelp,
};

type QuickActionCardProps = {
  className?: string;
  href: string;
  title: string;
  subtitle: string;
  icon: QuickActionIconKey;
  isThai?: boolean;
};

export default function QuickActionCard({
  className,
  href,
  title,
  subtitle,
  icon,
  isThai,
}: QuickActionCardProps) {
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      className={cn(
        "group flex min-w-0 max-w-full items-center gap-4 rounded-3xl border border-charcoal/10 bg-ivory/90 px-4 py-4 shadow-[0_10px_32px_-18px_rgba(45,38,32,0.12)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:border-olive/25 hover:bg-cream hover:shadow-[0_14px_36px_-18px_rgba(86,94,63,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream motion-reduce:transform-none motion-reduce:transition-none",
        className,
      )}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive-soft text-olive-deep">
        <Icon className="h-5 w-5" aria-hidden strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span
          className={cn(
            "block text-body-l font-medium leading-snug text-charcoal",
            isThai ? "font-thai" : "font-display",
          )}
        >
          {title}
        </span>
        <span className={cn("mt-0.5 block text-body-s leading-relaxed text-stone", isThai && "font-thai")}>
          {subtitle}
        </span>
      </span>
      <ChevronRight
        className="h-5 w-5 shrink-0 text-stone/50 transition-colors duration-200 group-hover:text-olive-deep"
        aria-hidden
        strokeWidth={1.75}
      />
    </Link>
  );
}
