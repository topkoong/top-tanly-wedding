import Button from "@/components/ui/Button";
import type { MapEmbedContent } from "@/content/schema";
import { cn } from "@/lib/utils";

type VenueMapEmbedProps = MapEmbedContent & {
  isThai: boolean;
  compact?: boolean;
  className?: string;
};

export default function VenueMapEmbed({
  venueName,
  embedUrl,
  buttonUrl,
  buttonLabel,
  helperText,
  isThai,
  compact = false,
  className,
}: VenueMapEmbedProps) {
  return (
    <div className={cn("min-w-0 space-y-3", className)}>
      <div className="overflow-hidden rounded-xl border border-charcoal/10 bg-ivory shadow-[0_8px_28px_-18px_rgba(31,29,24,0.1)]">
        <iframe
          src={embedUrl}
          title={venueName}
          className={cn(
            "block w-full max-w-full",
            compact ? "h-[200px] sm:h-[240px]" : "h-[260px] sm:h-[320px] lg:h-[min(520px,70vh)]",
          )}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <Button href={buttonUrl} variant="secondary" className="w-full">
        {buttonLabel}
      </Button>
      <p
        className={cn(
          "max-w-full text-center text-xs leading-relaxed text-stone",
          isThai && "font-thai",
        )}
      >
        {helperText}
      </p>
    </div>
  );
}
