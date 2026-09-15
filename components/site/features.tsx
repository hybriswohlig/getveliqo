import Image from "next/image";
import { Rocket, ShoppingCart, TrendingUp } from "lucide-react";

const companies = [
  "Northwind",
  "Acme Corp",
  "Lumina",
  "Statler",
  "Vertex Labs",
  "Osmo",
];

const bottomCards = [
  {
    icon: Rocket,
    title: "Product marketing",
    description:
      "Positioning, messaging, and launches that make your product the obvious choice — from narrative to sales enablement.",
  },
  {
    icon: ShoppingCart,
    title: "Amazon FBA growth",
    description:
      "Listing optimization, PPC management, and ranking strategies that win the buy box and compound marketplace share.",
  },
  {
    icon: TrendingUp,
    title: "Reporting that proves it",
    description:
      "Weekly dashboards tied to revenue — rankings, traffic, conversions, and ROI. You always know what your spend earns.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-paper px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] bg-cream px-6 py-16 sm:px-12 sm:py-20">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-smoke">
          Trusted by brands like
        </p>
        <div className="mt-7 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold tracking-wide text-black/35 transition-colors hover:text-black/70"
            >
              {name}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-smoke">
            What we do
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-5xl">
            Everything your brand needs to{" "}
            <span className="font-display">grow</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-smoke">
            One senior team across search, AI answers, product, and marketplace
            — no handoffs, no agencies-within-agencies.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/assets/feature-dark-card.png"
              alt="SEO and GEO growth programs"
              width={420}
              height={218}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <Image
              src="/assets/feature-chart-card.png"
              alt="Client growth analytics"
              width={470}
              height={227}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 grid max-w-[1400px] gap-4 md:grid-cols-3">
        {bottomCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl bg-cream p-6 transition-shadow hover:shadow-[0_16px_40px_-18px_rgba(0,0,0,0.18)]"
          >
            <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-black">
              <card.icon className="size-5 text-lime" />
            </div>
            <h3 className="text-base font-semibold text-black">{card.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-smoke">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
