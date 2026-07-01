import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";

const circles = [
  { id: "1", name: "Anxiety & Stress Relief", topic: "Anxiety", location: "Nairobi", members: 34, color: "terracotta" as const, desc: "A safe space to share and manage daily anxiety and stress." },
  { id: "2", name: "Youth Burnout Recovery", topic: "Burnout", location: "Lagos", members: 28, color: "gold" as const, desc: "Support for young Africans experiencing burnout and exhaustion." },
  { id: "3", name: "Grief & Loss Support", topic: "Grief", location: "Accra", members: 19, color: "purple" as const, desc: "Healing together through loss, with compassion and community." },
  { id: "4", name: "Depression Awareness", topic: "Depression", location: "Kampala", members: 41, color: "sky" as const, desc: "Open conversations around depression in the African context." },
  { id: "5", name: "Student Mental Health", topic: "Students", location: "Dar es Salaam", members: 55, color: "forest" as const, desc: "For students navigating academic pressure and mental wellness." },
  { id: "6", name: "Relationships & Family", topic: "Relationships", location: "Kigali", members: 23, color: "pink" as const, desc: "Navigating family dynamics and relationship challenges together." },
];

export default function CirclesPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Peer support"
        title="Support"
        highlight="Circles"
        subtitle="Join a peer support community organised by topic and location. Safe, confidential and free to join."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Filter bar */}
        <div className="flex gap-3 flex-wrap mb-8">
          {["All", "Anxiety", "Burnout", "Grief", "Depression", "Students", "Relationships"].map((t) => (
            <button
              key={t}
              className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${
                t === "All"
                  ? "bg-terracotta text-white border-terracotta"
                  : "border-white/15 text-gray-400 hover:border-terracotta hover:text-terracotta-light"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {circles.map((c) => (
            <div
              key={c.id}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-white/15"
            >
              <div className="flex items-start justify-between mb-3">
                <Badge label={c.topic} color={c.color} />
                <span className="text-xs text-gray-500">{c.members} members</span>
              </div>
              <h3 className="text-sm font-black text-white mb-2">{c.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">{c.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">📍 {c.location}</span>
                <Link
                  href={`/circles/${c.id}`}
                  className="text-xs font-bold text-terracotta-light hover:underline"
                >
                  View Circle →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-terracotta/8 border border-terracotta/20 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-black mb-2">Don't see your circle?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Request a new support circle topic and we'll set it up for you.
          </p>
          <button className="btn-primary">Request a Circle</button>
        </div>
      </div>
    </div>
  );
}
