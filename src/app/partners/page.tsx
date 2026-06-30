import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { PartnersHero } from "./PartnersHero";
import { SponsorsGrid } from "./SponsorsGrid";
import { PartnerShowcase } from "./PartnerShowcase";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Sponsors & Partners | World AI Show Malaysia 2026",
  description:
    "Meet our sponsors, governing bodies, and ecosystem partners at World AI Show Malaysia 2026. Discover sponsorship packages and collaboration opportunities.",
};

const subNav = ["Overview", "Sponsors", "Exhibitors", "Media", "Associations"];

import { getKonfHubSponsors } from "../api/konfhub-sponsors/route";

export default async function PartnersPage() {
  const sponsorsData = await getKonfHubSponsors();

  return (
    <main className="page-partners relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header 
        activeItem="Partner" 
        subNavItems={["Overview", "Sponsors", "Media Partners", "Association Partners"]} 
        activeSubNavItem="Overview" 
      />
      <PartnersHero />
      <SponsorsGrid initialData={sponsorsData} filterType="all" />
      <PartnerShowcase />
      <FooterSection />
    </main>
  );
}
