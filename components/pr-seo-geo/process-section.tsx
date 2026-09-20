import { method } from "@/content/pr-seo-geo";
import { Section } from "./section";

// Figma frame "process-section" (108:138), 1440×350. In the frame the step
// captions are single lines wider than their 200px columns and run into the
// next step; here the columns share the width and the captions wrap.
export function ProcessSection() {
  return (
    <Section
      id="prozess"
      labelledBy="prozess-title"
      className="bg-obsidian"
      innerClassName="flex flex-col gap-12 py-16 lg:py-20"
    >
      <div className="flex flex-col gap-1.5 leading-[normal]">
        <p className="text-[11px] font-bold text-volt uppercase">{method.eyebrow}</p>
        <h2 id="prozess-title" className="font-outfit text-[26px] font-extrabold text-white">
          {method.title}
        </h2>
      </div>
      <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {method.steps.map((step, index) => (
          <li key={step.number} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="font-outfit text-[32px] leading-[normal] font-extrabold text-white opacity-15"
              >
                {step.number}
              </span>
              {index < method.steps.length - 1 ? (
                <span aria-hidden="true" className="h-0.5 w-8 bg-volt" />
              ) : null}
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[13px] leading-[normal] font-bold text-white">{step.title}</h3>
              <p className="text-[12px] leading-[1.5] text-[#9ca3af]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
