import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import { pricing } from "@/content/webdesign";

// Figma frame "section-pricing" (77:66), 1440×587.
export function PricingSection() {
  return (
    <section id="pakete" aria-labelledby="pakete-titel" className="bg-mist">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[5.5556vw] frame:px-20">
        <div className="flex flex-col gap-4 pt-[clamp(56px,5.5556vw,80px)] pb-8">
          <p className="font-geist text-[13px] leading-geist font-bold text-glow-pink uppercase">{pricing.eyebrow}</p>
          <h2
            id="pakete-titel"
            className="font-outfit text-[clamp(28px,3.0556vw,44px)] leading-outfit font-extrabold text-carbon"
          >
            {pricing.title}
          </h2>
        </div>

        <ul className="grid gap-6 pb-[clamp(48px,4.4444vw,64px)] md:grid-cols-2 lg:grid-cols-3">
          {pricing.cards.map((card) => (
            <li
              key={card.title}
              className="relative flex flex-col items-start gap-6 overflow-hidden rounded-[20px] border border-line bg-paper p-8"
            >
              <span
                aria-hidden="true"
                className="absolute -inset-x-px -top-px h-2 bg-linear-to-r from-[#ff8faa] to-[#e8f5a0]"
              />
              <div className="flex flex-col gap-3">
                <p className="font-geist text-[13px] leading-geist font-bold text-ash uppercase">{card.kind}</p>
                <p className="font-outfit text-[clamp(30px,2.6389vw,38px)] leading-outfit font-extrabold text-carbon">
                  {card.price}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-outfit text-[18px] leading-outfit font-semibold text-carbon">{card.title}</h3>
                <p className="font-geist text-[14px] leading-[1.5] text-ash">{card.body}</p>
              </div>
              <a
                href={card.href}
                aria-label={`${card.title} anfragen`}
                className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-line text-carbon"
              >
                <ArrowRightIcon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
