import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { SocialProof } from "@/components/social-proof";
import { Problems } from "@/components/problems";
import { HowItWorks } from "@/components/how-it-works";
import { ProductShowcase } from "@/components/product-showcase";
import { Features } from "@/components/features";
import { Cities } from "@/components/cities";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { EarlyLaunchModal } from "@/components/early-launch-modal";
import { prisma } from "@/lib/prisma";

const BASE_COUNT = 2400;

export const dynamic = "force-dynamic";

export default async function Home() {
  let count = BASE_COUNT;
  try {
    const entries = await prisma.waitlistEntry.count();
    count = entries + BASE_COUNT;
  } catch {
    // DB unavailable — fall back to base count so the page still renders
  }

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <SocialProof count={count} />
      <Problems />
      <HowItWorks />
      <ProductShowcase />
      <Features />
      <Cities />
      <FAQ />
      <CTASection />
      <Footer />
      <EarlyLaunchModal />
    </>
  );
}
