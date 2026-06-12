"use client";

import { GradientText } from "../components/Shared";

export function SpeakersHero() {
  return (
    <section className="relative min-h-[460px] flex items-start page-hero-top pb-[78px] overflow-hidden bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#020a1a]/92 before:z-0 max-sm:min-h-[400px] max-sm:pb-[50px]"
      style={{
        backgroundImage: 'url("/malaysia/images/speakers/Speaker-banner.webp")'
      }}
    >
      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
          WAIS Malaysia 2026 Lineup
        </span>
        <h1 className="m-0 text-white font-[850] leading-[1.05] tracking-[-2px] text-[clamp(48px,5.8vw,78px)]">
          The minds shaping <br />
          <GradientText>Malaysia&apos;s AI playbook.</GradientText>
        </h1>
        <p className="max-w-[700px] mt-6 mb-0 text-white/74 text-[20px] leading-relaxed max-sm:text-base">
          30+ global voices across government, GLCs, technology giants, and venture capital firms. Handpicked and curated to address real-world deployment, sovereign infrastructure, and AI trust.
        </p>
      </div>
    </section>
  );
}
