import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="glow-hero relative overflow-hidden bg-ink pt-36 sm:pt-44">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-normal text-mist"
          >
            <span className="mr-2 size-1.5 rounded-full bg-lime" />
            Introducing Veliqo 2.0
          </Badge>

          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-8xl">
            Understand your customers{" "}
            <span className="font-display text-lime-gradient">
              like never before.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
            Veliqo turns your customer data into real-time answers — so you
            always know what to do next.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-lime px-7 font-semibold text-lime-ink hover:bg-lime-soft sm:w-auto"
            >
              <Link href="#cta">
                Get started free
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-white/15 bg-white/5 px-7 text-white hover:bg-white/10 sm:w-auto"
            >
              <Link href="#how-it-works">
                <Play className="mr-1 size-4" />
                Book a demo
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1320px] px-4 sm:px-6">
        <div
          aria-hidden
          className="glow-dashboard absolute -inset-x-16 top-16 -bottom-32 blur-3xl"
        />
        <Image
          src="/assets/hero-visual.png"
          alt="Veliqo product overview"
          width={1319}
          height={388}
          priority
          className="relative w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
