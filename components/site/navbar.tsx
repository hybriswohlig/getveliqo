import Image from "next/image";
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
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="Veliqo"
              width={195}
              height={40}
              priority
              className="h-7 w-auto"
            />
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
