import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Features } from "@/components/features";
import { StatBlock } from "@/components/stat-block";
import { Footer } from "@/components/footer";
import { prisma } from "@/lib/prisma";

const BASE_COUNT = 2400;

export const dynamic = "force-dynamic";

export default async function Home() {
  const entries = await prisma.waitlistEntry.count();
  const count = entries + BASE_COUNT;

  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Features />
      <StatBlock count={count} />
      <Footer />
    </>
  );
}
