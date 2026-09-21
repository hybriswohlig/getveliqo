import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import { Reveal } from "@/components/ui/reveal";
import type { PackageItem } from "@/content/subpage";
import { cn } from "@/lib/utils";

// The white card with a pink-to-lime bar on top ("pricing-card" in Figma).
// Cards in a row stretch to the same height.
export function PackageCard({
  item,
  titleClassName,
  index = 0,
}: {
  item: PackageItem;
  titleClassName: string;
  index?: number;
}) {
  return (
    <Reveal
      as="li"
      delay={index * 0.08}
      className="relative flex flex-col gap-6 overflow-hidden rounded-[20px] border border-hairline bg-white p-8"
    >
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
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-hairline text-obsidian"
      >
        <ArrowRightIcon className="size-4" />
      </span>
    </Reveal>
  );
}
