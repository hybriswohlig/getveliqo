import Image from "next/image";
import { intro } from "@/content/pr-seo-geo";
import { Section } from "./section";

// Figma frame "section-intro" (108:33), 1440×713.
export function IntroSection() {
  return (
    <Section
      labelledBy="intro-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:gap-16 lg:py-24"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="flex flex-col gap-4 lg:w-[48.4375%]">
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{intro.eyebrow}</p>
          <h2
            id="intro-title"
            className="font-outfit text-[clamp(34px,3.6111vw,52px)] leading-[1.1] font-extrabold text-obsidian"
          >
            {intro.title}
          </h2>
        </div>
        <p className="text-[16px] leading-[1.6] text-smoke lg:w-[40.625%]">{intro.lead}</p>
      </div>

      <hr className="border-hairline" />

      <ul className="grid gap-10 md:grid-cols-3">
        {intro.benefits.map((benefit) => (
          <li key={benefit.title} className="flex flex-col gap-6">
            <span className="flex size-10 items-center justify-center rounded-[10px] border border-hairline bg-mist">
              <Image src={benefit.icon} alt="" width={16} height={16} unoptimized />
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="font-outfit text-[20px] leading-[normal] font-bold text-obsidian">{benefit.title}</h3>
              <p className="text-[14px] leading-[1.6] text-smoke">{benefit.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
