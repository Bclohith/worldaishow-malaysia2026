"use client";

import { GradientText } from "../components/Shared";

export function PartnersHero() {
  return (
    <section id="overview" className="relative min-h-[460px] flex items-start page-hero-top pb-[78px] overflow-hidden bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#020a1a]/92 before:z-0 max-sm:min-h-[400px] max-sm:pb-[50px]"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(1,7,18,0.98) 0%, rgba(2,9,25,0.8) 47%, rgba(2,9,25,0.4) 100%), url("/malaysia/images/sponsors/Partners-logo-banner.webp")'
      }}
    >
      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
          Ecosystem & Collaboration
        </span>
        <h1 className="m-0 text-white font-[850] leading-[1.05] tracking-[-2px] text-[clamp(48px,5.8vw,78px)]">
          Ecosystem, sponsors, <br />
          <GradientText>& strategic partners.</GradientText>
        </h1>
        <p className="max-w-[700px] mt-6 mb-0 text-white/74 text-[20px] leading-relaxed max-sm:text-base">
          Connecting Malaysia&apos;s leading federal ministries, sovereign wealth groups, global cloud hyperscalers, and next-generation enterprise application builders to accelerate responsible AI growth.
        </p>
      </div>
    </section>
  );
}
