"use client";
import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import FeaturedPlayer from "@/components/entertainment/FeaturedPlayer";
import CategoryFilter from "@/components/entertainment/CategoryFilter";
import VideoGrid from "@/components/entertainment/VideoGrid";
import { SAMPLE_VIDEOS, type Video, type VideoCategory } from "@/lib/youtube";

export default function EntertainmentPage() {
  const [category, setCategory] = useState<VideoCategory>("all");
  const [playing, setPlaying] = useState<Video | null>(null);

  const filtered =
    category === "all"
      ? SAMPLE_VIDEOS
      : SAMPLE_VIDEOS.filter((v) => v.category === category);

  const handlePlay = (video: Video) => {
    setPlaying(video);
    // Scroll to featured player smoothly
    document.getElementById("featured-player")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Stream African talent"
        title="Amazing"
        highlight="Entertainment"
        subtitle="Music · Spoken Word · Visual Art · Comedy · Poetry · Dance — all from Africa's most creative youth."
      />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Category filters */}
        <div className="mb-8">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {/* Featured player */}
        <div id="featured-player" className="mb-4">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">
            {playing ? `▶ Now playing: ${playing.title} — ${playing.creator}` : "✦ Featured this week"}
          </p>
          <FeaturedPlayer
            youtubeId={playing?.youtubeId ?? null}
            title={playing?.title ?? ""}
          />
        </div>

        {/* Video grid */}
        <div className="mb-10">
          <p className="text-xs text-gray-500 mb-4">
            {filtered.length} video{filtered.length !== 1 ? "s" : ""} —{" "}
            {category === "all" ? "all categories" : category}
          </p>
          <VideoGrid
            videos={filtered}
            onPlay={handlePlay}
            playingId={playing?.id ?? null}
          />
        </div>

        {/* Submit CTA */}
        <div className="bg-ama-purple/8 border border-ama-purple/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-black text-white mb-1">
              Are you a creator?
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Submit your YouTube video to be featured on Amazing Entertainment.
              Music, spoken word, art, comedy, poetry and dance all welcome.
            </p>
          </div>
          <Link
            href="/entertainment/submit"
            className="bg-ama-purple hover:opacity-90 text-white font-black px-8 py-3 rounded-full text-sm transition-all flex-shrink-0"
          >
            ✦ Submit Your Video
          </Link>
        </div>
      </div>
    </div>
  );
}
