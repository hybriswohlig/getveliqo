import type { Metadata } from "next";
import { CtaSection } from "@/components/pr-seo-geo/cta-section";
import { FaqSection } from "@/components/pr-seo-geo/faq-section";
import { HeroSection } from "@/components/pr-seo-geo/hero-section";
import { IntroSection } from "@/components/pr-seo-geo/intro-section";
import { MetricsSection } from "@/components/pr-seo-geo/metrics-section";
import { PageFooter } from "@/components/pr-seo-geo/page-footer";
import { PageHeader } from "@/components/pr-seo-geo/page-header";
import { PricingSection } from "@/components/pr-seo-geo/pricing-section";
import { ProcessSection } from "@/components/pr-seo-geo/process-section";
import { ServicesSection } from "@/components/pr-seo-geo/services-section";

const title = "PR, SEO & GEO — VELYQO";
const description =
  "Sichtbarkeit in Wirtschaftsmedien, Google und generativen KI-Antworten: VELYQO positioniert B2B-Marken mit integrierter PR, SEO und GEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pr-seo-geo" },
  openGraph: { title, description, url: "/pr-seo-geo", siteName: "VELYQO", locale: "de_DE", type: "website" },
};

// Figma frame "pr-seo-geo-subpage-separate" (108:4), 1440×5877. A light page
// with its own header and footer, unlike the dark homepage and legal pages.
export default function Page() {
  return (
    <div className="bg-white font-geist text-obsidian">
      <PageHeader />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <MetricsSection />
        <ProcessSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <PageFooter />
    </div>
  );
}
