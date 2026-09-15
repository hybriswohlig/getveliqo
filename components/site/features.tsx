import {
  Activity,
  Blocks,
  BrainCircuit,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Real-time signal stream",
    description:
      "Every click, purchase, and support ticket flows into one live stream — normalized and deduplicated in milliseconds.",
    visual: "feed",
  },
  {
    icon: BrainCircuit,
    title: "Decision engine",
    description:
      "Veliqo scores every account against your goals and surfaces the single next best action, with the reasoning attached.",
    visual: "score",
  },
  {
    icon: Users,
    title: "Living segments",
    description:
      "Segments that update themselves as behavior changes. No stale lists, no nightly syncs, no CSV exports.",
    visual: "segments",
  },
  {
    icon: Zap,
    title: "One-click automations",
    description:
      "Turn any insight into a workflow — alert the owner, sync to your CRM, or trigger a campaign without leaving Veliqo.",
    visual: "flow",
  },
  {
    icon: Blocks,
    title: "60+ integrations",
    description:
      "Stripe, Salesforce, HubSpot, Segment, Zendesk and more connect in minutes with zero engineering required.",
    visual: "grid",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade trust",
    description:
      "SOC 2 Type II, GDPR-ready, SSO/SAML, and granular roles. Your data stays yours — never used for training.",
    visual: "shield",
  },
];

function CardVisual({ kind }: { kind: string }) {
  if (kind === "feed") {
    return (
      <div className="mt-5 space-y-2">
        {["Upgrade intent detected", "Churn risk resolved", "New buying signal"].map(
          (text, i) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2"
              style={{ opacity: 1 - i * 0.25 }}
            >
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="text-[11px] text-mist">{text}</span>
            </div>
          ),
        )}
      </div>
    );
  }
  if (kind === "score") {
    return (
      <div className="mt-5 flex items-end gap-1">
        {[40, 65, 45, 80, 55, 92, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent"
            style={{ height: `${h * 0.56}px` }}
          />
        ))}
      </div>
    );
  }
  if (kind === "segments") {
    return (
      <div className="mt-5 flex -space-x-3">
        {["from-accent", "from-accent-blue", "from-accent-soft", "from-white/40"].map(
          (color, i) => (
            <span
              key={i}
              className={`size-9 rounded-full border border-white/15 bg-gradient-to-br ${color} to-transparent`}
            />
          ),
        )}
      </div>
    );
  }
  return null;
}

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to{" "}
            <span className="font-display text-gradient">see clearly</span>
          </h2>
          <p className="mt-4 text-pretty text-mist">
            One workspace replaces the dashboards, spreadsheets, and gut-feel
            meetings your team runs on today.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="card-surface card-surface-hover rounded-2xl border-white/8 bg-transparent"
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <feature.icon className="size-5 text-accent-soft" />
                </div>
                <CardTitle className="text-base text-white">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed text-mist">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardVisual kind={feature.visual} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
