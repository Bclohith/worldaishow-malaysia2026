"use client";

import type { CSSProperties } from "react";

type SpeakerCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  index: number;
};

export function SpeakerCard({ name, role, company, image, index }: SpeakerCardProps) {
  return (
    <div className="w-full h-[380px] cursor-pointer">
      <div className="speaker-card-inner relative w-full h-full overflow-hidden border border-[#248fff]/24 rounded-[16px] bg-[#050b16] transition-all duration-300 after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/95 after:via-black/30 after:to-transparent">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-80 transition-all duration-300"
        />
        <div className="absolute z-10 left-5 right-5 bottom-5">
          <h3 className="m-0 text-white font-[850] text-[22px] mb-1 leading-tight">{name}</h3>
          <p className="m-0 text-white/70 text-[14px] font-medium leading-tight">{role}</p>
          <span className="block mt-1 text-[#18d4ff] font-mono text-[10px] uppercase tracking-[1.8px] font-bold">{company}</span>
          <div className="speaker-line block w-8 h-[2px] mt-3.5 bg-cyan transition-all duration-300" />
        </div>
      </div>
    </div>
  );
}


