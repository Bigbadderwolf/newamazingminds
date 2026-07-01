"use client";
import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { VIDEO_CATEGORIES } from "@/lib/youtube";

export default function SubmitVideoPage() {
  const [form, setForm] = useState({
    youtubeUrl: "",
    title: "",
    creator: "",
    category: "",
    description: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/entertainment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Submission failed");

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-5">🎬</div>
          <h2 className="text-2xl font-black text-white mb-3">
            Video Submitted!
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Thank you for submitting your video. Our team will review it within
            2-3 days. If approved, it will appear on Amazing Entertainment.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/entertainment" className="btn-primary">
              Back to Entertainment
            </Link>
            <button
              onClick={() => { setSubmitted(false); setForm({ youtubeUrl: "", title: "", creator: "", category: "", description: "", email: "" }); }}
              className="btn-secondary"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Share your talent"
        title="Submit Your"
        highlight="Video"
        subtitle="Share your YouTube video with the Amazing Minds Africa community. All genres of African creative content welcome."
      />

      <div className="max-w-2xl mx-auto px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-5"
        >
          {error && (
            <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-3 text-xs text-terracotta-light">
              {error}
            </div>
          )}

          {/* YouTube URL */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              YouTube Video URL <span className="text-terracotta">*</span>
            </label>
            <input
              required
              type="url"
              value={form.youtubeUrl}
              onChange={(e) => setForm({ ...form, youtubeUrl: e.target.value })}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
            <p className="text-[10px] text-gray-600 mt-1">
              Must be a public YouTube video
            </p>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Video Title <span className="text-terracotta">*</span>
            </label>
            <input
              required
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Nairobi Nights"
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
          </div>

          {/* Creator */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Creator / Artist Name <span className="text-terracotta">*</span>
            </label>
            <input
              required
              type="text"
              value={form.creator}
              onChange={(e) => setForm({ ...form, creator: e.target.value })}
              placeholder="e.g. Sauti Soul KE"
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Category <span className="text-terracotta">*</span>
            </label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="" disabled className="bg-charcoal">
                Select a category
              </option>
              {VIDEO_CATEGORIES.filter((c) => c.key !== "all").map((c) => (
                <option key={c.key} value={c.key} className="bg-charcoal">
                  {c.emoji} {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Short Description
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Tell us a bit about this video..."
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Your Email <span className="text-terracotta">*</span>
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              className="w-full bg-white/5 border border-white/10 focus:border-ama-purple rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
            <p className="text-[10px] text-gray-600 mt-1">
              We'll notify you when your video is approved
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-ama-purple hover:opacity-90 text-white font-black py-3 rounded-full text-sm transition-all disabled:opacity-50"
          >
            {loading ? "Submitting..." : "✦ Submit Video for Review →"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">
          <Link href="/entertainment" className="hover:text-gray-400 transition-colors">
            ← Back to Entertainment
          </Link>
        </p>
      </div>
    </div>
  );
}
