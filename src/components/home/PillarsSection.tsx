const pillars = [
  {
    icon: "👥",
    title: "Amazing Youths",
    desc: "Empowering the next generation of African leaders and changemakers.",
    border: "border-ama-purple",
  },
  {
    icon: "🎨",
    title: "Amazing Minds Art",
    desc: "A creative space to showcase, support and celebrate African art.",
    border: "border-terracotta",
  },
  {
    icon: "🎭",
    title: "Talent",
    desc: "Discover, nurture and amplify hidden talents across Africa.",
    border: "border-gold",
  },
  {
    icon: "💚",
    title: "Mental Health",
    desc: "Peer circles, local clubs, events and 24/7 AI support for your wellness.",
    border: "border-forest",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-cream py-16 px-6">
      <p className="section-eyebrow !text-terracotta">What we stand for</p>
      <h2 className="section-title !text-charcoal">
        Four pillars of Amazing Minds
      </h2>
      <p className="section-sub !text-gray-500">
        We celebrate African youth through creativity, talent, community and
        mental wellbeing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {pillars.map((p) => (
          <div
            key={p.title}
            className={`bg-white rounded-2xl border-2 p-6 text-center ${p.border} hover:-translate-y-1 transition-transform`}
          >
            <div className="text-4xl mb-3">{p.icon}</div>
            <h3 className="text-sm font-black text-charcoal mb-2">{p.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
