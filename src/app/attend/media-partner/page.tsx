import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendMediaSection } from "../page";

export const metadata: Metadata = {
  title: "Media Accreditation | Attend | World AI Show Malaysia 2026",
  description: "Apply for media accreditation for World AI Show Malaysia 2026. Cover ASEAN's leading artificial intelligence gathering.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function MediaPartnerPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Media Partner" />
      <AttendMediaSection />
      <FooterSection />
    </main>
  );
}
