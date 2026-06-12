"use client";

import { GradientText } from "../../components/Shared";

export function PhotoGalleryContent() {
  const steps = [
    {
      num: "Step 1",
      title: "Scan Your Face",
      desc: "Simply capture a quick selfie or upload a photo directly to the secure gallery portal.",
      color: "text-[#C0F43C]",
      bgColor: "bg-[#C0F43C]/10",
      borderColor: "border-[#C0F43C]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#C0F43C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      num: "Step 2",
      title: "Get Your Photos",
      desc: "Our AI immediately scans the entire event repository to find every photo featuring you.",
      color: "text-[#18d4ff]",
      bgColor: "bg-[#18d4ff]/10",
      borderColor: "border-[#18d4ff]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#18d4ff]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1.75 0Z" />
        </svg>
      )
    },
    {
      num: "Step 3",
      title: "Share Your Photos",
      desc: "Instantly view, download in high resolution, or share directly to your social media channels.",
      color: "text-[#C0F43C]",
      bgColor: "bg-[#C0F43C]/10",
      borderColor: "border-[#C0F43C]/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#C0F43C]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186l.09.034m-.09-.034a2.25 2.25 0 0 0 2.247 1.107m0 0l.09-.034m-.09.034L18 8.25m0 0a2.25 2.25 0 1 0 0-3.3m0 3.3a2.25 2.25 0 1 0 0 3.3m0-3.3l-.09.034m.09-.034a2.25 2.25 0 0 0-2.247-1.107m0 0L7.25 10.5" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full text-white font-space-grotesk bg-[#020814]">
      
      {/* ── Section 1: Immersive Blurred Event Hero Section ── */}
      <section 
        className="relative net-inner-hero pt-[250px] pb-20 overflow-hidden flex items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#020814]/92 before:via-[#031022]/88 before:to-[#020814] before:z-0"
        style={{ backgroundImage: 'url("/malaysia/images/agenda/Agenda-bg.webp")' }}
      >
        {/* Soft Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#18d4ff]/8 blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0F43C]/4 blur-[130px] pointer-events-none z-0"></div>

        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 grid grid-cols-[1.15fr_0.85fr] gap-[74px] items-center max-lg:grid-cols-1 max-lg:gap-14">
          
          {/* Left Column: Heading & Vertical Steps */}
          <div>
            <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2.5px] bg-[#18d4ff]/5 shadow-[inset_0_0_12px_rgba(24,212,255,0.06)]">
              AI Photo Gallery
            </span>
            <h1 className="font-[850] text-white leading-none tracking-[-2.5px] text-[clamp(42px,5.2vw,66px)] m-0">
              Find Your Event <br />
              <GradientText>Photos Instantly</GradientText>
            </h1>
            <p className="m-0 mt-5 text-white/60 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              Upload a photo or take a selfie. Our AI scans the full event library and finds every moment featuring you — no scrolling, no searching.
            </p>

            {/* Vertical Step Pills (Glassmorphic Styles) */}
            <div className="mt-8 flex flex-col gap-3 max-w-[500px]">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex items-center gap-4.5 p-4.5 border border-white/6 rounded-[16px] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-250 shadow-[inset_0_0_16px_rgba(255,255,255,0.01)]"
                >
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${step.bgColor} border ${step.borderColor}`}>
                    {step.icon}
                  </span>
                  <div>
                    <span className={`text-[10px] font-mono font-bold tracking-[2px] block uppercase ${step.color} mb-0.5`}>
                      {step.num}
                    </span>
                    <h3 className="m-0 text-white font-extrabold text-[15px] tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <div className="relative flex justify-center items-center w-full max-lg:max-w-[340px] max-lg:mx-auto">
            {/* Glow backing */}
            <div className="absolute inset-0 bg-[#18d4ff]/6 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="net-phone large net-phone-standalone">
              {/* Notch */}
              <div className="net-phone-notch">
                <div className="net-phone-notch-pill"></div>
              </div>

              {/* Status bar */}
              <div className="net-phone-status">
                <span>9:41</span>
                <div style={{ width: 18, height: 8, border: '1px solid rgb(209,213,219)', borderRadius: 2, padding: '1px 2px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '75%', height: '100%', background: 'rgb(54,188,176)', borderRadius: 1 }}></div>
                </div>
              </div>

              {/* Screen */}
              <div className="net-phone-screen">
                {/* Badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 7, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgb(54,188,176)', border: '1px solid rgba(54,188,176,0.35)', background: 'rgba(54,188,176,0.08)', padding: '3px 8px', borderRadius: 20, marginBottom: 10 }}>
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  AI Photo Gallery
                </div>

                <div style={{ fontSize: 12, fontWeight: 900, color: 'rgb(13,30,53)', marginBottom: 4, lineHeight: 1.3 }}>Find Your Photos</div>
                <div style={{ fontSize: 8, color: 'rgb(107,114,128)', marginBottom: 10, lineHeight: 1.5 }}>Upload a selfie to instantly find your event moments</div>

                {/* Face scan widget */}
                <div className="net-scan-wrap">
                  <div className="net-scan-corner tl"></div>
                  <div className="net-scan-corner tr"></div>
                  <div className="net-scan-corner bl"></div>
                  <div className="net-scan-corner br"></div>
                  <div className="net-scan-line"></div>
                  <svg className="net-scan-face" width="60" height="72" viewBox="0 0 60 72" fill="none">
                    <ellipse cx="30" cy="26" rx="18" ry="22" stroke="currentColor" strokeWidth="1.5"></ellipse>
                    <path d="M12 60c0-10 8-16 18-16s18 6 18 16" stroke="currentColor" strokeWidth="1.5"></path>
                    <circle cx="22" cy="24" r="3" fill="currentColor" opacity="0.5"></circle>
                    <circle cx="38" cy="24" r="3" fill="currentColor" opacity="0.5"></circle>
                    <path d="M24 32c1.5 2 4.5 2 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                  </svg>
                </div>

                {/* CTA button */}
                <div style={{ background: 'rgb(54,188,176)', borderRadius: 20, padding: '9px 0', textAlign: 'center', fontSize: 10, fontWeight: 800, color: '#fff', marginTop: 8, letterSpacing: '0.06em' }}>
                  Find My Photos
                </div>

                {/* Gallery grid */}
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontSize: 8, fontWeight: 700, color: 'rgb(156,163,175)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Your Gallery</div>
                  <div className="net-photo-grid">
                    {[
                      'linear-gradient(135deg, rgba(54,188,176,0.22), rgba(54,188,176,0.08))',
                      'linear-gradient(135deg, rgba(54,188,176,0.14), rgba(54,188,176,0.05))',
                      'linear-gradient(135deg, rgba(54,188,176,0.18), rgba(54,188,176,0.06))',
                      'linear-gradient(135deg, rgba(54,188,176,0.22), rgba(54,188,176,0.08))',
                      'linear-gradient(135deg, rgba(54,188,176,0.14), rgba(54,188,176,0.05))',
                      'linear-gradient(135deg, rgba(54,188,176,0.18), rgba(54,188,176,0.06))',
                    ].map((bg, i) => (
                      <div key={i} className="net-photo-cell" style={{ background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#36BCB0" strokeWidth="1.5" style={{ opacity: 0.5 }}>
                          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="net-phone-home"></div>
            </div>
          </div>


        </div>
      </section>

      {/* ── Section 2: Smart AI. Seamless Experience. (Side-by-Side Cards) ── */}
      <section className="relative py-24 bg-[#020814] border-t border-white/5 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_80%,rgba(24,212,255,0.03),transparent_40%)]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <h2 className="font-[850] text-white leading-tight tracking-[-2px] text-[clamp(42px,5.5vw,62px)] m-0">
              Smart AI.<br />
              <GradientText>Seamless Experience.</GradientText>
            </h2>
            <p className="m-0 mt-4 text-white/60 text-[16px] md:text-[18px] tracking-wide font-medium">
              Your photos, instantly yours • KonfHub
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div 
              className="p-10 rounded-[28px] border-[4px] border-[#22446D] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6"
              style={{
                background: "linear-gradient(0deg, rgba(46, 60, 77, 0.55), rgba(46, 60, 77, 0.55)), linear-gradient(94.42deg, rgba(255, 255, 255, 0.09) 0.77%, rgba(255, 255, 255, 0) 33.68%), linear-gradient(95.06deg, rgba(146, 109, 255, 0) 69.31%, rgba(146, 109, 255, 0.2) 99.59%)"
              }}
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#C0F43C] text-black mb-6">
                <img 
                  src="/malaysia/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Your photos, instantly yours
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Find your photos instantly with AI face recognition</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">No more scrolling through hundreds of images</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Get a personalized gallery of your moments</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">View, download, and share in real-time</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div 
              className="p-10 rounded-[28px] border-[4px] border-[#22446D] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6"
              style={{
                background: "linear-gradient(0deg, rgba(46, 60, 77, 0.55), rgba(46, 60, 77, 0.55)), linear-gradient(94.42deg, rgba(255, 255, 255, 0.09) 0.77%, rgba(255, 255, 255, 0) 33.68%), linear-gradient(95.06deg, rgba(146, 109, 255, 0) 69.31%, rgba(146, 109, 255, 0.2) 99.59%)"
              }}
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#926DFF] text-white mb-6">
                <img 
                  src="/malaysia/icons/attendee-app/exhibitor.webp" 
                  alt="Sponsors & Exhibitors" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert" 
                />
                For Sponsors & Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Stay visible beyond the event
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Branded photo experiences with logos and frames</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Drive social visibility through attendee sharing</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Stay visible beyond the event</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Turn photos into a subtle lead engagement channel</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}