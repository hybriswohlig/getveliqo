import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { copyright, email, office, socials, type FooterContent } from "@/content/subpage";

// Figma frame "velyqo-footer", 1440×881. Its column set and the giant slogan
// differ from the homepage footer, so it is its own component. The address,
// legal links and socials are the same on every subpage; the two link
// columns and the slogan come from the page.
export function PageFooter({ content }: { content: FooterContent }) {
  return (
    <footer className="overflow-hidden bg-mist">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14 px-5 pt-16 md:px-10 lg:px-[5.5556vw] lg:pt-[72px] frame:px-20">
        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[240px_1fr_repeat(3,minmax(0,200px))] lg:gap-x-[60px]">
          <Reveal className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <p className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="font-outfit flex size-[30px] items-center justify-center rounded-[5px] bg-obsidian text-[17px] leading-[normal] font-black text-white"
              >
                V
              </span>
              <span className="font-outfit text-[20px] leading-[normal] font-extrabold text-obsidian">VELYQO</span>
            </p>
            <div className="flex flex-col gap-2 text-[13px]">
              <h2 className="leading-[normal] font-bold text-obsidian">{office.title}</h2>
              <address className="leading-[1.6] text-[#6b6b76] not-italic">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <a href={`mailto:${email}`} className="text-[13px] leading-[normal] font-semibold text-obsidian">
              {email}
            </a>
          </Reveal>

          <div aria-hidden="true" className="max-lg:hidden" />

          {content.columns.map((column, index) => (
            <Reveal key={column.title} delay={(index + 1) * 0.07}>
              <nav aria-label={column.title} className="flex flex-col gap-4">
                <h2 className="text-[14px] leading-[normal] font-bold text-obsidian">{column.title}</h2>
                <ul className="flex flex-col gap-2.5 text-[13px] leading-[normal] text-[#6b6b76]">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          ))}
        </div>

        <hr className="border-[#ddddde]" />

        <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] leading-[normal] text-[#8a8a95]">{copyright}</p>
          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-[#e2e2e8] bg-white"
                >
                  <Image src={social.icon} alt="" width={16} height={16} unoptimized />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          aria-label={content.slogan.join(" ")}
          className="font-outfit text-center text-[clamp(44px,10.2778vw,148px)] font-black text-[#dcdce2] uppercase"
        >
          {content.slogan.map((line) => (
            <span key={line} aria-hidden="true" className="block leading-[0.88]">
              {line}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
