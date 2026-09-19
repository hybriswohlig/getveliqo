// A soft ambient light: a blurred ellipse drawn behind section content.
// Coordinates are in the section's 1440px Figma frame.
export function Glow({
  x,
  y,
  width,
  height,
  color,
  opacity,
  blur,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
  blur: number;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute rounded-[50%]"
      style={{
        left: x,
        top: y,
        width,
        height,
        background: `color-mix(in srgb, ${color} ${(opacity * 100).toFixed(2)}%, transparent)`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
