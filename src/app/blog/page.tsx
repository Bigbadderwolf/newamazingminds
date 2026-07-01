import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const posts = [
  { slug: "hustle-trap", title: "The Hustle Trap", excerpt: "Our culture celebrates strength and resilience, but sometimes that means we ignore the signals our minds and bodies send.", date: "2 May 2026", category: "Burnout", color: "terracotta" as const, readTime: "5 min" },
  { slug: "gratitude-practice", title: "Why Gratitude Changes Everything", excerpt: "Science-backed reasons why a daily gratitude practice can transform your mental health and outlook on life.", date: "28 Apr 2026", category: "Wellness", color: "forest" as const, readTime: "4 min" },
  { slug: "african-mental-health", title: "Breaking the Silence on Mental Health in Africa", excerpt: "Stigma, culture and community — exploring how African youth are navigating the mental health conversation.", date: "20 Apr 2026", category: "Culture", color: "gold" as const, readTime: "7 min" },
  { slug: "art-therapy", title: "Art as Therapy — How Creativity Heals", excerpt: "Exploring the powerful connection between creative expression, art and emotional wellbeing.", date: "14 Apr 2026", category: "Art", color: "purple" as const, readTime: "6 min" },
  { slug: "anxiety-tips", title: "5 Practical Tips for Managing Anxiety", excerpt: "Simple, evidence-based techniques you can use today to reduce anxiety and find calm.", date: "7 Apr 2026", category: "Anxiety", color: "sky" as const, readTime: "3 min" },
  { slug: "amazing-ai-launch", title: "Introducing Amazing AI — Your Wellness Guide", excerpt: "Meet Amazing AI, the compassionate AI assistant built specifically for African youth mental wellness.", date: "1 Apr 2026", category: "Platform", color: "pink" as const, readTime: "4 min" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Stories & insights"
        title="The Amazing Minds"
        highlight="Blog"
        subtitle="Mental health insights, community stories and wellness tips for African youth."
      />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="bg-white/4 border border-white/8 rounded-2xl p-6 hover:-translate-y-1 transition-all hover:border-white/15 block"
            >
              <div className="flex items-center justify-between mb-4">
                <Badge label={p.category} color={p.color} />
                <span className="text-xs text-gray-500">{p.readTime} read</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">{p.date}</span>
                <span className="text-xs font-bold text-terracotta-light">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
