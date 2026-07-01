"use client";
import type { Video } from "@/lib/youtube";
import { CATEGORY_STYLES, formatViews } from "@/lib/youtube";

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
  isPlaying: boolean;
}

const CATEGORY_EMOJIS: Record<string, string> = {
  music: "🎵", spoken: "🎙", visual: "🎨",
  comedy: "😄", poetry: "📝", dance: "💃",
};

export default function VideoCard({ video, onPlay, isPlaying }: VideoCardProps) {
  const style = CATEGORY_STYLES[video.category] ?? CATEGORY_STYLES.music;

  return (
    <div
      onClick={() => onPlay(video)}
      className={`bg-white/4 rounded-2xl overflow-hidden border cursor-pointer transition-all hover:-translate-y-1 ${
        isPlaying
          ? "border-ama-purple shadow-lg shadow-ama-purple/20"
          : "border-white/7 hover:border-ama-purple/40"
      }`}
    >
      {/* Thumbnail */}
      <div className={`h-28 bg-gradient-to-br ${style.thumb} flex items-center justify-center relative`}>
        <span className="text-3xl opacity-70">{CATEGORY_EMOJIS[video.category]}</span>

        {/* Play overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all group`}>
          <div className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#1a1a2e">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Now playing badge */}
        {isPlaying && (
          <div className="absolute top-2 left-2 bg-ama-purple text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
            ▶ Playing
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-xs font-bold text-white mb-0.5 truncate">{video.title}</h3>
        <p className="text-[11px] text-gray-500 mb-2 truncate">{video.creator}</p>
        <div className="flex items-center justify-between">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
            {video.category}
          </span>
          <span className="text-[10px] text-gray-600">
            {formatViews(video.views)} views
          </span>
        </div>
      </div>
    </div>
  );
}
