"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../Shared";

const navItems = ["Home", "Attend", "Agenda", "Speakers", "Partner", "Networking"];

// Dropdown submenus — Speakers excluded
const subMenus: Record<string, string[]> = {
  Attend: ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"],
  Agenda: ["Overview", "The 2030 Vision", "Themes", "Call for Speakers"],
  Networking: ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery", "WhatsApp Networking"],
};

function getNavHref(item: string) {
  if (item === "Home") return "/malaysia/";
  if (item === "Attend") return "/malaysia/attend";
  if (item === "Agenda") return "/malaysia/agenda";
  if (item === "Speakers") return "/malaysia/speakers";
  if (item === "Partner") return "/malaysia/partners";
  if (item === "Networking") return "/malaysia/networking";
  return `/malaysia/#${item.toLowerCase()}`;
}

type HeaderProps = {
  activeItem?: string;
  subNavItems?: string[];
  activeSubNavItem?: string;
};

/** Maps the current URL pathname to the matching top-level nav label */
function getActiveFromPath(pathname: string): string {
  const cleanPath = pathname.startsWith("/malaysia")
    ? pathname.slice("/malaysia".length)
    : pathname;

  if (cleanPath === "" || cleanPath === "/" || cleanPath === "/home") return "Home";
  if (cleanPath.startsWith("/attend")) return "Attend";
  if (cleanPath.startsWith("/agenda")) return "Agenda";
  if (
    cleanPath.startsWith("/speakers") ||
    cleanPath.startsWith("/speaker-enquiry")
  ) return "Speakers";
  if (
    cleanPath.startsWith("/partners") ||
    cleanPath.startsWith("/sponsorship-enquiry") ||
    cleanPath.startsWith("/association-enquiry")
  ) return "Partner";
  if (cleanPath.startsWith("/networking")) return "Networking";
  return "Home";
}

/** Maps the current URL pathname to the matching sub-nav item label */
function getSubNavItemFromPath(pathname: string): string {
  const cleanPath = pathname.startsWith("/malaysia")
    ? pathname.slice("/malaysia".length)
    : pathname;

  // Attend sub-pages
  if (cleanPath.startsWith("/attend/delegate"))            return "Delegate";
  if (cleanPath.startsWith("/attend/sponsor"))             return "Sponsor";
  if (cleanPath.startsWith("/attend/media-partner"))       return "Media Partner";
  if (cleanPath.startsWith("/attend/association-partner")) return "Association Partner";
  if (cleanPath === "/attend" || cleanPath === "/attend/") return "Overview";
  // Agenda sub-pages
  if (cleanPath.startsWith("/agenda/the-2030-vision"))     return "The 2030 Vision";
  if (cleanPath.startsWith("/agenda/themes"))              return "Themes";
  if (cleanPath.startsWith("/agenda/call-for-speakers"))   return "Call for Speakers";
  if (cleanPath.startsWith("/agenda"))                     return "Overview";
  // Networking sub-pages
  if (cleanPath.startsWith("/networking/attendee-app"))         return "Attendee APP";
  if (cleanPath.startsWith("/networking/ai-matchmaking"))       return "AI Matchmaking";
  if (cleanPath.startsWith("/networking/photo-gallery"))        return "Photo Gallery";
  if (cleanPath.startsWith("/networking/whatsapp-networking"))  return "WhatsApp Networking";
  if (cleanPath.startsWith("/networking"))                      return "Overview";
  return "";
}

