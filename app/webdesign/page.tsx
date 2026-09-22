import type { Metadata } from "next";
import { CustomSolutionsSection } from "@/components/webdesign/custom-solutions-section";
import { FlagshipSection } from "@/components/webdesign/flagship-section";
import { StagesSection } from "@/components/webdesign/stages-section";
import { CtaSection } from "@/components/subpage/cta-section";
import { HeroSection } from "@/components/subpage/hero-section";
import { IntroSection } from "@/components/subpage/intro-section";
import { PackagesSection } from "@/components/subpage/packages-section";
import { PageFooter } from "@/components/subpage/page-footer";
import { PageHeader } from "@/components/subpage/page-header";
import { ProcessSection } from "@/components/subpage/process-section";
import { cta, footer, headerCta, hero, intro, method, nav, pricing } from "@/content/webdesign";

const title = "Webdesign — VELYQO";
const description =
  "Individuelles Premium-Webdesign von Strategie bis Launch: VELYQO entwickelt Webauftritte, die Ihre Marke perfekt transportieren und messbare Ergebnisse erzielen.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/webdesign" },
  openGraph: { title, description, url: "/webdesign", siteName: "VELYQO", locale: "de_DE", type: "website" },
};

// Figma frame "VELYQO - Webdesign Subpage Exact" (77:307), 1440×5006. A light
// page with its own header and footer, like the PR/SEO/GEO page.
export default function Page() {
  return (
    <div className="bg-white font-geist text-obsidian">
      <PageHeader nav={nav} cta={headerCta} />
      <main>
        <HeroSection
          id="showcase"
          copy={hero}
          image={{ src: "/assets/webdesign/hero-mockup.jpg", width: 1152, height: 928 }}
          glow="/assets/webdesign/hero-glow.svg"
          leftClassName="lg:basis-[520px]"
          rightClassName="lg:basis-[740px]"
          imageClassName="aspect-[680/480] rounded-xl lg:max-w-[680px]"
          secondaryClassName="border-[#cecece]"
          sloganPositionClassName="right-[-6px] top-[calc(50%+14.5px)]"
          // The artwork column runs to the right edge of the frame
          innerClassName="lg:pr-0 frame:pr-0"
        />
        <IntroSection content={intro} leftClassName="lg:w-[42.1875%]" rightClassName="lg:w-[37.5%]" divided />
        <PackagesSection id="pakete" {...pricing} titleClassName="text-[38px]" tight />
        <FlagshipSection />
        <CustomSolutionsSection />
        <ProcessSection id="ablauf" content={method} compact />
        <StagesSection />
        <CtaSection
          content={cta}
          background="/assets/webdesign/cta-background.jpg"
          overlayClassName="bg-obsidian/88"
          productImage="/assets/webdesign/cta-product.jpg"
          bleed
        />
      </main>
      <PageFooter content={footer} />
    </div>
  );
}
