"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { GradientText } from "../Shared";

const PanoramaViewer = dynamic(() => import("./PanoramaViewer"), { ssr: false });

export function VirtualTourSection() {
  const [activeTab, setActiveTab] = useState<"exhibition" | "main-hall">("exhibition");

  return (
    <section className="relative py-20 pb-28 bg-[#020b1c] min-h-screen">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)] flex flex-col items-center">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Interactive Experience
          </span>
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,54px)] max-w-[800px] mx-auto mb-4">
            Virtual <GradientText>Tour</GradientText>
          </h2>
          <p className="max-w-[620px] mx-auto text-white/60 text-[16px] leading-relaxed">
            Immerse yourself in the world-class venue of World AI Show Malaysia. Explore our exhibition floor and main networking halls in fully interactive 360 degrees.
          </p>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex justify-center mb-10 w-full">
          <div className="inline-flex p-1.5 bg-[#050c1d]/90 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full max-w-[500px]">
            <button
              onClick={() => setActiveTab("exhibition")}
              className={`flex-1 py-3.5 max-sm:py-3 rounded-full text-[14px] max-sm:text-[13px] font-extrabold transition-all duration-300 ${
                activeTab === "exhibition"
                  ? "bg-[#C0F43C] text-black shadow-[0_0_20px_rgba(192,244,60,0.25)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Exhibition Floor
            </button>
            <button
              onClick={() => setActiveTab("main-hall")}
              className={`flex-1 py-3.5 max-sm:py-3 rounded-full text-[14px] max-sm:text-[13px] font-extrabold transition-all duration-300 ${
                activeTab === "main-hall"
                  ? "bg-[#C0F43C] text-black shadow-[0_0_20px_rgba(192,244,60,0.25)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Main Hall
            </button>
          </div>
        </div>

        {/* 360 Viewer Container */}
        <div className="w-full aspect-video min-h-[500px] max-h-[750px] relative">
          {activeTab === "exhibition" ? (
            <PanoramaViewer imageUrl="/malaysia/images/360/exhibition.png" />
          ) : (
            <PanoramaViewer imageUrl="/malaysia/images/360/main-hall.png" />
          )}
        </div>

      </div>
    </section>
  );
}
