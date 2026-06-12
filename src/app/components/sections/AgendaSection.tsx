"use client";

import { type ReactNode, useState } from "react";
import { GradientText } from "../Shared";

const themeItems = [
  {
    label: "AI Infrastructure, Sovereign Cloud & Data Foundations",
    heading: "AI Infrastructure, Sovereign Cloud & Data Foundations",
    description:
      "How Malaysia's enterprises and public-sector leaders are building scalable compute, cloud, data centre, and data architecture foundations for production AI.",
    image: "/malaysia/images/theme/Theme-01.webp",
  },
  {
    label: "Enterprise AI Deployment & Scale",
    heading: "Enterprise AI Deployment & Scale",
    description:
      "From pilots to measurable enterprise impact: operating models, implementation roadmaps, workflow redesign, and governance practices for AI at scale.",
    image: "/malaysia/images/theme/Theme-02.webp",
  },
  {
    label: "AI in Government, GLCs & National Digital Systems",
    heading: "AI in Government, GLCs & National Digital Systems",
    description:
      "Exploring AI adoption across public services, national platforms, smart infrastructure, and GLC transformation programmes shaping Malaysia's digital economy.",
    image: "/malaysia/images/theme/Theme-03.webp",
  },
  {
    label: "AI Security, Governance & Trust",
    heading: "AI Security, Governance & Trust",
    description:
      "Frameworks for secure deployment, policy alignment, risk management, ethical AI, data protection, and resilient AI systems across regulated industries.",
    image: "/malaysia/images/theme/Theme-04.webp",
  },
];

function ThemeIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 17h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 17Z" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v5" />
      <path d="M6 14h12" />
      <path d="M8 20h8" />
      <path d="M12 9 6 14l6 5 6-5-6-5Z" />
    </svg>
  );
}

export function AgendaSection({
  title = <>Shaping the next <br /> phase of <GradientText>AI in Asia.</GradientText></>,
  subtitle = "Scaling AI from infrastructure to real-world impact",
  description = "This year's agenda brings together leaders driving large-scale AI implementation across enterprises and national systems."
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTheme = themeItems[activeIndex];

  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020a18]/96 to-[#051224]/70 max-sm:py-[72px]" id="agenda">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Headings */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-[26px] mb-5 text-center text-[23px] font-extrabold text-white leading-normal">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="max-w-[920px] mx-auto text-center text-muted text-[20px] leading-[1.45] mb-[62px]">
            {description}
          </p>
        )}

        {/* Agenda Grid Layout */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-9 max-[980px]:grid-cols-1">
          
          {/* Themes Tabs List */}
          <div className="grid gap-[18px]">
            {themeItems.map((theme, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={theme.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`grid grid-cols-[52px_1fr] gap-6 items-center w-full min-h-[114px] p-[26px_28px] text-white text-left cursor-pointer rounded-[16px] transition-all duration-200 outline-none max-sm:p-6 ${
                    isActive
                      ? "border border-[#b9f82d]/42 bg-gradient-to-br from-[#00ceff]/20 to-[#c0f43c]/9 shadow-[0_0_28px_rgba(185,248,45,0.14),inset_0_0_30px_rgba(50,21,100,0.16)] border-t-[#293442]"
                      : "border border-purple/74 bg-[#040b1b]/72 shadow-[inset_0_0_30px_rgba(50,21,100,0.16)] border-[#855dff]/30 hover:border-purple/80"
                  }`}
                >
                  {/* Icon Circle */}
                  <span
                    className={`grid place-items-center w-[52px] h-[52px] border rounded-[18px] transition-all duration-200 ${
                      isActive
                        ? "border-[#c0f43c]/20 bg-[#c0f43c]/18 text-green"
                        : "border-white/8 bg-white/3 text-[#7f8999]"
                    }`}
                  >
                    <ThemeIcon index={index} />
                  </span>

                  {/* Copy content */}
                  <span className="grid gap-3 min-w-0 w-full">
                    <span className="flex items-center gap-4 w-full">
                      <small className="text-white/62 font-mono text-[11px] uppercase tracking-[1.8px] whitespace-nowrap">
                        Theme / {String(index + 1).padStart(2, "0")}
                      </small>
                      {isActive && (
                        <span className="block h-[1px] w-full bg-green opacity-42" />
                      )}
                    </span>
                    <strong
                      className={`text-[18px] font-bold leading-[1.18] relative ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {theme.label}
                    </strong>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Focus Feature Card - smoothly reveals on activeIndex hover */}
          <aside
            key={activeIndex}
            style={{ backgroundImage: `url(${activeTheme.image})` }}
            className="focus-reveal flex flex-col justify-start p-8 pt-[90px] min-h-[380px] rounded-[22px] overflow-hidden bg-cover bg-center shadow-[0_0_34px_rgba(192,244,60,0.14),inset_0_0_28px_rgba(0,206,255,0.06)] relative before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#040b1b]/95 before:via-[#040b1b]/40 before:to-transparent before:z-0 border border-[#b9f82d]/20"
          >
            <div className="relative z-1 flex flex-col">
              <span className="text-[#C0F43C] font-mono text-[11px] uppercase tracking-[1.8px] font-extrabold mb-1">
                Focus / {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="text-white font-[850] text-[34px] leading-[1.13] mt-4 max-w-[470px]">
                {activeTheme.heading}
              </h3>
            </div>
          </aside>

        </div>

      </div>
    </section>
  );
}
