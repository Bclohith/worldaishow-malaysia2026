import { NextResponse } from "next/server";

// ISR: regenerate this route every 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  try {
    const response = await fetch(
      "https://api.konfhub.com/event/public/world-ai-show-malaysia26/speakers",
      {
        headers: {
          accept: "application/json",
          "user-agent": "Mozilla/5.0",
        },
        // Upstream fetch cache aligned with the route revalidation window
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "KonfHub speakers API unavailable" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Set Cache-Control so CDN / browser serves cached response
    // but revalidates in the background every hour
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=1800",
      },
    });
  } catch (err) {
    console.error("konfhub-speakers API error:", err);
    return NextResponse.json(
      { error: "Unable to load dynamic speaker data from KonfHub" },
      { status: 500 }
    );
  }
}
