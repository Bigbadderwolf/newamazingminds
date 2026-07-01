"use client";
import { VIDEO_CATEGORIES, type VideoCategory } from "@/lib/youtube";

interface CategoryFilterProps {
  active: VideoCategory;
  onChange: (cat: VideoCategory) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {VIDEO_CATEGORIES.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key as VideoCategory)}
          className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
            active === c.key
              ? "bg-ama-purple text-white border-ama-purple"
              : "border-white/12 text-gray-400 hover:border-ama-purple hover:text-ama-purple bg-transparent"
          }`}
        >
          {c.emoji} {c.label}
        </button>
      ))}
    </div>
  );
}
