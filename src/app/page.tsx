import { Header } from "./components/sections/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { EcosystemSection } from "./components/sections/EcosystemSection";
import { AgendaSection } from "./components/sections/AgendaSection";
import { SpeakersSection } from "./components/sections/SpeakersSection";
import { NetworkingSection } from "./components/sections/NetworkingSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { SponsorsSection } from "./components/sections/SponsorsSection";
import { CTASection } from "./components/sections/CTASection";
import { FAQSection } from "./components/sections/FAQSection";
import { OrganizerSection } from "./components/sections/OrganizerSection";
import { FooterSection } from "./components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#020b1c]">
      <Header />
      <HeroSection />
      <StatsSection />
      <EcosystemSection />
      <AgendaSection />
      <SpeakersSection />
      <NetworkingSection />
      <TestimonialsSection />
      <SponsorsSection />
      <CTASection />
      {/* <FAQSection /> - Hidden per user request */}
      <OrganizerSection />
      <FooterSection />
    </main>
  );
}
