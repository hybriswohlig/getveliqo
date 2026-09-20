import type { Metadata } from "next";
import { RetentionSection } from "@/components/ecommerce/retention-section";
import { CtaSection } from "@/components/subpage/cta-section";
import { FaqSection } from "@/components/subpage/faq-section";
import { HeroSection } from "@/components/subpage/hero-section";
import { IntroSection } from "@/components/subpage/intro-section";
import { MetricsSection } from "@/components/subpage/metrics-section";
import { PackagesSection } from "@/components/subpage/packages-section";
import { PageFooter } from "@/components/subpage/page-footer";
import { PageHeader } from "@/components/subpage/page-header";
import { ProcessSection } from "@/components/subpage/process-section";
import {
  cta,
  faq,
  footer,
  headerCta,
  hero,
  intro,
  method,
  metrics,
  nav,
  pricing,
  services,
} from "@/content/ecommerce";

const title = "E-Commerce — VELYQO";
const description =
  "Onlineshops, die verkaufen: VELYQO konzipiert, baut und skaliert Ihre digitale Verkaufsplattform, von Shopify bis Headless, inklusive Checkout, Tracking und Performance-Marketing.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ecommerce" },
  openGraph: { title, description, url: "/ecommerce", siteName: "VELYQO", locale: "de_DE", type: "website" },
};

// Figma frame "ecommerce-service-subpage" (119:4), 1440×6776. A light page
// with its own header and footer, like the PR/SEO/GEO page.
export default function Page() {
  return (
    <div className="bg-white font-geist text-obsidian">
      <PageHeader nav={nav} cta={headerCta} />
      <main>
        <HeroSection
          id="ecommerce"
          copy={hero}
          image={{ src: "/assets/ecommerce/hero.jpg", width: 1400, height: 788 }}
          glow="/assets/shared/hero-glow.svg"
          leftClassName="lg:basis-[580px]"
          rightClassName="lg:basis-[680px]"
          imageClassName="aspect-[676/381] lg:max-w-[676px]"
          titleClassName="text-[clamp(40px,4.7222vw,68px)] leading-[1.05]"
          sloganClassName="text-[#8a8a95]"
          glowOverImage
          innerClassName="lg:min-h-[680px]"
        />
        <IntroSection content={intro} />
        <PackagesSection id="leistungen" {...services} />
        <MetricsSection id="performance" content={metrics} />
        <ProcessSection id="fahrplan" content={method} />
        <RetentionSection />
        <PackagesSection id="pakete" {...pricing} titleClassName="text-[38px]" />
        <FaqSection content={faq} />
        <CtaSection content={cta} />
      </main>
      <PageFooter content={footer} />
    </div>
  );
}
