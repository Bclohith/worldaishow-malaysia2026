"use client";

import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers } from "../../speakers/data";

export function SpeakersSection() {
  const firstSixSpeakers = speakers.slice(0, 6);

  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="speakers">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Title and Header Column Grid */}
        <div className="grid grid-cols-[1.3fr_0.7fr] gap-[70px] items-end mb-[54px] max-[980px]:grid-cols-1 max-[980px]:gap-6">
          <h2 className="text-left font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)] max-[980px]:text-center">
            The minds shaping <br />
            <GradientText>Malaysia&apos;s AI playbook.</GradientText>
          </h2>
          <p className="text-muted text-[20px] leading-[1.45] max-[980px]:text-center max-sm:text-[17px]">
            30+ speakers across government, GLCs and global tech, curated for senior decision-makers.
          </p>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {firstSixSpeakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              role={speaker.designation}
              company={speaker.company}
              image={speaker.image}
              index={index}
            />
          ))}
        </div>

        {/* View All Speakers CTA Button */}
        <div className="mt-14 flex flex-col items-center">
          <a 
            href="/malaysia/speakers" 
            className="inline-flex items-center justify-center h-[52px] px-8 rounded-full font-extrabold text-[15px] text-black [color:#06111f!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.3)] transition-all duration-200 cursor-pointer"
          >
            View All Speakers ➔
          </a>
        </div>

      </div>
    </section>
  );
}
