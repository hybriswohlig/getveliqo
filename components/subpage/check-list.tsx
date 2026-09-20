import { Check } from "lucide-react";

// Lime tick circles in front of one-line benefits ("benefit-row" in Figma).
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-volt text-obsidian"
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span className="text-[15px] leading-[normal] font-medium text-obsidian">{item}</span>
        </li>
      ))}
    </ul>
  );
}
