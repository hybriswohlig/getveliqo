import Image from "next/image";

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

export function Showcase() {
  return (
    <section id="how-it-works" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
            How it works
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            From scattered data to{" "}
            <span className="font-display text-lime-gradient">decision</span> in
            minutes
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-mist">
            Three steps. No implementation project, no data team required.
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
            alt="Veliqo decision feed"
            width={1280}
            height={290}
            className="w-full"
          />
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl bg-lime px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <p className="text-lg font-semibold tracking-tight text-lime-ink">
            Teams make 12x faster decisions with Veliqo
          </p>
          <p className="text-sm font-medium text-lime-ink/70">
            Measured across 2.1B events processed daily
          </p>
        </div>
      </div>
    </section>
  );
}
