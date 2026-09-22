import Image from "next/image";
import { ArrowCircle } from "@/components/ui/arrow-circle";
import { Glow } from "@/components/ui/glow";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { communication } from "@/content/home";

// Figma frame "communication-section" (19:4), 1440×1120.
export function CommunicationSection() {
  const { headline, paragraphs, tag } = communication;

  return (
    <section
      id="one-voice"
      data-liquid-glass-surface="dark"
      aria-labelledby="one-voice-title"
      className="relative overflow-hidden bg-ink"
    >
      <div className="relative mx-auto max-w-[1440px] frame:min-h-[1120px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-40px] left-[40px] flex flex-col gap-5 font-outfit text-[100px] leading-[1.26] font-black tracking-[-2px] whitespace-nowrap text-white/[0.02] uppercase opacity-35 select-none"
        >
          {Array.from({ length: 7 }, (_, row) => (
            <p key={row} className="flex gap-10">
              <span>VELYQO</span>
              <span>CHANGE</span>
            </p>
          ))}
        </div>
        <Glow x={100} y={150} width={600} height={500} color="var(--color-glow-pink)" opacity={0.102} blur={60} />
        <Glow x={800} y={300} width={600} height={600} color="var(--color-lime)" opacity={0.0784} blur={70} />


        <div className="relative flex flex-col items-center gap-12 px-5 pt-[clamp(96px,11.9444vw,172px)] pb-[60px] md:px-10 lg:gap-20 lg:px-[5.5556vw] frame:px-20">
          <Reveal className="w-full">
            <h2
              id="one-voice-title"
              className="flex w-full flex-col items-center gap-2 text-center font-outfit text-[clamp(28px,5vw,72px)] leading-[1.1] font-black tracking-[-0.03em] text-white max-lg:hyphens-auto"
            >
              <span>{headline.top}</span>
              <span className="flex items-center justify-center gap-[0.2778em]">
                <span>{headline.before}</span>
                <ArrowCircle className="size-[0.8889em] border-lime text-lime" iconClassName="size-[0.3333em]" />
                <span className="text-lime">{headline.accent}</span>
              </span>
              <span>{headline.bottom}</span>
            </h2>
          </Reveal>

          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* Fills the "3D graphic composition" slot of the Figma frame (600×380). */}
            <Reveal className="w-full lg:w-auto lg:flex-1">
              <Image
                src="/assets/home/communication/laptop-dashboard.png"
                alt="Laptop mit einem Dashboard, das Website-Traffic, Leads, Conversions und Umsatz zeigt"
                width={891}
                height={550}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="h-auto w-full"
              />
            </Reveal>
            <Reveal
              delay={0.1}
              className="flex w-full flex-col gap-6 text-[16px] leading-[1.6] text-white/70 lg:w-auto lg:flex-1"
            >
              {paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal className="relative px-5 pt-5 pb-10 md:px-10 lg:px-[5.5556vw] frame:px-20">
          <Tag tone="dark">{tag}</Tag>
        </Reveal>
      </div>
    </section>
  );
}
