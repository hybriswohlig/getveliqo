import { pricing } from "@/content/pr-seo-geo";
import { PackageCard } from "./package-card";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

// Figma frame "section-pricing" (108:177), 1440×672.
export function PricingSection() {
  return (
    <Section
      id="modelle"
      labelledBy="modelle-title"
      className="bg-mist"
      innerClassName="flex flex-col gap-12 py-16 lg:py-24"
    >
      <SectionHeading
        id="modelle-title"
        eyebrow={pricing.eyebrow}
        title={pricing.title}
        titleClassName="text-[clamp(30px,3.0556vw,44px)]"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {pricing.items.map((item) => (
          <PackageCard key={item.eyebrow} item={item} titleClassName="text-[38px]" />
        ))}
      </ul>
    </Section>
  );
}
