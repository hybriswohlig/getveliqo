import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function AreaChart() {
  const points = [
    [0, 78], [60, 70], [120, 74], [180, 58], [240, 62], [300, 48],
    [360, 52], [420, 38], [480, 42], [540, 26], [600, 30], [660, 14],
  ];
  const line = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
    .join(" ");
  const area = `${line} L660,100 L0,100 Z`;

  return (
    <svg
      viewBox="0 0 660 100"
      preserveAspectRatio="none"
      className="h-28 w-full sm:h-32"
    >
      <defs>
        <linearGradient id="limeFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bafa04" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#bafa04" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {[25, 50, 75].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="660"
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.5"
        />
      ))}
      <path d={area} fill="url(#limeFill)" />
      <path
        d={line}
        fill="none"
        stroke="#bafa04"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="660" cy="14" r="3.5" fill="#bafa04" />
      <circle cx="660" cy="14" r="7" fill="#bafa04" opacity="0.25" />
    </svg>
  );
}

function DashboardVisual() {
  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl px-4 sm:px-0">
      <div
        aria-hidden
        className="glow-dashboard absolute -inset-x-16 top-16 -bottom-32 blur-3xl"
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
            <div className="mt-6 rounded-lg border border-white/8 bg-white/[0.03] p-3">
              <p className="text-[10px] text-mist">Weekly digest</p>
              <p className="mt-1 text-[11px] font-medium text-white">
                12 new decisions ready
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-lime" />
              </div>
            </div>
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
              <AreaChart />
              <div className="mt-2 flex justify-between text-[9px] text-mist">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                  <span key={m}>{m}</span>
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

        <DashboardVisual />
      </div>
    </section>
  );
}
