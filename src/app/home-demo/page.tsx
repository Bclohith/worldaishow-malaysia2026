import { Header } from "../components/sections/Header";
import { HeroSectionDemo } from "../components/sections/HeroSectionDemo";
import { StatsSection } from "../components/sections/StatsSection";
import { EcosystemSection } from "../components/sections/EcosystemSection";
import { AgendaSection } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { NetworkingSection } from "../components/sections/NetworkingSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { SponsorsSection } from "../components/sections/SponsorsSection";
import { CTASection } from "../components/sections/CTASection";
import { OrganizerSection } from "../components/sections/OrganizerSection";
import { FooterSection } from "../components/sections/FooterSection";

export default function HomeDemo() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#020b1c]">
      <Header />
      <HeroSectionDemo />
      <StatsSection />
      <EcosystemSection />
      <AgendaSection />
      <SpeakersSection />
      <NetworkingSection />
      <TestimonialsSection />
      <SponsorsSection />
      <CTASection />
      <OrganizerSection />
      <FooterSection />
    </main>
  );
}
