"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

import { useEffect, useMemo, useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection } from "../components/sections/AgendaSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const navItems = ["Home", "Attend", "Agenda", "Speakers", "Partners", "Networking"];

const subNav = ["Overview", "The 2030 Vision", "Agenda", "Themes", "Call for Speakers"];

const KONFHUB_EVENT_ID = "8f07cbab-ebca-4b02-80e3-48c281f1fa8d";

const formats = [

  {

    title: "Keynotes",

    text: "Hear from global AI pioneers, policymakers, enterprise leaders and technology visionaries driving the next era of innovation and intelligent transformation.",

    image: "/malaysia/images/agenda/keynotes.webp"

  },

  {

    title: "Panel Discussions",

    text: "Hear from global AI pioneers, policymakers, enterprise leaders and technology visionaries driving the next era of innovation and intelligent transformation.",

    image: "/malaysia/images/agenda/panel-discussion.webp"

  },

  {

    title: "Fireside Chats",

    text: "Experience exclusive one-on-one conversations with industry leaders sharing practical insights, success stories and bold perspectives on the future of AI.",

    image: "/malaysia/images/agenda/Fireside.webp"

  }

];

const gateway = [

  ["Strong Digital Infrastructure", "Malaysia is accelerating investments in hyperscale data centres, cloud ecosystems and next-generation connectivity to power the region's growing AI economy.", "/malaysia/images/agenda/strong.webp"],

  ["ASEAN Connectivity Hub", "Strategically located at the centre of Southeast Asia, Malaysia serves as a critical gateway connecting global businesses, technology providers and regional markets.", "/malaysia/images/agenda/Asean-con.webp"],

  ["Government-Led Transformation", "Through national AI initiatives, digital economy programmes and innovation-focused policies, Malaysia is building a future-ready ecosystem for responsible AI adoption.", "/malaysia/images/agenda/Govt.webp"],

  ["Enterprise AI Adoption", "From banking and manufacturing to healthcare and retail, enterprises across Malaysia are rapidly integrating AI to improve efficiency, customer experience and innovation.", "/malaysia/images/agenda/Enterprise.webp"],

  ["A Growing Digital Talent Ecosystem", "Malaysia continues to invest in STEM education, digital upskilling and AI-focused workforce development to support long-term innovation and economic growth.", "/malaysia/images/agenda/Growing-dig.webp"],

  ["Where Investment Meets Innovation", "Increasing global investments from hyperscalers, technology giants and venture capital firms are making Malaysia a key destination for AI-driven business expansion in ASEAN.", "/malaysia/images/agenda/Investment-innovation.webp"]

];

const focusItems = [

  ["Policy & Governance", "Advancing responsible AI adoption through national policy frameworks, cybersecurity, data governance and national digital transformation strategies.", "/malaysia/images/agenda/Policy.webp"],

  ["AI Infrastructure", "Showcasing the technologies powering the future - from cloud and hyperscale data centres to AI-ready infrastructure, semiconductors and enterprise platforms.", "/malaysia/images/agenda/AI-infra.webp"],

  ["Investment & Innovation", "Connecting startups, enterprises and investors to accelerate AI adoption, innovation ecosystems and the next generation of digital businesses across ASEAN.", "/malaysia/images/agenda/investment.webp"]

];

const themes = [

  ["AI Infrastructure, Cloud & Data Foundations", "Focus / 01", "/malaysia/images/agenda/AI-infra.webp"],

  ["Enterprise AI Deployment & Scale", "Focus / 02", "/malaysia/images/agenda/Enterprise.webp"],

  ["AI in Government, GLCs & National Digital Systems", "Focus / 03", "/malaysia/images/agenda/Govt.webp"],

  ["AI Security, Governance & Trust", "Focus / 04", "/malaysia/images/agenda/Policy.webp"]

];

type LiveAgendaSession = {

  dayKey: string;

  dayLabel: string;

  description: string;

  endTime: string;

  id: number;

  location: string;

  searchText: string;

  speakers: {

    designation: string;

    imageUrl: string;

    name: string;

    organisation: string;

    role: string;

  }[];

  startTime: string;

  tagIds: string[];

  tags: string[];

  title: string;

  trackId: string;

  trackTitle: string;

  typeId: string;

  typeTitle: string;

};

