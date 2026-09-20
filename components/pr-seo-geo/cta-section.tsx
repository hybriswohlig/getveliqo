import Image from "next/image";
import { cta } from "@/content/pr-seo-geo";
import { Section } from "./section";

// Figma frame "cta-footer-wrapper" (108:236) with "section-cta" (108:237),
// a 320px card on a darkened photo.
export function CtaSection() {
  return (
    <Section id="kontakt" labelledBy="kontakt-title" className="bg-white">
      <div className="relative isolate flex flex-col justify-between gap-10 overflow-hidden rounded-3xl px-6 py-12 md:px-10 lg:min-h-[320px] lg:flex-row lg:items-center lg:py-14 lg:pr-0 lg:pl-16">
        <Image
          src="/assets/pr-seo-geo/cta-background.jpg"
          alt=""
          fill
          sizes="1280px"
          aria-hidden="true"
          className="-z-20 rounded-3xl object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-3xl bg-obsidian/92" />

        <div className="flex flex-col gap-5 lg:w-[540px] lg:shrink">
          <p className="text-[11px] leading-[normal] font-bold text-volt uppercase">{cta.eyebrow}</p>
          <h2
            id="kontakt-title"
            className="font-outfit text-[clamp(30px,2.7778vw,40px)] leading-[1.15] font-extrabold text-white"
          >
            {cta.title}
          </h2>
          <p className="text-[14px] leading-[1.55] text-[#a9a9b2]">{cta.lead}</p>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-center lg:pr-12">
          <a
            href={cta.button.href}
            className="flex items-center gap-2.5 rounded-full bg-volt px-9 py-4 text-[15px] leading-[normal] font-bold whitespace-nowrap text-obsidian"
          >
            {cta.button.label}
            <Image src="/assets/pr-seo-geo/icons/arrow-right-cta.svg" alt="" width={14} height={14} unoptimized />
          </a>
          <p className="flex items-center gap-1.5 text-[12px] leading-[normal] text-[#a9a9b2]">
            <Image src="/assets/pr-seo-geo/icons/dot.svg" alt="" width={6} height={6} unoptimized />
            {cta.note}
          </p>
        </div>
      </div>
    </Section>
  );
}
