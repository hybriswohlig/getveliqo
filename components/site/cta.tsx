import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="cta" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="glow-cta card-surface relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12 sm:py-24">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
          Ready to see your customers{" "}
          <span className="font-display text-gradient">clearly?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty text-mist">
          Connect your stack and get your first decisions today — free for 14
          days, no credit card required.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-full rounded-xl bg-white px-7 text-ink hover:bg-white/90 sm:w-auto"
          >
            <Link href="https://getveliqo.com">
              Start free trial
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-xl border-white/15 bg-white/5 px-7 text-white hover:bg-white/10 sm:w-auto"
          >
            <Link href="https://getveliqo.com">Talk to sales</Link>
          </Button>
        </div>
        <p className="mt-6 text-xs text-mist">
          Free 14-day trial · No credit card · Cancel anytime
        </p>
      </div>
    </section>
  );
}
