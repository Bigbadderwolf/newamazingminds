import Link from "next/link";

const footerLinks = {
  Platform: [
    { label: "Amazing Minds Art", href: "/art" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Entertainment", href: "/entertainment" },
    { label: "Support Circles", href: "/circles" },
    { label: "Local Clubs", href: "/clubs" },
  ],
  Community: [
    { label: "Events", href: "/events" },
    { label: "Blog", href: "/blog" },
    { label: "Gratitude Sparks", href: "/gratitude" },
    { label: "Research Hub", href: "/research" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

const socials = [
  { icon: "📸", label: "Instagram", href: "https://instagram.com" },
  { icon: "𝕏", label: "Twitter", href: "https://twitter.com" },
  { icon: "f", label: "Facebook", href: "https://facebook.com" },
  { icon: "▶", label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] border-t-2 border-gold">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-terracotta flex items-center justify-center font-black text-xs text-white">
                AMA
              </div>
              <span className="text-gold-light font-black text-sm">
                Amazing Minds Africa
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              A creative community platform celebrating African youth
              through art, talent and mental wellness.
            </p>
            {/* Amazing AI badge */}
            <div className="flex items-center gap-2 bg-terracotta/10 border border-terracotta/25 rounded-full px-3 py-1.5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-terracotta-light animate-pulse"></div>
              <span className="text-xs text-terracotta-light font-bold">
                Powered by Amazing AI
              </span>
            </div>
            {/* Chat CTA */}
            <Link
              href="/chat"
              className="bg-terracotta hover:bg-terracotta-light text-white font-black text-xs px-4 py-2 rounded-full transition-all text-center w-fit"
            >
              Chat with Amazing AI →
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-black text-gold-light uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-500 hover:text-terracotta-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Amazing Minds Africa. All rights reserved.
          </p>
          <p className="text-xs font-bold text-gold">newamazingminds.org</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-xs text-gray-400 hover:border-terracotta hover:text-terracotta-light cursor-pointer transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
