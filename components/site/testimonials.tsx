import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Veliqo replaced four dashboards and a weekly meeting. The team just opens it in the morning and knows exactly where to focus.",
    name: "Maya Chen",
    role: "VP Revenue, Northwind",
    initials: "MC",
  },
  {
    quote:
      "The first week, it flagged a churn risk we'd completely missed. That one save paid for the year several times over.",
    name: "Jonas Berger",
    role: "Head of CS, Lumina",
    initials: "JB",
  },
  {
    quote:
      "Setup genuinely took an afternoon. It's the first 'intelligence' tool that actually tells us what to do next.",
    name: "Priya Nair",
    role: "COO, Vertex Labs",
    initials: "PN",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-t border-white/8 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Teams that stopped{" "}
            <span className="font-display text-gradient">guessing</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="card-surface card-surface-hover flex flex-col justify-between rounded-2xl border-white/8 bg-transparent"
            >
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed text-white/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pb-6">
                <span className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-accent/40 to-accent-blue/30 text-xs font-semibold text-white">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{item.name}</p>
                  <p className="text-xs text-mist">{item.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
