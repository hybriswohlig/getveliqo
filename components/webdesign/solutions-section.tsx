import { solutions } from "@/content/webdesign";

// Figma frame "custom-solutions-section" (77:152), 1440×422.
export function SolutionsSection() {
  return (
    <section aria-label="Individuelle Lösungen und Betreuung" className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-[clamp(56px,5.5556vw,80px)] md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-[5.5556vw] frame:px-20">
        {solutions.map((column) => (
          <div key={column.title} className="flex flex-col items-start gap-5">
            <h2 className="font-outfit text-[22px] leading-outfit font-bold text-carbon">{column.title}</h2>
            <p className="font-geist text-[14px] leading-[1.6] text-ash">{column.body}</p>
            <ul className="flex flex-col gap-3">
              {column.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="size-2 shrink-0 rounded-full bg-lime-web" aria-hidden="true" />
                  <span className="font-geist text-[14px] leading-geist text-carbon">{item}</span>
                </li>
              ))}
            </ul>
            {column.cta && (
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={column.cta.href}
                  className="rounded-full bg-carbon px-6 py-3 font-geist text-[13px] leading-geist font-semibold whitespace-nowrap text-white"
                >
                  {column.cta.label}
                </a>
                <p className="flex flex-col gap-0.5">
                  <span className="font-outfit text-[26px] leading-outfit font-extrabold text-carbon">
                    {column.price}
                  </span>
                  <span className="font-geist text-[13px] leading-geist text-ash">{column.priceNote}</span>
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
