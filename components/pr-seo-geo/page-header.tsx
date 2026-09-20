import Image from "next/image";
import Link from "next/link";
import { headerCta, nav } from "@/content/pr-seo-geo";
import { cn } from "@/lib/utils";

// Figma frame "header" (108:5), 1440×70. Below 1024px the links move to a
// scrollable second row, so the page stays navigable without any script.
export function PageHeader() {
  return (
    <header className="border-b border-hairline bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-3 px-5 py-3 md:px-10 lg:h-[69px] lg:flex-nowrap lg:px-[5.5556vw] lg:py-0 frame:px-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="VELYQO – Startseite">
          <Image
            src="/assets/pr-seo-geo/logo-mark.png"
            alt=""
            width={44}
            height={44}
            className="size-11 rounded-[10px] object-contain"
          />
          <span className="font-outfit text-[22px] leading-[normal] font-black text-obsidian">VELYQO</span>
        </Link>

        <nav
          aria-label="Seitennavigation"
          className="order-last -mx-5 mt-3 w-[calc(100%+40px)] overflow-x-auto px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-10 md:w-[calc(100%+80px)] md:px-10 lg:order-none lg:mx-0 lg:mt-0 lg:w-auto lg:overflow-visible lg:px-0"
        >
          <ul className="flex items-center gap-9 text-[14px] leading-[normal] whitespace-nowrap">
            {nav.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? "page" : undefined}
                  className={cn(link.current ? "font-bold text-obsidian" : "text-smoke")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={headerCta.href}
          className="rounded-full bg-obsidian px-4 py-3 text-[13px] leading-[normal] font-semibold whitespace-nowrap text-white sm:px-7 sm:py-3.5 sm:text-[14px]"
        >
          {headerCta.label}
        </a>
      </div>
    </header>
  );
}
