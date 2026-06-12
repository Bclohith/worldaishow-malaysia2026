import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaCallForSpeakers } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Call for Speakers | Agenda | World AI Show Malaysia 2026",
  description: "Apply to take the stage as a speaker at World AI Show Malaysia 2026. Join global voices defining Southeast Asia's AI decade.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function CallForSpeakersPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Call for Speakers" />
      <AgendaCallForSpeakers />
      <FooterSection />
    </main>
  );
}
