import { cn } from "@/lib/utils";

/**
 * Minimal centred hairline with a small diamond node — quiet invitation
 * divider for inside cards. No floral motifs (minimal theme).
 */
export default function InvitationBotanicalRule({ className }: { className?: string }) {
  return (
    <svg
      className={cn("mx-auto h-3 w-full max-w-[200px] text-charcoal/35", className)}
      viewBox="0 0 200 12"
      fill="none"
      aria-hidden
    >
      <path d="M10 6h78M112 6h78" stroke="currentColor" strokeWidth={0.8} strokeLinecap="round" />
      <path d="M100 2.5l3.5 3.5-3.5 3.5-3.5-3.5z" fill="currentColor" opacity={0.7} />
    </svg>
  );
}
