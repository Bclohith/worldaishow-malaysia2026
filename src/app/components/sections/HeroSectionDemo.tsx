"use client";

import { useEffect, useRef } from "react";
import { Button, GradientText } from "../Shared";

export function HeroSectionDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const activeContainer = container;
    const activeCanvas = canvas;

    const ctx = activeCanvas.getContext("2d");
    if (!ctx) return;

    const activeCtx = ctx;

    let animationFrameId: number;

    const mouse = { x: 0, y: 0, active: false };
    const particles: BioParticle[] = [];
    
    // ASMR Parameters: High particle count, heavy drag for silky motion
    const PARTICLE_COUNT = 140;
    const FRICTION = 0.94; 
    const EASE = 0.06;

    let W = activeCanvas.width;
    let H = activeCanvas.height;

    function resizeCanvas() {
      const rect = activeContainer.getBoundingClientRect();
      W = activeCanvas.width = rect.width;
      H = activeCanvas.height = rect.height;
    }

    // Particle blueprints
    class BioParticle {
      index: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      hue: number;

      constructor(index: number, width: number, height: number) {
        this.index = index;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.radius = Math.random() * 2 + 1;
        // Soft shifting color palette from deep blue to magical teal
        this.hue = 190 + Math.random() * 30; 
      }

      update(targetX: number, targetY: number, time: number, width: number, height: number, active: boolean) {
        // If mouse isn't on screen, drift toward center gently
        const tx = active ? targetX : width / 2;
        const ty = active ? targetY : height / 2;

        // Calculate attraction force based on sequence index (creates a string/ribbon effect)
        const dx = tx - this.x;
        const dy = ty - this.y;
        
        // Add tiny organic micro-waves (the ASMR breathing effect)
        const driftX = Math.sin(time + this.index * 0.1) * 0.2;
        const driftY = Math.cos(time + this.index * 0.1) * 0.2;

        this.vx += dx * EASE * (1 / (this.index * 0.05 + 1));
        this.vy += dy * EASE * (1 / (this.index * 0.05 + 1));

        // Apply velvet fluid drag
        this.vx *= FRICTION;
        this.vy *= FRICTION;

        this.x += this.vx + driftX;
        this.y += this.vy + driftY;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = `hsla(${this.hue}, 90%, 65%, 0.7)`;
        c.fill();
      }
    }

    resizeCanvas();

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new BioParticle(i, W, H));
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = activeContainer.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        const rect = activeContainer.getBoundingClientRect();
        const t0 = e.touches[0];
        mouse.x = t0.clientX - rect.left;
        mouse.y = t0.clientY - rect.top;
        mouse.active = true;
      }
    };

    activeContainer.addEventListener("mousemove", handleMouseMove);
    activeContainer.addEventListener("mouseleave", handleMouseLeave);
    activeContainer.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", resizeCanvas);

    function draw(timestamp: number) {
      const time = timestamp * 0.002;

      // Slow, heavy trail fade to create the visual "softness"
      activeCtx.fillStyle = 'rgba(2, 2, 5, 0.04)';
      activeCtx.fillRect(0, 0, W, H);

      // Turn on blending mode that makes overlapping lines "glow" brighter
      activeCtx.globalCompositeOperation = 'screen';

      activeCtx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update(mouse.x, mouse.y, time, W, H, mouse.active);
        
        // Draw trailing lines between adjacent particles to form ribbon strands
        if (i > 0) {
          const prev = particles[i - 1];
          activeCtx.moveTo(prev.x, prev.y);
          activeCtx.quadraticCurveTo(
            (prev.x + p.x) / 2, 
            (prev.y + p.y) / 2, 
            p.x, 
            p.y
          );
        }
      }
      
      activeCtx.strokeStyle = 'rgba(0, 130, 255, 0.08)';
      activeCtx.lineWidth = 2;
      activeCtx.stroke();

      // Render individual glowing tips
      for (let i = 0; i < particles.length; i++) {
        if (i % 3 === 0) particles[i].draw(activeCtx); 
      }

      activeCtx.globalCompositeOperation = 'source-over';
      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      activeContainer.removeEventListener("mousemove", handleMouseMove);
      activeContainer.removeEventListener("mouseleave", handleMouseLeave);
      activeContainer.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[720px] -mt-[81px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[680px] max-sm:-mt-[71px] max-sm:min-h-[720px]" 
      id="home"
      style={{
        background: "#020205"
      }}
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

      {/* Subtle vignette for a more refined, cinematic look */}
      <div 
        className="absolute inset-0 pointer-events-none z-2" 
        style={{
          boxShadow: "inset 0 0 220px rgba(0, 0, 0, 0.75)"
        }}
      />

      {/* Cyber Grid overlays */}
      <div className="hero-overlay absolute inset-0 z-1 opacity-58" aria-hidden="true" />
      <div className="hero-grid-pattern absolute bottom-0 left-[-6%] right-[-6%] h-[245px] z-1 opacity-70 blur-[1px]" aria-hidden="true" />

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-6 pt-[116px] max-sm:pt-[100px] max-sm:px-4">
        {/* Glow Status Pill */}
        <p className="inline-flex items-center h-8 px-3.5 mb-[25px] border border-[#b9f82d]/72 rounded-full text-white/82 text-[14px] uppercase tracking-[1px] font-medium shadow-[0_0_12px_rgba(185,248,45,0.15)] bg-black/40">
          By invitation only
        </p>

        {/* Hero Title */}
        <h1 className="max-w-[1030px] mx-auto text-white font-[850] leading-[1.04] tracking-[-2px] text-[clamp(52px,7.2vw,94px)]">
          Where Malaysia&apos;s <GradientText>AI Decisions</GradientText> Get Made.
        </h1>

        {/* Hero CTA Actions */}
        <div className="flex justify-center gap-3 mt-[30px] max-sm:flex-col max-sm:items-center max-sm:gap-4">
          <Button href="https://worldaishow.com/malaysia/attend/delegate/#passes" showArrow={true}>Get Your Pass</Button>
          <Button variant="outline" href="/malaysia/sponsorship-enquiry/">Enquire Now</Button>
        </div>

        {/* Event Meta Footer */}
        <div className="grid grid-cols-[max-content_max-content] justify-center items-center gap-6 w-full max-w-[650px] mx-auto mt-[18px] pt-6 border-t border-white/25 text-center max-[980px]:grid-cols-1 max-sm:gap-4">
          
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/27 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-4 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[36px] font-[850] text-white leading-none max-sm:text-[30px]">
              9-<GradientText>10</GradientText>
            </strong>
            <span className="block mt-2.5 text-[15px] font-bold text-white/80 uppercase tracking-[1.5px]">
              Sep 2026
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[36px] font-[850] text-white leading-none max-sm:text-[30px]">
              DoubleTree by <GradientText>Hilton</GradientText>
            </strong>
            <span className="block mt-2.5 text-[15px] font-bold text-white/80 uppercase tracking-[1.5px]">
              Kuala Lumpur, Malaysia
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
