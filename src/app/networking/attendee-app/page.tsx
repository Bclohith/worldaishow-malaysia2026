import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendeeAppContent } from "./AttendeeAppContent";

export const metadata: Metadata = {
  title: "Attendee APP | Networking | World AI Show Malaysia 2026",
  description: "Official Event Application of World AI Show Malaysia 2026. Browse agenda, network with delegates, and coordinate meetings.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"];

export default function AttendeeAppPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Attendee APP" />
      <AttendeeAppContent />
      <FooterSection />
    </main>
  );
}
