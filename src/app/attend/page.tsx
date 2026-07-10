import type { Metadata } from "next";
import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";
import { AttendFaq } from "./AttendFaq";
import { AttendStats } from "./AttendStats";
import { GradientText } from "../components/Shared";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Attend | World AI Show Malaysia 2026",
  description:
    "Attend World AI Show Malaysia 2026, the curated gathering for AI leaders, enterprise decision-makers, sponsors, media and association partners.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

type CardItem = {
  title: string;
  text: string;
  icon?: string;
};

const valueCards: CardItem[] = [
  {
    title: "Enterprise AI in action.",
    text: "Discover how leading organisations are deploying AI at scale to drive efficiency, innovation and competitive advantage across industries.",
    icon: "/malaysia/images/Attend/enterprise-ai-in-action.svg",
  },
  {
    title: "The Region's AI Decision-makers Under One Roof",
    text: "Connect directly with C-level executives, policymakers, investors and global AI pioneers shaping the future of business and technology in ASEAN.",
    icon: "/malaysia/images/Attend/region-ai-decision-makers.svg",
  },
  {
    title: "Insights That Drive Transformation",
    text: "Gain practical strategies on AI governance, infrastructure, data readiness, GenAI adoption, cybersecurity and responsible innovation from global experts.",
    icon: "/malaysia/images/Attend/insights-drive-transformation.svg",
  },
];

const gatewayCards: CardItem[] = [
  {
    title: "Access to All Sessions",
    text: "Full access to keynotes, panels, fireside chats, AI showcases and networking experiences across the event.",
    icon: "/malaysia/images/Attend/gateway/access-to-all-sessions.svg",
  },
  {
    title: "High-Value Networking",
    text: "Meet enterprise buyers, government leaders and global technology providers through curated networking.",
    icon: "/malaysia/images/Attend/gateway/high-value-networking.svg",
  },
  {
    title: "Enterprise AI Showcases",
    text: "Explore applied AI, cloud technologies and next-generation enterprise innovations.",
    icon: "/malaysia/images/Attend/gateway/enterprise-ai-showcases.svg",
  },
  {
    title: "Speaker Materials & Insights",
    text: "Access selected session materials and industry-leading insights from speakers.",
    icon: "/malaysia/images/Attend/gateway/speaker-materials-and-insights.svg",
  },
  {
    title: "Curated Roundtable Discussions",
    text: "Participate in focused conversations around AI governance, transformation, cybersecurity and data infrastructure.",
    icon: "/malaysia/images/Attend/gateway/curated-roundtable-discussions.svg",
  },
  {
    title: "Networking Lunch & Business Meetings",
    text: "Build strategic partnerships through curated introductions and business matchmaking opportunities.",
    icon: "/malaysia/images/Attend/gateway/networking-lunch-and-business-meetings.svg",
  },
  {
    title: "Exclusive VIP Networking Experiences",
    text: "Engage with senior executives, investors and AI leaders through premium sessions and invitation-only interactions.",
    icon: "/malaysia/images/Attend/gateway/exclusive-vip-networking-experiences.svg",
  },
  {
    title: "Event Platform Access",
    text: "Plan your experience with attendee networking tools, agenda access, meeting scheduling and event updates.",
    icon: "/malaysia/images/Attend/gateway/event-platform-access.svg",
  },
];

const sponsorBenefits: CardItem[] = [
  {
    title: "Brand Visibility at Scale",
    text: "Amplify your presence across the venue, website, event app, digital screens, campaigns and attendee communications.",
    icon: "/malaysia/images/Attend/sponsor/brand-visibility-at-scale.webp",
  },
  {
    title: "Qualified Lead Generation",
    text: "Connect directly with pre-qualified enterprise buyers, stakeholders, investors and AI decision-makers.",
    icon: "/malaysia/images/Attend/sponsor/qualified-lead-generation.webp",
  },
  {
    title: "Product Showcase Floor",
    text: "Demonstrate platforms and innovations live to enterprise leaders seeking transformative technologies.",
    icon: "/malaysia/images/Attend/sponsor/product-showcase-floor.webp",
  },
  {
    title: "Speaking Opportunities",
    text: "Position your organisation as a thought leader through keynotes, panels and strategic conversations.",
    icon: "/malaysia/images/Attend/sponsor/speaking-opportunities.webp",
  },
  {
    title: "1:1 Hosted Meetings",
    text: "Engage in curated business meetings aligned to your ideal customer profile and business objectives.",
    icon: "/malaysia/images/Attend/sponsor/hosted-meetings.webp",
  },
  {
    title: "Exclusive Sponsorship Branding",
    text: "Align your brand with one of Southeast Asia's premier AI platforms through customised visibility.",
    icon: "/malaysia/images/Attend/sponsor/exclusive-sponsorship-branding.webp",
  },
  {
    title: "Networking Lunch Branding",
    text: "Position your brand at the centre of high-value networking and engagement opportunities.",
    icon: "/malaysia/images/Attend/sponsor/networking-lunch-branding.webp",
  },
  {
    title: "Post-Event Lead Report",
    text: "Receive detailed post-event insights including engagement, interactions and performance metrics.",
    icon: "/malaysia/images/Attend/sponsor/post-event-lead-report.webp",
  },
];

