"use client";

import { useEffect, useState } from "react";
import { GradientText } from "../Shared";

const speakerImages = [
  "/malaysia/images/speakers/dato-amirudin.webp",
  "/malaysia/images/speakers/shamsul-izhan.webp",
  "/malaysia/images/speakers/stephanie-liew.webp",
  "/malaysia/images/speakers/chatgpt-speaker.webp",
  "/malaysia/images/speakers/Gemini_Generated_Image_os7v18os7v18os7v.webp",
];

const testimonials = [
  {
    quote:
      "World AI Show Malaysia by Trescon is a great platform that brings together passionate minds in AI. The sessions were insightful, the audience highly engaged, and it's truly a timely initiative to strengthen Malaysia's AI ecosystem.",
    name: "Shamsul Izhan Bin Abdul Majid",
    role: "Head",
    company: "National AI Office",
    image: speakerImages[1],
  },
  {
    quote:
      "World AI Show Malaysia was fair, insightful, and full of meaningful connections. The coordination by the Trescon team was excellent, and the event brought together quality speakers, exhibitors, and attendees driving real conversations around AI adoption.",
    name: "Stephanie Liew",
    role: "CISO",
    company: "British American Tobacco",
    image: speakerImages[2],
  },
  {
    quote:
      "World AI Show Malaysia is an excellent platform by Trescon that brings together key stakeholders from government, industry, and academia to drive Malaysia's AI vision. The event was insightful, well-organized, and truly supports the nation's aspiration to become an AI-driven economy.",
    name: "Dato' Ts. Dr. Haji Amirudin Bin Abdul Wahab",
    role: "CEO",
    company: "CyberSecurity Malaysia",
    image: speakerImages[0],
  },
  {
    quote:
      "The quality of the audience at World AI Show Malaysia was exceptional. The event brought together real decision-makers and like-minded professionals, creating meaningful interactions that were truly energizing and valuable for future decision-making.",
    name: "Shanmuga Sunthar Muniandy",
    role: "Director of Architecture & Chief Evangelist, APAC",
    company: "Denodo",
    image: speakerImages[3],
  },
  {
    quote:
      "World AI Show Malaysia was a wonderful experience. The speakers were insightful, the discussions were current, and the environment was highly professional. It was a great opportunity for Alibaba Cloud to share our AI capabilities and connect with Malaysia's tech community.",
    name: "Max Hua-En Chen",
    role: "International Online Business Manager",
    company: "Alibaba Cloud",
    image: speakerImages[4],
  },
  {
    quote:
      "World AI Show Malaysia was efficient, accurate, and spot on. Trescon once again delivered an excellent event with great ambience, quality speakers, and valuable networking opportunities for Malaysia's AI community",
    name: "Budiman Bujang",
    role: "Deputy Chief Digital Officer",
    company: "Johor Corporation",
    image: speakerImages[1],
  },
  {
    quote:
      "Never underestimate an event that brings together energy-charged professionals. It is fulfilling & a great experience to be invited to share about IRAS’ service mantra and experience with a lively audience.",
    name: "Raymond Tan",
    role: "Assistant Commissioner, Taxpayer eXperience Division; Quality Service Manager",
    company: "Inland Revenue Authority of Singapore (IRAS)",
    image: speakerImages[0],
  },
  {
    quote:
      "Everything has been really interesting. There’s been CEOs, Government entities which have been a really good mix. Quality was even better than the last time.",
    name: "Elizabeth De Freitas",
    role: "Regional Director",
    company: "Darktrace",
    image: speakerImages[1],
  },
  {
    quote:
      "World AI Show is an excellent convergence of AI professionals and the exchange of expertise was well curated and promising.",
    name: "Mark G. Koh",
    role: "Secretary General",
    company: "Central and Eastern European Chamber of Commerce",
    image: speakerImages[2],
  },
  {
    quote:
      "AI would really be the difference maker, technologies and practitioners should harness the power of AI. It has been a great experience at Trescon AI Show, learnt a lot from the panellists & speakers.",
    name: "Gabriel Lazaro",
    role: "Head of Digital Overseas General Insurance",
    company: "Chubb",
    image: speakerImages[3],
  },
  {
    quote:
      "Trescon World AI Show is a great platform to participate for a good blend of thought-provoking conversations, innovative ideas and diverse networking opportunities.",
    name: "Serene Keng",
    role: "Director, Value Creation & Communications",
    company: "EDBI",
    image: speakerImages[4],
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-[118px] pb-[104px] bg-[radial-gradient(circle_at_56%_4%,rgba(0,206,255,0.12),transparent_20rem),#020C21] max-sm:py-[72px]" id="testimonials">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">

        {/* Heading + Carousel Controls */}
        <div className="flex items-end justify-between gap-5 mb-[30px] max-[980px]:flex-col max-[980px]:items-center">
          <h2 className="text-left font-[850] text-white leading-[1.03] tracking-[-2px] text-[clamp(38px,4.9vw,58px)] max-[980px]:text-center">
            What industry <br />
            leaders <GradientText>are saying.</GradientText>
          </h2>

          {/* Testimonial controls marquee */}
          <div className="flex items-center gap-3 text-white/62 font-mono text-[12px]" aria-label="Testimonial controls">
            <button
              type="button"
              onClick={previous}
              className="grid place-items-center w-[34px] h-[34px] border border-white/9 rounded-full text-white/82 bg-[#050c1d]/64 cursor-pointer transition-all duration-200 hover:border-cyan/55 hover:text-cyan hover:-translate-y-0.5 outline-none"
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
            <span className="select-none">
              {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={next}
              className="grid place-items-center w-[34px] h-[34px] border border-white/9 rounded-full text-white/82 bg-[#050c1d]/64 cursor-pointer transition-all duration-200 hover:border-cyan/55 hover:text-cyan hover:-translate-y-0.5 outline-none"
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Main Testimonial Block */}
        <article className="grid grid-cols-[1fr_auto] gap-[54px] items-center min-h-[228px] p-[44px_42px_44px_61px] border border-cyan/42 rounded-[13px] bg-gradient-to-br from-cyan/12 to-[#2e1f6b]/11 bg-[#040e22]/74 shadow-[0_0_28px_rgba(0,206,255,0.1),inset_0_0_40px_rgba(0,206,255,0.04)] max-[980px]:grid-cols-1 max-sm:p-[34px_22px]">

          {/* Quote Block */}
          <blockquote className="m-0 max-w-[690px] text-white font-bold leading-relaxed text-[18px]">
            &quot;{active.quote}&quot;
          </blockquote>

          {/* Speaker Info column */}
          <div className="flex flex-col self-start pt-0.5 relative before:absolute before:left-0 before:-bottom-4 before:w-8 before:h-[5px] before:rounded-full before:bg-cyan max-sm:before:hidden">
            <div className="flex flex-col min-w-0">
              <strong className="text-white font-extrabold text-[16px] leading-tight mb-1 select-none">
                {active.name}
              </strong>
              <span className="text-muted text-[13px] font-medium leading-none mb-1">
                {active.role}
              </span>
              <em className="text-white/60 text-[13px] font-normal not-italic tracking-wide">
                {active.company}
              </em>
            </div>
          </div>

        </article>

      </div>
    </section>
  );
}
