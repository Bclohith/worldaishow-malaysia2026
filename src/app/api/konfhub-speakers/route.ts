import { NextResponse } from "next/server";

// ISR: regenerate this route every 60 seconds (1 minute)
export const revalidate = 60;

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
        next: { revalidate: 60 },
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
    // but revalidates in the background every minute
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
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
