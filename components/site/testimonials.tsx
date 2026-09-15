import Image from "next/image";

const sideCards = [
  {
    quote:
      "The first week, it flagged a churn risk we'd completely missed. That one save paid for the year several times over.",
    name: "Jonas Berger",
    role: "Head of CS, Lumina",
    avatar: "/assets/avatar-2.png",
  },
  {
    quote:
      "Setup genuinely took an afternoon. It's the first 'intelligence' tool that actually tells us what to do next.",
    name: "Priya Nair",
    role: "COO, Vertex Labs",
    avatar: "/assets/avatar-3.png",
  },
];

const stats = [
  { value: "12x", label: "faster decisions" },
  { value: "98%", label: "data coverage" },
  { value: "2.1B", label: "events daily" },
  { value: "4.9/5", label: "customer rating" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-smoke">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-5xl">
            Teams that stopped <span className="font-display">guessing</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/testimonial-visual.png"
                alt="Veliqo in practice at Northwind"
                width={650}
                height={310}
                className="w-full"
              />
            </div>
            <p className="mt-5 px-2 text-base leading-relaxed text-black/85">
              &ldquo;Veliqo replaced four dashboards and a weekly meeting. The
              team just opens it in the morning and knows exactly where to
              focus.&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 px-2 pb-2">
              <Image
                src="/assets/avatar-1.png"
                alt="Maya Chen"
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-black">Maya Chen</p>
                <p className="text-xs text-smoke">VP Revenue, Northwind</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {sideCards.map((item) => (
              <div
                key={item.name}
                className="flex flex-1 flex-col justify-between rounded-2xl border border-black/5 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              >
                <p className="text-sm leading-relaxed text-black/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-black">
                      {item.name}
                    </p>
                    <p className="text-xs text-smoke">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-black/5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-cream px-6 py-8 text-center">
              <p className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-smoke">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
