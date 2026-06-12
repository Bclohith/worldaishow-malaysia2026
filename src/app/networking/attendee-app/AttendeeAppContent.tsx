"use client";

import { GradientText } from "../../components/Shared";

export function AttendeeAppContent() {
  const badgeFeatures = [
    { label: "Agenda", icon: "/malaysia/icons/attendee-app/calendar-lines-pen.webp" },
    { label: "Networking", icon: "/malaysia/icons/attendee-app/network-user.webp" },
    { label: "Speakers", icon: "/malaysia/icons/attendee-app/wais-speaker-icon-matched.webp" },
    { label: "Sponsors", icon: "/malaysia/icons/attendee-app/money-check.webp" },
    { label: "Exhibitors", icon: "/malaysia/icons/attendee-app/exhibitor.webp" },
    { label: "QR Scan", icon: "/malaysia/icons/attendee-app/qr-scan.webp" },
    { label: "Business Cards", icon: "/malaysia/icons/attendee-app/personal-finance.webp" },
    { label: "Chat", icon: "/malaysia/icons/attendee-app/comment-dots.webp" }
  ];

  return (
    <div className="relative w-full text-white font-space-grotesk">
      {/* Hero / Header Section */}
      <section 
        className="relative net-inner-hero pt-[250px] pb-24 overflow-hidden"
        style={{
          backgroundImage: `url('/malaysia/images/networking/attendee-app-hero-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Soft Ambient Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#00ceff]/8 blur-[110px] pointer-events-none z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C0F43C]/4 blur-[130px] pointer-events-none z-0"></div>

        <div className="w-[min(1114px,calc(100%-48px))] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="text-[#18d4ff] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
              Powered by KonfHub
            </span>
            <h1 className="font-[850] text-white leading-[1.03] tracking-[-2.5px] text-[clamp(44px,5.4vw,72px)] m-0">
              Your Day, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">Fully in Hand</span>
            </h1>
            <p className="m-0 mt-6 text-white/70 text-[18px] leading-relaxed max-sm:text-[15px]">
              The World AI Show Event App is your command centre on the ground. Agenda, speakers, sponsors, live networking — all unified in one AI-powered platform so nothing slips through.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#cta"
                className="px-6 h-[49px] inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold text-sm transition-all duration-200 bg-[#C0F43C] text-black shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] hover:-translate-y-0.5"
              >
                Get Your Pass ➔
              </a>
              <a
                href="#partners"
                className="px-6 h-[49px] inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold text-sm transition-all duration-200 border border-white/10 text-white bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:bg-[#030a18]/50 hover:border-cyan/100 transition-colors"
              >
                Enquire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Features Badges Bar */}
      <section className="relative py-8 bg-[#030b19]/60 border-y border-white/5">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-[10px]">
            {badgeFeatures.map((feat) => (
              <div
                key={feat.label}
                className="flex items-center h-[36px] pt-[10px] pb-[8px] px-[12px] gap-[9px] border border-[#926DFF] rounded-[4px] bg-[rgba(77,111,153,0.55)] text-[#8199b5] text-[11.5px] font-extrabold uppercase tracking-[1px] select-none hover:bg-[rgba(77,111,153,0.7)] hover:border-[#b196ff] transition-all duration-200"
              >
                <img
                  src={feat.icon}
                  alt={`${feat.label} Icon`}
                  className="w-[14px] h-[14px] object-contain flex-none"
                />
                <span className="leading-none mt-[1.5px] whitespace-nowrap">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features. Built for Every Role in the Room */}
      <section className="relative py-24 bg-[#020814]">
        <div className="w-[min(1114px,calc(100%-48px))] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 max-w-[760px] mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#C0F43C]/10 text-[#C0F43C] border border-[#C0F43C]/20 mb-5 inline-block">
              App Features
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(32px,4vw,44px)] m-0">
              Built for Every <GradientText>Role in the Room</GradientText>
            </h2>
            <p className="m-0 mt-5 text-white/60 text-[16px] leading-relaxed max-sm:text-[14px]">
              Whether you&apos;re a delegate, sponsor, or exhibitor — the app is designed to give you a different and better experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
            
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
                  className="w-[14px] h-[14px] object-contain" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Make every hour count
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/calendar-lines-pen.webp"
                    alt="Personalised Agenda Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Personalised Agenda</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Your schedule, built around your interests. Sessions curated to what matters most to you.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/everything-in-one-place.webp"
                    alt="Everything in One Place Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Everything in One Place</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Schedule, speakers, sessions, sponsors - all accessible from a single app, no juggling required.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/network-user.webp"
                    alt="Seamless Networking Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Seamless Networking</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Browse attendee profiles, send connection requests, and schedule 1:1 meetings - before you even arrive.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/real-time-notifications.webp"
                    alt="Real-Time Notifications Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Real-Time Notifications</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Stay updated on session changes, meeting reminders, and announcements the moment they happen.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/ai-powered-matchmaking.webp"
                    alt="AI-Powered Matchmaking Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">AI-Powered Matchmaking</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Our AI analyses your goals, role, and interests to suggest the connections that will matter most.</p>
                  </div>
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
                  className="w-[14px] h-[14px] object-contain filter brightness-0" 
                />
                For Sponsors & Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Turn visibility into pipeline
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/connect-with-high-intent-attendees.webp"
                    alt="Connect with High-Intent Attendees Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Connect with High-Intent Attendees</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Every delegate in the app is a qualified AI decision-maker. No noise — just relevant, high-value connections.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/drive-booth-traffic.webp"
                    alt="Drive Booth Traffic Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Drive Booth Traffic</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Targeted in-app visibility pushes attendees to your exhibition space at the right moments throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/direct-in-app-interactions.webp"
                    alt="Direct In-App Interactions Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Direct In-App Interactions</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Message delegates, schedule meetings, and share resources directly via the app — no middleman needed.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/malaysia/icons/attendee-app/capture-meaningful-leads.webp"
                    alt="Capture Meaningful Leads Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Capture Meaningful Leads</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">QR-based lead capture with full delegate profiles — not just names, but roles, interests, and buying intent.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}