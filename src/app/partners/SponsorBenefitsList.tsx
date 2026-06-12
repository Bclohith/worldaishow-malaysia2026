"use client";

import { GradientText } from "../components/Shared";

type BenefitItem = {
  title: string;
  desc: string;
};

const benefits: BenefitItem[] = [
  {
    title: "Brand Visibility at Scale",
    desc: "Amplify your presence across the main stage, official digital channels, global newsletters, attendee guidebooks, and post-summit materials.",
  },
  {
    title: "Qualified Lead Generation",
    desc: "Engage in pre-scheduled business matchmaking with verified enterprise buyers, federal CTOs, and state innovation hubs seeking solutions.",
  },
  {
    title: "Product Showcase Floor",
    desc: "Demonstrate live hardware, AI platforms, compute layers, and automated algorithms to decision-makers walking the exhibition halls.",
  },
  {
    title: "Speaking Opportunities",
    desc: "Position your principal directors as pioneers by leading main-stage keynotes, expert panel conversations, or private technical workshops.",
  },
  {
    title: "1:1 Hosted Meetings",
    desc: "Receive customized itineraries aligned to your ideal customer profile, matching your sales teams with target clients in isolated lounges.",
  },
  {
    title: "Exclusive Sponsorship Branding",
    desc: "Align your enterprise with custom premium segments (VIP Lounges, Delegate Badges, Registration Zones, or Evening Cocktail hours).",
  },
  {
    title: "Networking Lunch Branding",
    desc: "Leverage central branding and targeted executive host roles during curated lunches, building relationships over dining.",
  },
  {
    title: "Post-Event Lead Report",
    desc: "Receive highly detailed analytics, engagement maps, demographic logs, and connection lists to accelerate your ASEAN pipe.",
  },
];

export function SponsorBenefitsList() {
  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020b1c] to-[#041226]" id="benefits">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] text-center mb-16">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#9a6cff]/30 rounded-full text-[#9a6cff] font-mono text-[12px] uppercase tracking-[2px] bg-[#9a6cff]/5">
          Sponsorship ROI Triggers
        </span>
        <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,56px)]">
          Maximize your market reach <br />
          <GradientText>across Southeast Asia.</GradientText>
        </h2>
      </div>

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] grid grid-cols-4 gap-4 overflow-x-auto pb-6 max-[980px]:grid-cols-[repeat(4,290px)] max-sm:grid-cols-1">
        {benefits.map((benefit, index) => (
          <article
            key={benefit.title}
            className="group relative min-h-[240px] p-7 border border-white/[0.12] rounded-[14px] bg-gradient-to-br from-[#00ceff]/6 to-[#996cff]/8 bg-[#050c1c]/90 shadow-[inset_0_0_24px_rgba(65,220,255,0.03),0_20px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]"
          >
            <span className="absolute right-[25px] top-[25px] text-[12px] font-mono text-cyan/40 tracking-[1px] select-none font-bold group-hover:text-black group-hover:bg-[#C0F43C] px-2.5 py-0.5 rounded-full transition-all duration-300">
              ROI / {String(index + 1).padStart(2, "0")}
            </span>
            <span className="grid place-items-center w-10 h-10 mb-7 border border-white/8 rounded-[10px] text-cyan bg-[#030914]/72 text-[12px] font-mono font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="m-0 mb-3 text-white font-extrabold text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{benefit.title}</h3>
            <p className="m-0 text-white/60 text-[14px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{benefit.desc}</p>
          </article>
        ))}
      </div>

      {/* Direct Enquiry Call to Action */}
      <div className="w-[min(820px,calc(100%-48px))] mx-auto mt-16 p-8 border border-[#c0f43c]/30 rounded-[20px] bg-[#050c1c]/80 shadow-[0_0_40px_rgba(192,244,60,0.06)] text-center max-sm:p-6">
        <h3 className="m-0 text-white font-[850] text-[22px] mb-3">Interested in Sponsor Packages?</h3>
        <p className="m-0 text-white/68 text-[15px] leading-relaxed mb-6 max-w-[620px] mx-auto">
          Contact our summit partnership desks directly to receive the standard brochure, customizable booth floorplans, and speaking slot availability.
        </p>
        <div className="flex justify-center gap-4 max-sm:flex-col">
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-extrabold text-black bg-[#C0F43C] hover:shadow-[0_0_20px_rgba(192,244,60,0.25)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Enquire about sponsorship
            <span className="font-mono text-[15px] font-bold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
