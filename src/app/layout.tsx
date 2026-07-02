import type { Metadata } from "next";
import { Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "World AI Show Malaysia 2026",
  description:
    "World AI Show Malaysia 2026 brings together Malaysia's AI decision-makers, infrastructure leaders, enterprise builders, and ecosystem partners in Kuala Lumpur.",
  icons: {
    icon: "https://worldaishow.com/indonesia/assets/images/favicon.png",
  },
  openGraph: {
    title: "World AI Show Malaysia 2026",
    description:
      "Where Malaysia's AI decisions get made. Invitation-only, Kuala Lumpur.",
    type: "website",
    url: "https://worldaishow.com/malaysia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
