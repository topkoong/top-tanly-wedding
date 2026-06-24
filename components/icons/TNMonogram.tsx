import { cn } from "@/lib/utils";

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Elegant intertwined calligraphic "NT" monogram (initials of
 * Narueporn & Theerut), rendered with Allura (the same script as the couple
 * name) as SVG text so the whole site shares a single calligraphic voice.
 * Sized by height; width follows the viewBox. The wide viewBox leaves room for
 * the script flourishes so they are not clipped.
 */
export default function TNMonogram({
  className,
  title = "N & T monogram",
}: TNMonogramProps) {
  const script = "var(--font-allura), 'Allura', cursive";

  return (
    <svg
      viewBox="-28 98 198 163"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-auto", className)}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="0"
        y="200"
        fill="currentColor"
        style={{ fontFamily: script, fontWeight: 400, fontSize: "118px" }}
      >
        <tspan>N</tspan>
        <tspan dx="-22">T</tspan>
      </text>
    </svg>
  );
}
