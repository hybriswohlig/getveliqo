import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/brand/logo-mark";
import { footer, footerColumns, office, socials } from "@/content/home";

// Figma frame "velyqo-footer" (27:4), 1440×800.
export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-fog text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-5 pt-20 pb-10 md:px-10 lg:gap-16 lg:px-[5.5556vw] frame:min-h-[800px] frame:px-20">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[5.5556vw] frame:gap-x-20">
          <div className="flex flex-col gap-8">
            <p className="flex items-center gap-3">
              <LogoMark tone="dark" size={48} className="size-12" />
              <span className="text-[24px] leading-auto font-black">VELYQO</span>
            </p>
            <div className="flex flex-col gap-3">
              <h2 className="text-[18px] leading-auto font-extrabold">{office.title}</h2>
              <address className="flex flex-col gap-1 text-[15px] leading-auto font-medium not-italic">
                <span className="text-slate">{office.company}</span>
                <span className="text-slate">{office.street}</span>
                <span className="text-slate">{office.city}</span>
                <a href={`mailto:${office.email}`} className="font-semibold">
                  {office.email}
                </a>
              </address>
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-6">
              <h2 className="text-[18px] leading-auto font-extrabold">{column.title}</h2>
              <ul className="flex flex-col gap-3.5">
                {column.links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 bg-lime" aria-hidden="true" />
                    <Link href={link.href} className="text-[14px] leading-auto font-semibold text-slate">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="-mb-px border-rule-footer" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[14px] leading-auto font-medium text-slate">{footer.copyright}</p>
          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full bg-lime"
                >
                  <Image src={social.icon} alt="" width={20} height={20} unoptimized />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-5">
          <p className="flex h-[1.31em] items-center justify-center text-center text-[clamp(28px,6.9445vw,100px)] leading-auto font-black">
            {footer.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
