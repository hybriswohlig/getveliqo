import Image from "next/image";
import { ArrowCircle } from "@/components/ui/arrow-circle";
import { ButtonLink } from "@/components/ui/button";
import { Glow } from "@/components/ui/glow";
import { Tag } from "@/components/ui/tag";
import { intro } from "@/content/home";

// Figma frame "website-frame" (21:4), 1440×920.
export function IntroSection() {
  const { headline } = intro;

  return (
    <section
      id="ueber-uns"
      data-liquid-glass-surface="light"
      aria-labelledby="ueber-uns-title"
      className="relative overflow-hidden bg-paper text-graphite"
    >
      <div className="relative mx-auto max-w-[1440px] frame:min-h-[920px]">
        <Glow x={350} y={420} width={750} height={650} color="var(--color-lime)" opacity={0.3098} blur={80} />
        <Glow x={80} y={280} width={400} height={400} color="var(--color-glow-orange)" opacity={0.0314} blur={60} />

        <div className="relative flex flex-col gap-14 px-5 pt-[clamp(96px,11.9444vw,172px)] pb-20 md:px-10 lg:flex-row lg:items-start lg:justify-between lg:px-[5.5556vw] frame:px-20">
          <div className="flex flex-col gap-12 lg:w-[53.125%]">
            <div className="relative h-[100px]" aria-hidden="true">
              <Image
                src="/assets/icons/circle-check.svg"
                alt=""
                width={260}
                height={260}
                unoptimized
                className="absolute top-[-100px] left-[-50px] size-[260px] max-w-none"
              />
            </div>
            <h2
              id="ueber-uns-title"
              className="flex flex-col gap-3 text-[clamp(44px,5.5556vw,80px)] leading-[1.05] font-black"
            >
              <span>{headline.top}</span>
              <span className="flex items-center gap-[0.25em]">
                <span>{headline.before}</span>
                <ArrowCircle className="size-[0.9em] border-graphite" iconClassName="size-[0.4em]" />
                <span>{headline.after}</span>
              </span>
            </h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {intro.indicators.map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="size-2 rounded-full border-[1.5px] border-graphite bg-lime" aria-hidden="true" />
                  <span className="text-[12px] leading-auto font-bold text-steel">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-9 lg:w-[42.1875%] lg:pt-[120px]">
            <div className="flex flex-col gap-6 leading-[1.6]">
              <p className="text-[16px] font-medium">{intro.lead}</p>
              <p className="text-[15px] text-steel">{intro.body}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={intro.primary.href} variant="dark">
                {intro.primary.label}
              </ButtonLink>
              <ButtonLink href={intro.secondary.href} variant="outline">
                {intro.secondary.label}
              </ButtonLink>
            </div>
            <hr className="-mb-px border-rule-light" />
            <Tag tone="light">{intro.tag}</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}
