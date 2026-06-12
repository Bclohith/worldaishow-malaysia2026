"use client";

export function CTASection() {
  return (
    <section className="relative py-[92px] bg-[#020713] overflow-hidden" id="cta">
      {/* Visual background glowing aura to create a premium depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(192,244,60,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[radial-gradient(circle,rgba(24,212,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Main premium dark card styled exactly like the Figma mockup */}
        <div
          className="relative p-16 px-14 max-sm:p-8 rounded-[36px] backdrop-blur-[24px] overflow-hidden"
          style={{
            background: "linear-gradient(125.2deg, rgba(0, 206, 255, 0.064) 0%, rgba(192, 244, 60, 0.012) 100%), rgba(4, 14, 33, 0.85)",
            boxShadow: "0 0 40px 0 rgba(192, 244, 60, 0.18), 0 0 0 1px rgba(192, 244, 60, 0.40), 0 24px 64px 0 rgba(0, 0, 0, 0.5)"
          }}
        >
          {/* Internal premium top highlight border accent (Figma: border-top: 1px solid #2E3C4D8C) */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/55" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Title / Heading */}
            <h2 className="m-0 text-center font-[850] text-white leading-[1.08] tracking-[-1.5px] text-[clamp(32px,4.5vw,52px)] max-w-[800px]">
              Secure your place <br />
              among <span className="text-[#18d4ff]">AI</span> <span className="text-[#C0F43C]">leaders.</span>
            </h2>

            {/* Description Subtitle */}
            <p className="m-0 mt-6 text-white/70 text-[18px] leading-[1.6] max-w-[720px] text-center max-sm:text-[15px] max-sm:leading-[1.5]">
              Join a curated room of decision-makers shaping the future of AI across enterprise and government — with the speakers, builders and capital that will define Malaysia’s next decade.
            </p>

            {/* Centered Buttons Row */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
              <a
                href="/malaysia/attend#passes"
                className="inline-flex items-center gap-2 px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.03] transition-all duration-200 cursor-pointer"
              >
                Get Your Pass
                <span className="font-mono text-[16px] font-bold">→</span>
              </a>
              <a
                href="/malaysia/sponsorship-enquiry"
                className="inline-flex items-center justify-center px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer"
              >
                Sponsorship Enquiry
              </a>
            </div>

            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-white/10 my-12" />

            {/* Bottom 3-Column Metadata Grid */}
            <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-6">
              {/* Date */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Date
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide font-mono">
                  9-10 Sep 2026
                </strong>
              </div>

              {/* Venue */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Venue
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide text-center">
                  DoubleTree by Hilton Kuala Lumpur, Malaysia
                </strong>
              </div>

              {/* Format */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Format
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide">
                  In-person only
                </strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
