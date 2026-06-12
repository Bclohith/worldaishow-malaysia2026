import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaLiveTimeline } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Timeline & Sessions | Agenda | World AI Show Malaysia 2026",
  description: "View the live interactive event timeline, keynote listings, panels, fireside chats, search sessions, and filtering tools.",
};

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

export default function AgendaSessionsPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Agenda" />
      <AgendaLiveTimeline />
      <FooterSection />
    </main>
  );
}
