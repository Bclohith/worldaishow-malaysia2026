import { Header } from "./components/sections/Header";
import { FooterSection } from "./components/sections/FooterSection";
import { InteractiveBg } from "./components/InteractiveBg";
import { GradientText } from "./components/Shared";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden bg-[#020c21] text-white select-none">
      {/* Interactive canvas background */}
      <InteractiveBg />

      {/* Global Header Nav */}
      <Header />

      {/* Hero content overlay */}
      <div className="relative z-10 flex-grow flex items-center justify-center pt-[140px] pb-[80px]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[3px] bg-cyan/5 backdrop-blur-md animate-fadeIn">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse shadow-[0_0_10px_#00ceff]" />
            World AI Show Malaysia 2026
          </span>

          {/* Heading */}
          <h1 className="font-[850] text-white leading-[1.02] tracking-[-2.5px] text-[clamp(44px,6.8vw,88px)] max-w-[920px] mx-auto m-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Where Malaysia&apos;s <br />
            AI Decisions <GradientText>Get Made.</GradientText>
          </h1>

          {/* Subheading */}
          <p className="m-0 mt-6 text-white/70 text-[20px] max-sm:text-[16px] leading-relaxed max-w-[620px] mx-auto drop-shadow-sm font-light">
            An exclusive, invitation-only gathering connecting national policy makers, global tech giants, GLCs, enterprise builders, and sovereign infrastructure partners.
          </p>

          {/* Meta Info: Date & Venue */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[15px] font-mono tracking-wider text-white/50 bg-[#040812]/50 border border-white/5 p-4 px-8 rounded-full backdrop-blur-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#C0F43C]">📅</span> October 2026
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/20 max-sm:hidden" />
            <div className="flex items-center gap-2">
              <span className="text-[#C0F43C]">📍</span> Kuala Lumpur, Malaysia
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-full max-sm:px-4">
            <a
              href="/malaysia/sponsorship-enquiry"
              className="px-8 py-4 rounded-full text-[15px] font-extrabold text-black bg-[#C0F43C] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5 max-sm:w-full text-center"
            >
              Enquire About Sponsorship
            </a>
            <a
              href="/malaysia/attend/delegate#passes"
              className="px-8 py-4 rounded-full text-[15px] font-extrabold text-white border border-white/10 bg-[#030a18]/40 hover:bg-[#030a18]/80 hover:border-cyan transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-md max-sm:w-full text-center"
            >
              Get Delegate Pass
            </a>
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
