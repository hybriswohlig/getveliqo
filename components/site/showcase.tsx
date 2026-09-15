import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Audit & strategy",
    description:
      "We tear down your funnel, rankings, and listings — then hand you a growth plan ranked by revenue impact, not vanity metrics.",
  },
  {
    step: "02",
    title: "Execute & launch",
    description:
      "Our senior team ships the work: content, technical fixes, campaigns, and listings — weekly, not quarterly.",
  },
  {
    step: "03",
    title: "Measure & scale",
    description:
      "Every win is tracked to revenue in your dashboard. What works gets scaled, what doesn't gets cut.",
  },
];

export function Showcase() {
  return (
    <section id="how-it-works" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
            How we work
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            From audit to{" "}
            <span className="font-display text-lime-gradient">growth</span> in
            weeks
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">
            No six-month onboarding. No junior account managers. Just a senior
            team shipping work you can measure.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="card-dark card-dark-hover rounded-2xl bg-panel p-6"
            >
              <span className="font-display text-3xl text-lime">
                {item.step}
              </span>
              <h3 className="mt-4 font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl">
          <Image
            src="/assets/showcase-visual.png"
            alt="Client growth reporting"
            width={1280}
            height={290}
            className="w-full"
          />
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl bg-lime px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-lg font-semibold tracking-tight text-lime-ink">
            Clients see an average of 12x ROI in year one
          </p>
          <p className="text-sm font-medium text-lime-ink/70">
            Across SEO, GEO, product marketing, and Amazon FBA programs
          </p>
        </div>
      </div>
    </section>
  );
}
