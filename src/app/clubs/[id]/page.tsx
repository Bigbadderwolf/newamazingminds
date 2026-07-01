import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export default function ClubDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Local Club"
        title="AMA Nairobi"
        highlight="Chapter"
        subtitle="Nairobi, Kenya · Every Saturday · 89 members"
      />
      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-3">About this club</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              The AMA Nairobi Chapter is one of the founding clubs of Amazing
              Minds Africa. We meet every Saturday to discuss mental health,
              celebrate creativity and support each other as a community. Our
              sessions include peer support discussions, art activities and
              guest speakers.
            </p>
          </div>
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-4">What we do</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Weekly meetups", "Mental health talks", "Art workshops", "Community events", "Guest speakers", "Peer support"].map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-forest-light">✓</span>{a}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-forest/10 border border-forest-light/20 rounded-2xl p-5">
            <div className="flex flex-col gap-2 text-xs text-gray-400 mb-4">
              <div className="flex justify-between"><span>City</span><span className="text-white font-bold">Nairobi, Kenya 🇰🇪</span></div>
              <div className="flex justify-between"><span>Members</span><span className="text-white font-bold">89</span></div>
              <div className="flex justify-between"><span>Meets</span><span className="text-white font-bold">Every Saturday</span></div>
              <div className="flex justify-between"><span>Format</span><span className="text-white font-bold">In-person + Online</span></div>
            </div>
            <button className="btn-primary w-full">Join this Club</button>
          </div>
          <Link href="/clubs" className="text-xs text-gray-500 hover:text-white text-center transition-colors">
            ← Back to all clubs
          </Link>
        </div>
      </div>
    </div>
  );
}
