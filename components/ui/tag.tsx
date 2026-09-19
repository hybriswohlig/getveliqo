import { cn } from "@/lib/utils";

// Small version label ("ONE VOICE 1.0"), in a dark and a light variant.
export function Tag({ tone, children }: { tone: "dark" | "light"; children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "inline-flex w-fit rounded-[4px] px-3 py-1.5 text-[10px] leading-auto whitespace-nowrap uppercase",
        tone === "dark" ? "bg-white/[0.06] font-medium text-white/70" : "bg-graphite/[0.06] font-bold text-steel",
      )}
    >
      {children}
    </p>
  );
}
