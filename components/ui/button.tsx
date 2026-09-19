import { cn } from "@/lib/utils";

const variants = {
  // Filled graphite button on light backgrounds
  dark: "bg-graphite px-8 py-4 font-bold text-white",
  // Outlined; the padding is 1px smaller so the height matches the filled one
  outline: "border border-graphite px-[31px] py-[15px] font-semibold text-graphite",
};

export function ButtonLink({
  href,
  variant,
  className,
  children,
}: {
  href: string;
  variant: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-[8px] text-[14px] leading-auto whitespace-nowrap",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
