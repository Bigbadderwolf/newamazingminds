"use client";
import { CATEGORIES } from "@/lib/products";

interface CategoryTabsProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {CATEGORIES.map((c) => (
        <button
          key={c.key}
          onClick={() => onChange(c.key)}
          className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
            active === c.key
              ? "bg-terracotta text-white border-terracotta"
              : "bg-white border-gray-200 text-gray-500 hover:border-terracotta hover:text-terracotta"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
