import type { Metadata } from "next";
import { CtaSection } from "@/components/subpage/cta-section";
import { FaqSection } from "@/components/subpage/faq-section";
import { HeroSection } from "@/components/subpage/hero-section";
import { IntroSection } from "@/components/subpage/intro-section";
import { MetricsSection } from "@/components/subpage/metrics-section";
import { PackagesSection } from "@/components/subpage/packages-section";
import { PageFooter } from "@/components/subpage/page-footer";
import { PageHeader } from "@/components/subpage/page-header";
import { ProcessSection } from "@/components/subpage/process-section";
import { cta, faq, footer, headerCta, hero, intro, method, metrics, nav, pricing, services } from "@/content/pr-seo-geo";

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
      <PageHeader nav={nav} cta={headerCta} />
      <main>
        <HeroSection
          id="sichtbarkeit"
          copy={hero}
          image={{ src: "/assets/pr-seo-geo/hero-mockup.jpg", width: 1264, height: 848 }}
          glow="/assets/shared/hero-glow.svg"
          leftClassName="lg:basis-[560px]"
          rightClassName="lg:basis-[680px]"
          imageClassName="aspect-[640/440] rounded-xl lg:max-w-[640px]"
        />
        <IntroSection content={intro} />
        <PackagesSection id="leistungen" {...services} />
        <MetricsSection content={metrics} />
        <ProcessSection id="prozess" content={method} />
        <PackagesSection id="modelle" {...pricing} titleClassName="text-[38px]" />
        <FaqSection content={faq} />
        <CtaSection content={cta} />
      </main>
      <PageFooter content={footer} />
    </div>
  );
}
