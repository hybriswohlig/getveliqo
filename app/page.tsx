import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { LogoCloud } from "@/components/site/logo-cloud";
import { Features } from "@/components/site/features";
import { Showcase } from "@/components/site/showcase";
import { Testimonials } from "@/components/site/testimonials";
import { Cta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <Showcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
