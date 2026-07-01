"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const CATEGORIES = ["Burnout", "Wellness", "Culture", "Art", "Anxiety", "Relationships", "Platform", "Research"];

export default function NewBlogPostPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", category: "", excerpt: "", content: "", status: "draft" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In production: POST to Supabase
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => router.push("/admin/blog"), 1500);
  };

  return (
    <div>
      <AdminPageHeader title="New Blog Post" subtitle="Write and publish a new blog post." />

      {success && (
        <div className="bg-forest/10 border border-forest-light/20 rounded-xl p-3 text-xs text-forest-light mb-5">
          ✓ Post saved! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/4 border border-white/8 rounded-2xl p-6 max-w-3xl flex flex-col gap-5">
        {/* Title */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Post Title <span className="text-terracotta">*</span></label>
          <input
            required
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. The Hustle Trap"
            className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Category <span className="text-terracotta">*</span></label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="" disabled className="bg-charcoal">Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c} className="bg-charcoal">{c}</option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Status</label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="draft" className="bg-charcoal">Draft</option>
              <option value="published" className="bg-charcoal">Published</option>
            </select>
          </div>
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Excerpt <span className="text-terracotta">*</span></label>
          <textarea
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            placeholder="A short description shown on the blog listing page..."
            className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Content <span className="text-terracotta">*</span></label>
          <textarea
            required
            rows={12}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="Write your blog post here..."
            className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600 font-mono"
          />
          <p className="text-[10px] text-gray-600 mt-1">Markdown supported</p>
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
            {loading ? "Saving..." : form.status === "published" ? "Publish Post →" : "Save Draft →"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
