"use client";

import { useEffect, useState } from "react";
import { GradientText } from "../components/Shared";

/* ── Types ──────────────────────────────────────────────────── */
type SponsorItem = {
  id?: number;
  name: string;
  logo: string;
  website?: string;
  category?: string;
  description?: string;
  location?: string;
  booth?: string;
};

type ApiResponse = {
  sponsors: Record<string, SponsorItem[]>;
  partners: Record<string, SponsorItem[]>;
  rawSponsors: SponsorItem[];
  rawPartners: SponsorItem[];
  error?: string;
};

/* ── Category display order & label mapping ─────────────────── */
const CATEGORY_ORDER = [
  "Lead Sponsor",
  "Title Sponsor",
  "Platinum Sponsor",
  "Diamond Sponsor",
  "Gold Sponsor",
  "Silver Sponsor",
  "Bronze Sponsor",
  "Exhibitors",
  "CXO Boardroom Partner",
  "Ticketing Partner",
  "Technology Partner",
  "Technology Partners",
  "Strategic Partner",
  "Strategic Partners",
  "Association Partner",
  "Association Partners",
  "Media Partner",
  "Media Partners",
  "Supporting Partner",
  "Supporting Partners",
  "Community Partner",
  "Community Partners",
  "Sponsors",
  "Partners",
];

const CATEGORY_HEX: Record<string, { color: string; rgb: string }> = {
  "Lead Sponsor":          { color: "#ffd700", rgb: "255,215,0" },
  "Title Sponsor":         { color: "#ffd700", rgb: "255,215,0" },
  "Platinum Sponsor":      { color: "#C0F43C", rgb: "192,244,60" },
  "Platinum Sponsors":     { color: "#C0F43C", rgb: "192,244,60" },
  "Diamond Sponsor":       { color: "#00ceff", rgb: "0,206,255" },
  "Gold Sponsor":          { color: "#9a6cff", rgb: "154,108,255" },
  "Gold Sponsors":         { color: "#9a6cff", rgb: "154,108,255" },
  "Silver Sponsor":        { color: "#00ceff", rgb: "0,206,255" },
  "Silver Sponsors":       { color: "#00ceff", rgb: "0,206,255" },
  "Bronze Sponsor":        { color: "#cd7f32", rgb: "205,127,50" },
  "Exhibitors":            { color: "#00a5a3", rgb: "0,165,163" },
  "CXO Boardroom Partner": { color: "#00ceff", rgb: "0,206,255" },
  "Ticketing Partner":     { color: "#9a6cff", rgb: "154,108,255" },
  "Technology Partner":    { color: "#00ceff", rgb: "0,206,255" },
  "Technology Partners":   { color: "#00ceff", rgb: "0,206,255" },
  "Strategic Partner":     { color: "#00ceff", rgb: "0,206,255" },
  "Strategic Partners":    { color: "#00ceff", rgb: "0,206,255" },
  "Association Partner":   { color: "#18d4ff", rgb: "24,212,255" },
  "Association Partners":  { color: "#18d4ff", rgb: "24,212,255" },
  "Media Partner":         { color: "#00ceff", rgb: "0,206,255" },
  "Media Partners":        { color: "#00ceff", rgb: "0,206,255" },
  "Supporting Partner":    { color: "#9a6cff", rgb: "154,108,255" },
  "Supporting Partners":   { color: "#9a6cff", rgb: "154,108,255" },
  "Community Partner":     { color: "#C0F43C", rgb: "192,244,60" },
  "Community Partners":    { color: "#C0F43C", rgb: "192,244,60" },
  default:                 { color: "#9a6cff", rgb: "154,108,255" },
};

function getCategoryColor(cat: string) {
  return CATEGORY_HEX[cat] ?? CATEGORY_HEX.default;
}

const LOCAL_LOGO_OVERLAYS: Record<string, string> = {
  "Data Dog": "/malaysia/images/sponsors/gold/datadog.webp",
  "Magure": "/malaysia/images/sponsors/gold/Magure.webp",
};

