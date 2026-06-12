"use client";

import { GradientText } from "../components/Shared";

export function PartnerShowcase() {
  return (
    <section className="relative py-[100px] bg-[#020814] overflow-hidden" id="showcase-benefits">
      {/* Background Soft Ambient Spotlights */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* ── PART 1: SHOWCASING THE FUTURE SECTION ─────────────────── */}
        <div className="grid grid-cols-[1.1fr_0.9fr] max-[980px]:grid-cols-1 gap-12 items-center mb-20">
          {/* Left Column: Heading and Description */}
          <div className="flex flex-col gap-6 max-[980px]:text-center max-[980px]:items-center">
            <h2 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(32px,4vw,46px)] leading-tight tracking-tight">
              Showcasing the <br />
              Future of <span className="text-[#C0F43C]">AI in</span> <span className="text-[#00ceff]">Malaysia</span>
            </h2>
            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[580px] font-sans">
              World AI Show Malaysia is designed for enterprise leaders, government stakeholders, technology innovators and investors driving the future of AI adoption across Southeast Asia.
            </p>
          </div>

          {/* Right Column: Image with Blue/Cyan Glowing Outline */}
          <div className="relative group max-[980px]:mx-auto w-full max-w-[480px]">
            <div className="absolute -inset-1.5 rounded-[16px] bg-gradient-to-r from-[#00ceff] to-[#9a6cff] opacity-40 blur-[8px] group-hover:opacity-75 transition duration-500" />
            <div className="relative rounded-[12px] overflow-hidden border-2 border-[#00ceff] bg-[#040916]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/malaysia/images/sponsors/showcase.webp"
                alt="Showcasing the Future of AI in Malaysia"
                className="w-full h-auto object-cover aspect-[1.7/1] transform group-hover:scale-[1.01] transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* ── PART 2: THREE BENEFIT CARDS ───────────────────────────── */}
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 mb-20">
          
          {/* Card 1: High-impact business networking */}
          <article className="group relative p-8 border border-white/[0.08] rounded-[24px] bg-[#040a17]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00ceff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12)]">
            <div className="flex justify-between items-center mb-6 text-white/50 text-[11px] font-mono tracking-wider">
              {/* Handshake/Networking Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#00ceff] group-hover:bg-[#C0F43C] group-hover:text-black group-hover:border-[#C0F43C] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="font-extrabold uppercase bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                700+ Attendees
              </span>
            </div>
            <h3 className="m-0 mb-3 text-white font-[800] text-[19px] leading-snug group-hover:text-[#C0F43C] transition-colors duration-250">
              High-impact business networking
            </h3>
            <p className="m-0 text-white/60 text-[14px] leading-relaxed font-sans group-hover:text-white/85 transition-colors duration-250">
              Build business relationships with technology providers, enterprise adopters and policymakers for meaningful collaborations and new business opportunities.
            </p>
          </article>

          {/* Card 2: Innovation showcase */}
          <article className="group relative p-8 border border-white/[0.08] rounded-[24px] bg-[#040a17]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9a6cff]/50 hover:shadow-[0_12px_36px_rgba(154,108,255,0.12)]">
            <div className="flex justify-between items-center mb-6 text-white/50 text-[11px] font-mono tracking-wider">
              {/* Rocket/Showcase Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#9a6cff] group-hover:bg-[#C0F43C] group-hover:text-black group-hover:border-[#C0F43C] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  <path d="M22 2L11 13" />
                </svg>
              </div>
              <span className="font-extrabold uppercase bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                40+ Exhibitors
              </span>
            </div>
            <h3 className="m-0 mb-3 text-white font-[800] text-[19px] leading-snug group-hover:text-[#C0F43C] transition-colors duration-250">
              Innovation showcase
            </h3>
            <p className="m-0 text-white/60 text-[14px] leading-relaxed font-sans group-hover:text-white/85 transition-colors duration-250">
              Expose your brand and establish industry leadership through ROI solutions, modern tech platforms, launch fresh software and reach regional digital innovators.
            </p>
          </article>

          {/* Card 3: Access to the AI ecosystem */}
          <article className="group relative p-8 border border-white/[0.08] rounded-[24px] bg-[#040a17]/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00a5a3]/50 hover:shadow-[0_12px_36px_rgba(0,165,163,0.12)]">
            <div className="flex justify-between items-center mb-6 text-white/50 text-[11px] font-mono tracking-wider">
              {/* Globe Icon */}
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-[#00a5a3] group-hover:bg-[#C0F43C] group-hover:text-black group-hover:border-[#C0F43C] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="font-extrabold uppercase bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                35+ Countries
              </span>
            </div>
            <h3 className="m-0 mb-3 text-white font-[800] text-[19px] leading-snug group-hover:text-[#C0F43C] transition-colors duration-250">
              Access to the AI ecosystem
            </h3>
            <p className="m-0 text-white/60 text-[14px] leading-relaxed font-sans group-hover:text-white/85 transition-colors duration-250">
              Engage directly with global leaders, government stakeholders, policy innovators, media and co-builders shaping the future of the region&apos;s digital economy.
            </p>
          </article>

        </div>

        {/* ── PART 3: DON'T PLACE A LOGO. BUILD A POSITION. CTA BANNER ── */}
        <div 
          className="group/banner relative p-12 max-sm:p-8 border border-[#c0f43c]/20 rounded-[28px] text-center overflow-hidden transition-all duration-300 hover:border-[#c0f43c]/40"
          style={{
            background: "linear-gradient(135deg, rgba(192, 244, 60, 0.04) 0%, rgba(4, 10, 24, 0.96) 50%, rgba(0, 206, 255, 0.02) 100%)"
          }}
        >
          {/* Subtle light sweeps */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c0f43c]/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center gap-6">
            
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#00ceff] bg-white/5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ceff] animate-pulse" />
              The power value for the brand
            </div>

            <h3 className="m-0 font-space-grotesk text-white font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Don&apos;t place a logo. <br />
              <GradientText>Build a position.</GradientText>
            </h3>

            <p className="m-0 text-white/70 text-[16px] leading-relaxed max-w-[620px] font-sans">
              Whether you&apos;re sponsoring, exhibiting, speaking or co-building — partnership at WAIS Malaysia is engineered for commercial outcomes, not image time.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/malaysia/sponsorship-enquiry"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-extrabold text-black bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Apply to sponsor <span className="font-mono">→</span>
              </a>
              <a
                href="/malaysia/sponsorship-enquiry"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[14px] font-extrabold text-white bg-white/5 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Apply to exhibit
              </a>
              <a
                href="/malaysia/sponsorship-enquiry"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 rounded-full text-[14px] font-extrabold text-white bg-white/5 hover:bg-white/10 hover:border-white/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Speak to the team
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
