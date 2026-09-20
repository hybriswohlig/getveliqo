import Image from "next/image";
import type { HeroCopy } from "@/content/subpage";
import { cn } from "@/lib/utils";
import { Section } from "./section";

type HeroImage = { src: string; width: number; height: number };

// Figma frame "section-hero", 1440×660 to 680. The three subpages share the
// layout (copy left, artwork right with a glow and a vertical slogan) but
// differ in column widths, artwork size and a few colours, which the page
// passes as classes.
export function HeroSection({
  id,
  copy,
  image,
  glow,
  leftClassName,
  rightClassName,
  imageClassName,
  titleClassName = "text-[clamp(44px,5vw,72px)] leading-none",
  secondaryClassName = "border-hairline",
  sloganClassName = "text-[#adadb5]",
  sloganPositionClassName = "left-full",
  glowOverImage = false,
  innerClassName,
}: {
  id: string;
  copy: HeroCopy;
  image: HeroImage;
  glow: string;
  leftClassName: string;
  rightClassName: string;
  imageClassName: string;
  titleClassName?: string;
  secondaryClassName?: string;
  sloganClassName?: string;
  // Just outside the column's right edge by default
  sloganPositionClassName?: string;
  // The E-Commerce frame stacks its glow above the artwork
  glowOverImage?: boolean;
  innerClassName?: string;
}) {
  const glowImage = (
    <Image
      src={glow}
      alt=""
      width={740}
      height={640}
      unoptimized
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[640px] w-[740px] max-w-none -translate-x-1/2 -translate-y-1/2 lg:block"
    />
  );

  return (
    <Section
      id={id}
      labelledBy={`${id}-title`}
      className="overflow-hidden bg-white"
      innerClassName={cn(
        "flex flex-col gap-14 py-14 lg:min-h-[660px] lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-10",
        innerClassName,
      )}
    >
      <div className={cn("flex flex-col gap-10 lg:shrink", leftClassName)}>
        <div className="flex flex-col gap-5">
          <p className="text-[12px] leading-[normal] font-bold text-signal uppercase">{copy.eyebrow}</p>
          <h1 id={`${id}-title`} className={cn("font-outfit font-black text-obsidian", titleClassName)}>
            {copy.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-[16px] leading-[1.65] text-smoke">{copy.lead}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href={copy.primary.href}
            className="rounded-full bg-volt px-8 py-[18px] text-[15px] leading-[normal] font-bold whitespace-nowrap text-obsidian"
          >
            {copy.primary.label}
          </a>
          <a
            href={copy.secondary.href}
            className={cn(
              "rounded-full border px-7 py-[18px] text-[15px] leading-[normal] font-medium whitespace-nowrap text-obsidian",
              secondaryClassName,
            )}
          >
            {copy.secondary.label}
          </a>
        </div>
      </div>

      <div className={cn("relative flex items-center justify-center lg:h-[500px] lg:shrink", rightClassName)}>
        {glowOverImage ? null : glowImage}
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          priority
          sizes="(min-width: 1024px) 680px, 100vw"
          className={cn("relative w-full object-cover", imageClassName)}
        />
        {glowOverImage ? glowImage : null}
        <span
          aria-hidden="true"
          className={cn(
            "absolute top-1/2 hidden h-[200px] w-5 -translate-y-1/2 items-center justify-center xl:flex",
            sloganPositionClassName,
          )}
        >
          <span
            className={cn("rotate-90 text-[10px] leading-[normal] font-bold whitespace-nowrap", sloganClassName)}
          >
            {copy.slogan}
          </span>
        </span>
      </div>
    </Section>
  );
}