const mediaBenefits: CardItem[] = [
  {
    title: "Full Event Access",
    text: "Access keynote sessions, panel discussions, fireside chats, networking experiences and exhibition showcases.",
    icon: "/malaysia/images/Attend/media/full-event-access.webp",
  },
  {
    title: "Dedicated Media Facilities",
    text: "Use dedicated media support areas with workspace access, connectivity and on-ground coordination.",
    icon: "/malaysia/images/Attend/media/dedicated-media-facilities.webp",
  },
  {
    title: "Speaker Interview Access",
    text: "Access pre-arranged interview opportunities with keynote speakers and enterprise leaders.",
    icon: "/malaysia/images/Attend/media/speaker-interview-access.webp",
  },
  {
    title: "Official Media Kit",
    text: "Receive access to press releases, speaker profiles, event highlights and official assets.",
    icon: "/malaysia/images/Attend/media/official-media-kit.webp",
  },
  {
    title: "Amplified Media Visibility",
    text: "Extend the reach of your stories and coverage through digital and social amplification.",
    icon: "/malaysia/images/Attend/media/amplified-media-visibility.webp",
  },
  {
    title: "Brand & Media Recognition",
    text: "Gain visibility as an official media partner across event branding and attendee touchpoints.",
    icon: "/malaysia/images/Attend/media/brand-and-media-recognition.webp",
  },
  {
    title: "Exclusive Story Opportunities",
    text: "Get early access to announcements, partnership developments and innovation stories.",
    icon: "/malaysia/images/Attend/media/exclusive-story-opportunities.webp",
  },
  {
    title: "Networking Access",
    text: "Connect directly with leaders, stakeholders, technology providers and investors.",
    icon: "/malaysia/images/Attend/media/networking-access.webp",
  },
];

const associationBenefits: CardItem[] = [
  {
    title: "Co-Branding Opportunities",
    text: "Gain visibility across the event website, digital campaigns, venue branding and attendee touchpoints.",
    icon: "/malaysia/images/Attend/partner/co-branding-opportunities.webp",
  },
  {
    title: "Complimentary Delegate Passes",
    text: "Offer exclusive delegate access to your members, community or network.",
    icon: "/malaysia/images/Attend/partner/complimentary-delegate-passes.webp",
  },
  {
    title: "Joint Marketing Campaigns",
    text: "Collaborate on co-branded email campaigns, ecosystem outreach and promotional initiatives.",
    icon: "/malaysia/images/Attend/partner/joint-marketing-campaigns.webp",
  },
  {
    title: "Social Media Amplification",
    text: "Expand your reach through collaborative social media promotions and partner channels.",
    icon: "/malaysia/images/Attend/partner/social-media-amplification.webp",
  },
  {
    title: "Speaking Opportunities",
    text: "Provide your leadership team with opportunities to contribute to strategic discussions.",
    icon: "/malaysia/images/Attend/partner/speaking-opportunities.webp",
  },
  {
    title: "Networking Access",
    text: "Connect with enterprise leaders, government stakeholders, investors and technology innovators.",
    icon: "/malaysia/images/Attend/partner/networking-access.webp",
  },
  {
    title: "Access to Post-Event Insights",
    text: "Receive reports, session highlights and key takeaways to share with your network.",
    icon: "/malaysia/images/Attend/partner/access-to-post-event-insights.webp",
  },
  {
    title: "Long-Term Partnership Opportunities",
    text: "Build sustained visibility and collaboration opportunities through ongoing partnerships.",
    icon: "/malaysia/images/Attend/partner/long-term-partnership-opportunities.webp",
  },
];

