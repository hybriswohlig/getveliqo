import Image from "next/image";
import Link from "next/link";
import { footer, footerColumns, office, socials } from "@/content/webdesign";

// Figma frame "velyqo-footer" (77:244), 1440×881. A lighter footer than the
// homepage one (27:4) — and with a different Munich address, see content.
export function WebdesignFooter() {
  return (
    <footer className="bg-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 pt-[clamp(48px,5vw,72px)] md:px-10 lg:px-[5.5556vw] frame:px-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[220px_1fr_200px_200px_200px] lg:gap-x-15">
          <div className="flex flex-col items-start gap-5">
            <Link href="/" className="flex items-center gap-2.5" aria-label="VELYQO – Startseite">
              <span className="flex size-[30px] items-center justify-center rounded-[5px] bg-carbon font-outfit text-[17px] leading-outfit font-black text-white">
                V
              </span>
              <span className="font-outfit text-[20px] leading-outfit font-extrabold text-carbon">VELYQO</span>
            </Link>
            <div className="flex flex-col gap-2 font-geist text-[13px]">
              <p className="leading-geist font-bold text-carbon">{office.title}</p>
              <address className="flex flex-col leading-[1.6] text-[#6b6b76] not-italic">
                {office.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
            <a
              href={`mailto:${office.email}`}
              className="font-geist text-[13px] leading-geist font-semibold text-carbon"
            >
              {office.email}
            </a>
          </div>

          <div className="max-lg:hidden" aria-hidden="true" />

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="flex flex-col gap-4">
              <h2 className="font-geist text-[14px] leading-geist font-bold text-carbon">{column.title}</h2>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block font-geist text-[13px] leading-geist text-[#6b6b76] hover:text-carbon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="border-[#dddde0]" />

        <div className="flex flex-col items-start justify-between gap-6 pb-10 sm:flex-row sm:items-center">
          <p className="font-geist text-[12px] leading-geist text-[#8a8a95]">{footer.copyright}</p>
          <ul className="flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-[#e2e2e8] bg-paper"
                >
                  <Image src={social.icon} alt="" width={16} height={16} unoptimized />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="flex flex-col text-center font-outfit text-[clamp(52px,10.2778vw,148px)] leading-[0.88] font-black text-[#dcdce2] uppercase select-none"
        >
          {footer.slogan.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
      </div>
    </footer>
  );
}
