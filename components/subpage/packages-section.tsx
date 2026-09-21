import type { PackageItem } from "@/content/subpage";
import { cn } from "@/lib/utils";
import { PackageCard } from "./package-card";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";

// A heading over a row of three package cards: the "section-services" and
// "section-pricing" frames. Priced cards use the larger 38px title. The
// Webdesign pricing frame has tighter vertical spacing ("tight").
export function PackagesSection({
  id,
  eyebrow,
  title,
  items,
  titleClassName = "text-[32px]",
  tight = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  items: PackageItem[];
  titleClassName?: string;
  tight?: boolean;
}) {
  return (
    <Section
      id={id}
      labelledBy={`${id}-title`}
      className="bg-mist"
      innerClassName={cn("flex flex-col py-16 lg:py-24", tight ? "gap-8 lg:pt-20 lg:pb-16" : "gap-12")}
    >
      <SectionHeading
        id={`${id}-title`}
        eyebrow={eyebrow}
        title={title}
        titleClassName="text-[clamp(30px,3.0556vw,44px)]"
      />
      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <PackageCard key={item.heading} item={item} titleClassName={titleClassName} index={index} />
        ))}
      </ul>
    </Section>
  );
}
