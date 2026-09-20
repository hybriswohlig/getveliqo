import { services } from "@/content/pr-seo-geo";
import { PackageCard } from "./package-card";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

// Figma frame "section-services" (108:60), 1440×664.
export function ServicesSection() {
  return (
    <Section
      id="leistungen"
      labelledBy="leistungen-title"
      className="bg-mist"
      innerClassName="flex flex-col gap-12 py-16 lg:py-24"
    >
      <SectionHeading
        id="leistungen-title"
        eyebrow={services.eyebrow}
        title={services.title}
        titleClassName="text-[clamp(30px,3.0556vw,44px)]"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {services.items.map((item) => (
          <PackageCard key={item.eyebrow} item={item} titleClassName="text-[32px]" />
        ))}
      </ul>
    </Section>
  );
}
