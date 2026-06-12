"use client";

export function SpeakerCallToStage() {
  return (
    <section className="relative py-[104px] bg-gradient-to-b from-[#020b1c] to-[#041226] overflow-hidden" id="call-for-speakers">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[radial-gradient(circle,rgba(154,108,255,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">

        {/* Centered section heading */}
        <h2 className="text-center font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(34px,4.5vw,50px)] mb-[56px]">
          Take the Stage at <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#C0F43C]">World AI Show Malaysia</span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="m-0 text-white font-[850] text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Become One of the Voices Driving the Future of AI
            </h3>
            <p className="m-0 text-white/68 text-[16px] leading-[1.65] mb-5">
              Speaking at World AI Show Malaysia is more than delivering a presentation — it&apos;s about influencing the future of AI adoption, innovation and digital transformation across Malaysia and Southeast Asia.
            </p>
            <p className="m-0 text-white/68 text-[16px] leading-[1.65] mb-8">
              Whether you are pioneering enterprise AI strategies, scaling GenAI solutions, shaping AI governance or building next-generation technologies, your insights can help define the region&apos;s AI future.
            </p>

            {/* Value Highlights */}
            <div className="p-7 border border-[#7eacd9]/14 rounded-[16px] bg-[#04080f]/80 shadow-[inset_0_0_24px_rgba(33,173,255,0.04)]">
              <strong className="block text-[#C0F43C] text-[12px] font-mono uppercase tracking-[2px] mb-5">
                Why speak at World AI Show Malaysia:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/malaysia/images/agenda/icon-global.webp"
                    alt="Global icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Global Industry visibility:</strong> Share the stage with world-renowned AI leaders, enterprise innovators, policymakers, and technology pioneers.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/malaysia/images/agenda/icon-speaker.webp"
                    alt="Speaker icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Access to Decision-makers:</strong> Connect directly with C-suite executives, investors, government stakeholders and industry leaders shaping the AI ecosystem.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-white/80 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/malaysia/images/agenda/icon-lightning.webp"
                    alt="Lightning bolt icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Drive Real Impact:</strong> Showcase practical insights, breakthrough innovations and transformative case studies influencing the future of AI across ASEAN.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual container */}
          <div className="relative overflow-hidden border border-[#20d5ff]/20 rounded-[22px] shadow-[0_0_32px_rgba(0,206,255,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b1c]/40 via-transparent to-transparent pointer-events-none z-1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/malaysia/images/agenda/take-the-stage.webp"
              alt="Speaker presenting on stage at World AI Show Malaysia"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.96] brightness-[0.96]"
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Centered bottom CTAs */}
        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a
            href="/malaysia/speaker-enquiry"
            className="inline-flex items-center justify-center gap-2 px-[32px] py-[16px] rounded-full text-[15px] font-extrabold text-[#06111f] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.18)] hover:shadow-[0_0_32px_rgba(192,244,60,0.36)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Apply to speak 
            <img 
              src="/malaysia/images/agenda/arrow-top.webp" 
              alt="Arrow top icon" 
              className="w-4 h-4 object-contain select-none flex-shrink-0"
            />
          </a>
        </div>

      </div>
    </section>
  );
}