const faqs = [
  "What is World AI Show Malaysia?",
  "Who should attend WAIS Malaysia?",
  "What are the key themes and topics covered?",
  "How do I register for WAIS Malaysia?",
  "Are there sponsorship or exhibition opportunities?",
  "Who are some of the past speakers?",
  "Can media organisations attend?",
  "Is there a virtual attendance option?",
];

// Reusable Header component is imported from components/sections/Header

export function ArrowButton({
  children,
  href = "#passes",
  variant = "solid",
}: {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "outline";
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-3.5 min-w-[178px] h-[49px] px-[25px] rounded-full text-[15px] font-extrabold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(185,248,45,0.24)] cursor-pointer";
  const styles = {
    solid: "bg-[#C0F43C] !text-black [color:#06111f!important] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)]",
    outline: "text-white border border-[#4eb9ff]/80 bg-[#030a18]/30 shadow-[inset_0_0_24px_rgba(46,172,255,0.08)] hover:border-cyan/100 hover:bg-[#030a18]/50",
  };

  return (
    <a className={`${baseClasses} ${styles[variant]}`} href={href}>
      {children}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[15px] h-[15px] object-contain"
        aria-hidden="true"
      >
        <path
          d="M3.33334 8H12.6667"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.66666 4L12.6667 8L8.66666 12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export function NumberedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <article className="group relative min-h-[235px] p-7 border border-white/[0.17] rounded-[13px] bg-gradient-to-br from-[#00ceff]/12 to-[#996cff]/14 bg-[#050c1c]/80 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_20px_60px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#18d4ff]/50 hover:shadow-[0_12px_36px_rgba(0,206,255,0.12),inset_0_0_24px_rgba(24,212,255,0.04)]">
      <span className="grid place-items-center w-11 h-11 mb-7 border border-white/8 rounded-[14px] text-cyan bg-[#030914]/72 text-[11px] font-extrabold select-none group-hover:text-[#06111f] group-hover:bg-[#C0F43C] group-hover:border-[#C0F43C] group-hover:shadow-[0_0_15px_rgba(192,244,60,0.35)] transition-all duration-300">
        {item.icon ? (
          <img src={item.icon} alt="" className="w-5 h-5 object-contain group-hover:brightness-0 transition-all duration-300" loading="lazy" />
        ) : index + 1 < 10 ? (
          `0${index + 1}`
        ) : (
          index + 1
        )}
      </span>
      <span className="absolute right-[25px] top-[30px] px-[9px] py-1 rounded-full text-cyan bg-[#12d7ff]/9 text-[11px] font-extrabold tracking-[1px] select-none group-hover:text-black group-hover:bg-[#C0F43C] transition-all duration-300">
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </span>
      <h3 className="m-0 mb-2.5 text-white font-[850] text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#C0F43C]">{item.title}</h3>
      <p className="m-0 text-white/62 text-[15px] leading-relaxed transition-colors duration-200 group-hover:text-white/80">{item.text}</p>
    </article>
  );
}

export function BenefitGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 overflow-x-auto pb-1.5 max-[980px]:grid-cols-[repeat(4,280px)] max-sm:grid-cols-1">
      {items.map((item, index) => (
        <NumberedCard item={item} index={index} key={item.title} />
      ))}
    </div>
  );
}