type LiveAgendaResponse = {

  days: { key: string; label: string }[];

  filters: {

    sessionTypes: { id: string; title: string }[];

    stages: { id: string; title: string }[];

    themes: { id: string; title: string }[];

  };

  sessions: LiveAgendaSession[];

  tracks: { id: string; title: string }[];

};

type KonfHubTag = {

  id?: string | number;

  name?: string;

};

type KonfHubSpeaker = {

  designation?: string;

  image_url?: string;

  name?: string;

  organisation?: string;

  tags?: KonfHubTag[];

};

type KonfHubSession = {

  end_timestamp?: string;

  session_description?: string;

  session_id: number;

  session_location?: string;

  session_order?: number;

  session_speakers?: KonfHubSpeaker[];

  session_title?: string;

  start_timestamp?: string;

  tags?: KonfHubTag[];

};

function GradientText({ children }: { children: ReactNode }) {

  return <span className={styles.gradientText}>{children}</span>;

}
// Reusable Header component is imported from components/sections/Header

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
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
  );
}

function Button({ children, variant = "solid" }: { children: ReactNode; variant?: "solid" | "outline" }) {

  return (
    <a className={`${styles.button} ${styles[variant]} group`} href="#cta">
      {children}
      <ArrowSVG />
    </a>
  );

}

function setPointerGlow(event: PointerEvent<HTMLElement>) {

  const rect = event.currentTarget.getBoundingClientRect();

  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);

  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);

}

