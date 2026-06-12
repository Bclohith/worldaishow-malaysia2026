"use client";

import React from "react";

export function SpeakersCTASection() {
  return (
    <section className="relative w-full overflow-hidden border-t border-white/5" id="cta">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full items-stretch">
        {/* Left Column - Lime Green */}
        <div 
          className="bg-[#C0F43C] py-[96px] pl-[max(24px,calc((100vw-1120px)/2))] pr-[48px] max-lg:px-[24px] max-lg:py-[64px] flex flex-col justify-between h-full"
          style={{ minHeight: "500px" }}
        >
          <div>
            {/* Alignment Spacer matching Category Label on Right to ensure perfect horizontal baseline align */}
            <span className="block text-[12px] font-extrabold uppercase tracking-[2px] mb-5 font-mono opacity-0 select-none max-lg:hidden">
              &nbsp;
            </span>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-[#020814] max-sm:gap-4">
              <div>
                <strong className="block text-[32px] md:text-[38px] font-black leading-none font-space-grotesk tracking-tight">700+</strong>
                <span className="block mt-1.5 text-[11px] font-extrabold uppercase tracking-wider opacity-80 leading-snug">
                  Pre-Qualified AI<br className="max-sm:hidden" /> Decision-Makers
                </span>
              </div>
              <div className="w-[1px] h-[40px] bg-[#020814]/15 max-sm:hidden" />
              <div>
                <strong className="block text-[32px] md:text-[38px] font-black leading-none font-space-grotesk tracking-tight">30+</strong>
                <span className="block mt-1.5 text-[11px] font-extrabold uppercase tracking-wider opacity-80 leading-snug">
                  Speakers
                </span>
              </div>
              <div className="w-[1px] h-[40px] bg-[#020814]/15 max-sm:hidden" />
              <div>
                <strong className="block text-[32px] md:text-[38px] font-black leading-none font-space-grotesk tracking-tight">20+</strong>
                <span className="block mt-1.5 text-[11px] font-extrabold uppercase tracking-wider opacity-80 leading-snug">
                  Sponsors &amp;<br className="max-sm:hidden" /> Exhibitors
                </span>
              </div>
            </div>

            {/* Title / Heading */}
            <h2 className="m-0 text-[#020814] font-[850] leading-[1.1] tracking-[-1.5px] text-[clamp(28px,3.8vw,44px)] font-space-grotesk">
              Secure Your Seat Among<br />Malaysia’s AI Leaders
            </h2>

            {/* Description Subtitle */}
            <p className="m-0 mt-5 text-[#020814]/80 text-[16px] leading-[1.6] max-w-[480px]">
              Be part of Malaysia’s most influential AI gathering - two days of keynotes, panels, and high-level networking.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="/malaysia/attend#passes"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-extrabold text-white bg-[#020814] hover:bg-[#020814]/90 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(2,8,20,0.15)] transition-all duration-200 cursor-pointer"
            >
              Attend to Show
              <svg 
                className="w-4 h-4 flex-shrink-0 text-[#C0F43C]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column - Deep Blue */}
        <div 
          className="bg-[#020814] py-[96px] pr-[max(24px,calc((100vw-1120px)/2))] pl-[48px] max-lg:px-[24px] max-lg:py-[64px] flex flex-col justify-between h-full"
          style={{ minHeight: "500px" }}
        >
          <div>
            {/* Category / Muted text */}
            <span className="block text-[12px] font-extrabold uppercase tracking-[2px] text-white/50 mb-5 font-mono">
              Sponsorship &amp; Partnerships
            </span>

            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white max-sm:gap-4">
              <div>
                <strong className="block text-[32px] md:text-[38px] font-black leading-none text-[#C0F43C] font-space-grotesk tracking-tight">40+</strong>
                <span className="block mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/70 leading-snug">
                  Sponsors &amp;<br className="max-sm:hidden" /> Exhibitors
                </span>
              </div>
              <div className="w-[1px] h-[40px] bg-white/10 max-sm:hidden" />
              <div>
                <strong className="block text-[32px] md:text-[38px] font-black leading-none text-[#C0F43C] font-space-grotesk tracking-tight">$10.9B</strong>
                <span className="block mt-1.5 text-[11px] font-bold uppercase tracking-wider text-white/70 leading-snug">
                  AI Market by<br className="max-sm:hidden" /> 2030
                </span>
              </div>
            </div>

            {/* Title / Heading */}
            <h2 className="m-0 text-white font-[850] leading-[1.1] tracking-[-1.5px] text-[clamp(28px,3.8vw,44px)] font-space-grotesk">
              Amplify Your Brand at<br />Southeast Asia’s Largest AI Event
            </h2>

            {/* Description Subtitle */}
            <p className="m-0 mt-5 text-white/70 text-[16px] leading-[1.6] max-w-[480px]">
              Explore sponsorship, exhibition, and partnership opportunities designed to put your brand in front of 1,000+ regional decision-makers.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="/malaysia/sponsorship-enquiry"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[15px] font-extrabold text-[#020814] bg-[#C0F43C] hover:bg-[#C0F43C]/90 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(192,244,60,0.15)] transition-all duration-200 cursor-pointer"
            >
              Enquire Now
              <svg 
                className="w-4 h-4 flex-shrink-0 text-[#020814]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
