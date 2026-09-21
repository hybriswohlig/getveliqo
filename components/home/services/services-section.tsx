import { LogoMark } from "@/components/brand/logo-mark";
import { Glow } from "@/components/ui/glow";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/home";
import { ServiceCard } from "./service-card";

// Figma frame "velyqo-services" (21:61), 1440×1000.
export function ServicesSection() {
  return (
    <section
      id="services"
      data-liquid-glass-surface="dark"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-ink"
    >
      <div className="relative mx-auto max-w-[1440px] frame:min-h-[1000px]">
        <Glow x={100} y={150} width={600} height={500} color="var(--color-glow-pink)" opacity={0.0706} blur={60} />
        <Glow x={800} y={300} width={600} height={600} color="var(--color-lime)" opacity={0.0588} blur={70} />

        <div className="relative flex flex-col gap-4 px-5 pt-[clamp(96px,11.4583vw,165px)] pb-10 md:px-10 lg:px-[5.5556vw] frame:px-20">
          <span
            aria-hidden="true"
            className="absolute top-[calc(100%-61px)] left-[-40px] size-20 rounded-full bg-lime max-md:hidden"
          />
          <LogoMark
            tone="dark"
            size={120}
            className="absolute right-20 bottom-[41px] size-[120px] opacity-[0.12] max-lg:hidden"
          />
          <Reveal>
            <p className="text-[14px] leading-auto font-bold text-white/70">{services.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08} className="flex items-center gap-4 lg:gap-6">
            <LogoMark tone="dark" size={64} className="size-10 opacity-90 lg:size-16" />
            <h2
              id="services-title"
              className="text-[clamp(32px,3.8889vw,56px)] leading-auto font-black text-white"
            >
              {services.title}
            </h2>
          </Reveal>
        </div>

        <ul className="group/list relative flex snap-x snap-mandatory items-center gap-6 overflow-x-auto scroll-px-5 px-5 pb-16 md:scroll-px-10 md:px-10 lg:scroll-px-[5.5556vw] lg:px-[5.5556vw] xl:justify-center xl:overflow-visible xl:px-0 frame:justify-start frame:pr-[230px] frame:pl-[213px]">
          {services.items.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </ul>

        <Reveal className="relative px-5 pb-20">
          <p className="text-center text-[16px] leading-auto font-medium text-white/70">{services.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
