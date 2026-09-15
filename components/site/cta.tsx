import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Live in under ten minutes — no engineers needed",
  "Free for 14 days, no credit card required",
  "SOC 2 Type II and GDPR-ready from day one",
];

export function Cta() {
  return (
    <section id="cta" className="bg-ink px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-lime">
            Get started
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to understand your customers{" "}
            <span className="font-display text-lime-gradient">better?</span>
          </h2>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-mist">
            Connect your stack and get your first decisions today.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-lime/15">
                  <Check className="size-3 text-lime" />
                </span>
                <span className="text-sm text-white/85">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="glow-cta card-dark relative overflow-hidden rounded-3xl bg-panel p-8 sm:p-10">
          <p className="text-xl font-semibold tracking-tight text-white">
            Start your free trial
          </p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Fourteen days on us. See every signal your stack already knows.
          </p>
          <div className="mt-7 flex flex-col gap-3">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-lime px-7 font-semibold text-lime-ink hover:bg-lime-soft"
            >
              <Link href="https://getveliqo.com">
                Get started free
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="https://getveliqo.com">Talk to sales</Link>
            </Button>
          </div>
          <p className="mt-5 text-center text-xs text-mist">
            Free 14-day trial · No credit card · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
