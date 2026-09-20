import { cn } from "@/lib/utils";

// Pink eyebrow above an Outfit headline, used by most sections of the page.
export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
  titleClassName,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <p className="text-[13px] leading-[normal] font-bold text-signal uppercase">{eyebrow}</p>
      {/* leading last: tailwind-merge drops an earlier leading-* when a text-size class follows */}
      <h2 id={id} className={cn("font-outfit font-extrabold text-obsidian", titleClassName, "leading-[normal]")}>
        {title}
      </h2>
    </div>
  );
}
