import type { Metadata } from "next";
import { CtaSection } from "@/components/webdesign/cta-section";
import { FlagshipSection } from "@/components/webdesign/flagship-section";
import { HeroSection } from "@/components/webdesign/hero-section";
import { PhilosophySection } from "@/components/webdesign/philosophy-section";
import { PricingSection } from "@/components/webdesign/pricing-section";
import { ProcessSection } from "@/components/webdesign/process-section";
import { ProcessStrip } from "@/components/webdesign/process-strip";
import { SolutionsSection } from "@/components/webdesign/solutions-section";
import { WebdesignFooter } from "@/components/webdesign/webdesign-footer";
import { WebdesignHeader } from "@/components/webdesign/webdesign-header";

const description =
  "Wir konzipieren und entwickeln erstklassige Webauftritte, die Ihre Markenidentität perfekt transportieren, Besucher fesseln und messbare Ergebnisse erzielen.";

export const metadata: Metadata = {
  title: "Webdesign — VELYQO",
  description,
  openGraph: {
    title: "Webdesign — VELYQO",
    description,
    url: "/webdesign",
    siteName: "VELYQO",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Webdesign — VELYQO",
    description,
  },
};

// Figma frame "VELYQO - Webdesign Subpage Exact" (77:307), 1440×5006.
export default function WebdesignPage() {
  return (
    <div className="bg-paper font-geist text-carbon">
      <WebdesignHeader />
      <main>
        <HeroSection />
        <PhilosophySection />
        <PricingSection />
        <FlagshipSection />
        <SolutionsSection />
        <ProcessStrip />
        <ProcessSection />
        <CtaSection />
      </main>
      <WebdesignFooter />
    </div>
  );
}
