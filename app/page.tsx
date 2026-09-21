import { CommunicationSection } from "@/components/home/communication-section";
import { HeroSection } from "@/components/home/hero/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { LiquidGlassCursor } from "@/components/home/liquid-glass-cursor";
import { ServicesSection } from "@/components/home/services/services-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <LiquidGlassCursor />
        <CommunicationSection />
        <IntroSection />
        <ServicesSection />
      </main>
      <SiteFooter />
    </>
  );
}
