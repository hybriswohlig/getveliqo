import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/arrow-right-icon";
import { cn } from "@/lib/utils";

export type Service = {
  number: string;
  title: string;
  image: string;
  description?: string;
  link?: { label: string; href: string };
};

// A 480px-tall image card. Cards with a description are shown expanded
// (420px wide, title on top); the others are collapsed (279px, title below).
export function ServiceCard({ service }: { service: Service }) {
  const expanded = Boolean(service.description);
  const number = <p className="text-[14px] leading-auto font-semibold opacity-60">{service.number}</p>;
  const title = <h3 className="text-[22px] leading-auto font-extrabold">{service.title}</h3>;

  return (
    <li
      className={cn(
        "relative flex h-[480px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[16px] border border-white/[0.08] p-8 text-white",
        expanded ? "w-[min(420px,85vw)]" : "w-[279px]",
      )}
    >
      <Image
        src={service.image}
        alt=""
        fill
        sizes={expanded ? "420px" : "279px"}
        className="rounded-[16px] object-cover"
      />
      {expanded && <div className="absolute inset-0 rounded-[16px] bg-ink/25" aria-hidden="true" />}

      <div className="relative flex items-start justify-between gap-4">
        {expanded ? <div className="w-[260px]">{title}</div> : <span />}
        {number}
      </div>

      {expanded ? (
        <div className="relative flex flex-col gap-6">
          <p className="text-[14px] leading-[1.6] font-medium">{service.description}</p>
          {service.link && (
            <a href={service.link.href} className="flex w-fit items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-full bg-lime text-ink">
                <ArrowRightIcon className="size-3.5" />
              </span>
              <span className="text-[14px] leading-auto font-bold">{service.link.label}</span>
            </a>
          )}
        </div>
      ) : (
        <div className="relative">{title}</div>
      )}
    </li>
  );
}
