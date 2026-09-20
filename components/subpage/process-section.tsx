import type { ProcessContent } from "@/content/subpage";
import { cn } from "@/lib/utils";
import { Section } from "./section";

// Figma frame "process-section": a dark band with five numbered steps. In the
// frame the step captions are single lines wider than their 200px columns and
// run into the next step; here the columns share the width and the captions
// wrap. The Webdesign frame is shorter ("compact").
export function ProcessSection({
  id,
  content,
  compact = false,
}: {
  id: string;
  content: ProcessContent;
  compact?: boolean;
}) {
  return (
    <Section
      id={id}
      labelledBy={`${id}-title`}
      className="bg-obsidian"
      innerClassName={cn("flex flex-col py-16", compact ? "gap-9 lg:py-14" : "gap-12 lg:py-20")}
    >
      <div className="flex flex-col gap-1.5 leading-[normal]">
        <p className="text-[11px] font-bold text-volt uppercase">{content.eyebrow}</p>
        <h2 id={`${id}-title`} className="font-outfit text-[26px] font-extrabold text-white">
          {content.title}
        </h2>
      </div>
      <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
        {content.steps.map((step, index) => (
          <li key={step.number} className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="font-outfit text-[32px] leading-[normal] font-extrabold text-white opacity-15"
              >
                {step.number}
              </span>
              {index < content.steps.length - 1 ? (
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
