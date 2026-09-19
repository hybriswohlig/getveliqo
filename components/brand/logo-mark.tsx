import Image from "next/image";
import { cn } from "@/lib/utils";

const sources = {
  // White VQ on a black square (navbar on dark backgrounds)
  tile: "/assets/brand/logo-mark-on-black.png",
  // Black VQ on transparent (light backgrounds, watermarks)
  dark: "/assets/brand/logo-mark-black.png",
};

// The VELYQO "VQ" mark. The file only has it as a raster image, so the
// parent sets the size and the image fills it.
export function LogoMark({
  tone,
  size,
  className,
}: {
  tone: keyof typeof sources;
  size: number;
  className?: string;
}) {
  return (
    <span className={cn("relative block shrink-0", className)} aria-hidden="true">
      <Image src={sources[tone]} alt="" fill sizes={`${size}px`} className="object-contain" />
    </span>
  );
}
