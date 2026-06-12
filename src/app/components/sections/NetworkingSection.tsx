"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const industries = [
  ["Banking, Financial Services and Insurance", "banking.webp"],
  ["Manufacturing", "manufacturing.webp"],
  ["Retail and Ecommerce", "retail.webp"],
  ["Healthcare and Pharma", "health.webp"],
  ["Telecommunications", "telecomunication.webp"],
  ["Supply Chain and Logistics", "logistic.webp"],
  ["Government, Public Sector and Smart Cities", "Government.webp"],
  ["Energy and Utilities", "energy.webp"],
  ["Media and Entertainment", "Media.webp"],
  ["Travel and Tourism", "Travel.webp"],
  ["Education", "Education.webp"],
  ["Agriculture", "Agriculture.webp"],
] as const;

const cLevelRoles = [
  "Managing Director | CEO",
  "Chief Information Officer",
  "Chief Technology Officer",
  "Chief Digital Officer",
  "Chief Innovation Officer",
];

const seniorRoles = [
  "VP | Director | Head of AI/ML",
  "VP | Director | Head of IT",
  "VP | Director | Head of Innovation",
  "VP | Director | Head of IT Operations",
  "VP | Director | Head of Data",
];

export function NetworkingSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-hidden max-sm:py-[72px]" id="networking">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Industry Focus and Meet grid */}
        <div className="grid grid-cols-[0.72fr_1fr] gap-9 items-center max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Headline Column */}
          <div>
            <h2 className="text-left font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)] max-[980px]:text-center">
              Who will you <br />
              <GradientText>Meet.</GradientText>
            </h2>
            <p className="mt-6 mb-8 text-muted text-[20px] leading-[1.45] max-[980px]:text-center max-sm:text-[17px]">
              A single curated frame - no spectators, no fluff. Just the people writing the cheques, shipping the systems and shaping the policy.
            </p>
            <div 
              className="group relative mt-6 rounded-[20px] overflow-hidden max-sm:max-w-md max-sm:mx-auto cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Duotone Color Overlay */}
              <div 
                className={`absolute inset-0 z-10 pointer-events-none mix-blend-color transition-colors duration-500 ease-out ${
                  isHovered ? "bg-[#C0F43C]/35" : "bg-[#00ceff]/20"
                }`} 
              />
              <img
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src="/malaysia/images/networking/meet-leaders.webp"
                alt="Networking event attendees"
                loading="lazy"
                width={450}
                height={300}
              />
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-3 gap-3.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(([item, icon]) => (
              <article
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex flex-col min-h-[100px] p-[13px_14px] rounded-[8px] border border-line bg-gradient-to-br from-[#00ceff]/6 to-[#c0f43c]/3 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] select-none hover:-translate-y-0.5 hover:border-green/60 hover:shadow-[inset_0_0_28px_rgba(192,244,60,0.08),0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"
              >
                <span className="grid place-items-center w-10 h-10 mb-2 border border-white/10 rounded-[8px] text-cyan bg-black/26 group-hover:border-green/30 transition-all duration-300">
                  <img
                    src={`/malaysia/icons/networking/${icon}`}
                    alt=""
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] object-contain group-hover:hue-rotate-[255deg] group-hover:brightness-125 transition-all duration-300"
                    aria-hidden="true"
                  />
                </span>
                <strong className="block text-white text-[14px] font-bold leading-[1.28] mt-1 group-hover:text-white transition-colors duration-300">
                  {item}
                </strong>
              </article>
            ))}
          </div>

        </div>

        {/* Roles slider marquee 1: C-Level */}
        <section className="mt-[58px] text-center" aria-labelledby="c-level-title">
          <h3 id="c-level-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
            C-level Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="C-level Executives carousel">
            <div className="move-left flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...cLevelRoles, ...cLevelRoles, ...cLevelRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] bg-[#C0F43C] text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Roles slider marquee 2: Senior Executives */}
        <section className="mt-8 text-center" aria-labelledby="senior-title">
          <h3 id="senior-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
            Other Senior Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="Other Senior Executives carousel">
            <div className="move-right flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...seniorRoles, ...seniorRoles, ...seniorRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-[#06111f] bg-cyan text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
