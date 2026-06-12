"use client";

import { GradientText } from "../../components/Shared";

export function WhatsAppNetworkingContent() {
  const groups = [
    "AI Leaders",
    "AI & Digital",
    "BFSI",
    "Retail & E-commerce",
    "Healthcare AI",
    "Contact Centres",
    "AI Technology",
    "Founders & CEOs"
  ];

  return (
    <div className="relative w-full text-white font-space-grotesk">
      
      {/* ── Section 1: Immersive Hero Section ── */}
      <section 
        className="relative net-inner-hero pt-[250px] pb-24 overflow-hidden"
        style={{ 
          backgroundImage: `url('/malaysia/images/networking/whatsapp-networking-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent'
        }}
      >
        {/* Soft Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#25D366]/6 blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0"></div>

        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 text-left flex flex-col items-start">
          
          <div className="max-w-[620px] w-full">
            <span className="block text-[12px] uppercase tracking-[2px] font-bold text-[#25D366] mb-3.5 font-mono">
              WhatsApp Community
            </span>
            <h1 className="font-[850] text-white leading-none tracking-[-2.5px] text-[clamp(44px,5.5vw,66px)] m-0">
              Walk in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">Already Connected.</span>
            </h1>
            <p className="m-0 mt-5 text-white/70 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              Registered delegates get exclusive entry to a curated WhatsApp community 2 weeks before the summit. Identify the right people, start the right conversations, and arrive with momentum – not a blank slate.
            </p>

            {/* Peer Networking Groups tags matching Screenshot 2 aesthetic */}
            <div className="mt-9">
              <span className="block text-[11.5px] uppercase tracking-[2.5px] font-bold text-white/40 mb-4 font-mono">
                Peer networking groups
              </span>
              <div className="flex flex-wrap gap-2.5 max-w-[560px]">
                {groups.map((group) => (
                  <div
                    key={group}
                    className="flex items-center h-[36px] pt-[10px] pb-[8px] px-[12px] border border-[#926DFF] rounded-[4px] bg-[rgba(77,111,153,0.55)] text-[#8199b5] text-[11.5px] font-extrabold uppercase tracking-[1.5px] select-none whitespace-nowrap hover:bg-[rgba(77,111,153,0.7)] hover:border-[#b196ff] transition-all duration-200"
                  >
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Comparison Grid Section ── */}
      <section className="relative py-24 bg-[#020814] border-t border-white/5 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_70%_20%,rgba(37,211,102,0.02),transparent_40%)]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-[660px] mx-auto">
            <span className="text-[#25D366] font-mono text-[11px] uppercase tracking-[3px] font-bold block mb-3">
              2 Weeks Early.
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-2px] text-[clamp(42px,5.5vw,62px)] m-0">
              Zero<br />
              <GradientText>Cold Introductions.</GradientText>
            </h2>
            <p className="m-0 mt-4 text-white/60 text-[16px] md:text-[18px] tracking-wide font-medium">
              Community access unlocks the moment you register
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div 
              className="p-10 rounded-[28px] border-[4px] border-[#22446D] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6"
              style={{
                background: "linear-gradient(0deg, rgba(46, 60, 77, 0.55), rgba(46, 60, 77, 0.55)), linear-gradient(94.42deg, rgba(255, 255, 255, 0.09) 0.77%, rgba(255, 255, 255, 0) 33.68%), linear-gradient(95.06deg, rgba(146, 109, 255, 0) 69.31%, rgba(146, 109, 255, 0.2) 99.59%)"
              }}
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#C0F43C] text-black mb-6">
                <img 
                  src="/malaysia/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Day one starts two weeks early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Exclusive pre-event community access 2 weeks before the summit</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Join role-specific groups — AI Leaders, BFSI, AI & Digital, and more</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Identify and request 1:1 meetings with the people you want to meet</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Get event day alerts, session reminders, and real-time updates</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div 
              className="p-10 rounded-[28px] border-[4px] border-[#22446D] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6"
              style={{
                background: "linear-gradient(0deg, rgba(46, 60, 77, 0.55), rgba(46, 60, 77, 0.55)), linear-gradient(94.42deg, rgba(255, 255, 255, 0.09) 0.77%, rgba(255, 255, 255, 0) 33.68%), linear-gradient(95.06deg, rgba(146, 109, 255, 0) 69.31%, rgba(146, 109, 255, 0.2) 99.59%)"
              }}
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#926DFF] text-white mb-6">
                <img 
                  src="/malaysia/icons/attendee-app/exhibitor.webp" 
                  alt="Sponsors & Exhibitors" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert" 
                />
                For Sponsors & Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Warm up your audience early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Set featured visibility in the pre-event WhatsApp community</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Share product teasers and thought leadership before the event</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Direct WhatsApp access to engaged, opted-in delegates</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Post-event follow-up channel to continue the conversation</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Call to Action (Your community is waiting...) ── */}
      <section className="relative py-28 bg-[#020814] border-t border-white/5 overflow-hidden">
        {/* Soft Ambient Spotlight */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#C0F43C]/5 blur-[100px] pointer-events-none z-0"></div>
        
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 text-center">
          <h2 className="font-[850] text-white leading-tight tracking-[-2px] text-[clamp(36px,5vw,54px)] m-0">
            Your community is waiting.
          </h2>
          <p className="m-0 mt-4 text-[clamp(18px,2.2vw,24px)] font-bold text-white leading-normal max-w-[700px] mx-auto">
            Register and get <GradientText>WhatsApp access instantly.</GradientText>
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black [color:#06111f!important] bg-[#C0F43C] font-extrabold text-sm shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105"
            >
              Get Your Pass
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 object-contain"
              >
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66666 4L12.6667 8L8.66666 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}