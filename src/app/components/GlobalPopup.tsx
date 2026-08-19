"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function GlobalPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ticketsTiltRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);

  const isHomePage = pathname === "/" || pathname === "";

  const wrapperRef = useRef<HTMLDivElement>(null);

  // Show popup once per session automatically on homepage
  useEffect(() => {
    if (!isHomePage) return;
    const alreadySeen = sessionStorage.getItem("hasSeenPromoPopup");
    if (alreadySeen) return;

    setMounted(true);
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("hasSeenPromoPopup", "true");
    }, 1500);

    return () => clearTimeout(timer);
  }, [isHomePage]);

  // ParticleWave canvas animation
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let time = 0;
    const speed = 0.008;
    const cols = 28, rows = 14;
    const amp1 = 12, amp2 = 6;
    const freq1 = 0.22, freq2 = 0.12;

    function resize() {
      const parent = canvas.parentElement!;
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    function animate() {
      time += speed;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const spacingX = w / (cols - 1);
      const spacingY = (h * 0.5) / (rows - 1);
      const centerY = h * 0.55;
      const grid: { x: number; y: number; radius: number; color: string; lineColor: string }[][] = [];

      for (let r = 0; r < rows; r++) {
        grid[r] = [];
        const depthRatio = r / (rows - 1);
        const scale = 0.35 + 0.65 * depthRatio;
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX;
          const baseY = centerY + (r - rows / 2) * spacingY * 0.85;
          const wave1 = Math.sin(c * freq1 + r * 0.15 + time * 2) * amp1;
          const wave2 = Math.cos(c * freq2 - time * 0.8) * amp2;
          const dy = (wave1 + wave2) * scale;
          const projX = w * 0.5 + (baseX - w * 0.5) * scale;
          const projY = baseY + dy * scale + h * 0.12 * (1 - scale);
          const xRatio = Math.max(0, Math.min(1, projX / w));
          const red = Math.round(181 * xRatio);
          const green = Math.round(243 + 2 * xRatio);
          const blue = Math.round(255 + (35 - 255) * xRatio);
          const edgeFade = Math.sin(xRatio * Math.PI) * 0.9 + 0.1;
          const alpha = (0.2 + 0.8 * depthRatio) * 0.75 * edgeFade;
          grid[r][c] = {
            x: projX, y: projY,
            radius: 0.8 + 1.8 * depthRatio,
            color: `rgba(${red},${green},${blue},${alpha})`,
            lineColor: `rgba(${red},${green},${blue},${alpha * 0.15})`,
          };
        }
      }

      // Draw lines
      ctx.lineWidth = 0.55;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cur = grid[r][c];
          if (c < cols - 1) {
            ctx.beginPath(); ctx.moveTo(cur.x, cur.y);
            ctx.lineTo(grid[r][c + 1].x, grid[r][c + 1].y);
            ctx.strokeStyle = cur.lineColor; ctx.stroke();
          }
          if (r < rows - 1) {
            ctx.beginPath(); ctx.moveTo(cur.x, cur.y);
            ctx.lineTo(grid[r + 1][c].x, grid[r + 1][c].y);
            ctx.strokeStyle = cur.lineColor; ctx.stroke();
          }
        }
      }
      // Draw dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid[r][c];
          ctx.beginPath(); ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          if (p.radius > 1.8) { ctx.shadowBlur = 4; ctx.shadowColor = p.color; }
          else ctx.shadowBlur = 0;
          ctx.fill();
        }
      }
      ctx.shadowBlur = 0;
      animFrameRef.current = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isOpen]);

  // 3D tilt on mouse move
  useEffect(() => {
    if (!isOpen) return;
    const panel = rightPanelRef.current;
    const tilt = ticketsTiltRef.current;
    if (!panel || !tilt) return;

    const onMove = (e: MouseEvent) => {
      const rect = panel.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotY = (x / (rect.width / 2)) * 28;
      const rotX = -(y / (rect.height / 2)) * 22;
      tilt.style.transition = "transform 0.08s ease-out";
      tilt.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(-2deg)`;
    };
    const onLeave = () => {
      tilt.style.transition = "transform 0.6s cubic-bezier(0.25,1,0.5,1)";
      tilt.style.transform = "rotateY(-20deg) rotateX(10deg) rotateZ(0deg)";
    };

    panel.addEventListener("mousemove", onMove);
    panel.addEventListener("mouseleave", onLeave);
    return () => {
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseleave", onLeave);
    };
  }, [isOpen]);

  const handleClose = () => setIsOpen(false);

  if (!isHomePage) return null;

  return (
    <div ref={wrapperRef} aria-hidden="true">
      {mounted && (
        <>
          <style>{`
            .wais-popup-overlay {
              position: fixed; inset: 0; z-index: 9999;
              display: flex; justify-content: center; align-items: center;
              opacity: 0; pointer-events: none;
              transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1);
            }
            .wais-popup-overlay.active { opacity: 1; pointer-events: all; }
            .wais-popup-backdrop {
              position: absolute; inset: 0;
              background: rgba(2,8,28,0.75);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
            }
            .wais-popup-card {
              position: relative;
              width: 900px; max-width: 92vw; height: 500px;
              background: radial-gradient(circle at 80% 20%, #06173a 0%, #02081c 100%);
              border-radius: 24px;
              border: 1px solid rgba(0,243,255,0.15);
              box-shadow: 0 0 30px rgba(0,243,255,0.15), 0 0 50px rgba(181,245,35,0.1);
              overflow: hidden; z-index: 10;
              transform: scale(0.2) translateY(40px); opacity: 0;
              transition: transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.7s ease;
              display: flex;
            }
            .wais-popup-overlay.active .wais-popup-card {
              transform: scale(1) translateY(0); opacity: 1;
            }
            .wais-close-btn {
              position: absolute; top: 24px; right: 24px;
              width: 36px; height: 36px; border-radius: 50%;
              background: #b5f523; border: none;
              display: flex; justify-content: center; align-items: center;
              cursor: pointer; z-index: 30;
              box-shadow: 0 0 15px rgba(181,245,35,0.4);
              transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
            }
            .wais-close-btn:hover {
              transform: scale(1.1) rotate(90deg);
              background: #fff; box-shadow: 0 0 20px rgba(255,255,255,0.6);
            }
            /* LEFT */
            .wais-popup-left {
              width: 53%; height: 100%;
              padding: 48px 0 44px 48px;
              display: flex; flex-direction: column; justify-content: space-between;
              position: relative; z-index: 5;
            }
            .wais-accent-bar { width: 50px; height: 4px; background: #b5f523; border-radius: 2px; }
            .wais-popup-title {
              font-family: 'Space Grotesk', sans-serif;
              font-size: 40px; line-height: 1.15; font-weight: 700;
              display: flex; flex-direction: column; margin-top: 15px;
              text-align: left;
              align-items: flex-start;
            }
            .wais-popup-title span { display: block; overflow: hidden; }
            .wais-word-white { color: #fff; }
            .wais-word-lime { color: #b5f523; text-shadow: 0 0 10px rgba(181,245,35,0.2); }
            .wais-register-info { display:flex; align-items:center; gap:16px; margin: 20px 0; }
            .wais-icon-circle {
              width:48px; height:48px; border-radius:50%;
              border:1.5px solid rgba(255,255,255,0.15);
              background:rgba(255,255,255,0.03);
              display:flex; justify-content:center; align-items:center;
              color:#fff; flex-shrink:0;
            }
            .wais-info-text { font-size:15px; line-height:1.4; color:#8a99ad; font-weight:400; text-align: left; }
            .wais-cta-button {
              display:inline-flex; justify-content:space-between; align-items:center;
              width:320px; padding:16px 24px;
              background:#b5f523; color:#02081c;
              text-decoration:none; border-radius:8px;
              font-family:'Outfit',sans-serif; font-weight:800; font-size:15px; letter-spacing:0.5px;
              position:relative; overflow:hidden;
              box-shadow:0 5px 15px rgba(181,245,35,0.3);
              transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
            }
            .wais-cta-button:hover { transform:translateY(-2px); box-shadow:0 10px 25px rgba(181,245,35,0.5); background:#fff; }
            .wais-cta-button::after {
              content:''; position:absolute; top:-50%; left:-60%;
              width:30%; height:200%;
              background:linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(255,255,255,0) 100%);
              transform:rotate(25deg);
              animation:wais-shine 4s ease-in-out infinite;
            }
            @keyframes wais-shine { 0%{left:-60%;} 30%{left:120%;} 100%{left:120%;} }
            .wais-cta-btn-span { position:relative; z-index:5; }
            .wais-cta-arrow { position:relative; z-index:5; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); }
            .wais-cta-button:hover .wais-cta-arrow { transform:translateX(6px); }
            .wais-trust-footer { display:flex; align-items:center; gap:8px; margin-top:15px; flex-wrap:nowrap; white-space:nowrap; }
            .wais-trust-item {
              display:flex; align-items:center; gap:5px;
              font-size:10.5px; font-weight:500; color:#8a99ad;
              letter-spacing:0.2px; white-space:nowrap;
            }
            .wais-trust-icon { color:#b5f523; opacity:0.95; flex-shrink:0; }
            .wais-trust-divider { width:1px; height:12px; background:rgba(255,255,255,0.15); }
            /* RIGHT */
            .wais-popup-right {
              width:47%; height:100%;
              position:relative; display:flex;
              justify-content:center; align-items:center;
            }
            .wais-wave-canvas {
              position:absolute; top:0; left:0;
              width:100%; height:100%;
              z-index:1; pointer-events:none;
            }
            .wais-ambient-glow {
              position:absolute; border-radius:50%;
              filter:blur(80px); opacity:0.35;
              pointer-events:none; z-index:2;
            }
            .wais-cyan-glow { width:250px;height:250px;background:#00f3ff;top:10%;right:15%; }
            .wais-lime-glow { width:200px;height:200px;background:#b5f523;bottom:5%;left:10%;opacity:0.25; }
            .wais-tickets-perspective {
              position:relative; width:280px; height:320px;
              z-index:5; perspective:1000px;
              display:flex; justify-content:center; align-items:center;
            }
            .wais-tickets-bobbing {
              width:100%; height:100%; position:relative;
              animation:wais-float-y 6s ease-in-out infinite;
            }
            @keyframes wais-float-y { 0%{transform:translateY(0);} 50%{transform:translateY(-10px);} 100%{transform:translateY(0);} }
            .wais-tickets-tilt { width:100%; height:100%; position:relative; transform-style:preserve-3d; transform:rotateY(-20deg) rotateX(10deg) rotateZ(0deg); }
            .wais-ticket {
              position:absolute; width:140px; height:240px;
              background:transparent; transform-style:preserve-3d;
            }
            .wais-ticket-bg-svg { position:absolute; top:0;left:0; width:100%;height:100%; pointer-events:none; }
            .wais-ticket-back {
              z-index:10; left:45px; top:35px;
              transform:translateZ(-35px) rotateY(-18deg) rotateX(12deg) rotateZ(-12deg);
              opacity:0.65;
            }
            .wais-ticket-front { z-index:20; left:90px; top:20px; transform:translateZ(10px) rotateY(-20deg) rotateX(10deg) rotateZ(-6deg); }
            .wais-ticket-content {
              padding:20px 14px; height:100%;
              display:flex; flex-direction:column; justify-content:space-between; align-items:center;
              position:relative; z-index:4;
            }
            .wais-ticket-top { text-align:center; display:flex; flex-direction:column; align-items:center; }
            .wais-ticket-badge {
              background:#b5f523; color:#02081c;
              font-family:'Outfit',sans-serif; font-weight:800; font-size:11px;
              padding:3px 10px; border-radius:4px; margin-bottom:24px;
              letter-spacing:0.5px; box-shadow:0 0 8px rgba(181,245,35,0.4);
            }
            .wais-ticket-tag { color:#00f3ff; font-family:'Outfit',sans-serif; font-weight:800; font-size:13px; margin-bottom:24px; }
            .wais-ticket-main { font-family:'Outfit',sans-serif; font-weight:700; font-size:13px; letter-spacing:0.8px; color:#fff; line-height:1.2; }
            .wais-ticket-sub { font-family:'Outfit',sans-serif; font-weight:700; font-size:12px; letter-spacing:1.5px; color:#00f3ff; margin-top:2px; }
            .wais-ticket-divider { width:100%; position:absolute; top:70%; left:0; display:flex; justify-content:center; }
            .wais-divider-line { width:80%; border-bottom:1.5px dashed rgba(0,243,255,0.25); }
            .wais-ticket-bottom { margin-bottom:4px; color:#00f3ff; }
            .wais-scanner-beam {
              position:absolute; width:calc(100% - 4px); height:4px; left:2px;
              background:linear-gradient(to right,transparent,#00f3ff,transparent);
              box-shadow:0 0 10px #00f3ff;
              z-index:6; animation:wais-scanner 3.5s linear infinite; opacity:0.8; pointer-events:none;
            }
            @keyframes wais-scanner { 0%{top:10px;} 50%{top:calc(100% - 14px);} 100%{top:10px;} }
            @media(max-width:700px){
              .wais-popup-card { width:100%;max-width:95vw;height:auto;max-height:88vh;flex-direction:column;overflow-y:auto; }
              .wais-popup-left { width:100%;padding:24px 24px 16px; }
              .wais-popup-title { font-size:24px; flex-direction:row; flex-wrap:wrap; gap:0 8px; }
              .wais-popup-title span { display:inline; }
              .wais-popup-right { width:100%;height:200px;min-height:200px;flex-shrink:0; }
              .wais-cta-button { width:100%;max-width:100%; }
              .wais-trust-footer { justify-content:flex-start;flex-wrap:wrap;gap:6px; }
              .wais-register-info { margin:12px 0; }
              .wais-accent-bar { margin-bottom:8px; }
              .wais-close-btn { top:16px;right:16px;width:30px;height:30px; }
            }
          `}</style>

          <div className={`wais-popup-overlay ${isOpen ? 'active' : ''}`} id="wais-popup-overlay">
            <div className="wais-popup-backdrop" onClick={handleClose} />

            <div className="wais-popup-card">
              {/* Close */}
              <button className="wais-close-btn" onClick={handleClose} aria-label="Close popup">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="#02081c" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* LEFT */}
              <div className="wais-popup-left">
                <div className="wais-accent-bar" />
                <div className="wais-popup-title">
                  <span className="wais-word-white">Limited</span>
                  <span className="wais-word-lime">Free Delegate</span>
                  <span className="wais-word-white">Passes</span>
                  <span className="wais-word-lime">Remaining</span>
                </div>
                <div className="wais-register-info">
                  <div className="wais-icon-circle">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <span className="wais-info-text">Register now before<br/>all free passes are claimed.</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <a className="wais-cta-button" href="https://worldaishow.com/malaysia/attend/delegate/#passes">
                    <span className="wais-cta-btn-span">CLAIM YOUR FREE PASS</span>
                    <svg className="wais-cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M1 10H15M15 10L10 5M15 10L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <div className="wais-trust-footer">
                    <div className="wais-trust-item">
                      <svg className="wais-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <polygon points="12 8 13.5 11 16.5 11 14 13 15 16 12 14.5 9 16 10 13 7.5 11 10.5 11"/>
                      </svg>
                      <span>100% Complimentary</span>
                    </div>
                    <div className="wais-trust-divider" />
                    <div className="wais-trust-item">
                      <svg className="wais-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>Limited Availability</span>
                    </div>
                    <div className="wais-trust-divider" />
                    <div className="wais-trust-item">
                      <svg className="wais-trust-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <polyline points="9 12 11 14 15 10"/>
                      </svg>
                      <span>Executive Access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="wais-popup-right" ref={rightPanelRef}>
                <canvas ref={canvasRef} className="wais-wave-canvas" id="wave-canvas" />
                <div className="wais-ambient-glow wais-cyan-glow" />
                <div className="wais-ambient-glow wais-lime-glow" />

                <div className="wais-tickets-perspective">
                  <div className="wais-tickets-bobbing">
                    <div className="wais-tickets-tilt" ref={ticketsTiltRef}>

                      {/* Back Ticket */}
                      <div className="wais-ticket wais-ticket-back">
                        <svg className="wais-ticket-bg-svg" viewBox="0 0 140 240" fill="none">
                          <path d="M 12 0 L 58 0 A 12 12 0 0 0 82 0 L 128 0 A 12 12 0 0 1 140 12 L 140 160 A 8 8 0 0 0 140 176 L 140 228 A 12 12 0 0 1 128 240 L 82 240 A 12 12 0 0 0 58 240 L 12 240 A 12 12 0 0 1 0 228 L 0 176 A 8 8 0 0 0 0 160 L 0 12 A 12 12 0 0 1 12 0 Z" fill="#030d29" fillOpacity="0.85" stroke="rgba(0,243,255,0.45)" strokeWidth="1.5"/>
                        </svg>
                        <div className="wais-ticket-content" style={{opacity:0.5}}>
                          <div className="wais-ticket-top">
                            <span className="wais-ticket-tag">FREE</span>
                            <span className="wais-ticket-main">DELEGATE</span>
                            <span className="wais-ticket-main">PASS</span>
                          </div>
                          <div className="wais-ticket-divider"><div className="wais-divider-line"/></div>
                          <div className="wais-ticket-bottom">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Front Ticket */}
                      <div className="wais-ticket wais-ticket-front">
                        <svg className="wais-ticket-bg-svg" viewBox="0 0 140 240" fill="none">
                          <defs>
                            <filter id="neon-glow-cyan" x="-25%" y="-25%" width="150%" height="150%">
                              <feGaussianBlur stdDeviation="4" result="blur"/>
                              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                            </filter>
                          </defs>
                          <path d="M 12 0 L 58 0 A 12 12 0 0 0 82 0 L 128 0 A 12 12 0 0 1 140 12 L 140 160 A 8 8 0 0 0 140 176 L 140 228 A 12 12 0 0 1 128 240 L 82 240 A 12 12 0 0 0 58 240 L 12 240 A 12 12 0 0 1 0 228 L 0 176 A 8 8 0 0 0 0 160 L 0 12 A 12 12 0 0 1 12 0 Z" fill="#030d29" fillOpacity="0.85" stroke="#00f3ff" strokeWidth="1.8" filter="url(#neon-glow-cyan)"/>
                        </svg>
                        <div className="wais-scanner-beam" />
                        <div className="wais-ticket-content">
                          <div className="wais-ticket-top">
                            <div className="wais-ticket-badge">FREE</div>
                            <div className="wais-ticket-main">DELEGATE</div>
                            <div className="wais-ticket-sub">PASS</div>
                          </div>
                          <div className="wais-ticket-divider"><div className="wais-divider-line"/></div>
                          <div className="wais-ticket-bottom">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                              <circle cx="9" cy="7" r="4"/>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
