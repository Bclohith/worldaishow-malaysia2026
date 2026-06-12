"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Path: strategic or gold subfolders)
const sponsorRow1 = [
  { path: "/malaysia/images/sponsors/strategic/mdec.webp", alt: "MDEC" },
  { path: "/malaysia/images/sponsors/strategic/mida.webp", alt: "MIDA" },
  { path: "/malaysia/images/sponsors/gold/datadog.webp", alt: "Datadog" },
  { path: "/malaysia/images/sponsors/gold/quantexa.webp", alt: "Quantexa" },
  { path: "/malaysia/images/sponsors/gold/denodo.webp", alt: "Denodo" },
];

// Sponsor Row 2 Logos (Path: gold subfolder)
const sponsorRow2 = [
  { path: "/malaysia/images/sponsors/gold/Magure.webp", alt: "Magure" },
  { path: "/malaysia/images/sponsors/gold/Alibaba-cloud.webp", alt: "Alibaba Cloud" },
  { path: "/malaysia/images/sponsors/gold/ey.webp", alt: "EY" },
  { path: "/malaysia/images/sponsors/gold/avatai.webp", alt: "Avatai" },
  { path: "/malaysia/images/sponsors/gold/darwin.webp", alt: "Darwinbox" },
];

// Strategic & Association Partners Logos (Path: association subfolder)
const partnerLogos = [
  "/malaysia/images/sponsors/association/starfindo.webp",
  "/malaysia/images/sponsors/association/kumpul.webp",
  "/malaysia/images/sponsors/association/forums.webp",
  "/malaysia/images/sponsors/association/ddas.webp",
  "/malaysia/images/sponsors/association/belux.webp",
  "/malaysia/images/sponsors/association/lafrench.webp",
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          2025 Sponsors, <GradientText>partners</GradientText> <br />
          <GradientText>& ecosystem.</GradientText>
        </h2>

      </div>

      {/* Two offset scrolling sponsor rows precisely matching screenshot */}
      <div className="flex flex-col gap-5 mt-[72px] w-full overflow-hidden">
        
        {/* Row 1: MDEC, MIDA, Datadog, Quantexa, Denodo (slides right-to-left) */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Magure, Alibaba-cloud, ey, avatai, darwin (slides left-to-right) */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Partners single row horizontal infinite marquee slider with hover pause */}
      <div className="mt-[72px] p-[28px_0_34px] bg-white text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Strategic & Media Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {/* Double list array for infinite scrolling seamless transition loop */}
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}


