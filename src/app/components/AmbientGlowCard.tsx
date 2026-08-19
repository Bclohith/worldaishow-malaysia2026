"use client";

import { useRef, type ReactNode } from "react";

export function AmbientGlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      {/* 1. SOFT OUTSIDE AMBIENT GLOW (Behind the card) */}
      <div 
        className="absolute -inset-[10px] rounded-[inherit] -z-10 opacity-0 transition-opacity duration-300 pointer-events-none group-hover:opacity-100 blur-[20px]"
        style={{
          background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(0,206,255,0.25), transparent 70%)"
        }}
      />

      {/* 2. BORDER HIGHLIGHT GRADIENT */}
      <div 
        className="absolute inset-0 rounded-[inherit] p-[1.5px] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: "radial-gradient(350px circle at var(--x, 50%) var(--y, 50%), rgba(0,206,255,0.8) 0%, rgba(0,206,255,0.4) 30%, transparent 65%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      
      {children}
    </article>
  );
}
