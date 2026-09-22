import type { FaqContent } from "@/content/subpage";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "./section";

// Figma frame "section-faq", 1440×959. The frame shows every answer open, so
// they are plain text rather than a collapsible list.
export function FaqSection({ content }: { content: FaqContent }) {
  return (
    <Section
      labelledBy="faq-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:gap-16 lg:py-24"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <Reveal className="flex flex-col gap-4 lg:w-[42.1875%]">
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{content.eyebrow}</p>
          <h2
            id="faq-title"
            className="font-outfit text-[clamp(34px,3.6111vw,52px)] leading-[1.1] font-extrabold text-obsidian"
          >
            {content.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:w-[37.5%]">
          <p className="text-[16px] leading-[1.6] text-smoke">{content.lead}</p>
        </Reveal>
      </div>

      <hr className="border-hairline" />

      <dl className="flex flex-col gap-6">
        {content.items.map((item, index) => (
          <Reveal
            key={item.question}
            delay={index * 0.05}
            className="flex flex-col gap-3 border-b border-hairline pb-6"
          >
            <dt className="font-outfit text-[20px] leading-[normal] font-bold text-obsidian">{item.question}</dt>
            <dd className="text-[14px] leading-[1.6] text-smoke">{item.answer}</dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
