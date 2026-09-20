import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";

export type Service = {
  number: string;
  title: string;
  image: string;
  description: string;
  link: { label: string; href: string };
};

// Expanded card width; the image and text are laid out at this size once, so
// growing the card only reveals more of them instead of re-flowing anything.
const FULL = "min(420px,85vw)";

// A 480px-tall image card. At rest all cards are the same width; the hovered
// (or keyboard-focused) card grows, reveals its description and lifts the
// title, while its siblings shrink so the row keeps a constant width.
// On devices without hover the description is always visible.
// The width variants read `group/list`, so the parent <ul> must set it.
//
// Safari is slow at re-laying out and re-rasterising on every frame, so the
// only layout property animated is the card's own width (its children have
// fixed sizes); everything else moves with transform/opacity.
export function ServiceCard({ service }: { service: Service }) {
  return (
    <li
      className={[
        "group/card relative isolate h-[480px] w-[min(326px,85vw)] shrink-0 snap-start transform-gpu overflow-hidden rounded-[16px] border border-white/[0.08] text-white [contain:layout_paint]",
        "transition-[width] duration-500 ease-out motion-reduce:transition-none",
        "hover:w-[min(420px,85vw)] focus-within:w-[min(420px,85vw)]",
        "group-has-[li:hover,li:focus-within]/list:not-hover:not-focus-within:w-[279px]",
        "[@media(hover:none)]:w-[min(420px,85vw)]",
      ].join(" ")}
    >
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2" style={{ width: FULL }} aria-hidden="true">
        <Image src={service.image} alt="" fill sizes="420px" className="object-cover" />
        <div className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 group-focus-within/card:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100" />
      </div>

      <p className="absolute top-8 right-8 text-[14px] leading-auto font-semibold opacity-60">{service.number}</p>

      {/* Bottom-anchored. At rest it is pushed down by the height of the
          description so only the title (22px x 1.21 line height) shows. */}
      <div
        className="absolute bottom-8 left-8 translate-y-[calc(100%-26.62px)] transition-transform duration-500 ease-out group-hover/card:translate-y-0 group-focus-within/card:translate-y-0 motion-reduce:transition-none [@media(hover:none)]:translate-y-0"
        style={{ width: `calc(${FULL} - 64px)` }}
      >
        <h3 className="text-[22px] leading-auto font-extrabold">{service.title}</h3>
        <div className="flex flex-col gap-6 pt-4 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 group-focus-within/card:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100">
          <p className="text-[14px] leading-[1.6] font-medium">{service.description}</p>
          <a href={service.link.href} className="flex w-fit items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-full bg-lime text-ink">
              <ArrowRightIcon className="size-3.5" />
            </span>
            <span className="text-[14px] leading-auto font-bold">{service.link.label}</span>
          </a>
        </div>
      </div>
    </li>
  );
}
