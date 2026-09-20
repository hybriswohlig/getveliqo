import { Target, Wand2, Zap } from "lucide-react";
import { philosophy } from "@/content/webdesign";

// Figma draws these three at 16px with a 2px stroke, i.e. 3 on lucide's own
// 24px grid. Its SVG export drops paths, so they come from lucide directly.
const icons = { target: Target, wand: Wand2, zap: Zap };

// Figma frame "section-intro" (77:39), 1440×691.
export function PhilosophySection() {
  return (
    <section id="leistungen" aria-labelledby="philosophie-titel" className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-16 px-5 py-[clamp(64px,6.6667vw,96px)] md:px-10 lg:px-[5.5556vw] frame:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          <div className="flex flex-col gap-4 lg:w-[42.1875%]">
            <p className="font-geist text-[13px] leading-geist font-bold text-glow-pink uppercase">
              {philosophy.eyebrow}
            </p>
            <h2
              id="philosophie-titel"
              className="font-outfit text-[clamp(32px,3.6111vw,52px)] leading-[1.1] font-extrabold text-carbon"
            >
              {philosophy.title}
            </h2>
          </div>
          <p className="font-geist text-[16px] leading-[1.6] text-ash lg:w-[37.5%]">{philosophy.lead}</p>
        </div>

        <hr className="border-line" />

        {/*
          box-content + basis-0 reproduces Figma auto-layout, which hands every
          column the same *text* width and adds the 40px gutters on top.
        */}
        <ul className="flex flex-col gap-10 lg:flex-row lg:gap-0">
          {philosophy.benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <li
                key={benefit.title}
                className="relative flex flex-col items-start gap-6 lg:box-content lg:flex-1 lg:basis-0 lg:px-10 lg:first:pl-0 lg:last:pr-0"
              >
                {index === 1 && (
                  <>
                    {/* The rules overshoot the text by design: 240px from the top */}
                    <span aria-hidden="true" className="absolute top-0 left-0 h-[240px] w-px bg-line max-lg:hidden" />
                    <span aria-hidden="true" className="absolute top-0 right-0 h-[240px] w-px bg-line max-lg:hidden" />
                  </>
                )}
                <span className="flex size-10 items-center justify-center rounded-[10px] border border-line bg-mist text-carbon">
                  <Icon size={16} strokeWidth={3} aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="font-outfit text-[20px] leading-outfit font-bold text-carbon">{benefit.title}</h3>
                  <p className="font-geist text-[14px] leading-[1.6] text-ash">{benefit.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
