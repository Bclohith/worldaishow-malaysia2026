"use client";

import { ReactNode, useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
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

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-[#8ddcff] via-[#10d7ff] via-[#4ee9be] to-[#b5f43b] bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export function Logo() {
  return (
    <a
      className="flex items-center w-[118px] h-[49px] hover:opacity-90 transition-opacity duration-200"
      href="/malaysia/"
      aria-label="World AI Show Malaysia"
    >
      <img
        src="/malaysia/logos/Nav-icon.svg"
        alt="WAIS Malaysia Logo"
        width={118}
        height={49}
        className="w-full h-full object-contain"
      />
    </a>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  showArrow?: boolean;
}

export function Button({ children, variant = "solid", href = "#cta", showArrow = false }: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 min-w-[156px] h-[49px] rounded-full font-extrabold text-sm transition-all duration-200 ease-out hover:-translate-y-0.5 cursor-pointer px-6";

  const variants = {
    solid: "bg-[#C0F43C] !text-black [color:#06111f!important] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)]",
    outline:
      "border border-[#4eb9ff]/80 text-white bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:bg-[#030a18]/50 hover:border-cyan/100",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]}`} href={href}>
      {children}
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M3.33334 8H12.6667"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66666 4L12.6667 8L8.66666 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
