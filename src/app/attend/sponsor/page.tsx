import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendSponsorSection } from "../page";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities | Attend | World AI Show Malaysia 2026",
  description: "Sponsor World AI Show Malaysia 2026. Reach 700+ AI decision-makers, generate qualified leads, and demonstrate thought leadership.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function SponsorPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Sponsor" />
      <AttendSponsorSection />
      <FooterSection />
    </main>
  );
}