/* ── Single sponsor card ────────────────────────────────────── */
function SponsorCard({
  item,
  isLarge = false,
  catColor,
  onClick,
}: {
  item: SponsorItem;
  isLarge?: boolean;
  catColor: { color: string; rgb: string };
  onClick: () => void;
}) {
  const logoSrc = LOCAL_LOGO_OVERLAYS[item.name] || item.logo;

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden flex flex-col items-center justify-center border rounded-[20px] bg-[#04080f]/40 hover:-translate-y-1.5 transition-all duration-300 select-none w-full cursor-pointer aspect-[1.6/1] ${isLarge ? "p-4" : "p-2.5"}`}
      style={{
        borderColor: `rgba(${catColor.rgb}, 0.16)`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `rgba(${catColor.rgb}, 0.55)`;
        e.currentTarget.style.boxShadow = `0 12px 30px rgba(${catColor.rgb}, 0.16)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `rgba(${catColor.rgb}, 0.16)`;
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      {/* White Logo Container Box matching Indonesia sponsors design */}
      <div className={`w-full h-full flex items-center justify-center bg-white rounded-[14px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] group-hover:scale-[1.025] transition-all duration-300 ${isLarge ? "p-4" : "p-2"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={item.name}
          className="object-contain w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

/* ── Loading skeleton ───────────────────────────────────────── */
function LoadingSkeleton() {
  return (
    <div className="mb-16">
      <div className="h-8 w-48 bg-white/5 rounded-lg mb-6 animate-pulse" />
      <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-3 max-sm:grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-[140px] rounded-[16px] bg-white/[0.04] animate-pulse" />
        ))}
      </div>
    </div>
  );
}

/* ── Category section ───────────────────────────────────────── */
function CategorySection({
  category,
  items,
  onCardClick,
}: {
  category: string;
  items: SponsorItem[];
  onCardClick: (item: SponsorItem) => void;
}) {
  const isLarge = category === "Lead Sponsor" || category === "Title Sponsor" || category === "Platinum Sponsor" || category.includes("Gold");
  const catColor = getCategoryColor(category);

  // Sub-description for each sponsor category to make it feel extremely detailed and premium
  const categoryDescriptions: Record<string, string> = {
    "Lead Sponsor": "The primary driving force behind World AI Show Malaysia, showcasing vanguard thought leadership and regional digital transformation.",
    "Title Sponsor": "The premier summit partner guiding the core strategic conversations, keynotes, and executive panels shaping the ASEAN AI landscape.",
    "Platinum Sponsor": "Leading cloud hyperscalers, GLCs, and technology giants delivering the core infrastructure and platforms powering Malaysia's AI growth.",
    "Diamond Sponsor": "Elite enterprise solution providers demonstrating cutting-edge algorithms, hardware accelerators, and security trust frameworks.",
    "Gold Sponsor": "Core summit sponsors showcasing innovative practical applications, business intelligence integration, and automation tools.",
    "Silver Sponsor": "Emerging tech pioneers and specialist services presenting scalable solutions for enterprise AI development and workflow optimization.",
    "Exhibitors": "Innovative technology platforms and startups showcasing active live demonstrations and products on the exhibition floor.",
    "Strategic Partner": "Key governing authorities and national bodies working in close collaboration to accelerate Malaysia's sovereign AI vision.",
    "Strategic Partners": "Key governing authorities and national bodies working in close collaboration to accelerate Malaysia's sovereign AI vision.",
    "Technology Partner": "Hyperscale cloud, compute, and hardware partners powering the technological foundation of the summit.",
    "Technology Partners": "Hyperscale cloud, compute, and hardware partners powering the technological foundation of the summit.",
    "Association Partner": "Industry chambers, startup accelerators, and academic institutions driving ecosystem connectivity and research.",
    "Association Partners": "Industry chambers, startup accelerators, and academic institutions driving ecosystem connectivity and research.",
    "Media Partner": "Official broadcasting, publishing, and media agencies covering ASEAN's most influential AI gathering.",
    "Media Partners": "Official broadcasting, publishing, and media agencies covering ASEAN's most influential AI gathering.",
    default: "Valued partners and ecosystem collaborators accelerating digital transformation and AI innovation across Southeast Asia."
  };

  const desc = categoryDescriptions[category] ?? categoryDescriptions.default;

  return (
    <div 
      className="group relative overflow-hidden border rounded-[24px] p-12 max-[1024px]:p-8 max-sm:p-6 transition-all duration-300 hover:border-white/20 mb-8"
      style={{
        borderColor: `rgba(${catColor.rgb}, 0.16)`,
        background: `linear-gradient(135deg, rgba(${catColor.rgb}, 0.03) 0%, rgba(4, 8, 15, 0.94) 40%, rgba(${catColor.rgb}, 0.01) 100%)`
      }}
    >
      {/* Background Soft Glow Spotlight */}
      <div 
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-60"
        style={{
          background: `radial-gradient(circle, rgba(${catColor.rgb}, 0.12) 0%, transparent 70%)`
        }}
      />

      {/* Grid container: 260px 1fr on large screens, single column on tablet/mobile */}
      <div className="relative z-10 grid grid-cols-[260px_1fr] max-[1024px]:grid-cols-[200px_1fr] max-[768px]:grid-cols-1 gap-10 items-center">
        
        {/* Left Column: Label, Category title, and Description */}
        <div className="flex flex-col gap-4 max-[768px]:text-center max-[768px]:items-center">
          {/* Pill Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-[11px] font-mono font-extrabold uppercase tracking-widest w-fit"
            style={{
              color: catColor.color,
              borderColor: `rgba(${catColor.rgb}, 0.35)`,
              background: `rgba(${catColor.rgb}, 0.06)`,
            }}
          >
            <span 
              className="w-2.5 h-2.5 rounded-full animate-pulse" 
              style={{ background: catColor.color }}
            />
            {category}
          </div>

          <h3 className="m-0 font-space-grotesk text-white font-[850] text-[26px] leading-tight tracking-tight max-sm:text-[22px]">
            {category}
          </h3>

          <p className="m-0 font-sans text-white/52 text-[14px] leading-relaxed max-[768px]:max-w-[480px]">
            {desc}
          </p>
        </div>

        {/* Right Column: Grid of Sponsor Cards */}
        <div className={(() => {
          const cat = category.toLowerCase();
          if (
            cat.includes("lead") ||
            cat.includes("title") ||
            cat.includes("platinum") ||
            cat.includes("diamond") ||
            cat.includes("gold") ||
            cat === "sponsors"
          ) {
            return "grid grid-cols-2 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 w-full";
          }
          if (cat.includes("exhibitor") || cat.includes("media")) {
            return "grid grid-cols-4 gap-4 max-[1200px]:grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 w-full";
          }
          return "grid grid-cols-3 gap-5 max-[1200px]:grid-cols-3 max-[1024px]:grid-cols-2 max-sm:grid-cols-1 w-full";
        })()}>
          {items.map((item, i) => (
            <SponsorCard
              key={item.id ?? `${category}-${i}`}
              item={item}
              isLarge={isLarge}
              catColor={catColor}
              onClick={() => onCardClick(item)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

/* ── CTA section ────────────────────────────────────────────── */
function PartnerCTA() {
  return (
    <div className="mt-8 p-10 border border-[#c0f43c]/25 rounded-[24px] bg-gradient-to-br from-[#020b1c] to-[#041226] shadow-[0_0_60px_rgba(192,244,60,0.04)] text-center max-sm:p-6">
      <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#c0f43c]/30 rounded-full text-[#c0f43c] font-mono text-[12px] uppercase tracking-[2px] bg-[#c0f43c]/5">
        Partnership Opportunities
      </span>
      <h3 className="m-0 text-white font-[850] text-[clamp(24px,3.2vw,36px)] leading-tight tracking-tight mb-4">
        Ready to Reach <GradientText>700+ AI Decision-Makers?</GradientText>
      </h3>
      <p className="mt-0 mb-8 text-white/62 text-[16px] leading-relaxed max-w-[560px] mx-auto">
        Contact our partnership team to receive the sponsorship brochure, customisable booth options and speaking slot availability for World AI Show Malaysia 2026.
      </p>
      <div className="flex justify-center gap-4 flex-wrap max-sm:flex-col max-sm:items-center">
        <a
          href="/malaysia/sponsorship-enquiry"
          className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full text-[15px] font-extrabold text-[#06111f] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.3)] hover:-translate-y-0.5 transition-all duration-200"
        >
          Sponsorship enquiry <span className="font-mono">→</span>
        </a>
        <a
          href="/malaysia/association-enquiry"
          className="inline-flex items-center gap-2 px-7 py-[15px] rounded-full text-[15px] font-extrabold text-white border border-[#4eb9ff]/70 bg-[#030a18]/30 shadow-[inset_0_0_20px_rgba(46,172,255,0.06)] hover:-translate-y-0.5 hover:border-[#4eb9ff] hover:shadow-[0_0_22px_rgba(78,185,255,0.18)] transition-all duration-200"
        >
          Become a partner <span className="font-mono">→</span>
        </a>
      </div>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────── */
export function SponsorsGrid() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSponsor, setSelectedSponsor] = useState<SponsorItem | null>(null);

  useEffect(() => {
    const EVENT_URL = "world-ai-show-malaysia26";
    const API_BASE = "https://api.konfhub.com/event/public";

    Promise.allSettled([
      fetch(`${API_BASE}/${EVENT_URL}/entity/1`),
      fetch(`${API_BASE}/${EVENT_URL}/entity/2`)
    ])
      .then(async ([sponsorsRes, partnersRes]) => {
        let sponsorsData: any = { categorized: [] };
        let partnersData: any = { categorized: [] };

        if (sponsorsRes.status === "fulfilled" && sponsorsRes.value.ok) {
          sponsorsData = await sponsorsRes.value.json();
        }
        if (partnersRes.status === "fulfilled" && partnersRes.value.ok) {
          partnersData = await partnersRes.value.json();
        }

        const cleanCategoryName = (catName: string) => {
          const trimmed = catName.trim();
          const prefix = "World AI Show";
          if (trimmed.startsWith(prefix)) {
            return trimmed.substring(prefix.length).replace(/^\s*\|\|\s*/, "").trim();
          }
          return trimmed;
        };

        const sponsorsByCategory: Record<string, any[]> = {};
        const partnersByCategory: Record<string, any[]> = {};

        // Format sponsors (entity type 1)
        if (Array.isArray(sponsorsData?.categorized)) {
          for (const cat of sponsorsData.categorized) {
            const rawName = cat.category_name || "Sponsors";
            const cleanName = cleanCategoryName(rawName);
            const entities = Array.isArray(cat.entity) ? cat.entity : [];

            if (entities.length > 0) {
              if (!sponsorsByCategory[cleanName]) {
                sponsorsByCategory[cleanName] = [];
              }
              sponsorsByCategory[cleanName].push(
                ...entities.map((e: any) => ({
                  id: e.id,
                  name: e.entity_name || "",
                  logo: e.image_url || "",
                  website: e.website_url || "#",
                  description: e.description || "",
                  location: e.location || "",
                  booth: e.booth_number || "",
                }))
              );
            }
          }
        }

        // Format partners (entity type 2)
        if (Array.isArray(partnersData?.categorized)) {
          for (const cat of partnersData.categorized) {
            const rawName = cat.category_name || "Partners";
            const cleanName = cleanCategoryName(rawName);
            const entities = Array.isArray(cat.entity) ? cat.entity : [];

            if (entities.length > 0) {
              if (!partnersByCategory[cleanName]) {
                partnersByCategory[cleanName] = [];
              }
              partnersByCategory[cleanName].push(
                ...entities.map((e: any) => ({
                  id: e.id,
                  name: e.entity_name || "",
                  logo: e.image_url || "",
                  website: e.website_url || "#",
                  description: e.description || "",
                  location: e.location || "",
                  booth: e.booth_number || "",
                }))
              );
            }
          }
        }

        setData({
          sponsors: sponsorsByCategory,
          partners: partnersByCategory,
          rawSponsors: sponsorsData?.categorized ?? [],
          rawPartners: partnersData?.categorized ?? [],
        });
      })
      .catch(() => setError("Failed to load sponsor data"))
      .finally(() => setLoading(false));
  }, []);

  /* merge sponsors + partners into one flat category map */
  const allCategories: Record<string, SponsorItem[]> = {};

  if (data) {
    // Sponsors
    for (const [cat, items] of Object.entries(data.sponsors ?? {})) {
      const mapped: SponsorItem[] = items.map((s: any) => ({
        id: s.id,
        name: s.name ?? "",
        logo: s.logo ?? "",
        website: s.website ?? "#",
        category: cat,
        description: s.description ?? "",
        location: s.location ?? "",
        booth: s.booth ?? "",
      }));
      if (!allCategories[cat]) allCategories[cat] = [];
      allCategories[cat].push(...mapped);
    }
    // Partners
    for (const [cat, items] of Object.entries(data.partners ?? {})) {
      const mapped: SponsorItem[] = items.map((p: any) => ({
        id: p.id,
        name: p.name ?? "",
        logo: p.logo ?? "",
        website: p.website ?? "#",
        category: cat,
        description: p.description ?? "",
        location: p.location ?? "",
        booth: p.booth ?? "",
      }));
      if (!allCategories[cat]) allCategories[cat] = [];
      allCategories[cat].push(...mapped);
    }
  }

  const hasAnyData = Object.keys(allCategories).length > 0;

  // Sort categories by preferred order
  const sortedCategories = Object.keys(allCategories).sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a);
    const bi = CATEGORY_ORDER.indexOf(b);
    if (ai === -1 && bi === -1) return a.localeCompare(b);
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });

  return (
    <section className="relative py-[92px] bg-[#020b1c]" id="sponsors">
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">

        {/* Section intro */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-cyan/30 rounded-full text-cyan font-mono text-[12px] uppercase tracking-[2px] bg-cyan/5">
            Our Ecosystem
          </span>
          <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,54px)] max-w-[800px] mx-auto">
            Sponsors &amp; <GradientText>Partners</GradientText>
          </h2>

          {!loading && !hasAnyData && !error && (
            <p className="mt-4 max-w-[600px] mx-auto text-white/55 text-[16px] leading-relaxed">
              Sponsor announcements coming soon. Contact us to secure your spot at World AI Show Malaysia 2026.
            </p>
          )}
        </div>

        {/* Loading state */}
        {loading && (
          <div>
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}

        {/* Error state */}
        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-white/40 text-[15px]">
              Sponsor data temporarily unavailable. Please check back shortly.
            </p>
          </div>
        )}

        {/* Dynamic sponsor categories from KonfHub */}
        {!loading && hasAnyData && sortedCategories.map((cat) => (
          <CategorySection 
            key={cat} 
            category={cat} 
            items={allCategories[cat]} 
            onCardClick={(item) => setSelectedSponsor(item)}
          />
        ))}
      </div>

      {/* SVG Filter to remove solid white backgrounds dynamically from sponsor logo images */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ visibility: "hidden" }}>
        <defs>
          <filter id="remove-white-bg" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -1 -1 -1 0 2.9"
            />
          </filter>
        </defs>
      </svg>

      {/* Sponsor Profile Modal Popup (Indonesia Style) */}
      {selectedSponsor && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedSponsor(null)}
        >
          <div 
            className="relative bg-[#070e24] border border-white/10 rounded-[28px] overflow-hidden w-full max-w-[520px] p-10 max-sm:p-6 flex flex-col gap-6 shadow-[0_32px_80px_rgba(0,0,0,0.6)] animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal top colored bar */}
            <div 
              className="absolute top-0 left-0 right-0 h-[4px]" 
              style={{ background: getCategoryColor(selectedSponsor.category || "").color }}
            />

            {/* Close button */}
            <button 
              className="absolute top-5 right-5 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedSponsor(null)}
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Logo wrap with white background inside modal to highlight the logo perfectly */}
            <div className="bg-white rounded-[16px] p-5 max-w-[220px] h-[90px] flex items-center justify-center self-start shadow-md mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={LOCAL_LOGO_OVERLAYS[selectedSponsor.name] || selectedSponsor.logo} 
                alt={selectedSponsor.name} 
                className="max-h-[64px] max-w-[180px] object-contain" 
              />
            </div>

            {/* Category tier pill */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 border rounded-full text-[11px] font-mono font-extrabold uppercase tracking-widest w-fit"
              style={{
                color: getCategoryColor(selectedSponsor.category || "").color,
                borderColor: `rgba(${getCategoryColor(selectedSponsor.category || "").rgb}, 0.35)`,
                background: `rgba(${getCategoryColor(selectedSponsor.category || "").rgb}, 0.07)`,
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ background: getCategoryColor(selectedSponsor.category || "").color }}
              />
              {selectedSponsor.category}
            </div>

            {/* Name */}
            <h3 className="m-0 font-space-grotesk text-white font-extrabold text-[26px] tracking-tight">
              {selectedSponsor.name}
            </h3>

            {/* Meta (Booth / Stall & Location) */}
            {(selectedSponsor.booth || selectedSponsor.location) && (
              <div className="flex flex-wrap gap-2.5">
                {selectedSponsor.booth && (
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white/50 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5">
                    Stall: {selectedSponsor.booth}
                  </span>
                )}
                {selectedSponsor.location && (
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-white/50 border border-white/10 px-3.5 py-1.5 rounded-full bg-white/5">
                    Location: {selectedSponsor.location}
                  </span>
                )}
              </div>
            )}

            {/* Description */}
            {selectedSponsor.description ? (
              <p className="m-0 font-inter text-[14.5px] leading-relaxed text-white/70">
                {selectedSponsor.description}
              </p>
            ) : (
              <p className="m-0 font-inter text-[13.5px] leading-relaxed text-white/40 italic">
                No description available. Click below to explore their official website.
              </p>
            )}

            {/* Action buttons */}
            {selectedSponsor.website && selectedSponsor.website !== "#" && (
              <a 
                href={selectedSponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[13.5px] font-extrabold text-[#060b24] hover:shadow-[0_0_24px_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all duration-200 w-fit cursor-pointer"
                style={{ background: getCategoryColor(selectedSponsor.category || "").color }}
              >
                Visit Website
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
