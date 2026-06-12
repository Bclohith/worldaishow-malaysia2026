import type { Metadata } from "next";
import { AgendaPage } from "./AgendaPage";
export const metadata: Metadata = {
  title: "Agenda | World AI Show Malaysia 2026",
  description:
    "Explore the World AI Show Malaysia agenda, two days of keynotes, panels, fireside chats, strategic AI themes and speaker opportunities."
};
export default function Page() {
  return <AgendaPage />;
}
 