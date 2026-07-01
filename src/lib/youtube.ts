export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  creator: string;
  category: VideoCategory;
  views: number;
  featured?: boolean;
}

export type VideoCategory =
  | "all"
  | "music"
  | "spoken"
  | "visual"
  | "comedy"
  | "poetry"
  | "dance";

export const VIDEO_CATEGORIES = [
  { key: "all", label: "All", emoji: "✦" },
  { key: "music", label: "Music", emoji: "🎵" },
  { key: "spoken", label: "Spoken Word", emoji: "🎙" },
  { key: "visual", label: "Visual Art", emoji: "🎨" },
  { key: "comedy", label: "Comedy", emoji: "😄" },
  { key: "poetry", label: "Poetry", emoji: "📝" },
  { key: "dance", label: "Dance", emoji: "💃" },
];

// Sample videos — in production these come from Supabase
export const SAMPLE_VIDEOS: Video[] = [
  {
    id: "v1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Nairobi Nights",
    creator: "Sauti Soul KE",
    category: "music",
    views: 12400,
    featured: true,
  },
  {
    id: "v2",
    youtubeId: "dQw4w9WgXcQ",
    title: "Roots & Wings",
    creator: "Spoken Amara",
    category: "spoken",
    views: 8100,
  },
  {
    id: "v3",
    youtubeId: "dQw4w9WgXcQ",
    title: "Colours of Ubuntu",
    creator: "ZaraArtHouse",
    category: "visual",
    views: 5700,
  },
  {
    id: "v4",
    youtubeId: "dQw4w9WgXcQ",
    title: "Hustle Chronicles",
    creator: "Comedy254",
    category: "comedy",
    views: 21000,
  },
  {
    id: "v5",
    youtubeId: "dQw4w9WgXcQ",
    title: "Dear Africa",
    creator: "Verse Poet KE",
    category: "poetry",
    views: 3900,
  },
  {
    id: "v6",
    youtubeId: "dQw4w9WgXcQ",
    title: "Vibe & Flow",
    creator: "DanceMovesTZ",
    category: "dance",
    views: 9200,
  },
  {
    id: "v7",
    youtubeId: "dQw4w9WgXcQ",
    title: "Mama Africa",
    creator: "AfroBeats254",
    category: "music",
    views: 15800,
  },
  {
    id: "v8",
    youtubeId: "dQw4w9WgXcQ",
    title: "The Healing",
    creator: "PoetryByNjeri",
    category: "poetry",
    views: 6300,
  },
];

export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}k`;
  return String(views);
}

// Category badge styles
export const CATEGORY_STYLES: Record<string, { bg: string; text: string; thumb: string }> = {
  music:  { bg: "bg-ama-purple/20", text: "text-ama-purple", thumb: "from-purple-900/60 to-violet-900/40" },
  spoken: { bg: "bg-ama-sky/20", text: "text-ama-sky", thumb: "from-sky-900/60 to-blue-900/40" },
  visual: { bg: "bg-terracotta/20", text: "text-terracotta-light", thumb: "from-orange-900/60 to-red-900/40" },
  comedy: { bg: "bg-forest/20", text: "text-forest-light", thumb: "from-green-900/60 to-emerald-900/40" },
  poetry: { bg: "bg-ama-pink/20", text: "text-ama-pink", thumb: "from-pink-900/60 to-rose-900/40" },
  dance:  { bg: "bg-gold/20", text: "text-gold-light", thumb: "from-yellow-900/60 to-amber-900/40" },
};
