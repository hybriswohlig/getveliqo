import Image from "next/image";
import { hero } from "@/content/pr-seo-geo";
import { Section } from "./section";

// Figma frame "section-hero" (108:16), 1440×660.
export function HeroSection() {
  return (
    <Section
      id="sichtbarkeit"
      labelledBy="sichtbarkeit-title"
      className="overflow-hidden bg-white"
      innerClassName="flex flex-col gap-14 py-14 lg:min-h-[660px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-10"
    >
      <div className="flex flex-col gap-10 lg:shrink lg:basis-[560px]">
        <div className="flex flex-col gap-5">
          <p className="text-[12px] leading-[normal] font-bold text-signal uppercase">{hero.eyebrow}</p>
          <h1
            id="sichtbarkeit-title"
            className="font-outfit text-[clamp(44px,5vw,72px)] leading-none font-black text-obsidian"
          >
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-[16px] leading-[1.65] text-smoke">{hero.lead}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={hero.primary.href}
            className="rounded-full bg-volt px-8 py-[18px] text-[15px] leading-[normal] font-bold whitespace-nowrap text-obsidian"
          >
            {hero.primary.label}
          </a>
          <a
            href={hero.secondary.href}
            className="rounded-full border border-hairline px-7 py-[18px] text-[15px] leading-[normal] font-medium whitespace-nowrap text-obsidian"
          >
            {hero.secondary.label}
          </a>
        </div>
      </div>

      <div className="relative flex items-center justify-center lg:h-[500px] lg:shrink lg:basis-[680px]">
        <Image
          src="/assets/pr-seo-geo/hero-glow.svg"
          alt=""
          width={740}
          height={640}
          unoptimized
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[640px] w-[740px] max-w-none -translate-x-1/2 -translate-y-1/2 lg:block"
        />
        <Image
          src="/assets/pr-seo-geo/hero-mockup.jpg"
          alt=""
          width={1264}
          height={848}
          priority
          sizes="(min-width: 1024px) 640px, 100vw"
          className="relative aspect-[640/440] w-full rounded-xl object-cover lg:max-w-[640px]"
        />
        {/* Sits just outside the column's right edge, as in the frame */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-full hidden h-[200px] w-5 -translate-y-1/2 items-center justify-center xl:flex"
        >
          <span className="rotate-90 text-[10px] leading-[normal] font-bold whitespace-nowrap text-[#adadb5]">
            {hero.slogan}
          </span>
        </span>
      </div>
    </Section>
  );
}
