import { cn } from "@/lib/utils";

// A full-width band with the content held to the 1440px Figma frame.
// The gutters follow the rest of the site: 20px on phones, 5.5556vw on
// laptops and the frame's 80px from 1440px up.
export function Section({
  id,
  labelledBy,
  className,
  innerClassName,
  children,
}: {
  id?: string;
  labelledBy?: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={className}>
      <div className={cn("mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[5.5556vw] frame:px-20", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
