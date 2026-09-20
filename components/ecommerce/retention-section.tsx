import { PackageCard } from "@/components/subpage/package-card";
import { Section } from "@/components/subpage/section";
import { SectionHeading } from "@/components/subpage/section-heading";
import { retention } from "@/content/ecommerce";

// Figma frame "section-retention" (120:4): two wide cards (one-off setup and
// monthly growth) over three feature boxes.
export function RetentionSection() {
  return (
    <Section
      labelledBy="retention-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:py-24"
    >
      <SectionHeading
        id="retention-title"
        eyebrow={retention.eyebrow}
        title={retention.title}
        titleClassName="text-[clamp(30px,3.0556vw,44px)]"
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {retention.cards.map((card) => (
          <PackageCard key={card.eyebrow} item={card} titleClassName="text-[38px]" />
        ))}
      </ul>
      <ul className="grid gap-6 md:grid-cols-3">
        {retention.features.map((feature) => (
          <li key={feature.eyebrow} className="flex flex-col gap-3 rounded-xl bg-mist p-6">
            <p className="text-[13px] leading-[normal] font-bold text-signal">{feature.eyebrow}</p>
            <h3 className="font-outfit text-[22px] leading-[normal] font-extrabold text-obsidian">{feature.title}</h3>
            <p className="text-[14px] leading-[1.5] text-smoke">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
