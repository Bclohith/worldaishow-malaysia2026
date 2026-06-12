"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Trigger once on mount to capture initial scroll state

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-8 right-8 z-[99] flex items-center justify-center w-12 h-12 rounded-full text-black bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.35)] cursor-pointer select-none outline-none active:scale-95 hover:scale-110 hover:shadow-[0_0_32px_rgba(192,244,60,0.5)] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 scale-100 visible" : "opacity-0 translate-y-6 scale-90 invisible pointer-events-none"
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[18px] h-[18px]"
        aria-hidden="true"
      >
        <path
          d="M9 15V3"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9L9 3L15 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
