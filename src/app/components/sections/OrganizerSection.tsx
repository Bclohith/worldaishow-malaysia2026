"use client";

import { Counter } from "../Shared";

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[72px] bg-[#020713]" id="organizer">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Main Organizer Layout Panel */}
        <div
          className="grid grid-cols-[0.72fr_1fr] gap-[72px] items-center min-h-[292px] p-[56px_64px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px] max-sm:gap-[42px]"
          style={{
            background: "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
          }}
        >
          
          {/* Logo column */}
          <div className="flex flex-col">
            <span className="text-white/74 font-mono text-[12px] uppercase tracking-[5px] select-none">
              Event By
            </span>
            <img
              className="block mt-[10px] h-auto object-contain select-none"
              style={{ width: "50%" }}
              src="/malaysia/logos/Trescon-org.svg"
              alt="Trescon Global"
              width={270}
              height={80}
            />
          </div>

          {/* Copy content column */}
          <div className="flex flex-col">
            <p className="m-0 text-[#a4adbd] text-[15px] leading-[1.6]">
              Trescon is a global business events and consulting firm that provides a wide range of business services to a diversified client base.
            </p>
            
            <p className="mt-[20px] m-0 text-[#a4adbd] text-[15px] leading-[1.6]">
              With a deep understanding of the realities and requirements of the growth markets we operate in – we strive to deliver innovative and high quality business platforms for our clients.
            </p>

            {/* Strategic Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-[30px] max-sm:grid-cols-1 max-sm:gap-4">
              <div className="flex flex-col">
                <strong className="text-[#C0F43C] font-[850] text-[26px] leading-none mb-2">
                  <Counter end={200} suffix="+" />
                </strong>
                <span className="text-white/64 font-mono text-[12px] uppercase tracking-[1.6px] select-none leading-tight">
                  Global Events
                </span>
              </div>
              <div className="flex flex-col">
                <strong className="text-[#C0F43C] font-[850] text-[26px] leading-none mb-2">
                  <Counter end={100} suffix="+" />
                </strong>
                <span className="text-white/64 font-mono text-[12px] uppercase tracking-[1.6px] select-none leading-tight">
                  Countries
                </span>
              </div>
              <div className="flex flex-col">
                <strong className="text-[#C0F43C] font-[850] text-[26px] leading-none mb-2">
                  <Counter end={150} suffix="K+" />
                </strong>
                <span className="text-white/64 font-mono text-[12px] uppercase tracking-[1.6px] select-none leading-tight">
                  Decision-Makers
                </span>
              </div>
            </div>

            {/* Link Anchor with up-right arrow */}
            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-7 text-[#C0F43C] font-extrabold text-[15px] hover:underline"
            >
              Learn more about Trescon 
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5 object-contain"
                aria-hidden="true"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

