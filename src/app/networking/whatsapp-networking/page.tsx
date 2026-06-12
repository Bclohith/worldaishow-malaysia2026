import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { WhatsAppNetworkingContent } from "./WhatsAppNetworkingContent";

export const metadata: Metadata = {
  title: "WhatsApp Community | Networking | World AI Show Malaysia 2026",
  description: "Join the official WAIS Malaysia 2026 WhatsApp networking groups to connect with delegates, speakers, and sponsors before the event.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"];

export default function WhatsAppNetworkingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="WhatsApp Networking" />
      <WhatsAppNetworkingContent />
      <FooterSection />
    </main>
  );
}
