import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Veliqo replaced four dashboards and a weekly meeting. The team just opens it in the morning and knows exactly where to focus.",
    name: "Maya Chen",
    role: "VP Revenue, Northwind",
    avatar: "/assets/avatar-1.png",
  },
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

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-smoke">
            Testimonials
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-black sm:text-5xl">
            Teams that stopped{" "}
            <span className="font-display">guessing</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              className="card-light card-light-hover flex flex-col justify-between rounded-2xl border-black/5"
            >
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed text-black/80">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-3 pb-6">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-black">{item.name}</p>
                  <p className="text-xs text-smoke">{item.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
