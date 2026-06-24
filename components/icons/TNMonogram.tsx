import { cn } from "@/lib/utils";

type TNMonogramProps = {
  className?: string;
  title?: string;
};

/**
 * Elegant intertwined calligraphic "NT" monogram (initials of
 * Narueporn & Theerut), rendered with Pinyon Script as SVG text so it scales
 * cleanly at any height. Sized by height; width follows the viewBox. The wide
 * viewBox leaves room for the script flourishes so they are not clipped.
 */
export default function TNMonogram({
  className,
  title = "N & T monogram",
}: TNMonogramProps) {
  const script = "var(--font-pinyon), 'Pinyon Script', cursive";

  return (
    <svg
      viewBox="0 0 170 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-auto", className)}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <text
        x="85"
        y="64"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{ fontFamily: script, fontWeight: 400, fontSize: "118px" }}
      >
        <tspan>N</tspan>
        <tspan dx="-30">T</tspan>
      </text>
    </svg>
  );
}
