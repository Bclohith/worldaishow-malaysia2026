"use client";

import { useEffect, useState } from "react";
import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers as fallbackSpeakers } from "../../speakers/data";

interface KonfHubSpeaker {
  speaker_id: number;
  name: string;
  designation: string;
  organisation: string;
  image_url: string;
  speaker_order?: number;
}

export function SpeakersSection() {
  const [displaySpeakers, setDisplaySpeakers] = useState<Array<{
    id: string | number;
    name: string;
    designation: string;
    company: string;
    image: string;
  }>>([]);

  useEffect(() => {
    fetch("/malaysia/api/konfhub-speakers")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch speakers");
        return res.json();
      })
      .then((data) => {
        const list: KonfHubSpeaker[] = [];
        if (data.categorized && Array.isArray(data.categorized)) {
          for (const cat of data.categorized) {
            const entities = cat.entity || cat.speakers || [];
            if (Array.isArray(entities)) {
              list.push(...entities);
            }
          }
        }
        if (data.uncategorized && Array.isArray(data.uncategorized)) {
          list.push(...data.uncategorized);
        }

        // Sort by speaker_order
        list.sort((a, b) => (a.speaker_order || 999) - (b.speaker_order || 999));

        if (list.length > 0) {
          const mapped = list.slice(0, 6).map((speaker) => ({
            id: speaker.speaker_id,
            name: speaker.name || "",
            designation: speaker.designation || "",
            company: speaker.organisation || "",
            image: speaker.image_url || "/malaysia/images/speakers/default.png"
          }));
          setDisplaySpeakers(mapped);
        } else {
          useFallback();
        }
      })
      .catch((err) => {
        console.error("Failed to load live speakers for homepage:", err);
        useFallback();
      });

    function useFallback() {
      const mapped = fallbackSpeakers.slice(0, 6).map((speaker) => ({
        id: speaker.id,
        name: speaker.name,
        designation: speaker.designation,
        company: speaker.company,
        image: speaker.image
      }));
      setDisplaySpeakers(mapped);
    }
  }, []);

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
          {displaySpeakers.map((speaker, index) => (
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
