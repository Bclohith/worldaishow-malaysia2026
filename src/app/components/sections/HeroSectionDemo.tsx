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

    // ---------- palette ----------
    const COLORS = [
      '#c0f43c', // lime
      '#064789'  // deep blue
    ];
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const pick = <T,>(arr: T[]): T => arr[(Math.random() * arr.length) | 0];

    // ---------- particle model ----------
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;
      text: string | null;
      gravity: number;
      friction: number;

      constructor(x: number, y: number, opts: {
        angle?: number;
        speed?: number;
        drift?: number;
        size?: number;
        color?: string;
        maxLife?: number;
        text?: string | null;
        gravity?: number;
        friction?: number;
      } = {}) {
        this.x = x;
        this.y = y;
        const angle = opts.angle ?? rand(0, Math.PI * 2);
        const speed = opts.speed ?? rand(0.4, 2.2);
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed - (opts.drift ?? 0);
        this.size = opts.size ?? rand(1.2, 3.2);
        this.color = opts.color ?? pick(COLORS);
        this.life = 0;
        this.maxLife = opts.maxLife ?? rand(50, 110);
        this.text = opts.text ?? null;
        this.gravity = opts.gravity ?? 0;
        this.friction = opts.friction ?? 0.985;
      }

      update() {
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.vy += this.gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life++;
        return this.life < this.maxLife;
      }

      draw(c: CanvasRenderingContext2D) {
        const t = this.life / this.maxLife;
        const alpha = Math.sin((1 - t) * Math.PI * 0.5);
        c.save();
        c.globalAlpha = Math.max(alpha, 0);
        c.shadowBlur = this.text ? 14 : 10;
        c.shadowColor = this.color;

        if (this.text) {
          c.fillStyle = this.color;
          c.font = `900 ${this.size}px Arial, sans-serif`;
          c.textAlign = 'center';
          c.textBaseline = 'middle';
          c.fillText(this.text, this.x, this.y);
        } else {
          c.fillStyle = this.color;
          c.beginPath();
          c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          c.fill();
        }
        c.restore();
      }
    }

    let particles: Particle[] = [];
    let W = activeCanvas.width;
    let H = activeCanvas.height;

    function resizeCanvas() {
      const rect = activeContainer.getBoundingClientRect();
      W = activeCanvas.width = rect.width;
      H = activeCanvas.height = rect.height;
    }

    // ---------- ambient floating background particles ----------
    function spawnAmbient() {
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(
          rand(0, W), H + 10,
          {
            angle: -Math.PI / 2 + rand(-0.25, 0.25),
            speed: rand(0.3, 0.9),
            size: rand(1, 2.6),
            color: pick(COLORS),
            maxLife: rand(260, 420),
            friction: 0.999
          }
        ));
      }
    }

    // occasional ambient "AI" glyphs drifting up
    function spawnAmbientGlyph() {
      particles.push(new Particle(
        rand(0, W), H + 20,
        {
          angle: -Math.PI / 2 + rand(-0.15, 0.15),
          speed: rand(0.25, 0.5),
          size: rand(14, 26),
          color: pick(COLORS),
          maxLife: rand(320, 480),
          friction: 1,
          text: 'AI'
        }
      ));
    }

    // ---------- cursor trail ----------
    let mouseX = -9999, mouseY = -9999;
    let lastMouseX = -9999, lastMouseY = -9999;
    let hasMouse = false;

    function spawnTrail(x: number, y: number) {
      const dx = x - lastMouseX;
      const dy = y - lastMouseY;
      const dist = Math.hypot(dx, dy);
      const count = Math.min(14, Math.max(3, Math.floor(dist / 3)));

      for (let i = 0; i < count; i++) {
        const t = i / count;
        const px = lastMouseX + dx * t + rand(-4, 4);
        const py = lastMouseY + dy * t + rand(-4, 4);
        const useGlyph = Math.random() < 0.05;

        particles.push(new Particle(px, py, {
          speed: rand(0.2, 1.6),
          size: useGlyph ? rand(11, 16) : rand(1.5, 4),
          color: pick(COLORS),
          maxLife: rand(35, 75),
          friction: 0.94,
          gravity: -0.002,
          text: useGlyph ? 'AI' : null
        }));
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = activeContainer.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (!hasMouse) { lastMouseX = mouseX; lastMouseY = mouseY; hasMouse = true; }
      spawnTrail(mouseX, mouseY);
      lastMouseX = mouseX;
      lastMouseY = mouseY;
    };

    const handleMouseLeave = () => {
      hasMouse = false;
      mouseX = -9999;
      mouseY = -9999;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        const rect = activeContainer.getBoundingClientRect();
        const t0 = e.touches[0];
        mouseX = t0.clientX - rect.left;
        mouseY = t0.clientY - rect.top;
        if (!hasMouse) { lastMouseX = mouseX; lastMouseY = mouseY; hasMouse = true; }
        spawnTrail(mouseX, mouseY);
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = activeContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const n = 70;
      for (let i = 0; i < n; i++) {
        const angle = (Math.PI * 2 * i) / n + rand(-0.1, 0.1);
        particles.push(new Particle(clickX, clickY, {
          angle,
          speed: rand(2, 7),
          size: rand(1.5, 4),
          color: pick(COLORS),
          maxLife: rand(45, 80),
          friction: 0.93
        }));
      }
      for (let i = 0; i < 8; i++) {
        const angle = rand(0, Math.PI * 2);
        particles.push(new Particle(clickX, clickY, {
          angle,
          speed: rand(1, 3.5),
          size: rand(14, 22),
          color: pick(COLORS),
          maxLife: rand(50, 85),
          friction: 0.92,
          text: 'AI'
        }));
      }
    };

    activeContainer.addEventListener("mousemove", handleMouseMove);
    activeContainer.addEventListener("mouseleave", handleMouseLeave);
    activeContainer.addEventListener("touchmove", handleTouchMove, { passive: true });
    activeContainer.addEventListener("click", handleClick);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    // ---------- main loop ----------
    let ambientTimer = 0;
    let glyphTimer = 0;

    function draw() {
      activeCtx.fillStyle = 'rgba(5, 7, 13, 0.22)';
      activeCtx.fillRect(0, 0, W, H);

      ambientTimer++;
      if (ambientTimer > 2) { ambientTimer = 0; spawnAmbient(); }

      glyphTimer++;
      if (glyphTimer > 55) { glyphTimer = 0; spawnAmbientGlyph(); }

      particles = particles.filter(p => {
        const alive = p.update();
        if (alive) p.draw(activeCtx);
        return alive;
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      activeContainer.removeEventListener("mousemove", handleMouseMove);
      activeContainer.removeEventListener("mouseleave", handleMouseLeave);
      activeContainer.removeEventListener("touchmove", handleTouchMove);
      activeContainer.removeEventListener("click", handleClick);
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
        background: "#05070d"
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
