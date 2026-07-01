import Link from "next/link";

const features = [
  {
    icon: "🤖",
    title: "Chat with Amazing AI",
    desc: "24/7 AI mental health assistant providing compassionate, responsive and trusted support for African youth.",
    cta: "Start Chatting",
    href: "/chat",
    style: {
      card: "bg-terracotta/8 border-terracotta",
      title: "text-terracotta-light",
      btn: "bg-terracotta text-white hover:bg-terracotta-light",
    },
  },
  {
    icon: "👥",
    title: "Support Circles",
    desc: "Join peer support communities organized by topic and location — safe spaces to share and heal together.",
    cta: "Browse Groups",
    href: "/circles",
    style: {
      card: "bg-ama-sky/7 border-ama-sky",
      title: "text-ama-sky",
      btn: "bg-ama-sky text-white hover:opacity-90",
    },
  },
  {
    icon: "📅",
    title: "Events & Sessions",
    desc: "Online and in-person events with professionals, storytelling sessions and talent showcases.",
    cta: "View Events",
    href: "/events",
    style: {
      card: "bg-gold/7 border-gold",
      title: "text-gold-light",
      btn: "bg-gold text-charcoal hover:bg-gold-light",
    },
  },
  {
    icon: "📍",
    title: "Local Clubs",
    desc: "Find and join local community mental wellness clubs across Africa — real people, real connection.",
    cta: "Find Clubs",
    href: "/clubs",
    style: {
      card: "bg-forest-light/7 border-forest-light",
      title: "text-forest-light",
      btn: "bg-forest-light text-charcoal hover:opacity-90",
    },
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-midnight py-16 px-6">
      <p className="section-eyebrow">Everything in one place</p>
      <h2 className="section-title">
        Everything You Need for{" "}
        <span className="text-terracotta-light">Mental Wellness</span>
      </h2>
      <p className="section-sub">
        Comprehensive support through AI assistance, peer connections, creative
        expression and local communities across Africa.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className={`rounded-2xl border p-6 flex flex-col gap-3 ${f.style.card}`}
          >
            <span className="text-3xl">{f.icon}</span>
            <h3 className={`text-sm font-black ${f.style.title}`}>{f.title}</h3>
            <p className="text-xs text-gray-400 leading-relaxed flex-1">{f.desc}</p>
            <Link
              href={f.href}
              className={`text-xs font-bold px-4 py-2.5 rounded-full transition-all w-fit ${f.style.btn}`}
            >
              {f.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