function plainText(html: string) {

  return html

    .replace(/<br\s*\/?>/gi, " ")

    .replace(/<\/p>/gi, " ")

    .replace(/<[^>]+>/g, "")

    .replace(/&nbsp;/g, " ")

    .replace(/&amp;/g, "&")

    .replace(/&quot;/g, "\"")

    .replace(/&#39;/g, "'")

    .replace(/\s+/g, " ")

    .trim();

}

function tagId(tag?: KonfHubTag) {

  return tag?.id === undefined || tag.id === null ? "" : String(tag.id);

}

function toIso(timestamp?: string) {

  return timestamp ? `${timestamp.replace(" ", "T")}Z` : "";

}

function getDayKey(timestamp?: string) {

  if (!timestamp) return "";

  const parts = new Intl.DateTimeFormat("en-US", {

    day: "2-digit",

    month: "2-digit",

    timeZone: "Asia/Kuala_Lumpur",

    year: "numeric"

  }).formatToParts(new Date(toIso(timestamp)));

  const year = parts.find((part) => part.type === "year")?.value || "";

  const month = parts.find((part) => part.type === "month")?.value || "";

  const day = parts.find((part) => part.type === "day")?.value || "";

  return `${year}-${month}-${day}`;

}

function formatDayLabel(dayKey: string) {

  return new Intl.DateTimeFormat("en-US", {

    day: "numeric",

    month: "short",

    timeZone: "Asia/Kuala_Lumpur",

    weekday: "long"

  }).format(new Date(`${dayKey}T00:00:00+08:00`));

}

function formatKonfHubTime(timestamp?: string) {

  if (!timestamp) return "";

  return new Intl.DateTimeFormat("en-US", {

    hour: "numeric",

    minute: "2-digit",

    timeZone: "Asia/Kuala_Lumpur"

  }).format(new Date(toIso(timestamp)));

}

function sortedOptions(options: Map<string, string>) {

  return Array.from(options.entries())

    .sort((a, b) => a[1].localeCompare(b[1]))

    .map(([id, title]) => ({ id, title }));

}

function normalizeKonfHubSessions(sessions: KonfHubSession[]): LiveAgendaResponse {

  const sessionTypeMap = new Map<string, string>();

  for (const session of sessions) {

    for (const tag of session.tags || []) {

      const id = tagId(tag);

      if (id) {

        sessionTypeMap.set(id, tag.name || "Session");

      }

    }

  }

  const normalized = sessions

    .map((session) => {

      const dayKey = getDayKey(session.start_timestamp);

      const allTags = session.tags || [];

      const sessionType = allTags.find((tag) => sessionTypeMap.has(tagId(tag)));

      const orderedSpeakers = [...(session.session_speakers || [])].sort((a, b) => {

        const aModerator = (a.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator");

        const bModerator = (b.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator");

        return Number(aModerator) - Number(bModerator);

      });

      return {

        dayKey,

        dayLabel: dayKey ? formatDayLabel(dayKey) : "Agenda",

        description: session.session_description || "",

        endTime: formatKonfHubTime(session.end_timestamp),

        id: session.session_id,

        location: session.session_location || "",

        order: session.session_order || 0,

        searchText: [

          session.session_title,

          ...(session.session_speakers || []).map((speaker) => speaker.name)

        ]

          .filter(Boolean)

          .join(" ")

          .toLowerCase(),

        speakers: orderedSpeakers.map((speaker) => {

          const role = (speaker.tags || []).some((tag) => tag.name?.trim().toLowerCase() === "moderator")

            ? "MODERATOR"

            : "SPEAKER";

          return {

            designation: speaker.designation || "",

            imageUrl: speaker.image_url || "",

            name: speaker.name || "",

            organisation: speaker.organisation || "",

            role

          };

        }),

        startTime: formatKonfHubTime(session.start_timestamp),

        tagIds: allTags.map(tagId).filter(Boolean),

        tags: allTags.map((tag) => tag.name || "").filter(Boolean),

        title: session.session_title || "Session",

        trackId: "main",

        trackTitle: "Main Stage",

        typeId: sessionType ? tagId(sessionType) : "",

        typeTitle: sessionType?.name || "Session"

      };

    })

    .sort((a, b) => a.dayKey.localeCompare(b.dayKey) || a.order - b.order || a.startTime.localeCompare(b.startTime));

  const days = Array.from(new Map(normalized.map((session) => [session.dayKey, session.dayLabel])).entries())

    .map(([key, label]) => ({ key, label }));

  return {

    days,

    filters: {

      sessionTypes: sortedOptions(sessionTypeMap),

      stages: [],

      themes: []

    },

    sessions: normalized,

    tracks: []

  };

}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {

  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>

  );

}

function AgendaTabs() {

  const [agenda, setAgenda] = useState<LiveAgendaResponse | null>(null);

  const [activeDay, setActiveDay] = useState("");

  const [activeTrack, setActiveTrack] = useState("all");

  const [activeSessionType, setActiveSessionType] = useState("");

  const [activeTheme, setActiveTheme] = useState("");

  const [query, setQuery] = useState("");

  const [loadError, setLoadError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    let mounted = true;

    async function loadAgenda() {

      try {

        const response = await fetch("/malaysia/api/konfhub-agenda");

        if (!response.ok) {

          throw new Error("Unable to load agenda");

        }

        const data = (await response.json()) as LiveAgendaResponse;

        if (!data.sessions?.length) {

          throw new Error("Agenda response is empty");

        }

        if (!mounted) {

          return;

        }

        setAgenda(data);

        setActiveDay(data.days[0]?.key || "");

        setLoadError("");

      } catch {

        try {

          const directResponse = await fetch(`https://api.konfhub.com/event/${KONFHUB_EVENT_ID}/sessions?sessions_to_return=all`, {

            headers: {

              accept: "application/json"

            }

          });

          if (!directResponse.ok) {

            throw new Error("Unable to load KonfHub sessions");

          }

          const data = normalizeKonfHubSessions((await directResponse.json()) as KonfHubSession[]);

          if (!mounted) {

            return;

          }

          setAgenda(data);

          setActiveDay(data.days[0]?.key || "");

          setLoadError("");

        } catch {

          if (mounted) {

            setAgenda(null);

            setLoadError("Unable to load the live KonfHub agenda. Please check the API route or network access.");

          }

        }

      } finally {

        if (mounted) {

          setIsLoading(false);

        }

      }

    }

    loadAgenda();

    return () => {

      mounted = false;

    };

  }, []);

  const dayTabs = agenda?.days || [];

  const trackTabs = useMemo(() => {

    if (!agenda) {

      return [];

    }

    const sessionsForDay = agenda.sessions.filter((session) => session.dayKey === activeDay);

    return Array.from(

      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()

    ).map(([id, title]) => ({ id, title }));

  }, [activeDay, agenda]);

  const liveItems = useMemo(() => {

    if (!agenda) {

      return [];

    }

    const normalizedQuery = query.trim().toLowerCase();

    return agenda.sessions.filter((session) => {

      const dayMatches = session.dayKey === activeDay;

      const trackMatches = activeTrack === "all" || session.trackId === activeTrack;

      const themeMatches = !activeTheme || session.tagIds.includes(activeTheme);

      const typeMatches = !activeSessionType || session.tagIds.includes(activeSessionType);

      const searchMatches = !normalizedQuery || session.searchText.includes(normalizedQuery);

      return dayMatches && trackMatches && themeMatches && typeMatches && searchMatches;

    });

  }, [activeDay, activeSessionType, activeTheme, activeTrack, agenda, query]);

  const hasFilters = Boolean(

    agenda &&

    (agenda.filters.themes.length > 0 ||

      agenda.filters.stages.length > 0 ||

      agenda.filters.sessionTypes.length > 0)

  );

  function clearFilters() {

    setActiveTrack("all");

    setActiveTheme("");

    setActiveSessionType("");

    setQuery("");

  }

  return (
    <section className={styles.timelineSection} id="agenda">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>Two days, <GradientText>end-to-end.</GradientText></h2>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">

          {dayTabs.map((day, index) => (
            <button

              className={activeDay === day.key || (!activeDay && index === 0) ? styles.activeDay : ""}

              key={day.key}

              onClick={() => {

                setActiveDay(day.key);

                setActiveTrack("all");

              }}

              onPointerMove={setPointerGlow}

              type="button"
            >
              <span>{day.label}</span>
              <strong>{index === 0 ? "Day 1" : "Day 2"}</strong>
              <small>{index === 0 ? "" : ""}</small>
            </button>

          ))}
        </div>

        {trackTabs.length > 1 ? (
          <div className={styles.trackTabs} aria-label="Agenda tracks">
            <button className={activeTrack === "all" ? styles.activeTrack : ""} onClick={() => setActiveTrack("all")} onPointerMove={setPointerGlow} type="button">

              All Tracks
            </button>

            {trackTabs.map((track) => (
              <button className={activeTrack === track.id ? styles.activeTrack : ""} key={track.id} onClick={() => setActiveTrack(track.id)} onPointerMove={setPointerGlow} type="button">

                {track.title}
              </button>

            ))}
          </div>

        ) : null}

        {agenda ? (
          <div className={styles.agendaFilters} aria-label="Agenda filters">
            <label>
              <span>Search</span>
              <input

                onChange={(event) => setQuery(event.target.value)}

                placeholder="Search sessions or speakers"

                type="search"

                value={query}

              />
            </label>

            {agenda.filters.themes.length > 0 ? (
              <label>
                <span>Theme</span>
                <select onChange={(event) => setActiveTheme(event.target.value)} value={activeTheme}>
                  <option value="">All Themes</option>

                  {agenda.filters.themes.map((theme) => (
                    <option key={theme.id} value={theme.id}>{theme.title}</option>

                  ))}
                </select>
              </label>

            ) : null}

            {agenda.filters.stages.length > 0 ? (
              <label>
                <span>Stage</span>
                <select onChange={(event) => setActiveTrack(event.target.value || "all")} value={activeTrack === "all" ? "" : activeTrack}>
                  <option value="">All Stages</option>

                  {agenda.filters.stages.map((stage) => (
                    <option key={stage.id} value={stage.id}>{stage.title}</option>

                  ))}
                </select>
              </label>

            ) : null}

            {agenda.filters.sessionTypes.length > 0 ? (
              <label>
                <span>Session Type</span>
                <select onChange={(event) => setActiveSessionType(event.target.value)} value={activeSessionType}>
                  <option value="">All Sessions</option>

                  {agenda.filters.sessionTypes.map((type) => (
                    <option key={type.id} value={type.id}>{type.title}</option>

                  ))}
                </select>
              </label>

            ) : null}

            {hasFilters || query ? <button onClick={clearFilters} type="button">Clear</button> : null}
          </div>

        ) : null}
        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>{dayTabs.find((day) => day.key === activeDay)?.label || "KonfHub Agenda"}</span>
            <span>Sheraton Grand - Kuala Lumpur</span>
          </div>

          {isLoading ? <p className={styles.loadingState}>Loading live agenda from KonfHub...</p> : null}

          {!isLoading && loadError ? <p className={styles.loadingState}>{loadError}</p> : null}

          {!isLoading && agenda && liveItems.length === 0 ? <p className={styles.loadingState}>No sessions match the selected filters.</p> : null}

          {!isLoading && agenda

            ? liveItems.map((session, index) => (
              <article

                className={styles.timelineRow}

                key={session.id}

                onPointerMove={setPointerGlow}

                style={{ "--row-index": index } as CSSProperties}
              >
                <time>{session.startTime}<span>{session.endTime}</span></time>
                <span className={styles.sessionType}>{session.typeTitle || session.tags[0] || "Session"}</span>
                <div>
                  <h3>{session.title}</h3>

                  {session.description ? <p>{plainText(session.description)}</p> : null}

                  {session.location ? <small className={styles.locationText}>{session.location}</small> : null}

                  {session.speakers.length > 0 ? (
                    <div className={styles.sessionSpeakers}>

                      {session.speakers.map((speaker) => (
                        <span key={`${session.id}-${speaker.name}`}>

                          {speaker.imageUrl ? <img src={speaker.imageUrl} alt="" loading="lazy" /> : null}
                          <em>{speaker.role}</em>
                          <strong>{speaker.name}</strong>
                          <small>{[speaker.designation, speaker.organisation].filter(Boolean).join(", ")}</small>
                        </span>

                      ))}
                    </div>

                  ) : null}
                </div>
              </article>

            ))

            : null}
        </div>
        <p className={styles.note}>{agenda ? "Agenda synced from KonfHub - timings shown in GMT+08:00." : "Live agenda is not available yet."}</p>
      </div>
    </section>

  );

}

function ThemeSection() {

  const [active, setActive] = useState(0);

  const selected = themes[active];

  return (
    <section className={styles.themeSection} id="themes">
      <div className={styles.container}>
        <h2>Four pillars shaping <GradientText>Malaysia&apos;s AI Ecosystem For Tomorrow</GradientText></h2>
        <p>Driving enterprise transformation, digital innovation and AI adoption through world-class infrastructure, responsible governance, talent development and next-generation technologies.</p>
        <div className={styles.themeGrid}>
          <div className={styles.themeList}>

            {themes.map(([title, label, icon], index) => (
              <button

                className={active === index ? styles.activeTheme : ""}

                key={title}

                onClick={() => setActive(index)}

                onFocus={() => setActive(index)}

                onMouseEnter={() => setActive(index)}

                onPointerMove={setPointerGlow}

                type="button"
              >
                <span><img src={icon} alt="" loading="lazy" /></span>
                <small>Theme / {String(index + 1).padStart(2, "0")}</small>
                <strong>{title}</strong>
              </button>

            ))}
          </div>
          <article className={styles.focusCard} onPointerMove={setPointerGlow}>
            <small>{selected[1]}</small>
            <h3>{selected[0]}</h3>
            <img key={selected[0]} src={selected[2]} alt="" loading="lazy" />
          </article>
        </div>
        <div className={styles.brochureCta}>
          <div>
            <h3>Get the full agenda brochure.</h3>
            <p>Full tracks, confirmed speakers, sponsor packages and floor plan - the briefing document we send to executive teams.</p>
          </div>
          <Button>Download brochure</Button>
        </div>
      </div>
    </section>

  );

}

export function AgendaOverview() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="overview">
        <div className={styles.container}>
          <h1>Two days.<br />Thirty global voices.<br /><GradientText>Countless AI Breakthroughs.</GradientText></h1>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2>The World AI Show Malaysia agenda is designed for one purpose: <GradientText>real-world AI transformation.</GradientText></h2>
            <p>Malaysia is rapidly positioning itself as Southeast Asia&apos;s most strategic hub for artificial intelligence and data infrastructure. Backed by strong government commitment under the National AI Roadmap 2030, the country has created a highly conducive environment for innovation, investment, and large-scale AI deployment.</p>
            {/* <h3>This is where the future of AI in ASEAN takes shape.</h3> */}
          </div>
          <img src="/malaysia/images/agenda/About.webp" alt="Executives networking at World AI Show Malaysia" loading="lazy" />
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>The conversations <GradientText>shaping AI.</GradientText></h2>
          <p>A working agenda - not a stage. Three formats. Every minute earned.</p>
          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={styles.formatCard} key={item.title}>
                <img src={item.image} alt="" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>Malaysia&apos;s AI decade is written.</GradientText></h2>
          <p>Reserve your seat, your sponsor slot or your speaker application — and join the operators, regulators and capital allocators defining what comes next.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/malaysia/attend/delegate#passes">Buy a pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/sponsorship-enquiry">Sponsorship enquiry <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>9-10 Sep 2026</dd></div>
            <div><dt>Venue</dt><dd>DoubleTree by Hilton Kuala Lumpur, Malaysia</dd></div>
            <div><dt>Format</dt><dd>In-person only</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, #020713e6 0%, #020713b3 40%, #02071340 100%), url(/malaysia/images/agenda/Vision-2030-bg.webp) center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            AI DECISIONS GET MADE. #WAIS MALAYSIA
          </span>
          <h1>Driving Malaysia&apos;s <br /><GradientText>AI Vision 2030.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.split}>
          <div className={styles.leftCol}>
            <img src="/malaysia/images/agenda/driving-malaysia-stage.webp" alt="Panel discussion at World AI Show Malaysia" loading="lazy" />
          </div>
          <div className={styles.visionCopy}>
            <p><strong>Malaysia&apos;s</strong> ambition is clear - to become Southeast Asia&apos;s leading AI and digital innovation hub by 2030. Backed by strong government initiatives, growing hyperscaler investments and a rapidly evolving digital economy, the nation is building the foundation for large-scale AI transformation.</p>
            <p>From enterprise AI adoption and sovereign cloud infrastructure to smart manufacturing, fintech, cybersecurity and digital public services, Malaysia is rapidly positioning itself at the forefront of ASEAN&apos;s AI revolution.</p>
            <p><strong>World AI Show Malaysia</strong> brings together the policymakers, enterprise leaders, investors and technology pioneers shaping this next chapter of growth and innovation.</p>
            <blockquote>
              &ldquo;AI will be a defining driver of Malaysia&apos;s digital economy and future competitiveness.&rdquo;
              <cite className={styles.blockquoteCite}>&mdash; MALAYSIA NATIONAL AI VISION 2030</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2>Malaysia: <GradientText>ASEAN&apos;s AI gateway.</GradientText></h2>
          <p>Positioned at the heart of Southeast Asia&apos;s digital economy, Malaysia is rapidly emerging as a strategic hub for AI innovation, infrastructure and enterprise transformation.</p>
          <div className={styles.cardGrid}>
            {gateway.map(([title, text, icon], index) => <IconCard icon={icon} index={index} key={title} text={text} title={title} />)}
          </div>
        </div>
      </section>

      <section className={styles.accelerateSection}>
        <div className={styles.container}>
          <h2>Accelerating <GradientText>Malaysia&apos;s AI Vision 2030</GradientText></h2>
          <p>World AI Show Malaysia is where government leaders, global technology providers, enterprise decision-makers and investors come together to drive the next phase of AI-led growth across Southeast Asia.</p>
          <div className={styles.accelerateGrid}>
            <div>
              {focusItems.map(([title, text, icon]) => (
                <article className={styles.focusItem} key={title}>
                  <span><img src={icon} alt="" loading="lazy" /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <img src="/malaysia/images/agenda/driving-malaysia-speakers.webp" alt="Speakers on stage at World AI Show Malaysia" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section className={`${styles.hero} pt-[200px]`} id="agenda-timeline-hero">
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Event Schedule
          </span>
          <h1>Two days, <br /><GradientText>end-to-end.</GradientText></h1>
          <p className={styles.heroPara}>A first-look snapshot. Full session list and speaker pairings release in monthly waves through 2026.</p>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>Malaysia&apos;s AI decade is written.</GradientText></h2>
          <p>Reserve your seat, your sponsor slot or your speaker application — and join the operators, regulators and capital allocators defining what comes next.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/malaysia/attend/delegate#passes">Buy a pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/sponsorship-enquiry">Sponsorship enquiry <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>9-10 Sep 2026</dd></div>
            <div><dt>Venue</dt><dd>DoubleTree by Hilton Kuala Lumpur, Malaysia</dd></div>
            <div><dt>Format</dt><dd>In-person only</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, #020713e6 0%, #020713b3 40%, #02071340 100%), url(/malaysia/images/agenda/Themes-bg.webp) center / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#18d4ff]/30 rounded-full text-[#18d4ff] font-mono text-[12px] uppercase tracking-[2px] bg-[#18d4ff]/5">
            Summit Themes
          </span>
          <h1>Four pillars shaping <br /><GradientText>Malaysia&apos;s AI Ecosystem For Tomorrow</GradientText></h1>
          <p className={styles.heroPara}>Driving enterprise transformation, digital innovation and AI adoption through world-class infrastructure, responsible governance, talent development and next-generation technologies.</p>
        </div>
      </section>
      <AgendaSection
        title={<>Four pillars shaping <GradientText>Malaysia&apos;s AI Ecosystem For Tomorrow</GradientText></>}
        subtitle={null}
        description="Driving enterprise transformation, digital innovation and AI adoption through world-class infrastructure, responsible governance, talent development and next-generation technologies."
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Get the full sponsorship brochure.</h3>
              <p>Full tracks, confirmed speakers, sponsor packages and floor plan &mdash; the briefing document we send to executive teams.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="https://share.hsforms.com/17ErrC7aGRWaGmwjK85m_kQ1rb8t"
              target="_blank"
              rel="noopener noreferrer"
              style={{ minWidth: "220px" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "8px" }}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download brochure
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>Malaysia&apos;s AI decade is written.</GradientText></h2>
          <p>Reserve your seat, your sponsor slot or your speaker application — and join the operators, regulators and capital allocators defining what comes next.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/malaysia/attend/delegate#passes">Buy a pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/sponsorship-enquiry">Sponsorship enquiry <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>9-10 Sep 2026</dd></div>
            <div><dt>Venue</dt><dd>DoubleTree by Hilton Kuala Lumpur, Malaysia</dd></div>
            <div><dt>Format</dt><dd>In-person only</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, #020713e6 0%, #020713b3 40%, #02071340 100%), url(/malaysia/images/agenda/Call-speakers-bg.webp) center / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.05] text-[clamp(44px,6.2vw,76px)]">
            Take the <br />
            Stage at <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ceff] to-[#00a5a3]">World AI Show</span> <br />
            <span className="text-[#C0F43C]">Malaysia 2026.</span>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>Malaysia&apos;s AI decade is written.</GradientText></h2>
          <p>Reserve your seat, your sponsor slot or your speaker application — and join the operators, regulators and capital allocators defining what comes next.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/malaysia/attend/delegate#passes">Buy a pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/sponsorship-enquiry">Sponsorship enquiry <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/malaysia/speaker-enquiry">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Dates</dt><dd>9-10 Sep 2026</dd></div>
            <div><dt>Venue</dt><dd>DoubleTree by Hilton Kuala Lumpur, Malaysia</dd></div>
            <div><dt>Format</dt><dd>In-person only</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}

