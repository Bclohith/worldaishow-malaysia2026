import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendAssociationSection } from "../page";

export const metadata: Metadata = {
  title: "Association Partner | Attend | World AI Show Malaysia 2026",
  description: "Collaborate as an association or ecosystem partner with World AI Show Malaysia 2026 and connect with ASEAN's growing AI network.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function AssociationPartnerPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Association Partner" />
      <AttendAssociationSection />
      <FooterSection />
    </main>
  );
}
