"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  "Who is the World AI Show Malaysia for?",
  "How do I get an invitation or buy a pass?",
  "When and where is the event?",
  "What does the agenda look like?",
  "Are there sponsorship and exhibition opportunities?",
  "Will sessions be recorded or available online?",
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div className="max-w-[976px] mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[58px_1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[46px_1fr_18px] max-sm:gap-3 max-sm:px-1.5 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-white/68 font-mono text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="max-w-[740px] mx-auto mt-[-6px] mr-[76px] mb-6 ml-[78px] text-muted text-[15px] leading-relaxed max-sm:mx-1.5 max-sm:ml-16 max-sm:mb-[22px]">
                  World AI Show Malaysia is curated specifically for C-level executives, senior directors, GLC digital transformational leaders, and AI infrastructure architects who are actively building or deploying AI systems in production. It offers a structured space to connect, share implementation playbooks, and secure technology partners.
                </p>
              </details>
            );
          })}
        </div>

      </div>
    </section>
  );
}
