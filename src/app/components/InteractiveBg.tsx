"use client";

import { useEffect, useRef } from "react";

export function InteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

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
      "function initAI() {",
      "return neuralNet.forward(input);",
      "const weights = tf.randomNormal([784, 256]);",
      "import tensorflow as tf;",
      "import torch.nn as nn",
      "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy')",
      "ctx.fillStyle = '#00ffcc';",
      "window.addEventListener('mousemove', (e) => {",
      "const matrix = Array(100).fill(0);",
      "epochs=50, batch_size=32",
      "loss, accuracy = model.evaluate(x_test, y_test)",
      "for layer in model.layers:",
      "const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);",
      "optimizer.step()",
      "outputs = model(images)",
      "self.hidden = nn.Linear(input_size, hidden_size)",
      "def forward(self, x):",
      "return F.relu(self.hidden(x))",
      "grid[x][y] = Math.random() > 0.5 ? 1 : 0;",
      "const distance = Math.hypot(dx, dy);",
      "if (dist < revealRadius) {",
    ];

    // Track mouse coordinates
    let mouse = { x: -1000, y: -1000, active: false };
    let smoothMouse = { x: -1000, y: -1000 };
    let glowIntensity = 0;

    const pushRadius = 210;
    const lightRadius = 340;
    const maxPush = 46;
    const aiFontSize = 120;

    // Pre-render canvas for the "AI" glass glyph
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
      aiCtx.font = `800 ${aiFontSize}px var(--font-orbitron), 'Orbitron', 'Courier New', sans-serif`;
      const cx = aiCanvasW / 2;
      const cy = aiCanvasH / 2;

      // Soft, outer rim light
      aiCtx.lineWidth = 3;
      aiCtx.shadowColor = "rgba(90, 190, 245, 0.6)";
      aiCtx.shadowBlur = 14;
      aiCtx.strokeStyle = "rgba(140, 210, 255, 0.5)";
      aiCtx.strokeText("AI", cx, cy);

      // Crisp inner highlights
      aiCtx.shadowBlur = 0;
      aiCtx.lineWidth = 1.2;
      aiCtx.strokeStyle = "rgba(255, 255, 255, 0.85)";
      aiCtx.strokeText("AI", cx, cy);

      // Glass fill
      aiCtx.fillStyle = "rgba(200, 230, 255, 0.05)";
      aiCtx.fillText("AI", cx, cy);

      // Specular reflection line
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

    // Re-render when fonts load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(renderAIGlass);
    }

    function initializeGrid() {
      if (!ctx || !canvas) return;
      codeLines.length = 0;
      const rows = Math.ceil(canvas.height / (fontSize + 12));

      for (let i = 0; i < rows; i++) {
        let fullRowText = "";
        while (ctx.measureText(fullRowText).width < canvas.width * 2) {
          fullRowText +=
            codeSnippets[Math.floor(Math.random() * codeSnippets.length)] +
            "    ";
        }

        codeLines.push({
          text: fullRowText,
          y: i * (fontSize + 12) + 15,
          x: Math.random() * -canvas.width,
          speed: 0.2 + Math.random() * 0.5,
          brightness: 0.15 + Math.random() * 0.35,
        });
      }
    }

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeGrid();
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    function draw() {
      if (!ctx || !canvas) return;

      // Draw slight trail opacity to mimic smooth background refreshing
      ctx.fillStyle = "rgba(2, 12, 33, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      smoothMouse.x += (mouse.x - smoothMouse.x) * 0.09;
      smoothMouse.y += (mouse.y - smoothMouse.y) * 0.09;
      const glowTarget = mouse.active ? 1 : 0;
      glowIntensity += (glowTarget - glowIntensity) * 0.06;

      // Drive the CSS glow overlay via inline styles or custom properties
      const overlay = containerRef.current?.querySelector(
        "#glow-overlay"
      ) as HTMLDivElement;
      if (overlay) {
        overlay.style.setProperty("--mouse-x", `${smoothMouse.x}px`);
        overlay.style.setProperty("--mouse-y", `${smoothMouse.y}px`);
        overlay.style.setProperty("--glow-intensity", glowIntensity.toFixed(3));
      }

      ctx.font = `${fontSize}px ${fontName}`;
      ctx.textAlign = "left";
      ctx.shadowBlur = 0;

      // Draw scrolling code lines
      codeLines.forEach((line) => {
        let currentX = line.x;

        for (let i = 0; i < line.text.length; i++) {
          const char = line.text[i];
          const charWidth = ctx.measureText(char).width;

          if (currentX >= -20 && currentX <= canvas.width + 20) {
            const dx = currentX - smoothMouse.x;
            const dy = line.y - smoothMouse.y;
            const distance = Math.hypot(dx, dy);

            let drawX = currentX;
            let drawY = line.y;
            let alpha = line.brightness;
            let r = 120,
              g = 132,
              b = 150; // base code color

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

              alpha *= 1 - eased * 0.5;
            }

            ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`;
            ctx.fillText(char, drawX, drawY);
          }

          currentX += charWidth;
        }

        line.x += line.speed;

        const totalLineWidth = ctx.measureText(line.text).width;
        if (line.x > 0) {
          line.x = -(totalLineWidth / 2);
        }
      });

      // Draw pre-rendered glass "AI" centered on the cursor
      if (glowIntensity > 0.01) {
        const imgX = smoothMouse.x - aiCanvasW / 2;
        const imgY = smoothMouse.y - aiCanvasH / 2;

        ctx.save();
        ctx.globalAlpha = glowIntensity;

        // Soft ambient glow
        ctx.shadowColor = "rgba(90, 190, 245, 0.55)";
        ctx.shadowBlur = 35;
        ctx.drawImage(aiCanvas, imgX, imgY);

        // Crisp overlays
        ctx.shadowBlur = 0;
        ctx.drawImage(aiCanvas, imgX, imgY);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      style={{
        background: "radial-gradient(ellipse at center, #071130 0%, #020c21 100%)",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div
        id="glow-overlay"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 260px at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(90, 190, 245, 0.09) 0%, rgba(90, 190, 245, 0.05) 30%, rgba(90, 190, 245, 0.02) 55%, transparent 78%)",
          filter: "blur(25px)",
          opacity: "var(--glow-intensity, 0)",
          zIndex: 2,
        }}
      />
      <div
        id="vignette"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          boxShadow: "inset 0 0 220px rgba(0, 0, 0, 0.75)",
          zIndex: 3,
        }}
      />
    </div>
  );
}
