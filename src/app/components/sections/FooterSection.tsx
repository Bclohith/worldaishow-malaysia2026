"use client";

export function FooterSection() {
  return (
    <footer className="relative py-[74px] pb-[38px] bg-gradient-to-b from-[#040c1c]/72 to-[#030b19] bg-[#030b19] border-t border-white/5 overflow-hidden" id="footer">
      {/* Visual top glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[1px] bg-[radial-gradient(circle,rgba(18,205,255,0.24),transparent_70%)] pointer-events-none" />

      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        
        {/* Footer Top Column Grid */}
        <div className="grid grid-cols-[1.65fr_0.7fr_0.78fr_0.7fr] gap-[72px] pb-[48px] border-b border-white/20 max-[980px]:grid-cols-1 max-[980px]:gap-[42px]">
          
          {/* Brand block */}
          <div className="flex flex-col">
            <img
              src="/malaysia/logos/wais-26-malaysia-footer.webp"
              alt="World AI Show Malaysia 2026"
              width={250}
              height={50}
              className="w-[min(250px,100%)] h-auto object-contain mb-4 select-none"
            />
            <p className="max-w-[430px] m-0 mt-2 text-muted text-[17px] leading-[1.55]">
              An invitation-only, high-focus gathering of Malaysia&apos;s AI decision-makers, infrastructure builders, GLC executives, and policy leaders.
            </p>
          </div>

          {/* Column 1: Links */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="m-0 mb-2 text-white/74 font-mono text-[12px] uppercase tracking-[5px] select-none">
              Event
            </h3>
            <a href="#attend" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Attend
            </a>
            <a href="#agenda" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Agenda
            </a>
            <a href="#speakers" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Speakers
            </a>
            <a href="#partners" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Sponsors
            </a>
          </div>

          {/* Column 2: Enquiries */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="m-0 mb-2 text-white/74 font-mono text-[12px] uppercase tracking-[5px] select-none">
              Enquiries
            </h3>
            <a href="/malaysia/sponsorship-enquiry" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Sponsorships
            </a>
            <a href="#cta" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Pass Enquiries
            </a>
            <a href="/malaysia/media-enquiry" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Media Partner
            </a>
            <a href="/malaysia/speaker-enquiry" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Speaker Slot
            </a>
          </div>

          {/* Column 3: Organizer */}
          <div className="flex flex-col gap-[18px]">
            <h3 className="m-0 mb-2 text-white/74 font-mono text-[12px] uppercase tracking-[5px] select-none">
              Organizer
            </h3>
            <a
              href="https://www.tresconglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5"
            >
              Trescon Global
            </a>
            <a href="#organizer" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              About Us
            </a>
            <a href="#organizer" className="text-muted text-[15px] hover:text-cyan transition-colors duration-150 py-0.5">
              Contact Us
            </a>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex items-center justify-between gap-6 pt-[34px] max-sm:flex-col max-sm:items-start">
          <p className="m-0 text-white/52 font-mono text-[13px] leading-relaxed">
            © 2026 World AI Show. All rights reserved. Organized by Trescon Global.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/showcase/world-ai-show/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] border border-[#C0F43C]/60 rounded-full text-[#C0F43C] hover:text-[#C0F43C] hover:border-[#C0F43C] hover:scale-105 transition-all duration-200 shadow-[0_0_12px_rgba(192,244,60,0.15)]"
              aria-label="LinkedIn"
            >
              <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a
              href="https://x.com/WorldAIShow"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] border border-[#C0F43C]/60 rounded-full text-[#C0F43C] hover:text-[#C0F43C] hover:border-[#C0F43C] hover:scale-105 transition-all duration-200 shadow-[0_0_12px_rgba(192,244,60,0.15)]"
              aria-label="Twitter"
            >
              <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/world_ai_show?igsh=anRibHE4OHFlOHM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] border border-[#C0F43C]/60 rounded-full text-[#C0F43C] hover:text-[#C0F43C] hover:border-[#C0F43C] hover:scale-105 transition-all duration-200 shadow-[0_0_12px_rgba(192,244,60,0.15)]"
              aria-label="Instagram"
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCrJB-EsWzCNPk34FO_N8Qew/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="grid place-items-center w-[38px] h-[38px] border border-[#C0F43C]/60 rounded-full text-[#C0F43C] hover:text-[#C0F43C] hover:border-[#C0F43C] hover:scale-105 transition-all duration-200 shadow-[0_0_12px_rgba(192,244,60,0.15)]"
              aria-label="YouTube"
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.095-2.098C19.56 3.5 12 3.5 12 3.5s-7.56 0-9.403.565c-1.022.272-1.823 1.076-2.095 2.098C0 8.006 0 12 0 12s0 3.994.502 5.837c.272 1.022 1.073 1.826 2.095 2.098C4.44 20.5 12 20.5 12 20.5s7.56 0 9.403-.565c1.022-.272 1.823-1.076 2.095-2.098C24 15.994 24 12 24 12s0-3.994-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
