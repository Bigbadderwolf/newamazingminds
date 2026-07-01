"use client";
import VideoCard from "./VideoCard";
import type { Video } from "@/lib/youtube";

interface VideoGridProps {
  videos: Video[];
  onPlay: (video: Video) => void;
  playingId: string | null;
}

export default function VideoGrid({ videos, onPlay, playingId }: VideoGridProps) {
  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-3 opacity-40">🎬</div>
        <p className="text-sm text-gray-500">No videos in this category yet.</p>
        <p className="text-xs text-gray-600 mt-1">Be the first to submit one!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          onPlay={onPlay}
          isPlaying={playingId === video.id}
        />
      ))}
    </div>
  );
}
