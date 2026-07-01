import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function CircleDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Support Circle"
        title="Anxiety &"
        highlight="Stress Relief"
        subtitle="A safe, confidential space to share and manage daily anxiety and stress with peers who understand."
      />

      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-3">About this circle</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              This circle is a judgment-free space for people dealing with
              anxiety and daily stress. Members share experiences, coping
              strategies and support each other through difficult moments.
              Sessions are facilitated by a trained peer moderator.
            </p>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-4">Circle guidelines</h2>
            <ul className="flex flex-col gap-2">
              {[
                "What is shared here stays here — full confidentiality",
                "Listen without judgment and speak with kindness",
                "No unsolicited advice — ask before suggesting",
                "Respect everyone's pace and boundaries",
                "Crisis situations are referred to professional support",
              ].map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-forest-light mt-0.5">✓</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          <div className="bg-terracotta/8 border border-terracotta/20 rounded-2xl p-5">
            <Badge label="Anxiety" color="terracotta" />
            <div className="mt-4 flex flex-col gap-2 text-xs text-gray-400">
              <div className="flex justify-between"><span>Members</span><span className="text-white font-bold">34</span></div>
              <div className="flex justify-between"><span>Location</span><span className="text-white font-bold">Nairobi</span></div>
              <div className="flex justify-between"><span>Meets</span><span className="text-white font-bold">Weekly, online</span></div>
              <div className="flex justify-between"><span>Language</span><span className="text-white font-bold">English / Swahili</span></div>
            </div>
            <button className="btn-primary w-full mt-5 text-sm">
              Join this Circle
            </button>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
            <p className="text-xs text-gray-500 mb-3">Need immediate support?</p>
            <Link href="/chat" className="text-xs font-bold text-terracotta-light hover:underline">
              Chat with Amazing AI →
            </Link>
          </div>

          <Link
            href="/circles"
            className="text-xs text-gray-500 hover:text-white text-center transition-colors"
          >
            ← Back to all circles
          </Link>
        </div>
      </div>
    </div>
  );
}
