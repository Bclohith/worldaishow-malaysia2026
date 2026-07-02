"use client";

import { useEffect, useRef } from "react";
import { Button, GradientText } from "../Shared";

export function HeroSectionDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Add Orbitron font dynamically
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@600;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const activeContainer = container;
    const activeCanvas = canvas;

    const ctx = activeCanvas.getContext("2d");
    if (!ctx) return;

    const activeCtx = ctx;

    let animationFrameId: number;

    // Grid Configuration
    const fontSize = 12;
    const fontName = "Courier New";
    const codeLines: Array<{
      text: string;
      y: number;
      x: number;
      speed: number;
      brightness: number;
    }> = [];

    // Code snippets to populate the background
    const codeSnippets = [
      "function initAI() {", "return neuralNet.forward(input);", "const weights = tf.randomNormal([784, 256]);",
      "import tensorflow as tf;", "import torch.nn as nn", "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')",
      "ctx.fillStyle = '#00ffcc';", "window.addEventListener('mousemove', (e) => {", "const matrix = Array(100).fill(0);",
      "epochs=50, batch_size=32", "loss, accuracy = model.evaluate(x_test, y_test)", "for layer in model.layers:",
      "const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);", "optimizer.step()", "outputs = model(images)",
      "self.hidden = nn.Linear(input_size, hidden_size)", "def forward(self, x):", "return F.relu(self.hidden(x))",
      "grid[x][y] = Math.random() > 0.5 ? 1 : 0;", "const distance = Math.hypot(dx, dy);", "if (dist < revealRadius) {"
    ];

    // Track mouse coordinates relative to container
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: -1000, y: -1000 };
    let glowIntensity = 0;

    const pushRadius = 210;
    const lightRadius = 340;
    const maxPush = 46;
    const aiFontSize = 120;

    const aiCanvasW = Math.round(aiFontSize * 2.6);
    const aiCanvasH = Math.round(aiFontSize * 1.6);
    const aiCanvas = document.createElement("canvas");
    aiCanvas.width = aiCanvasW;
    aiCanvas.height = aiCanvasH;
    const aiCtx = aiCanvas.getContext("2d");

    function renderAIGlass() {
      if (!aiCtx) return;
      aiCtx.clearRect(0, 0, aiCanvasW, aiCanvasH);
      aiCtx.textAlign = "center";
      aiCtx.textBaseline = "middle";
      aiCtx.font = `800 ${aiFontSize}px 'Orbitron', 'Courier New', sans-serif`;
      const cx = aiCanvasW / 2;
      const cy = aiCanvasH / 2;

      aiCtx.lineWidth = 3;
      aiCtx.shadowColor = "rgba(90, 190, 245, 0.6)";
      aiCtx.shadowBlur = 14;
      aiCtx.strokeStyle = "rgba(140, 210, 255, 0.5)";
      aiCtx.strokeText("AI", cx, cy);

      aiCtx.shadowBlur = 0;
      aiCtx.lineWidth = 1.2;
      aiCtx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      aiCtx.strokeText("AI", cx, cy);

      aiCtx.fillStyle = "rgba(200, 230, 255, 0.05)";
      aiCtx.fillText("AI", cx, cy);

      aiCtx.save();
      aiCtx.globalCompositeOperation = "source-atop";
      const streak = aiCtx.createLinearGradient(0, 0, aiCanvasW, aiCanvasH);
      streak.addColorStop(0, "rgba(255, 255, 255, 0)");
      streak.addColorStop(0.42, "rgba(255, 255, 255, 0)");
      streak.addColorStop(0.5, "rgba(255, 255, 255, 0.45)");
      streak.addColorStop(0.58, "rgba(255, 255, 255, 0)");
      streak.addColorStop(1, "rgba(255, 255, 255, 0)");
      aiCtx.fillStyle = streak;
      aiCtx.fillRect(0, 0, aiCanvasW, aiCanvasH);
      aiCtx.restore();
    }

    renderAIGlass();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(renderAIGlass);
    }

    function resizeCanvas() {
      const rect = activeContainer.getBoundingClientRect();
      activeCanvas.width = rect.width;
      activeCanvas.height = rect.height;
      initializeGrid();
    }

    function initializeGrid() {
      codeLines.length = 0;
      const rows = Math.ceil(activeCanvas.height / (fontSize + 12));
      
      for(let i = 0; i < rows; i++) {
        let fullRowText = "";
        while(activeCtx.measureText(fullRowText).width < activeCanvas.width * 2) {
          fullRowText += codeSnippets[Math.floor(Math.random() * codeSnippets.length)] + "    ";
        }

        codeLines.push({
          text: fullRowText,
          y: i * (fontSize + 12) + 15,
          x: Math.random() * -activeCanvas.width,
          speed: 0.2 + Math.random() * 0.5,
          brightness: 0.15 + Math.random() * 0.35
        });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = activeContainer.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    activeContainer.addEventListener("mousemove", handleMouseMove);
    activeContainer.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();

    function draw() {
      activeCtx.fillStyle = "rgba(2, 12, 33, 0.22)";
      activeCtx.fillRect(0, 0, activeCanvas.width, activeCanvas.height);

      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.09;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.09;
      const glowTarget = mouse.active ? 1 : 0;
      glowIntensity += (glowTarget - glowIntensity) * 0.06;

      activeContainer.style.setProperty("--mouse-x", `${smoothMouse.x}px`);
      activeContainer.style.setProperty("--mouse-y", `${smoothMouse.y}px`);
      activeContainer.style.setProperty("--glow-intensity", glowIntensity.toFixed(3));

      activeCtx.font = `${fontSize}px ${fontName}`;
      activeCtx.textAlign = "left";
      activeCtx.shadowBlur = 0;

      codeLines.forEach(line => {
        let currentX = line.x;

        for (let i = 0; i < line.text.length; i++) {
          const char = line.text[i];
          const charWidth = activeCtx.measureText(char).width;

          if (currentX >= -20 && currentX <= activeCanvas.width + 20) {
            const dx = currentX - smoothMouse.x;
            const dy = line.y - smoothMouse.y;
            const distance = Math.hypot(dx, dy);

            let drawX = currentX;
            let drawY = line.y;
            let alpha = line.brightness;
            let r = 120, g = 132, b = 150;

            if (glowIntensity > 0.01 && distance < lightRadius) {
              const lt = 1 - distance / lightRadius;
              const lightEased = lt * lt * (3 - 2 * lt);
              const lightFactor = lightEased * glowIntensity;

              r += (100 - r) * lightFactor;
              g += (200 - g) * lightFactor;
              b += (255 - b) * lightFactor;
              alpha = line.brightness + lightFactor * 0.5;
            }

            if (glowIntensity > 0.01 && distance < pushRadius) {
              const t = 1 - distance / pushRadius;
              const eased = t * t * (3 - 2 * t);
              const push = eased * maxPush * glowIntensity;

              const angle = Math.atan2(dy, dx);
              drawX = currentX + Math.cos(angle) * push;
              drawY = line.y + Math.sin(angle) * push;

              alpha *= (1 - eased * 0.5);
            }

            activeCtx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`;
            activeCtx.fillText(char, drawX, drawY);
          }

          currentX += charWidth;
        }

        line.x += line.speed;

        const totalLineWidth = activeCtx.measureText(line.text).width;
        if (line.x > 0) {
          line.x = - (totalLineWidth / 2);
        }
      });

      if (glowIntensity > 0.01) {
        const imgX = smoothMouse.x - aiCanvasW / 2;
        const imgY = smoothMouse.y - aiCanvasH / 2;

        activeCtx.save();
        activeCtx.globalAlpha = glowIntensity;

        activeCtx.shadowColor = "rgba(90, 190, 245, 0.55)";
        activeCtx.shadowBlur = 35;
        activeCtx.drawImage(aiCanvas, imgX, imgY);

        activeCtx.shadowBlur = 0;
        activeCtx.drawImage(aiCanvas, imgX, imgY);
        activeCtx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[720px] -mt-[81px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[680px] max-sm:-mt-[71px] max-sm:min-h-[720px]" 
      id="home"
      style={{
        background: "radial-gradient(ellipse at center, #071130 0%, #020c21 100%)"
      }}
    >
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

      {/* Ambient glow follow overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-1" 
        style={{
          background: "radial-gradient(circle 260px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(90, 190, 245, 0.09) 0%, rgba(90, 190, 245, 0.05) 30%, rgba(90, 190, 245, 0.02) 55%, transparent 78%)",
          filter: "blur(25px)",
          opacity: "var(--glow-intensity, 0)",
          transition: "opacity 0.15s ease"
        }}
      />

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
            <strong className="block text-[30px] font-[850] text-white leading-none">
              9-<GradientText>10</GradientText>
            </strong>
            <span className="block mt-2 text-[14px] text-white/70 uppercase tracking-[1px]">
              Sep 2026
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[30px] font-[850] text-white leading-none">
              DoubleTree by <GradientText>Hilton</GradientText>
            </strong>
            <span className="block mt-2 text-[14px] text-white/70 uppercase tracking-[1px]">
              Kuala Lumpur, Malaysia
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
