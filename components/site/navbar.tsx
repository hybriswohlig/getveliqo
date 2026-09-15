import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#cta" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/70 px-4 py-3 backdrop-blur-xl sm:px-5">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-blue text-[13px] font-bold text-white">
              V
            </span>
            <span className="text-[15px] font-semibold tracking-[0.18em]">
              VELIQO
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#cta"
              className="hidden px-3 py-2 text-sm text-mist transition-colors hover:text-white sm:block"
            >
              Sign in
            </Link>
            <Button
              asChild
              className="rounded-xl bg-white text-sm font-medium text-ink hover:bg-white/90"
            >
              <Link href="#cta">Get started</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
