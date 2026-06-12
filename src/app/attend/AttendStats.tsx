"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  { value: 700, suffix: "+", label: "Pre-Qualified AI Decision-Makers" },
  { value: 30, suffix: "+", label: "Speakers" },
  { value: 20, suffix: "+", label: "Sponsors & Exhibitors" },
  { value: 30, suffix: "+", label: "Media & Association Partners" },
  { value: 4, suffix: "", label: "Strategic AI Focus Areas" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 overflow-x-auto pb-2 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-left border border-[#77d1ff]/16 rounded-[14px] bg-[#040c1c]/72 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] group hover:-translate-y-1 transition-all duration-300"
          key={stat.label}
        >
          <strong className="block bg-gradient-to-r from-[#18d4ff] to-[#b9f82d] bg-clip-text text-transparent text-[39px] font-[850] leading-none">
            <Counter end={stat.value} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-white/68 text-[15px] leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
