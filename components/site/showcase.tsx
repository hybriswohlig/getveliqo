import { Check } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Connect your stack",
    description:
      "Point Veliqo at your CRM, billing, and product tools. First insights land in under ten minutes — no engineers needed.",
  },
  {
    step: "02",
    title: "Watch signals surface",
    description:
      "The decision engine reads every event in context and surfaces what actually moves revenue, ranked by impact.",
  },
  {
    step: "03",
    title: "Act with one click",
    description:
      "Push the action back to the tools your team already lives in, and measure the lift automatically.",
  },
];

const stats = [
  { value: "12x", label: "faster decisions" },
  { value: "98%", label: "data coverage" },
  { value: "2.1B", label: "events processed daily" },
  { value: "4.9/5", label: "customer rating" },
];

export function Showcase() {
  return (
    <section
      id="how-it-works"
      className="bg-ink py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
              How it works
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              From scattered data to{" "}
              <span className="font-display text-lime-gradient">decision</span>{" "}
              in minutes
            </h2>
            <div className="mt-10 space-y-8">
              {steps.map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span className="font-display text-2xl text-lime">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-dark relative overflow-hidden rounded-2xl bg-panel p-6 sm:p-8">
            <div
              aria-hidden
              className="absolute -top-24 right-0 size-64 rounded-full bg-lime/15 blur-3xl"
            />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist">
              Today&apos;s decision
            </p>
            <div className="mt-5 rounded-xl border border-lime/25 bg-lime/8 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">
                  Expansion signal — Acme Corp
                </p>
                <span className="rounded-full bg-lime/15 px-2.5 py-1 text-[10px] font-medium text-lime">
                  High confidence
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Usage up 3.2x this month, two new departments onboarded, and
                renewal in 45 days. Recommend an expansion conversation this
                week.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Product usage up 3.2x month-over-month",
                  "2 new departments activated seats",
                  "Renewal window opens in 45 days",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-lime" />
                    <span className="text-xs text-mist">{point}</span>
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-lime-ink transition-colors hover:bg-lime-soft">
                Send to account owner
              </button>
            </div>
            <p className="mt-4 text-center text-[11px] text-mist">
              Decisions ship with the reasoning attached — always.
            </p>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-panel px-6 py-8 text-center">
              <p className="text-3xl font-semibold tracking-tight text-lime sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