export function SplitSection({
  id,
  eyebrow,
  title,
  text,
  button,
  buttonHref,
  imageAlt,
  imageSrc,
  reverse = false,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  button: string;
  buttonHref?: string;
  imageAlt: string;
  imageSrc: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-[92px] bg-[#020b1c] max-sm:py-[66px]" id={id}>
      <div
        className={`grid grid-cols-[1fr_minmax(360px,47%)] items-center gap-[74px] w-[min(1120px,calc(100%-48px))] mx-auto max-[980px]:grid-cols-1 max-sm:gap-[34px]`}
      >
        <div className={`flex flex-col ${reverse ? "max-[980px]:order-none order-2" : "order-none"}`}>
          {eyebrow && (
            <p className="m-0 mb-[19px] text-white/78 text-[13px] font-[650] tracking-[4px] uppercase select-none font-mono">
              {eyebrow}
            </p>
          )}
          <h2 className="m-0 text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(42px,5vw,62px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            {title}
          </h2>
          <p className="mt-6 mb-9 text-white/66 text-[19px] leading-relaxed max-sm:text-base">
            {text}
          </p>
          <div className="flex">
            <ArrowButton href={buttonHref || `#${id}`}>{button}</ArrowButton>
          </div>
        </div>
        <div className="relative overflow-hidden border border-[#55cfff]/22 rounded-[24px] bg-[#071426]/72 shadow-[0_0_44px_rgba(0,206,255,0.12)]">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#020b2c]/18 pointer-events-none" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover filter saturate-[0.96] brightness-[0.95]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= RESIZED FIGMA BOTTOM CTA SECTION ================= */
export function AttendCTASection() {
  return (
    <section className="py-[86px] pt-[86px] bg-gradient-to-b from-transparent to-[#020a2c]/18 max-sm:py-[62px]">
      <div className="w-[min(980px,calc(100%-48px))] mx-auto p-[66px_48px] border border-[#c0f43c]/35 rounded-[36px] text-center bg-[#050c1c]/82 shadow-[0_0_60px_rgba(192,244,60,0.12),inset_0_0_34px_rgba(0,206,255,0.03)] max-sm:p-[42px_22px] max-sm:w-[min(100%-28px,1120px)] relative overflow-hidden">
        {/* Glowing visual background aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(192,244,60,0.04),transparent_70%)] pointer-events-none" />
        {/* Top highlight line accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#2E3C4D]/45" />

        <div className="relative z-10">
          <span className="inline-flex items-center mb-[27px] px-[15px] py-2 border border-white/10 rounded-full text-white/72 text-[12px] tracking-[3px] uppercase select-none before:content-[''] before:w-[7px] before:h-[7px] before:mr-2.5 before:rounded-full before:bg-cyan font-mono">
            First wave open - limited seats
          </span>
          <h2 className="max-w-[760px] mx-auto mb-8 text-[#f7f9ff] font-[850] leading-[1.08] tracking-[-1.8px] text-[clamp(36px,5vw,56px)] max-sm:text-[32px] max-sm:tracking-[-1px]">
            Be in the room where <span className="bg-gradient-to-r from-[#C0F43C] to-[#18d4ff] bg-clip-text text-transparent">Malaysia&apos;s AI decade</span> is written.
          </h2>

          {/* Three-Button Row aligned to Figma spec */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-8 mb-12 max-sm:flex-col max-sm:w-full">
            <a
              href="/malaysia/attend/delegate#passes"
              className="inline-flex items-center justify-center gap-2 min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Buy a Pass
              <span className="font-mono text-[16px] font-bold">→</span>
            </a>
            <a
              href="/malaysia/sponsorship-enquiry"
              className="inline-flex items-center justify-center min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Sponsorship Enquiry
            </a>
            <a
              href="/malaysia/association-enquiry"
              className="inline-flex items-center justify-center min-w-[178px] h-[49px] px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 hover:scale-[1.03] transition-all duration-200 cursor-pointer max-sm:w-full"
            >
              Become a Partner
            </a>
          </div>

          {/* Horizontal divider inside the card */}
          <div className="w-full h-[1px] bg-white/10 my-8" />

          {/* Horizontal Meta Strip */}
          <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Date
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide font-mono">
                9 - 10 Sep 2026
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Venue
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide text-center">
                DoubleTree by Hilton Kuala Lumpur, Malaysia
              </strong>
            </div>

            <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-1">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                Format
              </span>
              <strong className="text-[17px] font-extrabold text-white tracking-wide">
                In-person only
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttendOverviewSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[720px] -mt-[81px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[200px] overflow-hidden bg-cover bg-center bg-no-repeat max-sm:min-h-[690px] max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[196px]"
        style={{ backgroundImage: 'url("/malaysia/images/Attend/Attend-Hero-bg.webp")' }}
        id="overview"
      >
        <div className="heroBackdrop absolute bottom-0 right-[-3%] w-[58%] h-[84%] opacity-0 pointer-events-none" />
        <div className="relative z-10 max-w-[770px]">
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(54px,6.5vw,82px)] max-sm:text-[46px]">
            Malaysia&apos;s most influential gathering of <GradientText>global AI leaders.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[30px] mb-0 text-white/88 text-[21px] leading-normal max-sm:text-[17px]">
            Driving the next era of AI innovation, investment and enterprise transformation across Southeast Asia - in one curated room, over two days.
          </p>
          <div className="flex gap-3.5 mt-11 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/malaysia/attend/delegate#passes">Get your pass</ArrowButton>
            <ArrowButton href="/malaysia/sponsorship-enquiry" variant="outline">
              Sponsorship enquiry
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-[86px] pt-[74px] bg-gradient-to-b from-[#020c21] to-[#031127] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            The Scale of <GradientText>World AI Show Malaysia</GradientText>
          </h2>
          <AttendStats />
        </div>
      </section>

      {/* Video & Value Section */}
      <section className="py-[86px] bg-gradient-to-b from-[#031127] to-[#020b1c] text-center max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="max-w-[820px] mx-auto text-white font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Powering ASEAN&apos;s AI future. <GradientText>Defining what comes next.</GradientText>
          </h2>
          {/* YouTube Video Embed */}
          <div className="relative w-[min(700px,100%)] aspect-video mx-auto my-[58px] border-[3px] border-[#8559ff]/58 rounded-[13px] overflow-hidden shadow-[0_0_24px_rgba(151,108,255,0.35)]">
            <iframe
              src="https://www.youtube.com/embed/J0PpCayNV-U?rel=0&modestbranding=1"
              title="World AI Show Malaysia 2026 - Event Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-9 max-[980px]:grid-cols-[repeat(3,310px)] max-sm:grid-cols-1">
            {valueCards.map((card, index) => (
              <NumberedCard item={card} index={index} key={card.title} />
            ))}
          </div>
          <div className="mb-[24px]">
            <ArrowButton href="/malaysia/attend/delegate#passes">Get Your Pass</ArrowButton>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <AttendCTASection />


    </>
  );
}

export function AttendDelegateSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative -mt-[81px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[200px] overflow-hidden bg-cover bg-center bg-no-repeat max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[196px]"
        style={{ backgroundImage: 'url("/malaysia/images/Attend/Delegates-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        {/* Soft Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Delegate Registration
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Built for <GradientText>AI decision-makers.</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Join 700+ AI decision-makers, government leaders, GLC representatives, and enterprise buyers driving sovereign infrastructure and digital growth.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="#passes">Get Your Pass</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Register as a Delegate"
        buttonHref="#passes"
        id="delegate"
        imageAlt="Where AI Leaders Connect, Learn and Lead"
        imageSrc="/malaysia/images/Attend/AI-decision-maker.webp"
        title={<>Where AI Leaders <GradientText>Connect, Learn and Lead</GradientText></>}
        text={
          <>
            Join enterprise leaders, government decision makers, technology innovators, investors, startups and AI practitioners shaping the future of artificial intelligence across the region.
            <br />
            <br />
            Gain insights from industry pioneers, discover breakthrough technologies, explore real-world AI use cases and connect with the people driving transformation across sectors including banking, telecommunications, manufacturing, retail, healthcare and the public sector.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Your Gateway to <GradientText>ASEAN&apos;s AI Ecosystem</GradientText>
          </h2>
          <BenefitGrid items={gatewayCards} />
        </div>
      </section>

      {/* Side-by-side combined Passes section */}
      <section className="py-[86px] bg-[#020b1c] text-center max-sm:py-[62px]" id="passes">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(40px,5vw,60px)] max-sm:text-[38px]">
            Get <GradientText>Your Pass</GradientText>
          </h2>
          <p className="mt-[18px] mb-12 text-white/62 text-[18px]">Choose the right pass to unlock your World AI Show Malaysia experience.</p>
          
          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-w-[1000px] w-full mx-auto text-left">
            {/* Delegate Pass Card */}
            <article className="relative p-10 max-sm:p-6 border border-[#9a6cff]/60 rounded-[24px] bg-[#040a19]/86 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_24px_70px_rgba(0,0,0,0.34)] transition-all duration-300 hover:scale-[1.01] hover:border-[#9a6cff]/100">
              <span className="text-[#9a6cff] font-mono text-[12px] font-extrabold uppercase tracking-[2px] select-none">
                Delegate Pass
              </span>
              <strong className="block mt-4 mb-4 text-[#f7f9ff] font-[850] text-[48px] leading-none tracking-tight">
                FREE
              </strong>
              <p className="min-h-[58px] mb-7 text-white/63 text-[15px] leading-relaxed">
                For qualified attendees from enterprise, government and AI buyer organisations.
              </p>
              
              {/* Premium tick benefit list */}
              <ul className="m-0 py-[25px] border-t border-white/10 text-white/90 gap-4 flex flex-col min-h-[220px] list-none pl-0">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to all keynote sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full conference &amp; exhibition access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Networking with industry leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Panel discussions &amp; tech showcases</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Complimentary refreshments</span>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="https://konfhub.com/checkout/world-ai-show-malaysia26?ticketId=97615%7C1%3B&utm_medium=Website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-white bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  Register now &rarr;
                </a>
              </div>
              <small className="block mt-[20px] text-white/48 text-[11px] tracking-[2px] text-center uppercase font-mono">
                Subject to qualification review
              </small>
            </article>

            {/* Business Pass Card */}
            <article className="relative p-10 max-sm:p-6 border border-[#7cdfff]/60 rounded-[24px] bg-[#040a19]/86 shadow-[inset_0_0_28px_rgba(65,220,255,0.05),0_24px_70px_rgba(0,0,0,0.34)] bg-gradient-to-br from-transparent to-[#00ceff]/10 transition-all duration-300 hover:scale-[1.01] hover:border-[#7cdfff]/100">
              
              {/* Top center badge matching design */}
              <span className="absolute -top-[12px] left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-mono font-extrabold uppercase tracking-[1.5px] text-[#C0F43C] bg-[#040a19] border border-[#7cdfff]/60 shadow-[0_0_15px_rgba(124,223,255,0.35)] whitespace-nowrap">
                &#9733; BEST FOR BUSINESSES &amp; PARTNERS
              </span>

              <span className="text-[#7cdfff] font-mono text-[12px] font-extrabold uppercase tracking-[2px] select-none">
                Business Pass
              </span>
              <div className="flex items-baseline gap-2.5 mt-4 mb-1">
                <span className="text-white/40 text-[24px] font-bold line-through select-none">$799</span>
                <strong className="text-[#7cdfff] font-[850] text-[48px] leading-none tracking-tight">
                  $499
                </strong>
                <em className="text-white/58 text-[16px] font-normal not-italic">/ person</em>
              </div>
              <span className="block text-[#C0F43C] text-[12px] font-bold font-mono uppercase tracking-[1px] mb-4">
                Valid till 30 July 2026
              </span>
              <p className="min-h-[58px] mb-7 text-white/63 text-[15px] leading-relaxed">
                For technology providers, vendors and partners selling into the AI ecosystem.
              </p>
              
              {/* Premium tick benefit list */}
              <ul className="m-0 py-[25px] border-t border-white/10 text-white/90 gap-4 flex flex-col min-h-[220px] list-none pl-0">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full conference &amp; exhibition access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Direct access to enterprise buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium networking opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>VIP networking area access</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#18d4ff] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Partnership &amp; business matchmaking</span>
                </li>
              </ul>

              <div className="mt-8">
                <a
                  href="https://konfhub.com/checkout/world-ai-show-malaysia26?ticketId=97610%7C1%3B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-[32px] py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] [color:#06111f!important] bg-[#C0F43C] shadow-[0_8px_24px_rgba(192,244,60,0.25)] hover:shadow-[0_12px_32px_rgba(192,244,60,0.4)] transition-all duration-200 cursor-pointer"
                >
                  Get your pass &rarr;
                </a>
              </div>
              <small className="block mt-[20px] text-white/48 text-[11px] tracking-[2px] text-center uppercase font-mono">
                Instant confirmation - secure checkout
              </small>
            </article>
          </div>
        </div>
      </section>

      {/* Bottom CTA Card */}
      <AttendCTASection />
    </>
  );
}

export function AttendSponsorSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative -mt-[81px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[200px] overflow-hidden bg-cover bg-center bg-no-repeat max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[196px]"
        style={{ backgroundImage: 'url("/malaysia/images/Attend/Sponsor-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        {/* Soft Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Sponsorship &amp; Partnerships
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Reach 700+ <br /> <GradientText>AI Decision-Makers</GradientText>
          </h1>
          <p className="max-w-[710px] mt-[24px] mb-0 text-white/88 text-[19px] leading-normal">
            Reach C-suite buyers, present thought leadership, demonstrate platforms, and capture qualified leads at Southeast Asia&apos;s most influential gathering.
          </p>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/malaysia/sponsorship-enquiry">Enquire Now</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Enquire About Sponsorship"
        buttonHref="/malaysia/sponsorship-enquiry"
        id="sponsor"
        imageAlt="Put Your Brand at the Centre of AI Innovation"
        imageSrc="/malaysia/images/Attend/brand-center-innovation.webp"
        reverse={false}
        title={<>Put Your Brand at the <GradientText>Centre of AI Innovation</GradientText></>}
        text={
          <>
            World AI Show Malaysia offers a powerful platform to engage directly with senior decision makers, technology buyers, government stakeholders, investors and enterprise leaders actively investing in AI-driven transformation.
            <br />
            <br />
            Showcase your solutions, generate qualified business opportunities, strengthen brand visibility and establish thought leadership among a highly targeted audience of AI adopters and innovators.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <h2 className="m-0 mb-[42px] text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-center text-[clamp(40px,5vw,60px)] max-sm:text-[38px] max-sm:tracking-[-1px]">
            Drive Visibility. <GradientText>Connections. Growth.</GradientText>
          </h2>
          <BenefitGrid items={sponsorBenefits} />
        </div>
      </section>

      {/* Bottom CTA Card */}
      <AttendCTASection />
    </>
  );
}

export function AttendMediaSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative -mt-[81px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[200px] overflow-hidden bg-cover bg-center bg-no-repeat max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[196px]"
        style={{ backgroundImage: 'url("/malaysia/images/Attend/Media-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        {/* Soft Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Media Partnerships
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Cover ASEAN&apos;s leading <GradientText>AI Transformation Summit</GradientText>
          </h1>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/malaysia/media-enquiry">Enquire Now</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Apply for Media Accreditation"
        buttonHref="/malaysia/media-enquiry"
        id="media-partner"
        imageAlt="Media interview coverage"
        imageSrc="/malaysia/images/Attend/cover-southeast.webp"
        title={<>Cover the Stories Defining the <GradientText>AI Era</GradientText></>}
        text={
          <>
            World AI Show Malaysia brings together some of the region’s most influential AI leaders, policymakers, technology pioneers and industry experts under one roof.
            <br />
            <br />
            Accredited media partners gain access to keynote sessions, exclusive interviews, major industry announcements and valuable networking opportunities with leaders driving AI adoption across Southeast Asia.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={mediaBenefits} />
        </div>
      </section>

      {/* Bottom CTA Card */}
      <AttendCTASection />
    </>
  );
}

export function AttendAssociationSection() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative -mt-[81px] flex items-end px-[max(24px,calc((100vw-1120px)/2))] py-[76px] pt-[200px] overflow-hidden bg-cover bg-center bg-no-repeat max-sm:px-[18px] max-sm:py-[56px] max-sm:pt-[196px]"
        style={{ backgroundImage: 'url("/malaysia/images/Attend/Association-banner.webp")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
        {/* Soft Spotlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#18d4ff]/4 blur-[110px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#C0F43C]/2 blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[820px]">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Association Partnerships
          </span>
          <h1 className="m-0 text-[#f7f9ff] font-[850] leading-[1.05] tracking-[-1.8px] text-[clamp(44px,5.5vw,68px)] max-sm:text-[38px]">
            Partner with <GradientText>World AI Show Malaysia</GradientText>
          </h1>
          <div className="flex gap-3.5 mt-9 max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <ArrowButton href="/malaysia/association-enquiry">Enquire Now</ArrowButton>
          </div>
        </div>
      </section>

      <SplitSection
        button="Become a Partner"
        buttonHref="/malaysia/association-enquiry"
        id="association-partner"
        imageAlt="Strengthening the AI Ecosystem Together"
        imageSrc="/malaysia/images/Attend/strengthening-ai-ecosystem.webp"
        reverse={false}
        title={<>Strengthening the <GradientText>AI Ecosystem Together</GradientText></>}
        text={
          <>
            World AI Show Malaysia welcomes industry associations, innovation hubs, chambers of commerce, startup ecosystems, academic institutions, accelerators and community networks to join us as strategic partners.
            <br />
            <br />
            By partnering with the event, you can expand your network, create meaningful engagement opportunities for your members, contribute to industry advancement and connect your community with key stakeholders across the AI value chain.
          </>
        }
      />

      <section className="py-[86px] bg-gradient-to-b from-[#020b1c] to-[#031127] max-sm:py-[62px]">
        <div className="w-[min(1120px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-28px,1120px)]">
          <BenefitGrid items={associationBenefits} />
        </div>
      </section>

      {/* Bottom CTA Card */}
      <AttendCTASection />
    </>
  );
}



export default function AttendPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Overview" />
      <AttendOverviewSection />
      <FooterSection />
    </main>
  );
}
