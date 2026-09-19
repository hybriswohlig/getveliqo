// The arrow-right glyph from the Figma file (drawn there at 14, 24 and 32px,
// always with a 2px round-capped stroke), coloured via currentColor.
export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.9992 12H19.0008M12 19.0008L19.0008 12L12 4.9992"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
