"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-sm text-white mx-auto mb-3">
            AMA
          </div>
          <h1 className="text-xl font-black">Welcome back</h1>
          <p className="text-xs text-gray-500 mt-1">Sign in to your Amazing Minds account</p>
        </div>

        <form onSubmit={handleSignIn} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
          {error && (
            <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-3 text-xs text-terracotta-light">
              {error}
            </div>
          )}
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Email address</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Password</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-xl px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder-gray-600"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In →"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="text-terracotta-light hover:underline font-bold">
            Sign up free
          </Link>
        </p>
        <p className="text-center text-xs text-gray-600 mt-2">
          <Link href="/chat" className="hover:text-gray-400 transition-colors">
            Or chat with Amazing AI without signing in →
          </Link>
        </p>
      </div>
    </div>
  );
}
