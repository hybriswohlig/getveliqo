import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "./arrow-right-icon";

// The outlined circle with an arrow that sits inside section headlines.
// Sized in em so it follows the headline: 64px in a 72px headline
// (communication section), 72px in an 80px one (intro section).
export function ArrowCircle({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex shrink-0 items-center justify-center rounded-full border-[3px] border-solid", className)}
    >
      <ArrowRightIcon className={iconClassName} />
    </span>
  );
}
