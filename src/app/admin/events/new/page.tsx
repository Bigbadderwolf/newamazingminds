"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

export default function NewEventPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", date: "", time: "", type: "Online", topic: "", description: "", registrationUrl: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => router.push("/admin/events"), 1500);
  };

  return (
    <div>
      <AdminPageHeader title="New Event" subtitle="Create a new event or session." />

      {success && (
        <div className="bg-forest/10 border border-forest-light/20 rounded-xl p-3 text-xs text-forest-light mb-5">
          ✓ Event created! Redirecting...
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/4 border border-white/8 rounded-2xl p-6 max-w-2xl flex flex-col gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Event Title <span className="text-terracotta">*</span></label>
          <input required type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. The Hustle Trap — Burnout Webinar" className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Date <span className="text-terracotta">*</span></label>
            <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Time (EAT)</label>
            <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Type <span className="text-terracotta">*</span></label>
            <select required value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors">
              {["Online", "In-Person", "Hybrid"].map((t) => <option key={t} value={t} className="bg-charcoal">{t}</option>)}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Topic</label>
          <input type="text" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} placeholder="e.g. Burnout, Art, Mindfulness" className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Description <span className="text-terracotta">*</span></label>
          <textarea required rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Describe the event..." className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600" />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">Registration URL (optional)</label>
          <input type="url" value={form.registrationUrl} onChange={(e) => setForm({ ...form, registrationUrl: e.target.value })} placeholder="https://..." className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600" />
        </div>

        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="btn-primary disabled:opacity-50">
            {loading ? "Saving..." : "Create Event →"}
          </button>
          <button type="button" onClick={() => router.back()} className="btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}
