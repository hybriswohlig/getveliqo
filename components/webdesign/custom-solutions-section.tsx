import Image from "next/image";
import { Section } from "@/components/subpage/section";
import { Reveal } from "@/components/ui/reveal";
import { solutions } from "@/content/webdesign";

// Figma frame "custom-solutions-section" (77:152): two columns of bullets,
// the second with the post-launch service package and its price.
export function CustomSolutionsSection() {
  return (
    <Section
      labelledBy="solutions-title"
      className="bg-white"
      innerClassName="grid gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20"
    >
      <h2 id="solutions-title" className="sr-only">
        Individuelle Lösungen und Post-Launch Betreuung
      </h2>
      {solutions.map((solution, index) => (
        <Reveal key={solution.title} delay={index * 0.08} className="flex flex-col gap-5">
          <h3 className="font-outfit text-[22px] leading-[normal] font-bold text-obsidian">{solution.title}</h3>
          <p className="text-[14px] leading-[1.6] text-smoke">{solution.lead}</p>
          <ul className="flex flex-col gap-3">
            {solution.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5">
                <Image src="/assets/webdesign/icons/dot.svg" alt="" width={8} height={8} unoptimized />
                <span className="text-[14px] leading-[normal] text-obsidian">{bullet}</span>
              </li>
            ))}
          </ul>
          {"offer" in solution && solution.offer ? (
            <div className="flex flex-wrap items-center gap-5">
              <a
                href={solution.offer.button.href}
                className="rounded-full bg-obsidian px-6 py-3 text-[13px] leading-[normal] font-semibold whitespace-nowrap text-white"
              >
                {solution.offer.button.label}
              </a>
              <p className="flex flex-col gap-0.5 leading-[normal]">
                <span className="font-outfit text-[26px] font-extrabold whitespace-nowrap text-obsidian">
                  {solution.offer.price}
                </span>
                <span className="text-[13px] whitespace-nowrap text-smoke">{solution.offer.note}</span>
              </p>
            </div>
          ) : null}
        </Reveal>
      ))}
    </Section>
  );
}
