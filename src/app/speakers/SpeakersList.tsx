"use client";
 
import { useEffect, useState } from "react";
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers as pastSpeakers } from "./data";

interface KonfHubSpeaker {
  speaker_id: number;
  name: string;
  designation: string;
  organisation: string;
  image_url: string;
  speaker_order?: number;
}

export function SpeakersList() {
  const [liveSpeakers, setLiveSpeakers] = useState<KonfHubSpeaker[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

        // Sort by speaker_order if available
        list.sort((a, b) => (a.speaker_order || 999) - (b.speaker_order || 999));
        setLiveSpeakers(list);
      })
      .catch((err) => {
        console.error("Failed to load live speakers:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredPastSpeakers = pastSpeakers.filter(
    (speaker) => !["rohit-churi", "asif-muhammad-iqbal", "adrian-chew"].includes(speaker.id)
  );

  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Live Speakers Lineup */}
        {isLoading ? (
          <div className="mb-16">
            <div className="mb-12 border-b border-white/10 pb-8">
              <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0 uppercase">
                Featured <GradientText>Speakers</GradientText>
              </h2>
            </div>
            <p className="text-white/60 text-lg">Loading speaker lineup...</p>
          </div>
        ) : liveSpeakers.length > 0 ? (
          <div className="mb-16">
            <div className="mb-12 border-b border-white/10 pb-8">
              <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0 uppercase">
                Featured <GradientText>Speakers</GradientText>
              </h2>
            </div>
            <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
              {liveSpeakers.map((speaker, index) => (
                <SpeakerCard
                  key={speaker.speaker_id || index}
                  name={speaker.name}
                  role={speaker.designation}
                  company={speaker.organisation}
                  image={speaker.image_url || "/malaysia/images/speakers/default.png"}
                  index={index}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* Past Speakers Heading */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0 uppercase">
            Past <GradientText>Speakers</GradientText>
          </h2>
        </div>

        {/* Speakers Grid */}
        <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {filteredPastSpeakers.map((speaker, index) => (
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
