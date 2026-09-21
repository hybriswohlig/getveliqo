import Image from "next/image";
import type { IntroContent } from "@/content/subpage";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { Section } from "./section";

// Figma frame "section-intro", 1440×691 to 713: a split headline, a rule and
// three benefits. The Webdesign frame separates the benefits with vertical
// rules instead of gaps ("divided").
export function IntroSection({
  content,
  leftClassName = "lg:w-[48.4375%]",
  rightClassName = "lg:w-[40.625%]",
  divided = false,
}: {
  content: IntroContent;
  leftClassName?: string;
  rightClassName?: string;
  divided?: boolean;
}) {
  return (
    <Section
      labelledBy="intro-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:gap-16 lg:py-24"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <Reveal className={cn("flex flex-col gap-4", leftClassName)}>
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{content.eyebrow}</p>
          <h2
            id="intro-title"
            className="font-outfit text-[clamp(34px,3.6111vw,52px)] leading-[1.1] font-extrabold text-obsidian"
          >
            {content.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className={rightClassName}>
          <p className="text-[16px] leading-[1.6] text-smoke">{content.lead}</p>
        </Reveal>
      </div>

      <hr className="border-hairline" />

      <ul className={cn("grid md:grid-cols-3", divided ? "gap-y-10" : "gap-10")}>
        {content.benefits.map((benefit, index) => (
          <Reveal
            as="li"
            key={benefit.title}
            delay={index * 0.08}
            className={cn(
              "flex flex-col gap-6",
              divided && "relative md:px-10 md:first:pl-0 md:last:pr-0",
              // The frame's middle column has a rule on each side; the left
              // one runs 73px past the columns
              divided && index === 1 && "md:border-r md:border-hairline",
            )}
          >
            {divided && index === 1 ? (
              <span
                aria-hidden="true"
                className="absolute top-0 left-[-1px] h-[240px] w-px bg-hairline max-md:hidden"
              />
            ) : null}
            <span className="flex size-10 items-center justify-center rounded-[10px] border border-hairline bg-mist">
              <Image src={benefit.icon} alt="" width={16} height={16} unoptimized />
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit text-[20px] leading-[normal] font-bold text-obsidian">{benefit.title}</h3>
              <p className="text-[14px] leading-[1.6] text-smoke">{benefit.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
