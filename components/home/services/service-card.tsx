import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";

export type Service = {
  number: string;
  title: string;
  image: string;
  description: string;
  link: { label: string; href: string };
};

// A 480px-tall image card. At rest all cards are the same width; the hovered
// (or keyboard-focused) card grows, reveals its description and pushes the
// title up, while its siblings shrink so the row keeps a constant width.
// On devices without hover the description is always visible.
// The width variants read `group/list`, so the parent <ul> must set it.
export function ServiceCard({ service }: { service: Service }) {
  return (
    <li
      className={[
        "group/card relative flex h-[480px] w-[min(326px,85vw)] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[16px] border border-white/[0.08] p-8 text-white",
        "transition-[width] duration-500 ease-out motion-reduce:transition-none",
        "hover:w-[min(420px,85vw)] focus-within:w-[min(420px,85vw)]",
        "group-has-[li:hover,li:focus-within]/list:not-hover:not-focus-within:w-[279px]",
        "[@media(hover:none)]:w-[min(420px,85vw)]",
      ].join(" ")}
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes="420px"
        className="rounded-[16px] object-cover"
      />
      <div
        className="absolute inset-0 rounded-[16px] bg-ink/25 opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 group-focus-within/card:opacity-100 motion-reduce:transition-none [@media(hover:none)]:opacity-100"
        aria-hidden="true"
      />

      <p className="relative self-end text-[14px] leading-auto font-semibold opacity-60">{service.number}</p>

      <div className="relative">
        <h3 className="text-[22px] leading-auto font-extrabold">{service.title}</h3>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover/card:grid-rows-[1fr] group-focus-within/card:grid-rows-[1fr] motion-reduce:transition-none [@media(hover:none)]:grid-rows-[1fr]">
          <div className="overflow-hidden">
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
        </div>
      </div>
    </li>
  );
}
