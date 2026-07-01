import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const events = [
  { id: "1", title: "The Hustle Trap — Burnout Webinar", date: "15 May 2026", time: "6:00 PM EAT", type: "Online", topic: "Burnout", color: "terracotta" as const, desc: "A live session exploring burnout among young Africans with Dr. Amara Osei." },
  { id: "2", title: "Amazing Minds Art Showcase", date: "22 May 2026", time: "2:00 PM EAT", type: "In-Person", topic: "Art", color: "gold" as const, desc: "A community art showcase celebrating African youth creativity in Nairobi." },
  { id: "3", title: "Spoken Word & Healing Night", date: "1 June 2026", time: "7:00 PM EAT", type: "Hybrid", topic: "Wellness", color: "purple" as const, desc: "An evening of spoken word poetry exploring mental health and identity." },
  { id: "4", title: "Anxiety Management Masterclass", date: "8 June 2026", time: "5:00 PM EAT", type: "Online", topic: "Anxiety", color: "sky" as const, desc: "Practical tools and techniques to manage anxiety in everyday life." },
  { id: "5", title: "Youth Talent Showcase 2026", date: "20 June 2026", time: "3:00 PM EAT", type: "In-Person", topic: "Talent", color: "forest" as const, desc: "Celebrating African youth talent — music, art, dance, comedy and more." },
  { id: "6", title: "Gratitude & Mindfulness Workshop", date: "28 June 2026", time: "10:00 AM EAT", type: "Online", topic: "Mindfulness", color: "pink" as const, desc: "An interactive workshop on building a daily gratitude and mindfulness practice." },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="What's happening"
        title="Events &"
        highlight="Sessions"
        subtitle="Online and in-person events with professionals, storytelling sessions and talent showcases."
      />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {events.map((e) => (
            <div key={e.id} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all hover:border-white/15">
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <Badge label={e.topic} color={e.color} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    e.type === "Online" ? "bg-forest/20 text-forest-light" :
                    e.type === "In-Person" ? "bg-terracotta/15 text-terracotta-light" :
                    "bg-gold/15 text-gold-light"
                  }`}>{e.type}</span>
                </div>
                <h3 className="text-sm font-black text-white mb-2 leading-snug">{e.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{e.desc}</p>
                <div className="text-xs text-gray-500 mb-4">
                  📅 {e.date} · ⏰ {e.time}
                </div>
                <Link
                  href={`/events/${e.id}`}
                  className="btn-primary text-xs py-2 px-4 inline-block"
                >
                  Register Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
