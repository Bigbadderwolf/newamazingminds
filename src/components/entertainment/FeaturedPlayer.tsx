"use client";

interface FeaturedPlayerProps {
  youtubeId: string | null;
  title: string;
}

export default function FeaturedPlayer({ youtubeId, title }: FeaturedPlayerProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border-2 border-ama-purple/30 bg-black aspect-video flex items-center justify-center relative">
      {youtubeId ? (
        <iframe
          key={youtubeId}
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-none"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <p className="text-sm text-gray-400">
            Select a video below to start streaming
          </p>
        </div>
      )}
    </div>
  );
}
