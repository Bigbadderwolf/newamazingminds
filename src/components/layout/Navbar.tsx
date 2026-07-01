"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Support Circles", href: "/circles" },
  { label: "Local Clubs", href: "/clubs" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Gratitude Sparks", href: "/gratitude" },
  { label: "Contact", href: "/contact" },
  { label: "Research Hub", href: "/research" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Entertainment", href: "/entertainment" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-charcoal border-b-2 border-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-xs text-white shadow">
            AMA
          </div>
          <div className="hidden sm:block">
            <div className="text-gold-light font-black text-sm leading-tight">
              Amazing Minds Africa
            </div>
            <div className="text-gray-400 text-xs">Mental Health Support Platform</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center flex-wrap">

          {/* Amazing Minds Art — FIRST + GOLD */}
          <Link
            href="/art"
            className="bg-gold text-charcoal font-black text-xs px-4 py-2 rounded-full hover:bg-gold-light transition-all"
          >
            ✦ Amazing Minds Art
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white text-xs px-3 py-2 rounded-lg hover:bg-white/10 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/chat"
            className="bg-terracotta hover:bg-terracotta-light text-white font-black text-xs px-4 py-2 rounded-full transition-all"
          >
            Chat with Amazing AI
          </Link>
          <Link
            href="/auth/signin"
            className="border border-forest-light text-forest-light hover:bg-forest/20 text-xs px-4 py-2 rounded-full transition-all font-semibold"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          <Link
            href="/art"
            className="bg-gold text-charcoal font-black text-sm px-4 py-2.5 rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            ✦ Amazing Minds Art
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 text-sm px-3 py-2 rounded-lg hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
            <Link
              href="/chat"
              className="bg-terracotta text-white font-black text-sm px-4 py-2.5 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Chat with Amazing AI
            </Link>
            <Link
              href="/auth/signin"
              className="border border-forest-light text-forest-light text-sm px-4 py-2.5 rounded-full text-center font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
