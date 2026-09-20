import type { MetricsContent } from "@/content/subpage";
import { CheckList } from "./check-list";
import { Section } from "./section";

// Figma frame "section-metrics", 1440×588: copy and a checklist on the left,
// two big numbers and a trend note on the right.
export function MetricsSection({ id, content }: { id?: string; content: MetricsContent }) {
  return (
    <Section
      id={id}
      labelledBy="metrics-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-20"
    >
      <div className="flex flex-col gap-8 lg:flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{content.eyebrow}</p>
          <h2
            id="metrics-title"
            className="font-outfit text-[clamp(30px,3.0556vw,44px)] leading-[1.15] font-extrabold text-obsidian"
          >
            {content.title}
          </h2>
          <p className="text-[15px] leading-[1.6] text-smoke">{content.lead}</p>
        </div>
        <CheckList items={content.checklist} />
      </div>

      <div className="flex flex-col gap-10 lg:w-[620px] lg:shrink-0">
        <ul className="grid gap-8 sm:grid-cols-2">
          {content.stats.map((stat) => (
            <li key={stat.label} className="flex flex-col gap-2 leading-[normal]">
              <p className="font-outfit text-[clamp(44px,4.4444vw,64px)] font-black whitespace-nowrap text-obsidian">
                {stat.value}
              </p>
              <p className="text-[14px] font-semibold text-obsidian">{stat.label}</p>
              <p className="text-[12px] text-smoke">{stat.description}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 rounded-xl bg-mist p-6">
          <p className="text-[13px] leading-[normal] font-bold text-signal">{content.trend.eyebrow}</p>
          <p className="text-[14px] leading-[1.5] text-smoke">{content.trend.text}</p>
        </div>
      </div>
    </Section>
  );
}
