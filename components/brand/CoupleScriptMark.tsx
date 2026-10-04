import { perandory } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type CoupleScriptMarkSize = "hero" | "envelope" | "postcard" | "footer";

type CoupleScriptMarkProps = {
  /** e.g. `Narueporn and Theerut` from `content.coupleFriendlyName` */
  name: string;
  className?: string;
  size?: CoupleScriptMarkSize;
  /** Render as the page heading (hero only). */
  as?: "div" | "h1";
  /** Set when a parent already exposes the couple name. */
  decorative?: boolean;
};

const sizeClasses: Record<CoupleScriptMarkSize, string> = {
  hero: "text-[clamp(2.75rem,11vw,4.75rem)] tracking-[0.05em]",
  envelope: "text-[clamp(2.25rem,9vw,3.5rem)] tracking-[0.04em]",
  postcard: "text-[clamp(1.35rem,6vw,2.25rem)] tracking-[0.04em]",
  footer: "text-[clamp(1.85rem,7vw,2.75rem)] tracking-[0.04em]",
};

function parseCoupleFriendlyName(name: string): { first: string; second: string } {
  const parts = name
    .split(/\s*(?:\+|&|and|และ)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);
  return { first: parts[0] ?? name, second: parts[1] ?? "" };
}

/** Invitation-style stacked couple name in Perandory Semi-Condensed. */
export default function CoupleScriptMark({
  name,
  className,
  size = "hero",
  as: Tag = "div",
  decorative,
}: CoupleScriptMarkProps) {
  const { first, second } = parseCoupleFriendlyName(name);
  const sizes = sizeClasses[size];
  const isThai = /[\u0E00-\u0E7F]/.test(name);

  return (
    <Tag
      aria-hidden={decorative || undefined}
      className={cn(
        isThai ? "font-thai" : perandory.className,
        "flex flex-col items-center leading-none text-charcoal",
        isThai ? "tracking-normal" : "uppercase",
        sizes,
        isThai && "leading-[1.35] tracking-normal",
        className,
      )}
    >
      <span className={cn("block", isThai ? "leading-[1.15]" : "leading-none")}>{first}</span>
      {second ? (
        <span className={cn("block", isThai ? "mt-[0.12em] leading-[1.15]" : "mt-[0.02em] leading-none")}>
          {second}
        </span>
      ) : null}
    </Tag>
  );
}
