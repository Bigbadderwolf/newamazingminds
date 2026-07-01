"use client";
import Link from "next/link";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const heroImages = [
  { label: "Upload youth community photo", tag: "Youths", tagColor: "purple" as const, emoji: "👥" },
  { label: "Upload art showcase photo", tag: "Art", tagColor: "terracotta" as const, emoji: "🎨" },
  { label: "Upload talent event photo", tag: "Talent", tagColor: "gold" as const, emoji: "🎭" },
  { label: "Upload support circle photo", tag: "Mental Health", tagColor: "forest" as const, emoji: "💚" },
];

export default function HeroSection() {
  return (
    <section className="bg-midnight grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
      {/* Left — text */}
      <div className="flex flex-col justify-center px-8 md:px-12 py-14 gap-5">
        {/* Tag */}
        <div className="flex items-center gap-2 bg-gold/12 border border-gold/40 text-gold-light text-[11px] font-bold px-3 py-1.5 rounded-full w-fit uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
          Amazing Minds Africa
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-black leading-tight">
          <span className="text-gold-light">Amazing Youths.</span>
          <br />
          <span className="text-terracotta-light">Art. Talent.</span>
          <br />
          <span className="text-forest-light">Mental Wellness.</span>
        </h1>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed max-w-md">
          A creative community platform celebrating African youth through art,
          talent, and mental health support. Powered by{" "}
          <strong className="text-white">Amazing AI</strong> — your
          compassionate guide for wellness and navigation.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Link href="/art" className="btn-primary">
            Explore Amazing Minds Art ↗
          </Link>
          <Link href="/circles" className="btn-secondary">
            Find Support Circles
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-2">
          {[
            { num: "500+", label: "Community Members" },
            { num: "24/7", label: "AI Support" },
            { num: "12+", label: "Local Clubs" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-xl font-black text-gold-light">{s.num}</div>
              <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — 2x2 image grid */}
      <div className="grid grid-cols-2 grid-rows-2 bg-charcoal gap-0.5">
        {heroImages.map((img) => (
          <ImagePlaceholder key={img.tag} {...img} />
        ))}
      </div>
    </section>
  );
}
