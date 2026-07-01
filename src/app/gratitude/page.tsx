"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";

export default function GratitudePage() {
  const [joys, setJoys] = useState(["", "", ""]);
  const [note, setNote] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (joys.every((j) => j.trim())) setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader
        eyebrow="Daily practice"
        title="Gratitude"
        highlight="Sparks"
        subtitle="List 3 small joys, then generate a colourful poster to celebrate and share your gratitude."
      />

      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl border border-terracotta/15 p-6 shadow-sm">
          <h2 className="text-base font-black text-charcoal mb-1">List your 3 small joys</h2>
          <p className="text-xs text-gray-500 mb-5">Short phrases work best. Fill all three to generate your poster.</p>

          {joys.map((joy, i) => (
            <div key={i} className="mb-4">
              <label className="block text-xs font-bold text-terracotta mb-1">Joy {i + 1}</label>
              <input
                type="text"
                value={joy}
                onChange={(e) => {
                  const updated = [...joys];
                  updated[i] = e.target.value;
                  setJoys(updated);
                }}
                placeholder={["e.g. A warm sunrise", "e.g. A friend's message", "e.g. A delicious cup of chai"][i]}
                className="w-full bg-gray-50 border border-gray-200 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-charcoal outline-none transition-colors"
              />
            </div>
          ))}

          <label className="block text-xs font-semibold text-gray-500 mb-1">Optional note</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add a short reflection or affirmation (optional)"
            rows={3}
            className="w-full bg-gray-50 border border-gray-200 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-charcoal outline-none resize-none transition-colors mb-5"
          />

          <button
            onClick={handleGenerate}
            disabled={!joys.every((j) => j.trim())}
            className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ✦ Generate My Gratitude Poster
          </button>
        </div>

        {/* Preview */}
        <div className="rounded-2xl overflow-hidden">
          {!generated ? (
            <div className="h-full min-h-[300px] bg-midnight border border-white/8 rounded-2xl flex flex-col items-center justify-center gap-3 text-center p-8">
              <span className="text-4xl opacity-30">✦</span>
              <p className="text-sm font-bold text-gold-light">Your poster will appear here</p>
              <p className="text-xs text-gray-600">Fill in your 3 joys and click generate.</p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-midnight to-[#2D1B0E] border border-gold/20 rounded-2xl p-8 flex flex-col gap-4">
              <p className="text-xs font-bold text-gold uppercase tracking-widest text-center">
                ✦ Amazing Minds Africa — Gratitude Sparks
              </p>
              {joys.map((joy, i) => (
                <div
                  key={i}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold border-l-4 ${
                    i === 0 ? "bg-terracotta/15 text-terracotta-light border-terracotta" :
                    i === 1 ? "bg-gold/12 text-gold-light border-gold" :
                    "bg-forest/15 text-forest-light border-forest-light"
                  }`}
                >
                  ✦ {joy}
                </div>
              ))}
              {note && (
                <p className="text-xs text-gray-500 italic text-center mt-1">"{note}"</p>
              )}
              <p className="text-xs text-gray-600 text-center mt-2">newamazingminds.org</p>
              <div className="flex gap-3 justify-center mt-1">
                <button className="text-xs border border-white/15 text-gray-400 px-4 py-2 rounded-full hover:bg-white/5 transition-all">⬇ Download</button>
                <button className="text-xs border border-white/15 text-gray-400 px-4 py-2 rounded-full hover:bg-white/5 transition-all">↗ Share</button>
                <button onClick={() => setGenerated(false)} className="text-xs border border-white/15 text-gray-400 px-4 py-2 rounded-full hover:bg-white/5 transition-all">↺ Reset</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
