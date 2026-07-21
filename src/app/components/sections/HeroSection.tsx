import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section className="hero-bg relative min-h-[720px] -mt-[81px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[680px] max-sm:-mt-[71px] max-sm:min-h-[720px]" id="home">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-72 z-0"
        src="/malaysia/videos/wais-malaysia-hero-banner.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Cyber Grid overlays */}
      <div className="hero-overlay absolute inset-0 z-1 opacity-58" aria-hidden="true" />
      <div className="hero-grid-pattern absolute bottom-0 left-[-6%] right-[-6%] h-[245px] z-1 opacity-70 blur-[1px]" aria-hidden="true" />

      {/* Hero Content */}
      <div className="container relative z-2 mx-auto px-6 pt-[126px] max-sm:pt-[110px] max-sm:px-4 flex flex-col items-center">
        {/* Glow Status Pill */}
        <p className="inline-flex items-center h-8 px-3.5 mb-[25px] border border-[#b9f82d]/72 rounded-full text-white/82 text-[14px] uppercase tracking-[1px] font-medium shadow-[0_0_12px_rgba(185,248,45,0.15)]">
          By invitation only
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[1030px] mx-auto text-white font-[850] leading-[1.04] tracking-[-2px] text-[clamp(42px,7.2vw,94px)] text-center">
          Where Malaysia&apos;s <GradientText>AI Decisions</GradientText> Get Made.
        </h1>

        {/* Supporting Partner Card */}
        <div className="mt-[28px] mb-[6px] flex justify-center">
          <div className="inline-flex flex-col items-center gap-2.5 px-8 py-4 rounded-[16px] border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] max-sm:px-6 max-sm:py-3">
            <span className="text-white/80 text-[11px] font-bold uppercase tracking-[2px]">Supporting Partner</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/malaysia/images/partners/cyber-malaysia.png" 
              alt="CyberSecurity Malaysia" 
              className="h-[44px] w-auto object-contain max-sm:h-[36px]"
            />
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div className="flex justify-center gap-3 mt-[22px] max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:w-full max-sm:max-w-[280px]">
          <Button href="https://worldaishow.com/malaysia/attend/delegate/#passes" showArrow={true}>Get Your Pass</Button>
          <Button variant="outline" href="/malaysia/sponsorship-enquiry/">Enquire Now</Button>
        </div>

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content] justify-center items-center gap-6 w-full max-w-[650px] mx-auto mt-[18px] pt-6 border-t border-white/25 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:pt-5">
          
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[36px] font-[850] text-white leading-none max-sm:text-[28px]">
              9-<GradientText>10</GradientText>
            </strong>
            <span className="block mt-2 text-[15px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[13px] max-sm:mt-1.5">
              Sep 2026
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[36px] font-[850] text-white leading-none max-sm:text-[28px]">
              DoubleTree by <GradientText>Hilton</GradientText>
            </strong>
            <span className="block mt-2 text-[15px] font-bold text-white/80 uppercase tracking-[1.5px] max-sm:text-[13px] max-sm:mt-1.5">
              Kuala Lumpur, Malaysia
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