export function Header({ activeItem, subNavItems, activeSubNavItem }: HeaderProps) {
  const pathname = usePathname();
  // Derive active item + active sub-item from live URL
  const currentActiveItem = getActiveFromPath(pathname);
  const currentSubNavItem = getSubNavItemFromPath(pathname);

  const [availableSections, setAvailableSections] = useState<Record<string, boolean>>({
    sponsors: true,
    exhibitors: false,
    media: false,
    associations: false,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState(() => typeof window !== "undefined" ? window.location.hash : "");

  // Sync expandedMobileItem with current active URL item so the active page accordion is open by default
  useEffect(() => {
    if (subMenus[currentActiveItem]) {
      setExpandedMobileItem(currentActiveItem);
    } else {
      setExpandedMobileItem(null);
    }
  }, [currentActiveItem]);

  useEffect(() => {
    fetch("/malaysia/api/konfhub-sponsors")
      .then((r) => r.json())
      .then((json) => {
        const hasExhibitors = Boolean(
          (json.sponsors && (json.sponsors["Exhibitors"]?.length > 0 || json.sponsors["Exhibitor"]?.length > 0)) ||
          (json.partners && (json.partners["Exhibitors"]?.length > 0 || json.partners["Exhibitor"]?.length > 0))
        );
        const hasMedia = Boolean(
          (json.partners && (json.partners["Media Partners"]?.length > 0 || json.partners["Media Partner"]?.length > 0)) ||
          (json.sponsors && (json.sponsors["Media Partners"]?.length > 0 || json.sponsors["Media Partner"]?.length > 0))
        );
        const hasAssociations = Boolean(
          (json.partners && (json.partners["Association Partners"]?.length > 0 || json.partners["Association Partner"]?.length > 0)) ||
          (json.sponsors && (json.sponsors["Association Partners"]?.length > 0 || json.sponsors["Association Partner"]?.length > 0))
        );

        setAvailableSections({
          sponsors: true,
          exhibitors: hasExhibitors,
          media: hasMedia,
          associations: hasAssociations,
        });
      })
      .catch(() => {});
  }, []);

  function getSubNavHref(parentItem: string, subItem: string) {
    if (parentItem === "Networking" || parentItem === "Attend" || parentItem === "Agenda") {
      const parentPath = parentItem === "Networking" ? "/malaysia/networking" : `/malaysia/${parentItem.toLowerCase()}`;
      if (subItem === "Overview") return parentPath;
      return `${parentPath}/${subItem.toLowerCase().replaceAll(" ", "-")}`;
    }
    const parentPath = parentItem === "Home" ? "/malaysia/" : `/malaysia/${parentItem.toLowerCase()}`;
    const hash = subItem.toLowerCase().replaceAll(" ", "-");

    if (parentItem === "Partner") {
      if (hash === "overview") return "/malaysia/partners";
      if (hash === "sponsors") return "/malaysia/partners#sponsors";

      if (hash === "exhibitors" && !availableSections.exhibitors) {
        return "/malaysia/partners#sponsors";
      }
      if (hash === "media" && !availableSections.media) {
        return "/malaysia/partners#sponsors";
      }
      if (hash === "associations" && !availableSections.associations) {
        return "/malaysia/partners#sponsors";
      }
    }

    return `${parentPath}#${hash}`;
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setCurrentHash(window.location.hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  const handleMobileNavClick = (item: string) => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Persistent subnav bar (shown on page load for pages that have subNavItems)
  const filteredSubNavItems = subNavItems 
    ? subNavItems.filter(item => item !== "Agenda") 
    : [];
  const hasPeristentSubnav = filteredSubNavItems.length > 0;

  return (
    <>
      {/* Backdrop blur overlay */}
      <div
        className={`fixed inset-0 bg-[#020b1c]/60 backdrop-blur-sm z-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <header className="group fixed top-5 left-0 right-0 z-30 w-full px-6 max-sm:top-2.5 max-sm:px-3">
        <nav
          className="relative grid grid-cols-[205px_1fr_auto] items-center gap-[22px] max-w-[1172px] w-full h-[61px] mx-auto px-[22px] pl-[25px] border border-[#7eacd9]/14 rounded-[34px] bg-[#04080f]/88 shadow-[0_22px_62px_rgba(0,0,0,0.45),inset_0_0_26px_rgba(33,173,255,0.07)] backdrop-blur-[18px] max-[980px]:grid-cols-[auto_1fr_auto] max-[980px]:h-auto max-[980px]:min-h-[61px] max-sm:grid-cols-[1fr_auto_auto] max-sm:py-2 max-sm:px-2.5 max-sm:pl-[18px] max-sm:rounded-[26px]"
          aria-label="Primary navigation"
        >
          <Logo />

          {/* Desktop Navigation Links */}
          <div className="flex justify-center gap-[24px] text-[15px] font-bold tracking-[1.2px] uppercase text-white/58 max-[980px]:hidden h-full items-center">
            {navItems.map((item) => {
              const isActive = item === currentActiveItem;
              return (
                <div
                  key={item}
                  className="relative py-4 flex items-center cursor-pointer h-full"
                >
                  <a
                    href={getNavHref(item)}
                    className={`transition-colors duration-200 hover:text-white ${
                      isActive ? "text-[#c0f43c] font-extrabold" : ""
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <span className="absolute bottom-[2px] left-0 right-0 h-[2px] bg-[#c0f43c] rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[26px] whitespace-nowrap text-[15px] font-bold tracking-[1.2px] uppercase max-[980px]:justify-end max-[980px]:mr-2 ml-4">
            <a
              href="/malaysia/sponsorship-enquiry"
              className="transition-colors duration-200 hover:text-cyan max-sm:hidden uppercase tracking-[1.2px] font-bold text-[15px]"
            >
              Sponsor Enquiry
            </a>
            <a
              className="px-[23px] py-[15px] rounded-full !text-black [color:#06111f!important] bg-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.24)] hover:shadow-[0_0_32px_rgba(192,244,60,0.4)] transition-all duration-200 hover:-translate-y-0.5 max-sm:px-3.5 max-sm:py-3 uppercase font-extrabold text-[14px] tracking-[1.2px]"
              href="/malaysia/attend/delegate#passes"
            >
              Get Your Pass
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-[980px]:flex flex-col justify-center items-center w-10 h-10 rounded-full border border-[#7eacd9]/20 hover:border-cyan/50 bg-[#04080f]/80 text-white transition-all duration-200 outline-none cursor-pointer shadow-[inset_0_0_12px_rgba(33,173,255,0.05)]"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-4 h-3.5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-x-[2px] translate-y-[-1px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 translate-x-[2px] translate-y-[1px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* ── Dropdown Sub-Nav (Attend, Agenda, etc.) ── */}
        <nav
          className={`absolute left-1/2 top-[61px] -translate-x-1/2 flex justify-around w-[min(1008px,calc(100%-108px))] h-[41px] px-[34px] items-center rounded-b-[24px] text-[#101727] bg-white/92 shadow-[0_16px_38px_rgba(0,0,0,0.16)] text-[12px] font-semibold tracking-[1.6px] uppercase transition-all duration-300 ease-out max-[980px]:hidden ${
            currentActiveItem && subMenus[currentActiveItem]
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
          }`}
        >
          {currentActiveItem && subMenus[currentActiveItem]?.map((item) => {
            // Highlight active sub-item based on live URL
            const isSubActive = item.toLowerCase() === currentSubNavItem.toLowerCase();
            return (
              <a
                href={getSubNavHref(currentActiveItem, item)}
                key={item}
                className={`transition-all duration-200 pb-1 border-b-2 ${
                  isSubActive
                    ? "text-[#2dd3f4] font-bold border-[#2dd3f4]"
                    : "border-transparent text-[#101727]/70 hover:border-[#2dd3f4]/50 hover:text-[#2dd3f4]"
                }`}
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Mobile Slide-Down Menu Overlay */}
        <div
          className={`absolute top-[75px] left-6 right-6 overflow-hidden border border-[#7eacd9]/14 rounded-[24px] bg-[#04080f]/96 shadow-[0_22px_62px_rgba(0,0,0,0.7),inset_0_0_26px_rgba(33,173,255,0.07)] backdrop-blur-[24px] transition-all duration-300 ease-out max-sm:left-3 max-sm:right-3 ${
            isOpen
              ? "opacity-100 max-h-[500px] translate-y-0 visible"
              : "opacity-0 max-h-0 -translate-y-4 invisible pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-6 gap-6 overflow-y-auto max-h-[400px]">
            {/* Links Stack */}
            <div className="flex flex-col gap-4 text-base font-medium">
              {navItems.map((item) => {
                const hasSubMenu = Boolean(subMenus[item]);
                const isExpanded = expandedMobileItem === item;

                return (
                  <div key={item} className="flex flex-col border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between py-1">
                      <a
                        href={getNavHref(item)}
                        onClick={() => handleMobileNavClick(item)}
                        className={`hover:text-white transition-all duration-200 uppercase tracking-[1px] font-bold ${
                          item === currentActiveItem ? "text-[#c0f43c]" : "text-white/70"
                        }`}
                      >
                        {item}
                      </a>
                      {hasSubMenu && (
                        <button
                          onClick={() => setExpandedMobileItem(isExpanded ? null : item)}
                          className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all cursor-pointer outline-none"
                          aria-label={`Toggle ${item} sub-menu`}
                        >
                          <span className="transform transition-transform duration-300 font-bold text-[16px]">
                            {isExpanded ? "−" : "+"}
                          </span>
                        </button>
                      )}
                    </div>

                    {/* Accordion Sub-menu */}
                    {hasSubMenu && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 flex flex-col gap-2.5 ${
                          isExpanded ? "max-h-[320px] opacity-100 mt-2 pb-2" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        {subMenus[item].map((subItem) => {
                          const isSubActive =
                            item === currentActiveItem &&
                            subItem.toLowerCase() === currentSubNavItem.toLowerCase();
                          return (
                            <a
                              key={subItem}
                              href={getSubNavHref(item, subItem)}
                              onClick={() => setIsOpen(false)}
                              className={`text-[14px] py-1 border-l border-white/10 pl-3 transition-colors ${
                                isSubActive
                                  ? "text-[#2dd3f4] font-bold border-[#2dd3f4]"
                                  : "text-white/50 hover:text-[#2dd3f4]"
                              }`}
                            >
                              {subItem}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Sub-nav items for current page */}
            {hasPeristentSubnav && (
              <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
                <p className="text-[11px] text-white/40 font-mono uppercase tracking-[2px] mb-1">
                  Jump to
                </p>
                {filteredSubNavItems.map((item) => {
                  const isSubActive =
                    item.toLowerCase() === currentSubNavItem.toLowerCase() ||
                    (activeSubNavItem && item.toLowerCase() === activeSubNavItem.toLowerCase()) ||
                    (currentHash && currentHash.slice(1).toLowerCase() === item.toLowerCase().replaceAll(" ", "-"));
                  return (
                    <a
                      key={item}
                      href={getSubNavHref(currentActiveItem ?? "", item)}
                      onClick={() => setIsOpen(false)}
                      className={`text-[13px] font-semibold transition-colors hover:text-[#2dd3f4] ${
                        isSubActive ? "text-[#2dd3f4]" : "text-white/60"
                      }`}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            )}

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 mt-2 sm:hidden">
              <a
                href="#partners"
                onClick={() => setIsOpen(false)}
                className="text-[14px] font-semibold text-white/80 hover:text-cyan transition-colors py-3 text-center border border-[#7eacd9]/20 rounded-full bg-white/5 shadow-[inset_0_0_12px_rgba(33,173,255,0.03)]"
              >
                Sponsor Enquiry
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
