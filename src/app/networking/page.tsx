import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import { GradientText, Counter } from "../components/Shared";

export const metadata: Metadata = {
  title: "High-Value Networking | World AI Show Malaysia 2026",
  description: "Discover the high-value networking channels at World AI Show Malaysia 2026. Join C-suite matchmaking, private roundtables, and VIP lounges.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"];

export default function NetworkingPage() {
  const waysToConnect = [
    {
      title: "Attendee App",
      desc: "Schedule, speakers, sponsors and seamless networking — all from a single AI-powered app.",
      href: "/malaysia/networking/attendee-app",
      action: "Explore",
      badgeBg: "bg-[#00ceff]",
      actionColor: "text-[#00ceff]",
      borderColor: "border-[#00ceff]/15",
      hoverBorder: "hover:border-[#00ceff]/45",
      hoverTitle: "group-hover:text-[#00ceff]"
    },
    {
      title: "AI Matchmaking",
      desc: "Get recommended the right connections based on your interests, role, and goals.",
      href: "/malaysia/networking/ai-matchmaking",
      action: "Explore",
      badgeBg: "bg-[#C0F43C]",
      actionColor: "text-[#C0F43C]",
      borderColor: "border-[#C0F43C]/15",
      hoverBorder: "hover:border-[#C0F43C]/45",
      hoverTitle: "group-hover:text-[#C0F43C]"
    },
    {
      title: "AI Photo Gallery",
      desc: "Find every photo of yourself from the event instantly using AI face recognition.",
      href: "/malaysia/networking/photo-gallery",
      action: "Explore",
      badgeBg: "bg-[#926DFF]",
      actionColor: "text-[#926DFF]",
      borderColor: "border-[#926DFF]/15",
      hoverBorder: "hover:border-[#926DFF]/45",
      hoverTitle: "group-hover:text-[#926DFF]"
    },
    {
      title: "WhatsApp Networking",
      desc: "Join a pre-event peer community and start connecting 2 weeks before you arrive.",
      href: "/malaysia/networking/whatsapp-networking",
      action: "Explore",
      badgeBg: "bg-[#00ceff]",
      actionColor: "text-[#00ceff]",
      borderColor: "border-[#00ceff]/15",
      hoverBorder: "hover:border-[#00ceff]/45",
      hoverTitle: "group-hover:text-[#00ceff]"
    }
  ];

  const roles = [
    "Managing Director | CEO",
    "Chief Information Officer",
    "Chief Technology Officer",
    "Chief Digital Officer",
    "Chief Innovation Officer",
    "Chief Data Officer",
    "Chief Analytics Officer",
    "Chief Customer Officer"
  ];

  const industries = [
    "Banking, Financial Services and Insurance",
    "Manufacturing",
    "Retail and Ecommerce",
    "Healthcare and Pharma",
    "Education",
    "Telecommunications",
    "Supply Chain and Logistics",
    "Agriculture",
    "Energy and Utilities",
    "Government, Public Sector and Smart Cities",
    "Media and Entertainment",
    "Travel and Tourism"
  ];

  const industryBorders = [
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#C0F43C]/20",
    "border-[#C0F43C]/20",
    "border-[#926DFF]/20",
    "border-[#C0F43C]/20",
    "border-[#00CEFF]/20",
    "border-[#3b82f6]/20"
  ];

  return (
    <main className="page-networking relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Overview" />

      {/* ── Section 1: Hero ── */}
      <section
        className="relative pt-[220px] pb-[120px] overflow-hidden bg-cover bg-center flex items-center min-h-[700px] max-md:pt-[170px]"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2, 7, 19, 0.96) 0%, rgba(2, 7, 19, 0.8) 45%, rgba(2, 7, 19, 0.25) 100%), url('/malaysia/images/networking/networking-hero-bg.webp')`
        }}
      >
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10">
          <div className="max-w-[620px] w-full">
            <h1 className="m-0 text-white font-[850] leading-[1.03] tracking-[-2.5px] text-[clamp(44px,5.8vw,74px)]">
              Every <br />
              Conversation. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">By Design.</span>
            </h1>
            <p className="m-0 mt-6 text-white/70 text-[18px] leading-relaxed max-sm:text-[15px]">
              400+ of Asia-Pacific&apos;s most senior AI decision-makers. One room. Smart tools built to ensure every handshake, every conversation, and every connection you make is worth your time.
            </p>

            {/* Quick links buttons */}
            <div className="flex items-center gap-4 mt-9 max-sm:flex-col max-sm:items-stretch">
              <a
                href="/malaysia/attend/delegate#passes"
                className="px-8 py-[15px] rounded-full !text-black [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Get Your Pass ➔
              </a>
              <a
                href="/malaysia/sponsorship-enquiry"
                className="px-8 py-[15px] rounded-full text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-cyan/100 font-extrabold text-[14.5px] text-center transition-all duration-200 hover:-translate-y-0.5"
              >
                Enquire ➔
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-12 border-y border-white/5 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          <div className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 text-center divide-x divide-white/10">
            <div className="flex flex-col">
              <span className="text-[44px] font-[900] text-[#C0F43C] tracking-tight">
                <Counter end={1000} suffix="+" />
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Senior Attendees</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[44px] font-[900] text-[#C0F43C] tracking-tight">
                <Counter end={40} suffix="+" />
              </span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Countries Represented</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[44px] font-[900] text-[#C0F43C] tracking-tight">AI</span>
              <span className="text-[12.5px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5">Powered Matchmaking</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Four Powerful Ways to Connect ── */}
      <section className="relative py-24 bg-[#030b19]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">

          {/* Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#18d4ff]/10 text-[#18d4ff] border border-[#18d4ff]/20 mb-5 inline-block">
              The Full Experience
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0">
              The Four Powerful <GradientText>Ways to Connect</GradientText>
            </h2>
            <p className="m-0 mt-5 text-white/60 text-[16px] leading-relaxed max-sm:text-[14px]">
              Malaysia is rapidly positioning itself as Southeast Asia&apos;s most strategic hub for artificial intelligence and data infrastructure. Backed by strong government commitment under the National AI Roadmap 2030, the country has created a highly conducive environment for innovation, investment, and large-scale AI deployment.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {waysToConnect.map((way) => (
              <a
                key={way.title}
                href={way.href}
                className={`group relative overflow-hidden p-8 border ${way.borderColor} ${way.hoverBorder} rounded-[24px] bg-[#050c1c]/50 hover:bg-[#050c1c]/80 shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between no-underline cursor-pointer`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`w-12 h-12 rounded-2xl flex items-center justify-center ${way.badgeBg}`}>
                      <img
                        src="/malaysia/images/networking/Icon.webp"
                        alt="Icon"
                        className="w-[18px] h-[18px] object-contain brightness-0 invert-0 select-none"
                      />
                    </span>
                  </div>

                  <h3 className={`m-0 text-white font-extrabold text-[19px] tracking-tight ${way.hoverTitle} transition-colors`}>
                    {way.title}
                  </h3>
                  <p className="m-0 mt-3 text-white/50 text-[13.5px] leading-relaxed">
                    {way.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className={`inline-flex items-center gap-1.5 text-[14px] font-bold transition-all ${way.actionColor}`}>
                    {way.action} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">➔</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 3: 400+ Leaders. One Room. ── */}
      <section className="relative py-24 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-12 max-[980px]:grid-cols-1 max-[980px]:gap-12">

            {/* Left Column: Heading and Roles List */}
            <div className="flex flex-col">
              <span className="text-white/40 text-[13px] font-bold font-mono tracking-[2px] uppercase mb-3 block">
                In the Room
              </span>
              <h2 className="font-[850] text-white leading-[1.1] tracking-[-2px] text-[clamp(36px,4.5vw,52px)] m-0 mb-8">
                1000+ Leaders.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">One Room.</span>
              </h2>

              {/* Roles List */}
              <div className="flex flex-col gap-3">
                {roles.map((role) => (
                  <div
                    key={role}
                    className="px-6 py-4 text-[14.5px] font-bold text-white/80 border border-[#2a2c4e] rounded-[14px] bg-[#050c1c]/10 hover:border-cyan/30 hover:bg-[#050c1c]/30 hover:text-white transition-all duration-200"
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Industries represented & Starts Before Day One panel */}
            <div className="flex flex-col gap-8">

              {/* Industry Represented tags (No outer panel border, directly on page background) */}
              <div>
                <h3 className="m-0 mb-5 text-white font-extrabold text-[18px] tracking-tight">
                  Industries Represented
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industries.map((ind, i) => {
                    const borderColor = industryBorders[i % industryBorders.length];
                    return (
                      <span
                        key={ind}
                        className={`px-5 py-2.5 rounded-full text-[13.5px] font-bold border ${borderColor} text-white/90 hover:text-white transition-all duration-200`}
                        style={{ backgroundColor: "#4d6f998c" }}
                      >
                        {ind}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Starts Before Day One Panel */}
              <div
                className="p-8 border border-[#926DFF]/30 rounded-[24px] shadow-[0_12px_32px_rgba(146,109,255,0.04)] relative overflow-hidden group hover:border-[#926DFF]/50 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(146, 109, 255, 0.12) 0%, rgba(146, 109, 255, 0.02) 100%), #040b1e"
                }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_80%_20%,rgba(146,109,255,0.08),transparent_70%)] pointer-events-none"></div>
                <h3 className="m-0 text-white font-[850] text-[19px] tracking-tight mb-3">
                  Your Network Starts <span className="text-[#a78bfa]">Before Day One</span>
                </h3>
                <p className="m-0 text-white/70 text-[14px] leading-relaxed">
                  Registered delegates get early access to the event app and WhatsApp community 2 weeks before the summit — browse and filter the attendee list, set meetings, and talk in already connected.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Section 4: One Pass. Every Connection. ── */}
      <section className="relative py-24 bg-[#030b19] border-t border-white/5">
        <div className="w-[min(820px,calc(100%-48px))] mx-auto relative overflow-hidden p-12 border border-[#C0F43C]/20 rounded-[28px] bg-gradient-to-br from-[#040d1f] to-[#020713] text-center shadow-[0_24px_62px_rgba(0,0,0,0.5)] max-sm:p-8">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C0F43C]/60 to-transparent"></div>

          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.5vw,38px)] m-0">
            One Pass. <GradientText>Every Connection.</GradientText>
          </h2>
          <p className="m-0 mt-4 text-white/58 text-[15px] leading-relaxed max-w-[580px] mx-auto">
            Secure your place at World AI Show Malaysia 2026 and unlock the full networking suite — AI matchmaking, the event app, WhatsApp community, and a room of 700+ senior AI decision-makers.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="/malaysia/attend/delegate#passes"
              className="px-8 py-3.5 rounded-full text-black [color:#06111f!important] bg-[#C0F43C] font-extrabold text-sm shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Get Your Pass ➔
            </a>
            <a
              href="/malaysia/sponsorship-enquiry"
              className="px-8 py-3.5 rounded-full border border-white/10 text-white bg-[#030a18]/30 font-extrabold text-sm shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:bg-white/5 hover:border-[#18d4ff]/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              Enquire About Sponsorship ➔
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
