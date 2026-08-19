import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "../partners/PartnersHero";
import { SponsorsGrid } from "../partners/SponsorsGrid";
import { PartnerShowcase } from "../partners/PartnerShowcase";
import { VirtualTourSection } from "../components/sections/VirtualTourSection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Exhibition & Virtual Tour | World AI Show Malaysia 2026",
  description:
    "Explore our interactive 360-degree virtual tour of the Exhibition and Main Hall. Meet our sponsors, governing bodies, and ecosystem partners.",
};

export default function ExhibitionPage() {
  return (
    <main className="page-exhibition relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Partner" />

      {/* Duplicated Partners Content */}
      <PartnersHero />
      <SponsorsGrid />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
