import { NextResponse } from "next/server";

export const dynamic = "force-static";

const EVENT_URL = "world-ai-show-malaysia26";
const API_BASE = "https://api.konfhub.com/event/public";

export async function getKonfHubSponsors() {
  // Fetch Sponsors (entity=1) and Partners (entity=2) from public KonfHub entity API
  const [sponsorsRes, partnersRes] = await Promise.allSettled([
    fetch(`${API_BASE}/${EVENT_URL}/entity/1`, {
      next: { revalidate: 60 },
    }),
    fetch(`${API_BASE}/${EVENT_URL}/entity/2`, {
      next: { revalidate: 60 },
    }),
  ]);

  let sponsorsData: any = { categorized: [] };
  let partnersData: any = { categorized: [] };

  if (sponsorsRes.status === "fulfilled" && sponsorsRes.value.ok) {
    sponsorsData = await sponsorsRes.value.json();
  }

  if (partnersRes.status === "fulfilled" && partnersRes.value.ok) {
    partnersData = await partnersRes.value.json();
  }

  const sponsorsByCategory: Record<string, any[]> = {};
  const partnersByCategory: Record<string, any[]> = {};

  // Helper to strip event prefix from category name if present (e.g. "World AI Show || Lead Sponsor")
  const cleanCategoryName = (catName: string) => {
    const trimmed = catName.trim();
    const prefix = "World AI Show";
    if (trimmed.startsWith(prefix)) {
      return trimmed.substring(prefix.length).replace(/^\s*\|\|\s*/, "").trim();
    }
    return trimmed;
  };

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

  return {
    sponsors: sponsorsByCategory,
    partners: partnersByCategory,
    rawSponsors: sponsorsData?.categorized ?? [],
    rawPartners: partnersData?.categorized ?? [],
  };
}

export async function GET() {
  try {
    const data = await getKonfHubSponsors();
    return NextResponse.json({
      eventId: EVENT_URL,
      ...data,
      fetchedAt: new Date().toISOString(),
      source: "konfhub-public-entity",
    });
  } catch (err) {
    console.error("konfhub-sponsors public entity error:", err);
    return NextResponse.json(
      { error: "Unable to load dynamic sponsor data from KonfHub" },
      { status: 500 }
    );
  }
}
