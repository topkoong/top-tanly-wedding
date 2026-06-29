import { cn } from "@/lib/utils";

type CoupleScriptMarkSize = "hero" | "envelope" | "footer";

type CoupleScriptMarkProps = {
  /** e.g. `Tan & Top` from `content.coupleFriendlyName` */
  name: string;
  className?: string;
  size?: CoupleScriptMarkSize;
  /** Render as the page heading (hero only). */
  as?: "div" | "h1";
  /** Set when a parent already exposes the couple name. */
  decorative?: boolean;
};

const sizeClasses: Record<CoupleScriptMarkSize, string> = {
  hero: "text-[clamp(2.85rem,11.5vw,4.35rem)]",
  envelope: "text-[clamp(2.35rem,9.5vw,3.4rem)]",
  footer: "text-[clamp(1.9rem,7vw,2.65rem)]",
};

/** Temporary plain script couple name — single line of Le Jour Script text. */
export default function CoupleScriptMark({
  name,
  className,
  size = "hero",
  as: Tag = "div",
  decorative,
}: CoupleScriptMarkProps) {
  return (
    <Tag
      aria-hidden={decorative || undefined}
      className={cn("font-script leading-none text-charcoal", sizeClasses[size], className)}
    >
      {name}
    </Tag>
  );
}
