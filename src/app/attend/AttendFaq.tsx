"use client";

import { useState } from "react";

export function AttendFaq({ faqs }: { faqs: string[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[976px] mx-auto mt-12 p-6 border border-white/8 rounded-[24px] bg-[#040a19]/50">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="border-b border-white/36 last:border-b-0" key={faq}>
            <button
              aria-controls={`attend-faq-${index}`}
              aria-expanded={isOpen}
              className="w-full min-h-[68px] py-4 px-6 grid grid-cols-[44px_1fr_24px] max-sm:grid-cols-[44px_1fr] items-center gap-5 border-0 cursor-pointer text-[#f7f9ff] bg-transparent text-left hover:text-cyan transition-colors duration-180"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-white/68 font-mono text-[13px] font-normal">
                / {String(index + 1).padStart(2, "0")}
              </span>
              <strong className="text-[18px] font-extrabold max-sm:text-[16px]">
                {faq}
              </strong>
              <span 
                className={`text-white/70 font-bold text-center block max-sm:hidden transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-cyan" : ""
                }`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 py-3" : "grid-rows-[0fr] opacity-0"
              }`}
              id={`attend-faq-${index}`}
            >
              <div className="overflow-hidden">
                <p className="max-w-[740px] ml-[68px] mr-6 pb-4 text-[#aeb5c5] text-[15px] leading-relaxed max-sm:ml-[44px]">
                  World AI Show Malaysia is built for invited senior AI,
                  technology, policy, data, infrastructure, and enterprise
                  leaders. Registration, sponsorship, and agenda details are
                  shared through the official event team.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
