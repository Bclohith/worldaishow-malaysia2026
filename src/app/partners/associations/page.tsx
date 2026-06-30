import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { PartnersHero } from "../PartnersHero";
import { SponsorsGrid } from "../SponsorsGrid";
import { PartnerShowcase } from "../PartnerShowcase";
import { FooterSection } from "../../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Association Partners | World AI Show Malaysia 2026",
  description:
    "Meet our association, community, and support partners at World AI Show Malaysia 2026. Discover ecosystem collaboration opportunities.",
};

export default function AssociationsPage() {
  return (
    <main className="page-partners relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header 
        activeItem="Partner" 
        subNavItems={["Overview", "Sponsors", "Media Partners", "Association Partners"]} 
        activeSubNavItem="Association Partners" 
      />
      <PartnersHero />
      <SponsorsGrid filterType="associations" />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
