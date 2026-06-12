"use client";

import { useState } from "react";
import { GradientText } from "../../components/Shared";

export function AIMatchmakingContent() {
  const [selectedFocus, setSelectedFocus] = useState<string>("AI & Data");

  const focusAreas = [
    "AI & Data",
    "Marketing & Branding",
    "Finance & Investment",
    "Leadership & Management",
    "Sustainable Tech",
    "Health & Wellness",
    "Startup & Entrepreneurship",
    "Digital Transformation",
    "Product Development"
  ];

  return (
    <div className="relative w-full text-white font-space-grotesk">
      <section 
        className="relative net-inner-hero pt-[250px] pb-24 overflow-hidden"
        style={{
          backgroundImage: `url('/malaysia/images/networking/ai-matchmaking-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent'
        }}
      >
        {/* Soft Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#00ceff]/8 blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0F43C]/4 blur-[130px] pointer-events-none z-0"></div>

        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="text-[#18d4ff] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
              AI-Powered Matchmaking
            </span>
            <h1 className="font-[850] text-white leading-[1.03] tracking-[-2.5px] text-[clamp(44px,5.4vw,72px)] m-0">
              Meet the Right People. <br />
              <GradientText>Every Time.</GradientText>
            </h1>
            <p className="m-0 mt-6 text-white/70 text-[18px] leading-relaxed max-sm:text-[15px]">
              Set your goals once. Our AI reads your role, interests, and intent — then surfaces the connections most likely to matter. No cold introductions. No wasted handshakes.
            </p>

            <div className="mt-8 w-full text-left">
              <span className="block text-[11px] uppercase tracking-[2px] font-bold text-white/40 mb-4 font-mono">
                Pick your focus areas — AI does the rest
              </span>
              <div className="flex flex-wrap gap-[10px] max-w-[620px]">
                {focusAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedFocus(area)}
                    className={`flex items-center justify-center h-[36px] px-[16px] text-[11.5px] font-extrabold uppercase tracking-[1px] rounded-[4px] cursor-pointer transition-all duration-200 outline-none select-none ${
                      selectedFocus === area
                        ? "bg-[#C0F43C] text-black border border-[#C0F43C] shadow-[0_0_15px_rgba(192,244,60,0.3)]"
                        : "text-[#8199b5] border border-[#926DFF] bg-[rgba(77,111,153,0.55)] hover:bg-[rgba(77,111,153,0.7)] hover:border-[#b196ff] hover:text-white"
                    }`}
                  >
                    <span className="leading-none mt-[1.5px] whitespace-nowrap">
                      {area}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right People. Real Connections. Section */}
      <section className="relative py-24 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#18d4ff]/10 text-[#18d4ff] border border-[#18d4ff]/20 mb-5 inline-block">
              AI Powered Platform · KonfHub
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0">
              Right People. <GradientText>Real Connections.</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
            
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
                  className="w-[14px] h-[14px] object-contain" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Meet the right people, not just more people
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Get personalized recommendations based on interests, role, and goals</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Have meaningful, high-quality conversations instead of random networking</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Leave with valuable connections and real opportunities</p>
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
                  className="w-[14px] h-[14px] object-contain filter brightness-0" 
                />
                For Sponsors & Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Connect with high-intent, relevant prospects
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Focus on quality leads, not just volume</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Maximize ROI through meaningful interactions</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Increase booth engagement via targeted attendee recommendations</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}