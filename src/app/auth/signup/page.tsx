"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: { data: { full_name: form.name } },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-sm text-white mx-auto mb-3">
            AMA
          </div>
          <h1 className="text-xl font-black">Join Amazing Minds</h1>
          <p className="text-xs text-gray-500 mt-1">Create your free account today</p>
        </div>

        {success ? (
          <div className="bg-forest/10 border border-forest-light/20 rounded-2xl p-8 text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="text-base font-black text-forest-light mb-2">Check your email!</h3>
            <p className="text-xs text-gray-400">We sent a confirmation link to <strong className="text-white">{form.email}</strong>. Click it to activate your account.</p>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
            {error && (
              <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-3 text-xs text-terracotta-light">{error}</div>
            )}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Full name</label>
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
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Password</label>
              <input
                required
                type="password"
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Min 6 characters"
                className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
              />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
              {loading ? "Creating account..." : "Create Account →"}
            </button>
            <p className="text-center text-xs text-gray-600">
              By signing up you agree to our{" "}
              <Link href="/terms" className="text-terracotta-light hover:underline">Terms</Link>
            </p>
          </form>
        )}

        <p className="text-center text-xs text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-terracotta-light hover:underline font-bold">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
