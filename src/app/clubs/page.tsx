import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

const clubs = [
  { id: "1", name: "AMA Nairobi Chapter", city: "Nairobi", country: "Kenya", members: 89, meets: "Every Saturday", emoji: "🇰🇪" },
  { id: "2", name: "AMA Lagos Circle", city: "Lagos", country: "Nigeria", members: 74, meets: "Every Sunday", emoji: "🇳🇬" },
  { id: "3", name: "AMA Accra Hub", city: "Accra", country: "Ghana", members: 52, meets: "Bi-weekly Friday", emoji: "🇬🇭" },
  { id: "4", name: "AMA Kampala Wellness", city: "Kampala", country: "Uganda", members: 38, meets: "Every Saturday", emoji: "🇺🇬" },
  { id: "5", name: "AMA Dar Chapter", city: "Dar es Salaam", country: "Tanzania", members: 61, meets: "Every Sunday", emoji: "🇹🇿" },
  { id: "6", name: "AMA Kigali Connect", city: "Kigali", country: "Rwanda", members: 29, meets: "Monthly", emoji: "🇷🇼" },
];

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Local community"
        title="Local"
        highlight="Clubs"
        subtitle="Find and join a local Amazing Minds Africa club near you. Real people, real connection, real impact."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { num: "12+", label: "Clubs across Africa" },
            { num: "400+", label: "Active club members" },
            { num: "6", label: "Countries represented" },
          ].map((s) => (
            <div key={s.label} className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
              <div className="text-2xl font-black text-gold-light">{s.num}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Club grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-forest-light/30"
            >
              <div className="text-3xl mb-3">{club.emoji}</div>
              <h3 className="text-sm font-black text-white mb-1">{club.name}</h3>
              <p className="text-xs text-gray-500 mb-4">
                📍 {club.city}, {club.country} · {club.members} members
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-forest-light font-semibold">
                  🗓 {club.meets}
                </span>
                <Link
                  href={`/clubs/${club.id}`}
                  className="text-xs font-bold text-terracotta-light hover:underline"
                >
                  Join Club →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Start a club CTA */}
        <div className="bg-forest/10 border border-forest-light/20 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-black mb-2">Not in your city yet?</h3>
          <p className="text-sm text-gray-400 mb-4">
            Start an Amazing Minds Africa club in your city and we'll support
            you every step of the way.
          </p>
          <button className="btn-primary">Start a Club</button>
        </div>
      </div>
    </div>
  );
}
