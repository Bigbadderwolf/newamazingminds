import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";

const resources = [
  { title: "Understanding Depression in African Youth", type: "Guide", color: "terracotta" as const, desc: "A comprehensive guide on recognising and addressing depression in the African context.", pages: "12 pages" },
  { title: "Anxiety Management Toolkit", type: "Toolkit", color: "gold" as const, desc: "Practical exercises, breathing techniques and daily habits to manage anxiety.", pages: "8 pages" },
  { title: "Mental Health & African Culture", type: "Research", color: "purple" as const, desc: "Academic research exploring the intersection of mental health and African cultural identity.", pages: "24 pages" },
  { title: "Peer Support Facilitation Manual", type: "Manual", color: "forest" as const, desc: "A guide for support circle facilitators on running safe and effective peer sessions.", pages: "16 pages" },
  { title: "Burnout Recovery Workbook", type: "Workbook", color: "sky" as const, desc: "A 30-day workbook with daily prompts and exercises for recovering from burnout.", pages: "32 pages" },
  { title: "Parenting & Mental Health in Africa", type: "Guide", color: "pink" as const, desc: "Resources for parents supporting the mental health of their children and teenagers.", pages: "10 pages" },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Knowledge base"
        title="Research"
        highlight="Hub"
        subtitle="Free mental health resources, guides, toolkits and research papers for African youth and communities."
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search bar */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full bg-white/5 border border-white/10 focus:border-terracotta rounded-full px-5 py-3 text-sm text-white outline-none transition-colors placeholder-gray-600"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r) => (
            <div key={r.title} className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-white/15 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <Badge label={r.type} color={r.color} />
                <span className="text-xs text-gray-600">{r.pages}</span>
              </div>
              <h3 className="text-sm font-black text-white leading-snug">{r.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">{r.desc}</p>
              <button className="text-xs font-bold text-terracotta-light hover:underline text-left">
                ⬇ Download Free →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gold/8 border border-gold/20 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-black mb-2">Have research to share?</h3>
          <p className="text-sm text-gray-400 mb-4">Submit your mental health research or resources for review and publication.</p>
          <button className="btn-gold">Submit Research</button>
        </div>
      </div>
    </div>
  );
}
