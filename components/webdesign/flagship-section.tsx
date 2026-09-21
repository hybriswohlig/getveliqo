import Image from "next/image";
import { CheckList } from "@/components/subpage/check-list";
import { Section } from "@/components/subpage/section";
import { Reveal } from "@/components/ui/reveal";
import { flagship } from "@/content/webdesign";

// Figma frame "flagship-section" (77:105): the headline package with its
// checklist and price on the left and a laptop mockup on the right.
export function FlagshipSection() {
  return (
    <Section
      id="leistungen"
      labelledBy="flagship-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-20"
    >
      <Reveal className="flex flex-col gap-8 lg:flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{flagship.eyebrow}</p>
          <h2
            id="flagship-title"
            className="font-outfit text-[clamp(30px,3.0556vw,44px)] leading-[1.15] font-extrabold text-obsidian"
          >
            {flagship.title}
            <span className="text-volt">.</span>
          </h2>
          <p className="text-[15px] leading-[1.6] text-smoke">{flagship.lead}</p>
        </div>
        <CheckList items={flagship.checklist} />
        <div className="flex flex-wrap items-center gap-7">
          <a
            href={flagship.button.href}
            className="rounded-full bg-volt px-8 py-4 text-[15px] leading-[normal] font-bold whitespace-nowrap text-obsidian"
          >
            {flagship.button.label}
          </a>
          <p className="flex flex-col gap-0.5 leading-[normal]">
            <span className="font-outfit text-[32px] font-extrabold whitespace-nowrap text-obsidian">
              {flagship.price}
            </span>
            <span className="text-[13px] whitespace-nowrap text-smoke">{flagship.priceNote}</span>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="flex items-center gap-4 lg:w-[620px] lg:shrink-0">
        <Image
          src={flagship.image}
          alt=""
          width={1400}
          height={788}
          sizes="(min-width: 1024px) 560px, 100vw"
          className="w-full object-contain lg:h-[440px] lg:w-[560px]"
        />
        <p
          aria-hidden="true"
          className="hidden h-[440px] w-10 items-center justify-center lg:flex"
        >
          <span className="rotate-90 text-[9px] leading-[normal] font-bold whitespace-nowrap text-obsidian">
            {flagship.slogan}
          </span>
        </p>
      </Reveal>
    </Section>
  );
}
