import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { PhotoGalleryContent } from "./PhotoGalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Networking | World AI Show Malaysia 2026",
  description: "View photos from World AI Show Malaysia 2026 — keynotes, panels, networking sessions, and exhibition highlights.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"];

export default function PhotoGalleryPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Photo Gallery" />
      <PhotoGalleryContent />
      <FooterSection />
    </main>
  );
}
