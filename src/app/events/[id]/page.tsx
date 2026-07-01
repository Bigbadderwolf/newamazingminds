import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Upcoming Event"
        title="The Hustle Trap —"
        highlight="Burnout Webinar"
        subtitle="15 May 2026 · 6:00 PM EAT · Online"
      />
      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-3">About this event</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Join us for a powerful live session exploring the hustle culture
              and burnout epidemic among young Africans. Dr. Amara Osei will
              walk us through what burnout really is, how to identify it early,
              and practical tools to recover and protect your mental energy.
            </p>
          </div>
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
            <h2 className="text-base font-black mb-4">What you'll learn</h2>
            <ul className="flex flex-col gap-2">
              {["What burnout is and how it differs from stress", "Early warning signs specific to young Africans", "Practical daily tools to recover your energy", "How to set boundaries in hustle culture", "Resources and support available through AMA"].map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-gold-light">✦</span>{i}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-terracotta/8 border border-terracotta/20 rounded-2xl p-5">
            <div className="flex flex-col gap-2 text-xs text-gray-400 mb-5">
              <div className="flex justify-between"><span>Date</span><span className="text-white font-bold">15 May 2026</span></div>
              <div className="flex justify-between"><span>Time</span><span className="text-white font-bold">6:00 PM EAT</span></div>
              <div className="flex justify-between"><span>Format</span><span className="text-white font-bold">Online (Zoom)</span></div>
              <div className="flex justify-between"><span>Cost</span><span className="text-forest-light font-bold">Free</span></div>
            </div>
            <button className="btn-primary w-full">Register Now →</button>
          </div>
          <Link href="/events" className="text-xs text-gray-500 hover:text-white text-center transition-colors">← Back to events</Link>
        </div>
      </div>
    </div>
  );
}
