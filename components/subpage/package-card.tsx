import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import type { PackageItem } from "@/content/subpage";
import { cn } from "@/lib/utils";

// The white card with a pink-to-lime bar on top ("pricing-card" in Figma).
// Cards in a row stretch to the same height. The arrow is the card's link
// and stretches over the whole card, so the card is clickable anywhere.
export function PackageCard({ item, titleClassName }: { item: PackageItem; titleClassName: string }) {
  return (
    <li className="relative flex flex-col gap-6 overflow-hidden rounded-[20px] border border-hairline bg-white p-8 transition-colors hover:border-obsidian/30">
      <span
        aria-hidden="true"
        className="absolute inset-x-[-1px] top-[-1px] h-2 bg-gradient-to-r from-[#ff8faa] to-[#e8f5a0]"
      />
      <div className="flex flex-col gap-3">
        <p className="text-[13px] leading-[normal] font-bold text-smoke uppercase">{item.eyebrow}</p>
        <h3 className={cn("font-outfit font-extrabold text-obsidian", titleClassName, "leading-[normal]")}>
          {item.title}
          {item.unit ? (
            <>
              {" "}
              <span className="text-[14px] font-normal text-smoke">{item.unit}</span>
            </>
          ) : null}
        </h3>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-outfit text-[18px] leading-[normal] font-semibold text-obsidian">{item.heading}</p>
        <p className="text-[14px] leading-[1.5] text-smoke">{item.description}</p>
      </div>
      <a
        href={item.href}
        aria-label={`${item.heading}: ${item.linkLabel}`}
        className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-hairline text-obsidian transition-colors after:absolute after:inset-0 hover:border-volt hover:bg-volt"
      >
        <ArrowRightIcon className="size-4" />
      </a>
    </li>
  );
}
