"use client";

import { useEffect, useRef, useState } from "react";

export function EcosystemSectionDemo() {
  return (
    <section 
      className="relative w-full px-20 py-24 bg-cover bg-center overflow-hidden flex flex-col items-center gap-16 max-lg:px-6 max-sm:px-4 max-sm:py-16"
      style={{ 
        backgroundImage: 'url("/malaysia/images/Ecosystem/why-malaysia-3d-redesign-bg.jpg")' 
      }}
      id="ecosystem"
    >
      {/* Glow / Radial Gradient overlays */}
      <div 
        className="absolute w-[600px] h-[600px] left-[-150px] top-[-150px] pointer-events-none select-none" 
        style={{ background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 65%)' }}
      />
      <div 
        className="absolute w-[600px] h-[600px] right-[-150px] bottom-[-150px] pointer-events-none select-none" 
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)' }}
      />

      {/* Header Container */}
      <div className="relative z-10 w-full flex flex-col items-center gap-4 text-center">
        <div className="px-4 py-1.5 bg-cyan-400/10 rounded-[100px] shadow-[-2px_-2px_6px_0px_rgba(255,255,255,0.08),3px_3px_10px_0px_rgba(0,0,0,0.40)] outline outline-1 outline-offset-[-1px] outline-cyan-400/25 inline-flex items-center">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-[2px]">
            Interactive Ecosystem Directory
          </span>
        </div>
        
        <h2 className="text-center text-[clamp(32px,4.5vw,48px)] leading-[1.1] font-bold tracking-tight">
          <span className="text-slate-50 [text-shadow:_-2px_-2px_6px_rgba(255,255,255,0.20)]">2025 Delegate </span>
          <span className="text-cyan-400 [text-shadow:_-2px_-2px_6px_rgba(255,255,255,0.20)]">Breakdown</span>
        </h2>
      </div>

      {/* Cards Row */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-3 items-stretch gap-8 max-lg:grid-cols-1 max-lg:max-w-[420px]">
        
        {/* ───── Card 1: Attendee Profile ───── */}
        <article className="min-h-[594px] p-7 bg-gradient-to-br from-neutral-500/[0.12] via-white/[0.04] to-zinc-500/[0.12] rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/[0.08] backdrop-blur-sm flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/malaysia/images/Ecosystem/icon-attendee.png" className="w-8 h-8 object-contain flex-shrink-0" alt="" />
            <h3 className="text-white text-lg font-bold">Attendee Profile</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            <BarRow label="BFSI" width="75%" gradient="from-blue-900 via-sky-500 to-teal-500" />
            <BarRow label="Manufacturing &amp; Industrial" width="25%" gradient="from-emerald-600 to-emerald-400" />
            <BarRow label="Retail &amp; E-Commerce" width="50%" gradient="from-indigo-600 via-indigo-400 to-violet-400" />
            <BarRow label="Energy &amp; Utilities" width="25%" gradient="from-emerald-600 to-emerald-400" />
            <BarRow label="Health Care &amp; Life Sciences" width="20%" gradient="from-emerald-600 to-emerald-400" />
            <BarRow label="Govt &amp; Public Sector" width="30%" gradient="from-emerald-600 to-emerald-400" />
            <BarRow label="Education" width="17%" gradient="from-emerald-600 to-emerald-400" />
            <BarRow label="Others" width="40%" gradient="from-blue-900 via-sky-500 to-teal-500" />
          </div>
        </article>

        {/* ───── Card 2: Role Breakdown ───── */}
        <article className="min-h-[594px] p-7 bg-gradient-to-br from-neutral-500/[0.12] via-white/[0.04] to-zinc-500/[0.12] rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/[0.08] backdrop-blur-sm flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/malaysia/images/Ecosystem/icon-decision.png" className="w-8 h-8 object-contain flex-shrink-0" alt="" />
            <h3 className="text-white text-lg font-bold">Seniority Breakdown</h3>
          </div>
          
          <div className="flex-1 w-full flex justify-center items-end gap-3 h-[280px] pb-6 pt-10">
            <CylinderBar 
              percent={33} height={140} delay={0}
              label="C-Level<br/>Executives" 
              baseColor="#a855f7" topColor="#e9d5ff" gradient="linear-gradient(to right, #d8b4fe, #a855f7)" 
            />
            <CylinderBar 
              percent={47} height={200} delay={150}
              label="Directors &<br/>Senior Professionals" 
              baseColor="#10b981" topColor="#a7f3d0" gradient="linear-gradient(to right, #6ee7b7, #10b981)" 
            />
            <CylinderBar 
              percent={20} height={100} delay={300}
              label="Technology Champion<br/>& Practitioners" 
              baseColor="#3b82f6" topColor="#bfdbfe" gradient="linear-gradient(to right, #93c5fd, #3b82f6)" 
            />
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full flex-shrink-0" />
              <span className="flex-1 text-white text-xs font-bold">Directors &amp; Senior Professionals</span>
              <span className="text-green-400 text-xs font-bold"><AnimatedCounter target={47} duration={2000} />%</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-violet-500 rounded-full flex-shrink-0" />
              <span className="flex-1 text-white text-xs font-bold">CEOs, CTOs, CIOs, COOs, CDOs</span>
              <span className="text-violet-500 text-xs font-bold"><AnimatedCounter target={33} duration={2000} />%</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-sky-400 rounded-full flex-shrink-0" />
              <span className="flex-1 text-white text-xs font-bold">Enterprise Cloud Architects</span>
              <span className="text-sky-400 text-xs font-bold"><AnimatedCounter target={20} duration={2000} />%</span>
            </div>
          </div>
        </article>

        {/* ───── Card 3: Decision Power ───── */}
        <article className="min-h-[594px] p-7 bg-gradient-to-br from-neutral-500/[0.12] via-white/[0.04] to-zinc-500/[0.12] rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/[0.08] backdrop-blur-sm flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <img src="/malaysia/images/Ecosystem/icon-role.png" className="w-8 h-8 object-contain flex-shrink-0" alt="" />
            <h3 className="text-slate-50 text-xl font-bold">Decision Power</h3>
          </div>
          
          <p className="text-slate-50/80 text-sm font-normal leading-relaxed">
            <strong className="text-white font-bold">World AI Show Malaysia</strong> is an exclusive, highly targeted platform that brings together vetted C-suite leaders and key decision-makers from top Malaysian enterprises and government agencies who are actively looking to adopt and deploy cutting-edge AI solutions.
          </p>
          
          <div className="flex-1 flex flex-col justify-center items-center py-4 bg-white/[0.06] rounded-2xl border border-white/[0.05]">
            <span className="text-zinc-400 text-4xl font-bold uppercase tracking-wide">over</span>
            <span className="text-green-400/90 text-[96px] leading-none font-[850] my-1 [text-shadow:_-2px_-2px_6px_rgba(255,255,255,0.20)]">
              <AnimatedCounter target={88} duration={2000} />%
            </span>
            <span className="text-zinc-400 text-4xl font-bold uppercase tracking-wide">of attendees</span>
          </div>
          
          <p className="text-slate-50 text-sm font-bold text-center">
            Had influence or sole responsibility in buying decision
          </p>
        </article>

      </div>
    </section>
  );
}

function BarRow({ label, width, gradient }: { label: string; width: string; gradient: string }) {
  return (
    <div className="group flex flex-col gap-2 py-2 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5">
      <span className="text-white text-xs font-bold transition-colors duration-300 group-hover:text-cyan-300" dangerouslySetInnerHTML={{ __html: label }} />
      <div className="h-1.5 bg-slate-200/20 rounded-full shadow-[inset_0px_4px_2px_-2px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 group-hover:bg-slate-200/30">
        <div className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-300 group-hover:brightness-125`} style={{ width }} />
      </div>
    </div>
  );
}

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic for a smooth deceleration
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

function CylinderBar({ 
  percent, height, label, baseColor, topColor, gradient, delay 
}: { 
  percent: number; height: number; label: string; baseColor: string; topColor: string; gradient: string; delay: number 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-[90px] flex flex-col justify-end items-center group">
      
      {/* Tooltip Label (Now with Floating Effect & 12px text) */}
      <div 
        className="absolute z-20 flex justify-center items-center px-3 py-2 rounded-lg text-center leading-[1.2] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1"
        style={{ 
          background: baseColor, 
          bottom: isVisible ? `${height + 20}px` : '20px',
          opacity: isVisible ? 1 : 0,
          transitionDelay: `${delay + 300}ms`
        }}
      >
        <span className="text-[12px] font-bold text-slate-950" dangerouslySetInnerHTML={{ __html: label }} />
        {/* Tooltip triangle */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45" style={{ background: baseColor }} />
      </div>

      {/* 3D Cylinder Container */}
      <div 
        className="relative w-full transition-all duration-1000 ease-out transform origin-bottom hover:brightness-110"
        style={{ 
          height: isVisible ? `${height}px` : '0px',
          transitionDelay: `${delay}ms`
        }}
      >
        {/* Main Body */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: gradient,
            borderBottomLeftRadius: '50% 15px',
            borderBottomRightRadius: '50% 15px',
            borderTopLeftRadius: '50% 15px',
            borderTopRightRadius: '50% 15px',
          }}
        >
           {/* Inner Shadow / Highlight for 3D depth */}
           <div className="absolute inset-0 rounded-[inherit]" style={{
             background: 'linear-gradient(90deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 25%, rgba(0,0,0,0) 65%, rgba(0,0,0,0.4) 100%)'
           }} />

           {/* Percentage Text */}
           <div 
             className="absolute inset-0 flex justify-center items-center z-10 transition-opacity duration-700"
             style={{ 
               opacity: isVisible ? 1 : 0,
               transitionDelay: `${delay + 600}ms`
             }}
           >
             <span className="text-3xl font-[850] text-black/50" style={{ textShadow: '0px 1px 2px rgba(255,255,255,0.3)' }}>
               {percent}%
             </span>
           </div>
        </div>

        {/* Top Face (Ellipse) */}
        <div 
          className="absolute top-0 left-0 w-full h-[30px] -mt-[15px] rounded-[50%] z-10 transition-opacity duration-700"
          style={{ 
            background: topColor,
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${delay}ms`
          }} 
        />

        {/* Bottom Glow / Floor Light Effect */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[30px] rounded-[50%] blur-xl transition-all duration-1000"
          style={{ 
            background: `radial-gradient(ellipse at center, ${baseColor} 0%, transparent 70%)`,
            transform: 'translateY(16px)',
            opacity: isVisible ? 0.6 : 0,
            transitionDelay: `${delay}ms`,
            zIndex: -1
          }} 
        />
        
        {/* Sharp Glowing Rim at the very bottom edge */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[30px] rounded-[50%] z-20 transition-all duration-1000"
          style={{ 
            boxShadow: `0 4px 12px ${topColor}`,
            borderBottom: `2px solid ${topColor}`,
            opacity: isVisible ? 1 : 0,
            transitionDelay: `${delay}ms`
          }} 
        />
      </div>
    </div>
  );
}
