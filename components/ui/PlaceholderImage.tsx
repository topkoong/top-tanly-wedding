import type { CSSProperties } from "react";

import TNMonogram from "@/components/icons/TNMonogram";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  className?: string;
  alt: string;
  caption?: string;
  category?: string;
  tone?: "ivory" | "champagne" | "rose";
  rounded?: "xl" | "2xl";
  showBorder?: boolean;
  watermarkOpacityClass?: string;
  captionClassName?: string;
  categoryClassName?: string;
  aspectRatio?: "4/5" | "3/2" | "16/9" | "1/1";
};

export default function PlaceholderImage({
  className,
  alt,
  caption,
  category,
  tone = "ivory",
  rounded = "xl",
  showBorder = true,
  watermarkOpacityClass = "text-charcoal/8",
  captionClassName,
  categoryClassName,
  aspectRatio = "4/5",
}: PlaceholderImageProps) {
  const style = { aspectRatio } as CSSProperties;
  const toneClass =
    tone === "rose"
      ? "from-rose/35 via-champagne/25 to-ivory"
      : tone === "champagne"
        ? "from-champagne/50 via-ivory to-rose/10"
        : "from-ivory via-champagne/35 to-rose/15";

  return (
    <div
      className={cn(
        "relative min-h-0 min-w-0 w-full max-w-full overflow-hidden bg-gradient-to-br",
        rounded === "2xl" ? "rounded-2xl" : "rounded-xl",
        showBorder ? "border border-charcoal/10" : "",
        toneClass,
        className,
      )}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div className={cn("absolute inset-0 flex items-center justify-center", watermarkOpacityClass)}>
        <TNMonogram className="h-24 w-24" title="" />
      </div>
      {caption ? (
        <p
          className={cn(
            "absolute bottom-3 left-3 text-body-s text-stone/70",
            captionClassName,
          )}
        >
          {caption}
        </p>
      ) : null}
      {category ? (
        <p
          className={cn(
            "absolute right-3 top-3 text-xs uppercase tracking-wider text-stone/60",
            categoryClassName,
          )}
        >
          {category}
        </p>
      ) : null}
    </div>
  );
}
