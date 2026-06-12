import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaThemes } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Ecosystem Themes | Agenda | World AI Show Malaysia 2026",
  description: "Explore the four pillars shaping Malaysia's AI Ecosystem: Cloud & Infrastructure, Government & GLCs, Security & Governance.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function ThemesPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Themes" />
      <AgendaThemes />
      <FooterSection />
    </main>
  );
}
