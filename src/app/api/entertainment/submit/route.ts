import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

// Extract YouTube video ID from URL
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { youtubeUrl, title, creator, category, description, email } =
      await req.json();

    // Validate required fields
    if (!youtubeUrl || !title || !creator || !category || !email) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Extract YouTube ID
    const youtubeId = extractYouTubeId(youtubeUrl);
    if (!youtubeId) {
      return NextResponse.json(
        { error: "Invalid YouTube URL. Please use a valid youtube.com or youtu.be link." },
        { status: 400 }
      );
    }

    // Save to Supabase
    const supabase = createClient();
    const { error } = await supabase.from("video_submissions").insert({
      youtube_id: youtubeId,
      youtube_url: youtubeUrl,
      title,
      creator,
      category,
      description,
      email,
      status: "pending",
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Video submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit video. Please try again." },
      { status: 500 }
    );
  }
}
