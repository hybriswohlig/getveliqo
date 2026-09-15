import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Changelog", "Roadmap", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Guides", "Status", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Cookies"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-7 items-center justify-center rounded-lg bg-lime text-[13px] font-bold text-lime-ink">
                V
              </span>
              <span className="text-[15px] font-semibold tracking-[0.18em] text-white">
                VELIQO
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              The intelligence layer for modern commerce. See every signal,
              make every decision count.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-mist transition-colors hover:text-lime"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-mist">
            © 2026 Veliqo, Inc. · getveliqo.com
          </p>
          <div className="flex items-center gap-5 text-xs text-mist">
            <Link href="#" className="transition-colors hover:text-lime">
              X / Twitter
            </Link>
            <Link href="#" className="transition-colors hover:text-lime">
              LinkedIn
            </Link>
            <Link href="#" className="transition-colors hover:text-lime">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
