import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { nav } from "@/content/webdesign";
import { cn } from "@/lib/utils";

// Figma frame "header" (77:9), 1440×70. Its own navbar, not the dark one the
// homepage hero carries. Figma has no mobile state, so the section links drop
// below lg and the page is reached by scrolling.
export function WebdesignHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10 lg:px-[5.5556vw] frame:px-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="VELYQO – Startseite">
          <LogoMark tone="dark" size={44} className="size-9 lg:size-11" />
          <span className="text-[20px] leading-auto font-black text-graphite lg:text-[22px]">VELYQO</span>
        </Link>

        <nav aria-label="Seitennavigation" className="max-lg:hidden">
          <ul className="flex items-center gap-9">
            {nav.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? "true" : undefined}
                  className={cn(
                    "font-geist text-[14px] leading-geist hover:text-carbon",
                    link.active ? "font-bold text-carbon" : "text-ash",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={nav.cta.href}
          className="shrink-0 rounded-full bg-carbon px-5 py-3 font-geist text-[14px] leading-geist font-semibold whitespace-nowrap text-white md:px-7 md:py-3.5"
        >
          {nav.cta.label}
        </a>
      </div>
    </header>
  );
}
