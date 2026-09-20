import { Check } from "lucide-react";
import Image from "next/image";
import { flagship } from "@/content/webdesign";

// Figma frame "flagship-section" (77:105), 1440×676. Its check glyph exports
// empty, so it comes from lucide at the size Figma draws it (12px).
export function FlagshipSection() {
  return (
    <section id="showcase" aria-labelledby="flagship-titel" className="border-y border-line bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-[clamp(56px,5.5556vw,80px)] md:px-10 lg:flex-row lg:gap-20 lg:px-[5.5556vw] frame:px-20">
        <div className="flex w-full flex-col gap-8 lg:flex-1">
          <div className="flex flex-col gap-3">
            <p className="font-geist text-[13px] leading-geist font-bold text-glow-pink uppercase">
              {flagship.eyebrow}
            </p>
            <h2
              id="flagship-titel"
              className="font-outfit text-[clamp(28px,3.0556vw,44px)] leading-[1.15] font-extrabold text-carbon"
            >
              {flagship.title}
              <span className="text-lime-web">.</span>
            </h2>
            <p className="font-geist text-[15px] leading-[1.6] text-ash">{flagship.lead}</p>
          </div>

          <ul className="flex flex-col gap-3.5">
            {flagship.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-lime-web text-carbon">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="font-geist text-[15px] leading-geist font-medium text-carbon">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-7">
            <a
              href={flagship.cta.href}
              className="rounded-full bg-lime-web px-8 py-4 font-geist text-[15px] leading-geist font-bold whitespace-nowrap text-carbon"
            >
              {flagship.cta.label}
            </a>
            <p className="flex flex-col gap-0.5">
              <span className="font-outfit text-[clamp(26px,2.2222vw,32px)] leading-outfit font-extrabold text-carbon">
                {flagship.price}
              </span>
              <span className="font-geist text-[13px] leading-geist text-ash">{flagship.priceNote}</span>
            </p>
          </div>
        </div>

        <div className="flex w-full items-center gap-4 lg:w-[43.0556%]">
          <div className="relative aspect-[560/440] flex-1">
            <Image
              src={flagship.image}
              alt="Laptop und Smartphone mit dem Onlineshop „fynd.“"
              fill
              sizes="(min-width: 1440px) 560px, (min-width: 1024px) 43vw, 100vw"
              className="object-contain"
            />
          </div>
          <p
            aria-hidden="true"
            className="font-geist text-[9px] leading-geist font-bold text-carbon uppercase [writing-mode:vertical-rl] max-lg:hidden"
          >
            {flagship.slogan}
          </p>
        </div>
      </div>
    </section>
  );
}
