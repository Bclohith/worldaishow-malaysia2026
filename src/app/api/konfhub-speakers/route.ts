import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  try {
    const response = await fetch("https://api.konfhub.com/event/public/world-ai-show-malaysia26/speakers", {
      headers: {
        accept: "application/json",
        "user-agent": "Mozilla/5.0"
      },
      next: {
        revalidate: 300 // 5 minutes cache
      }
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "KonfHub speakers API unavailable" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("konfhub-speakers API error:", err);
    return NextResponse.json(
      { error: "Unable to load dynamic speaker data from KonfHub" },
      { status: 500 }
    );
  }
}
