"use client";
 
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers } from "./data";

export function SpeakersList() {
  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Past Speakers Heading */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0 uppercase">
            Past <GradientText>Speakers</GradientText>
          </h2>
        </div>

        {/* Speakers Grid */}
        <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {speakers.filter(speaker => !['rohit-churi','asif-muhammad-iqbal','adrian-chew'].includes(speaker.id)).map((speaker, index) => (
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
      </div>
    </section>
  );
}
