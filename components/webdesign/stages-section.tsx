import { Section } from "@/components/subpage/section";
import { stages } from "@/content/webdesign";
import { cn } from "@/lib/utils";

// Figma frame "section-process" (77:191): a headline column and five numbered
// stages separated by vertical rules.
export function StagesSection() {
  return (
    <Section
      id="prozess"
      labelledBy="prozess-title"
      className="border-b border-hairline bg-white"
      innerClassName="flex flex-col py-16 lg:flex-row lg:py-20"
    >
      <div className="flex flex-col gap-3 pb-10 lg:w-[280px] lg:shrink-0 lg:pb-0">
        <p className="text-[11px] leading-[normal] font-bold whitespace-nowrap text-signal uppercase">
          {stages.eyebrow}
        </p>
        <h2
          id="prozess-title"
          className="font-outfit text-[clamp(30px,2.6389vw,38px)] leading-[1.1] font-extrabold text-obsidian"
        >
          {stages.title}
        </h2>
      </div>
      <ol className="flex flex-col lg:flex-1 lg:flex-row">
        {stages.steps.map((step) => (
          <li
            key={step.number}
            className="flex flex-col gap-4 border-t border-hairline py-8 lg:flex-1 lg:border-t-0 lg:border-l lg:px-6 lg:py-0"
          >
            <div className="flex flex-col gap-4">
              <p className="font-outfit text-[38px] leading-[normal] font-black whitespace-nowrap text-obsidian">
                {step.number}
              </p>
              <span
                aria-hidden="true"
                className={cn("h-0.5 w-full", step.accent ? "bg-signal" : "bg-hairline")}
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-outfit text-[15px] leading-[normal] font-bold text-obsidian">{step.title}</h3>
              <p className="text-[13px] leading-[1.55] text-smoke">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
