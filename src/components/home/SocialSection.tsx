const socials = [
  {
    name: "Instagram",
    desc: "Daily wellness tips & visual stories",
    href: "https://instagram.com",
    bg: "bg-ama-pink/10 border-ama-pink",
    icon: "📸",
  },
  {
    name: "X / Twitter",
    desc: "Quick tips & community updates",
    href: "https://twitter.com",
    bg: "bg-ama-sky/10 border-ama-sky",
    icon: "𝕏",
  },
  {
    name: "Facebook",
    desc: "Community discussions & events",
    href: "https://facebook.com",
    bg: "bg-blue-500/10 border-blue-500",
    icon: "f",
  },
  {
    name: "YouTube",
    desc: "Webinars & educational content",
    href: "https://youtube.com",
    bg: "bg-red-500/10 border-red-500",
    icon: "▶",
  },
  {
    name: "LinkedIn",
    desc: "Professional mental health insights",
    href: "https://linkedin.com",
    bg: "bg-blue-700/10 border-blue-700",
    icon: "in",
  },
];

export default function SocialSection() {
  return (
    <section className="bg-charcoal py-16 px-6">
      <p className="section-eyebrow">Stay connected</p>
      <h2 className="section-title">
        Follow the{" "}
        <span className="text-terracotta-light">Amazing Minds</span> Community
      </h2>
      <p className="section-sub">
        Daily mental wellness content, talent highlights, art showcases and
        community updates — across every platform.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl border p-5 text-center hover:-translate-y-1 transition-all ${s.bg}`}
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <div className="text-sm font-black text-white mb-1">{s.name}</div>
            <div className="text-xs text-gray-500 leading-snug">{s.desc}</div>
          </a>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs text-gray-600 mb-3">
          Join our growing community — never miss an update on mental wellness &
          Amazing Minds Art
        </p>
        <button className="btn-gold">Follow All Channels →</button>
      </div>
    </section>
  );
}
