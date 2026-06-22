"use client";

import { type CSSProperties, useState, useEffect, useRef } from "react";
import { GradientText } from "../Shared";

const donutSegments = [
  {
    colorClass: "stroke-green",
    percent: 20,
    startAngle: 0,
    delayClass: "delay-[80ms]",
  },
  {
    colorClass: "stroke-purple",
    percent: 45,
    startAngle: 72,
    delayClass: "delay-[180ms]",
  },
  {
    colorClass: "stroke-cyan",
    percent: 35,
    startAngle: 234,
    delayClass: "delay-[280ms]",
  },
];

const chartItems = [
  {
    colorClass: "text-purple",
    title: "45% - Digital Infrastructure Expansion",
    text: "Malaysia is witnessing rapid growth in hyperscale data centres, cloud ecosystems, fibre connectivity, and AI-ready compute infrastructure, creating the foundation for large-scale AI innovation across Southeast Asia.",
  },
  {
    colorClass: "text-cyan",
    title: "35% - Enterprise AI Transformation",
    text: "Businesses across banking, telecom, manufacturing, retail, and public services are accelerating AI adoption to improve efficiency, automate operations, and deliver smarter customer experiences.",
  },
  {
    colorClass: "text-green",
    title: "20% - Government & Policy Enablement",
    text: "Through the National AI Roadmap 2030, strategic investments, digital economy initiatives, and innovation-friendly policies, Malaysia is actively enabling long-term AI ecosystem growth.",
  },
];

export function EcosystemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible in screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]"
      id="ecosystem"
    >
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Section Heading */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Malaysia&apos;s <br />
          <GradientText>AI Growth Ecosystem</GradientText>
        </h2>

        {/* Ecosystem Layout Grid */}
        <div className="grid grid-cols-[1fr_0.95fr] gap-[88px] items-center mt-[74px] max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Donut Chart and List Wrapper */}
          <div className="flex flex-col min-h-[526px] p-[38px_26px] border border-purple/50 rounded-[18px] bg-[radial-gradient(circle_at_51%_28%,rgba(95,69,188,0.44),transparent_40%),#0c1026] max-sm:min-h-auto max-sm:p-6 max-sm:px-[18px]">
            
            {/* The Donut Circle - triggers scale bounce only when visible */}
            <div className={`relative w-[min(330px,70vw)] aspect-square mx-auto mb-[34px] rounded-full ${
              isVisible ? "donut-settle" : ""
            }`}>
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
                {donutSegments.map((segment) => (
                  <circle
                    className={`segment-base ${segment.colorClass} ${
                      isVisible ? `animate-draw ${segment.delayClass}` : ""
                    }`}
                    cx="50"
                    cy="50"
                    key={segment.percent}
                    pathLength="100"
                    r="38"
                    style={
                      {
                        "--dash-offset": 100 - segment.percent,
                        "--start-angle": `${segment.startAngle - 90}deg`,
                      } as CSSProperties
                    }
                  />
                ))}
              </svg>

              {/* Data Labels - pops in only on scroll reveal */}
              <span className={`absolute z-4 text-[#020712] font-black text-[28px] top-[28%] left-[8%] select-none transition-all duration-300 ${
                isVisible ? "animate-label-35 opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                35%
              </span>
              <span className={`absolute z-4 text-[#020712] font-black text-[28px] top-[15%] right-[19%] select-none transition-all duration-300 ${
                isVisible ? "animate-label-20 opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                20%
              </span>
              <span className={`absolute z-4 text-[#020712] font-black text-[28px] bottom-[12%] right-[24%] select-none transition-all duration-300 ${
                isVisible ? "animate-label-45 opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                45%
              </span>

              {/* Central Text Panel */}
              <div className="absolute inset-[31%] z-3 grid place-content-center rounded-full text-white bg-[#10142a] text-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <strong className="block text-[34px] leading-none font-extrabold">100%</strong>
                <small className="block mt-2 text-muted text-[16px]">Coverage</small>
              </div>
            </div>

            {/* Target Stakeholders Legend List */}
            <ul className="grid gap-[26px] m-0 p-0 list-none">
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[22px] h-[22px] mt-[1px] rounded-[4px] flex-none bg-purple" />
                <span>
                  <strong className="text-[20px] font-bold leading-tight">Budget Owners & Final Decision-Makers</strong>
                  <small className="block mt-1 text-muted text-[14px] leading-snug">CIOs, CTOs, CDOs, CISOs, Heads of IT & Digital</small>
                </span>
              </li>
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[22px] h-[22px] mt-[1px] rounded-[4px] flex-none bg-cyan" />
                <span>
                  <strong className="text-[20px] font-bold leading-tight">Senior Decision Influencers</strong>
                  <small className="block mt-1 text-muted text-[14px] leading-snug">Heads of AI, Data, Cloud, Security, Architecture</small>
                </span>
              </li>
              <li className="flex gap-[11px] items-start text-white">
                <i className="w-[22px] h-[22px] mt-[1px] rounded-[4px] flex-none bg-green" />
                <span>
                  <strong className="text-[20px] font-bold leading-tight">Technical Evaluators</strong>
                  <small className="block mt-1 text-muted text-[14px] leading-snug">AI/ML, Data, Cloud, DevOps & Platform Leaders</small>
                </span>
              </li>
            </ul>

          </div>

          {/* Copy Text Stack Column */}
          <div className="grid gap-[30px]">
            {chartItems.map((item) => (
              <article key={item.title} className="flex flex-col">
                <h3 className={`${item.colorClass} font-extrabold text-[24px] mb-3`}>
                  {item.title}
                </h3>
                <p className="m-0 text-muted text-[20px] leading-[1.45] max-sm:text-[17px]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
