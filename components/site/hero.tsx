import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function DashboardVisual() {
  const bars = [30, 44, 38, 55, 48, 66, 58, 74, 68, 86, 78, 96];

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl px-4 sm:px-0">
      <div
        aria-hidden
        className="glow-dashboard absolute -inset-x-16 top-10 -bottom-24 blur-3xl"
      />
      <div className="card-dark relative animate-float overflow-hidden rounded-2xl bg-panel shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <div className="ml-4 hidden h-6 w-56 items-center rounded-md bg-white/5 px-2 text-[10px] text-mist sm:flex">
            app.getveliqo.com/overview
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-3 hidden border-r border-white/8 p-4 md:block">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-lime text-[10px] font-bold text-lime-ink">
                V
              </span>
              <span className="text-xs font-semibold tracking-[0.15em] text-white">
                VELIQO
              </span>
            </div>
            {["Overview", "Signals", "Segments", "Automations", "Reports"].map(
              (item, i) => (
                <div
                  key={item}
                  className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] ${
                    i === 0
                      ? "bg-white/8 text-white"
                      : "text-mist hover:text-white"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${
                      i === 0 ? "bg-lime" : "bg-white/20"
                    }`}
                  />
                  {item}
                </div>
              ),
            )}
          </div>

          <div className="col-span-12 p-4 md:col-span-9 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-mist">Customer intelligence</p>
                <p className="text-sm font-semibold text-white">Live overview</p>
              </div>
              <Badge className="border-lime/30 bg-lime/10 text-[10px] text-lime">
                <span className="mr-1.5 size-1.5 animate-pulse-slow rounded-full bg-lime" />
                Live
              </Badge>
            </div>

            <div className="mb-4 grid grid-cols-3 gap-3">
              {[
                { label: "Active signals", value: "1,284", delta: "+12.4%" },
                { label: "Conversion", value: "4.86%", delta: "+0.8%" },
                { label: "At-risk revenue", value: "$42.1k", delta: "-9.2%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/8 bg-white/[0.03] p-3"
                >
                  <p className="text-[10px] text-mist">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                    {stat.value}
                  </p>
                  <p
                    className={`text-[10px] ${
                      stat.delta.startsWith("-") ? "text-rose-400" : "text-lime"
                    }`}
                  >
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] text-mist">Customer growth</p>
                <p className="text-[10px] text-lime">Last 12 weeks</p>
              </div>
              <div className="flex h-24 items-end gap-1.5 sm:h-28">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-lime/25 to-lime"
                    style={{
                      height: `${height}%`,
                      opacity: 0.4 + (i / bars.length) * 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="glow-hero relative overflow-hidden bg-ink pt-36 pb-24 sm:pt-44">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-normal text-mist"
          >
            <span className="mr-2 size-1.5 rounded-full bg-lime" />
            Introducing Veliqo 2.0
          </Badge>

          <h1 className="text-balance text-[42px] font-semibold leading-[1.05] tracking-tight text-white sm:text-7xl">
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

        <DashboardVisual />
      </div>
    </section>
  );
}
