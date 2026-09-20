import { processStrip } from "@/content/webdesign";

// Figma frame "process-section" (86:98), 1440×290. The dark summary of the
// same five steps that the section below (77:191) spells out.
export function ProcessStrip() {
  return (
    <section aria-labelledby="prozess-kurz-titel" className="bg-carbon">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-9 px-5 py-14 md:px-10 lg:px-[5.5556vw] frame:px-20">
        <div className="flex flex-col gap-1.5">
          <p className="font-geist text-[11px] leading-geist font-bold text-lime-web uppercase">
            {processStrip.eyebrow}
          </p>
          <h2 id="prozess-kurz-titel" className="font-outfit text-[26px] leading-outfit font-extrabold text-white">
            {processStrip.title}
          </h2>
        </div>

        <ol className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-0">
          {processStrip.steps.map((step, index) => (
            <li key={step.number} className="flex flex-col gap-2.5 lg:w-[200px]">
              <div className="flex items-center gap-2.5">
                <span className="font-outfit text-[32px] leading-outfit font-extrabold text-white opacity-15">
                  {step.number}
                </span>
                {index < processStrip.steps.length - 1 && (
                  <span className="h-0.5 w-8 bg-lime-web max-lg:hidden" aria-hidden="true" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-geist text-[13px] leading-geist font-bold text-white">{step.title}</h3>
                <p className="font-geist text-[12px] leading-[1.5] text-[#9ca3af]">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
