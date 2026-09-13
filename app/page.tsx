import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProgramSection, { Program } from "@/components/ProgramSection";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import {
  ScaleIcon,
  HeartIcon,
  BowlIcon,
  CapsuleIcon,
  ManIcon,
  AtomIcon,
  HairIcon,
  SparkleIcon,
} from "@/components/Icons";

const programs: Program[] = [
  { id: "weight-loss", key: "weightLoss", accent: "brand", icon: <ScaleIcon /> },
  { id: "womens-health", key: "womensHealth", accent: "rose", reverse: true, icon: <HeartIcon /> },
  { id: "nutrition", key: "nutrition", accent: "amber", icon: <BowlIcon /> },
  { id: "supplements", key: "supplements", accent: "sand", reverse: true, icon: <CapsuleIcon /> },
  { id: "mens-health", key: "mensHealth", accent: "blue", icon: <ManIcon /> },
  { id: "peptides", key: "peptides", accent: "violet", reverse: true, icon: <AtomIcon /> },
  { id: "hair", key: "hair", accent: "teal", icon: <HairIcon /> },
  { id: "skincare", key: "skincare", accent: "brand", reverse: true, icon: <SparkleIcon /> },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <TrustStrip />
        </Reveal>
        {programs.map((p) => (
          <Reveal key={p.id}>
            <ProgramSection program={p} />
          </Reveal>
        ))}
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
