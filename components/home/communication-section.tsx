import Image from "next/image";
import { ArrowCircle } from "@/components/ui/arrow-circle";
import { Glow } from "@/components/ui/glow";
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

        <div className="absolute top-[400px] left-[28px] hidden flex-col items-center gap-5 lg:flex">
          <span className="h-[60px] w-px bg-white/15" />
          {/* TODO: LinkedIn profile URL */}
          <a href="#" className="flex h-[42px] w-[11px] items-center justify-center">
            <span className="-rotate-90 text-[9px] leading-auto font-semibold whitespace-nowrap text-white/25 uppercase">
              LinkedIn
            </span>
          </a>
          <span className="h-[60px] w-px bg-white/15" />
        </div>

        <div className="relative flex flex-col items-center gap-12 px-5 pt-[clamp(96px,11.9444vw,172px)] pb-[60px] md:px-10 lg:gap-20 lg:px-[5.5556vw] frame:px-20">
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

          <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:gap-20">
            {/* The 3D graphic composition is still a placeholder in Figma. */}
            <div className="flex h-[240px] w-full flex-col items-center justify-center rounded-[16px] border-[1.5px] border-dashed border-white/10 bg-white/[0.04] md:h-[380px] lg:w-auto lg:flex-1">
              <Image src="/assets/icons/image-placeholder.svg" alt="" width={40} height={40} unoptimized />
            </div>
            <div className="flex w-full flex-col gap-6 text-[16px] leading-[1.6] text-white/70 lg:w-auto lg:flex-1">
              {paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative px-5 pt-5 pb-10 md:px-10 lg:px-[5.5556vw] frame:px-20">
          <Tag tone="dark">{tag}</Tag>
        </div>
      </div>
    </section>
  );
}
