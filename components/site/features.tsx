import Image from "next/image";
import { Blocks, ShieldCheck, Zap } from "lucide-react";

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
    icon: Zap,
    title: "One-click automations",
    description:
      "Turn any insight into a workflow — alert the owner, sync to your CRM, or trigger a campaign without leaving Veliqo.",
  },
  {
    icon: Blocks,
    title: "60+ integrations",
    description:
      "Stripe, Salesforce, HubSpot, Segment, Zendesk and more connect in minutes with zero engineering required.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade trust",
    description:
      "SOC 2 Type II, GDPR-ready, SSO/SAML, and granular roles. Your data stays yours — never used for training.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-paper px-3 py-6 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[2rem] bg-cream px-6 py-16 sm:px-12 sm:py-20">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-smoke">
          Trusted by teams at
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
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-5xl">
            Everything you need to{" "}
            <span className="font-display">see clearly</span>
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-smoke">
            One workspace replaces the dashboards, spreadsheets, and gut-feel
            meetings your team runs on today.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/assets/feature-dark-card.png"
              alt="Real-time signal stream"
              width={420}
              height={218}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl bg-white">
            <Image
              src="/assets/feature-chart-card.png"
              alt="Decision engine analytics"
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
