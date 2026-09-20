import Image from "next/image";
import { hero } from "@/content/webdesign";

// Figma frame "section-hero" (77:8) minus its header, 1440×660.
// The artwork column bleeds to the right edge; only the left side is padded.
export function HeroSection() {
  return (
    <section className="bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 px-5 py-[clamp(48px,5.5556vw,80px)] md:px-10 lg:flex-row lg:items-center lg:gap-10 lg:pr-0 lg:pl-[5.5556vw] frame:h-[660px] frame:pl-20">
        <div className="flex flex-col gap-10 lg:w-[38.2353%]">
          <div className="flex flex-col gap-5">
            <p className="font-geist text-[12px] leading-geist font-bold text-glow-pink uppercase">{hero.eyebrow}</p>
            <h1 className="font-outfit text-[clamp(44px,5vw,72px)] leading-none font-black text-carbon">
              {hero.title}
            </h1>
            <p className="font-geist text-[16px] leading-[1.65] text-ash">{hero.lead}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={hero.primary.href}
              className="rounded-full bg-lime-web px-8 py-[18px] font-geist text-[15px] leading-geist font-bold whitespace-nowrap text-carbon"
            >
              {hero.primary.label}
            </a>
            <a
              href={hero.secondary.href}
              className="rounded-full border border-[#cecece] px-7 py-[18px] font-geist text-[15px] leading-geist font-medium whitespace-nowrap text-carbon"
            >
              {hero.secondary.label}
            </a>
          </div>
        </div>

        <div className="lg:w-[54.4118%]">
          <div className="relative aspect-[740/500]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-1/2 h-[80%] w-[67.5676%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-lime-web/[0.18] blur-[60px]"
            />
            <div className="absolute inset-0 overflow-hidden rounded-[12px] lg:inset-x-[4.0541%] lg:inset-y-[2%]">
              <Image
                src={hero.image}
                alt="Laptop und Smartphone mit einer von VELYQO gestalteten Website"
                fill
                priority
                sizes="(min-width: 1440px) 680px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <p
              aria-hidden="true"
              className="absolute top-1/2 right-1 -translate-y-1/2 font-geist text-[10px] leading-geist font-bold tracking-normal text-[#adadb5] uppercase [writing-mode:vertical-rl] max-lg:hidden"
            >
              {hero.slogan}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
