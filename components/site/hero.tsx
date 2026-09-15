import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function DashboardVisual() {
  const bars = [34, 52, 41, 66, 58, 78, 64, 88, 72, 95, 83, 100];

  return (
    <div className="relative mx-auto mt-16 w-full max-w-5xl animate-float px-4 sm:px-0">
      <div
        aria-hidden
        className="absolute -inset-x-8 -top-12 bottom-0 rounded-[40px] bg-[radial-gradient(ellipse_60%_60%_at_50%_30%,rgba(139,124,255,0.28),transparent_70%)] blur-2xl"
      />
      <div className="card-surface relative overflow-hidden rounded-2xl shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <div className="ml-4 hidden h-6 w-56 items-center rounded-md bg-white/5 px-2 text-[10px] text-mist sm:flex">
            app.getveliqo.com/overview
          </div>
        </div>

        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-3 hidden border-r border-white/8 p-4 md:block">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-accent to-accent-blue text-[10px] font-bold">
                V
              </span>
              <span className="text-xs font-semibold tracking-[0.15em]">
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
                      i === 0 ? "bg-accent" : "bg-white/20"
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
                <p className="text-[11px] text-mist">Revenue intelligence</p>
                <p className="text-sm font-semibold">Live overview</p>
              </div>
              <Badge className="border-accent/30 bg-accent/10 text-[10px] text-accent-soft">
                <span className="mr-1.5 size-1.5 animate-pulse-slow rounded-full bg-accent" />
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
                  <p className="mt-1 text-sm font-semibold sm:text-base">
                    {stat.value}
                  </p>
                  <p
                    className={`text-[10px] ${
                      stat.delta.startsWith("-")
                        ? "text-rose-300"
                        : "text-emerald-300"
                    }`}
                  >
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[11px] text-mist">Decision velocity</p>
                <p className="text-[10px] text-accent-soft">Last 12 weeks</p>
              </div>
              <div className="flex h-24 items-end gap-1.5 sm:h-28">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/30 to-accent"
                    style={{ height: `${height}%`, opacity: 0.45 + (i / bars.length) * 0.55 }}
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
    <section className="glow-hero relative overflow-hidden pt-36 pb-20 sm:pt-44">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-normal text-mist"
          >
            <span className="mr-2 size-1.5 rounded-full bg-accent" />
            Introducing Veliqo Signals 2.0
          </Badge>

          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Every customer signal,{" "}
            <span className="font-display text-gradient">one clear decision.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-mist sm:text-lg">
            Veliqo unifies your scattered customer data into a live intelligence
            layer — so your team sees what matters, the moment it matters.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full rounded-xl bg-white px-6 text-ink hover:bg-white/90 sm:w-auto"
            >
              <Link href="#cta">
                Start free
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 sm:w-auto"
            >
              <Link href="#how-it-works">
                <Play className="mr-1 size-4" />
                Watch demo
              </Link>
            </Button>
          </div>
        </div>

        <DashboardVisual />
      </div>
    </section>
  );
}
