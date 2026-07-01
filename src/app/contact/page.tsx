"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Will connect to Supabase in Phase 8
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Get in touch"
        title="Contact"
        highlight="Us"
        subtitle="Have a question, idea or partnership opportunity? We'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Info */}
        <div className="flex flex-col gap-5">
          {[
            { icon: "📧", label: "Email", value: "hello@newamazingminds.org" },
            { icon: "📍", label: "Location", value: "Nairobi, Kenya" },
            { icon: "🤖", label: "Amazing AI", value: "Available 24/7 for support" },
          ].map((c) => (
            <div key={c.label} className="bg-white/4 border border-white/8 rounded-2xl p-5">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-xs text-gray-500 mb-0.5">{c.label}</div>
              <div className="text-sm font-bold text-white">{c.value}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          {submitted ? (
            <div className="bg-forest/10 border border-forest-light/20 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-black text-forest-light mb-2">Message sent!</h3>
              <p className="text-sm text-gray-400">We'll get back to you within 48 hours. Thank you for reaching out.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1">Your name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Amara Osei"
                    className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-1">Email address</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Subject</label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What's this about?"
                  className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 mb-1">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what's on your mind..."
                  className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-primary disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
