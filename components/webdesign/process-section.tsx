import { process } from "@/content/webdesign";
import { cn } from "@/lib/utils";

// Figma frame "section-process" (77:191), 1440×409.
export function ProcessSection() {
  return (
    <section id="prozess" aria-labelledby="prozess-titel" className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 py-[clamp(56px,5.5556vw,80px)] md:px-10 lg:flex-row lg:items-stretch lg:px-[5.5556vw] frame:px-20">
        <div className="flex flex-col gap-3 pb-10 lg:w-[280px] lg:shrink-0 lg:pb-0">
          <p className="font-geist text-[11px] leading-geist font-bold text-glow-pink uppercase">{process.eyebrow}</p>
          <h2
            id="prozess-titel"
            className="font-outfit text-[clamp(28px,2.6389vw,38px)] leading-[1.1] font-extrabold text-carbon"
          >
            {process.title}
          </h2>
        </div>

        <ol className="grid gap-10 sm:grid-cols-2 lg:flex lg:flex-1 lg:gap-0">
          {process.steps.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-4 lg:flex-1 lg:border-l lg:border-line lg:px-6 lg:last:border-r"
            >
              <div className="flex flex-col gap-4">
                <span className="font-outfit text-[38px] leading-outfit font-black text-carbon">{step.number}</span>
                <span
                  aria-hidden="true"
                  className={cn("h-0.5 w-full", step.accent ? "bg-glow-pink" : "bg-line")}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-outfit text-[15px] leading-outfit font-bold text-carbon">{step.title}</h3>
                <p className="font-geist text-[13px] leading-[1.55] text-ash">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
