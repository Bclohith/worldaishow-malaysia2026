"use client";

import { GradientText } from "../components/Shared";

type ChannelItem = {
  title: string;
  tag: string;
  desc: string;
  benefits: string[];
  image: string;
  reverse?: boolean;
};

const channels: ChannelItem[] = [
  {
    title: "Curated Roundtable Discussions",
    tag: "High-Focus Formats",
    desc: "Move past generic panels. World AI Show Malaysia features closed-door roundtable discussions limited to 15 pre-selected leaders per session. Focus on actionable sovereign blueprints, regulatory compliance, data frameworks, and enterprise scaling.",
    benefits: [
      "Closed-door, Chatham House Rule guidelines",
      "Direct peer-to-peer insights exchange",
      "Strict executive alignment & curation"
    ],
    image: "/malaysia/images/Attend/AI-decision-maker.webp",
  },
  {
    title: "1:1 Business Matchmaking Meetings",
    tag: "Business Driven ROI",
    desc: "Time is your most expensive asset. Our dedicated matchmaking managers align your technology portfolio with enterprise buyers who are actively scouting for immediate integration, building high-value procurement pipelines in comfortable private suites.",
    benefits: [
      "IC-profile custom curation & scouting",
      "Dedicated meeting assistants on-ground",
      "Direct transactional pipeline development"
    ],
    image: "/malaysia/images/Attend/partner-with.webp",
    reverse: true,
  },
  {
    title: "VIP Lounge & Reception Room",
    tag: "Premium Access",
    desc: "Unwind and build long-term relationships in Selangor's premium executive suites. Engage with sovereign capital managers, tech pioneers, and ministers during cocktails, establishing trust beyond formal conference rooms.",
    benefits: [
      "Invitation-only, restricted lounge access",
      "Sovereign wealth & venture investor hubs",
      "Informal networking in premium settings"
    ],
    image: "/malaysia/images/Attend/cover-southeast.webp"
  }
];

export function NetworkingChannels() {
  return (
    <section className="relative py-[92px] bg-[#020b1c]" id="channels">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Networking Platforms
          </span>
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,56px)]">
            A working summit. <br />
            <GradientText>Built to forge partnerships.</GradientText>
          </h2>
        </div>

        {/* Channels Split list */}
        <div className="flex flex-col gap-[96px] max-sm:gap-14">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className={`grid grid-cols-[1fr_0.94fr] items-center gap-[74px] max-[980px]:grid-cols-1 max-[980px]:gap-[36px]`}
            >
              {/* Info Column */}
              <div className={`${channel.reverse ? "order-2 max-[980px]:order-none" : "order-none"}`}>
                <span className="text-[#18d4ff] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
                  {channel.tag}
                </span>
                <h3 className="m-0 text-white font-[850] text-[34px] leading-tight mb-5 max-sm:text-[26px]">
                  {channel.title}
                </h3>
                <p className="m-0 text-white/66 text-[17px] leading-relaxed mb-6">
                  {channel.desc}
                </p>
                <ul className="m-0 pl-0 list-none flex flex-col gap-3">
                  {channel.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-white/80 text-[15px]">
                      <span className="grid place-items-center w-[18px] h-[18px] rounded-full bg-cyan/15 text-cyan text-[10px] font-extrabold select-none">
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic Column */}
              <div className="relative min-h-[340px] overflow-hidden border border-[#20d5ff]/24 rounded-[24px] bg-[#071426]/72 shadow-[0_0_42px_rgba(0,206,255,0.1)]">
                <img
                  src={channel.image}
                  alt={channel.title}
                  className="absolute inset-0 w-full h-full object-cover filter saturate-[0.95] brightness-[0.92] hover:scale-[1.025] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
