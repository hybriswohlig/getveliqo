import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#features" },
  { label: "Process", href: "#how-it-works" },
  { label: "Results", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/60 py-2.5 pl-5 pr-2.5 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-lime text-[13px] font-bold text-lime-ink">
              V
            </span>
            <span className="text-[15px] font-semibold tracking-[0.18em] text-white">
              VELIQO
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Button
            asChild
            className="rounded-full bg-lime px-5 text-sm font-semibold text-lime-ink hover:bg-lime-soft"
          >
            <Link href="#cta">Book a call</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
