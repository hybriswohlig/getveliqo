import { Check } from "lucide-react";
import { metrics } from "@/content/pr-seo-geo";
import { Section } from "./section";

// Figma frame "section-metrics" (108:98), 1440×588.
export function MetricsSection() {
  return (
    <Section
      labelledBy="metrics-title"
      className="border-y border-hairline bg-white"
      innerClassName="flex flex-col gap-12 py-16 lg:flex-row lg:items-center lg:gap-20 lg:py-20"
    >
      <div className="flex flex-col gap-8 lg:flex-1">
        <div className="flex flex-col gap-3">
          <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{metrics.eyebrow}</p>
          <h2
            id="metrics-title"
            className="font-outfit text-[clamp(30px,3.0556vw,44px)] leading-[1.15] font-extrabold text-obsidian"
          >
            {metrics.title}
          </h2>
          <p className="text-[15px] leading-[1.6] text-smoke">{metrics.lead}</p>
        </div>
        <ul className="flex flex-col gap-3.5">
          {metrics.checklist.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-volt text-obsidian"
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-[15px] leading-[normal] font-medium text-obsidian">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10 lg:w-[620px] lg:shrink-0">
        <ul className="grid gap-8 sm:grid-cols-2">
          {metrics.stats.map((stat) => (
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
          <p className="text-[13px] leading-[normal] font-bold text-signal">{metrics.trend.eyebrow}</p>
          <p className="text-[14px] leading-[1.5] text-smoke">{metrics.trend.text}</p>
        </div>
      </div>
    </Section>
  );
}
