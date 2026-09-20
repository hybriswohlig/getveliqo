import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import { cta } from "@/content/webdesign";

// Figma frame "section-cta" (77:231), 1440×320: a photo under an 88% carbon
// wash, with a preview of the page itself fading in from the right edge.
export function CtaSection() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-titel" className="bg-paper">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[24px]">
        <Image src={cta.backdrop} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-carbon/[0.88]" aria-hidden="true" />

        <div className="absolute inset-y-0 right-0 w-[200px] max-xl:hidden" aria-hidden="true">
          <Image src={cta.preview} alt="" fill sizes="200px" className="object-cover" />
          <span className="absolute inset-0 bg-linear-to-r from-carbon to-transparent to-60%" />
        </div>

        <div className="relative flex flex-col justify-between gap-10 px-5 py-14 md:px-10 lg:flex-row lg:items-center lg:gap-12 lg:pr-12 lg:pl-16 xl:pr-[248px] frame:min-h-[320px]">
          <div className="flex flex-col gap-5 lg:max-w-[520px]">
            <p className="font-geist text-[11px] leading-geist font-bold text-lime-web uppercase">{cta.eyebrow}</p>
            <h2
              id="kontakt-titel"
              className="font-outfit text-[clamp(26px,2.7778vw,40px)] leading-[1.15] font-extrabold text-white"
            >
              {cta.title}
            </h2>
            <p className="font-geist text-[14px] leading-[1.55] text-[#a9a9b2] lg:max-w-[480px]">{cta.body}</p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 lg:items-center">
            <a
              href={cta.button.href}
              className="flex items-center gap-2.5 rounded-full bg-lime-web px-9 py-4 font-geist text-[15px] leading-geist font-bold whitespace-nowrap text-carbon"
            >
              {cta.button.label}
              <ArrowRightIcon className="size-3.5" />
            </a>
            <p className="flex items-center gap-1.5">
              <span className="size-1.5 shrink-0 rounded-full bg-lime-web" aria-hidden="true" />
              <span className="font-geist text-[12px] leading-geist text-[#a9a9b2]">{cta.note}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
