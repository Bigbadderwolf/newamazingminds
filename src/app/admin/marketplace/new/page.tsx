"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const CATEGORIES = ["art", "accessories", "artefacts"];

export default function NewProductPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", artist: "", handle: "", price: "", category: "", emoji: "", desc: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // In production: POST to Supabase via API route
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => router.push("/admin/marketplace"), 1500);
  };

  return (
    <div>
      <AdminPageHeader title="Add New Product" subtitle="Add a new listing to the Amazing Marketplace." />

      {success && (
        <div className="bg-forest/10 border border-forest-light/20 rounded-xl p-3 text-xs text-forest-light mb-5">
          ✓ Product added successfully! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/4 border border-white/8 rounded-2xl p-6 max-w-2xl flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { key: "name", label: "Product Name", placeholder: "e.g. Savanna Sunset" },
            { key: "artist", label: "Artist Name", placeholder: "e.g. Amara Osei" },
            { key: "handle", label: "Artist Handle", placeholder: "e.g. @Amara_Arts" },
            { key: "price", label: "Price (KES)", placeholder: "e.g. 2500", type: "number" },
            { key: "emoji", label: "Emoji Icon", placeholder: "e.g. 🖼" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-xs font-bold text-gray-400 mb-1">{f.label}</label>
              <input
                required={f.key !== "handle" && f.key !== "emoji"}
                type={f.type || "text"}
                value={(form as any)[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                placeholder={f.placeholder}
                className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
              />
            </div>
          ))}

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Category</label>
            <select
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors"
            >
              <option value="" disabled className="bg-charcoal">Select category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c} className="bg-charcoal capitalize">{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Description</label>
          <textarea
            required
            rows={3}
            value={form.desc}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            placeholder="Describe the product..."
            className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600"
          />
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
            {loading ? "Saving..." : "Save Product →"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
