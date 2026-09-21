import Image from "next/image";
import type { CtaContent } from "@/content/subpage";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { Section } from "./section";

// Figma frame "section-cta", a 320px card on a darkened photo. The Webdesign
// frame runs it edge to edge and adds a product image on the right.
export function CtaSection({
  content,
  background = "/assets/shared/cta-background.jpg",
  overlayClassName = "bg-obsidian/92",
  productImage,
  bleed = false,
}: {
  content: CtaContent;
  background?: string;
  overlayClassName?: string;
  productImage?: string;
  bleed?: boolean;
}) {
  return (
    <Section
      id="kontakt"
      labelledBy="kontakt-title"
      className="bg-white"
      innerClassName={cn(bleed && "px-0 md:px-0 lg:px-0 frame:px-0")}
    >
      <div
        className={cn(
          "relative isolate flex flex-col justify-between gap-10 overflow-hidden px-6 py-12 md:px-10 lg:min-h-[320px] lg:flex-row lg:items-center lg:py-14 lg:pr-0 lg:pl-16",
          "rounded-3xl",
        )}
      >
        <Image
          src={background}
          alt=""
          fill
          sizes="1280px"
          aria-hidden="true"
          className="-z-20 rounded-3xl object-cover"
        />
        <div aria-hidden="true" className={cn("absolute inset-0 -z-10 rounded-3xl", overlayClassName)} />

        <Reveal className="flex flex-col gap-5 lg:w-[540px] lg:shrink">
          <p className="text-[11px] leading-[normal] font-bold text-volt uppercase">{content.eyebrow}</p>
          <h2
            id="kontakt-title"
            className="font-outfit text-[clamp(30px,2.7778vw,40px)] leading-[1.15] font-extrabold text-white"
          >
            {content.title}
          </h2>
          <p className="text-[14px] leading-[1.55] text-[#a9a9b2]">{content.lead}</p>
        </Reveal>

        <Reveal delay={0.1} className={cn("flex items-center lg:h-full", productImage && "lg:pr-[200px]")}>
          <div className="flex flex-col items-start gap-3 lg:items-center lg:pr-12">
            <a
              href={content.button.href}
              className="flex items-center gap-2.5 rounded-full bg-volt px-9 py-4 text-[15px] leading-[normal] font-bold whitespace-nowrap text-obsidian"
            >
              {content.button.label}
              <Image src="/assets/shared/icons/arrow-right-cta.svg" alt="" width={14} height={14} unoptimized />
            </a>
            <p className="flex items-center gap-1.5 text-[12px] leading-[normal] text-[#a9a9b2]">
              <Image src="/assets/shared/icons/dot.svg" alt="" width={6} height={6} unoptimized />
              {content.note}
            </p>
          </div>
        </Reveal>

        {/* Fills the card's right end, the full height of the card */}
        {productImage ? (
          <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-[200px] overflow-hidden lg:block">
            <Image src={productImage} alt="" fill sizes="200px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian to-obsidian/0 to-60%" />
          </div>
        ) : null}
      </div>
    </Section>
  );
}
