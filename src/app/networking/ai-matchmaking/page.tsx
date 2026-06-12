import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AIMatchmakingContent } from "./AIMatchmakingContent";

export const metadata: Metadata = {
  title: "AI Matchmaking | Networking | World AI Show Malaysia 2026",
  description: "Connect with the right people at WAIS Malaysia 2026 through AI-powered business matchmaking. Schedule 1:1 meetings with enterprise leaders.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"];

export default function AIMatchmakingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="AI Matchmaking" />
      <AIMatchmakingContent />
      <FooterSection />
    </main>
  );
}
