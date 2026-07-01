import PageHeader from "@/components/ui/PageHeader";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-midnight">
      <PageHeader
        eyebrow="Blog"
        title="The Hustle"
        highlight="Trap"
        subtitle="Published 2 May 2026 · 5 min read"
      />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-8">
          <Badge label="Burnout" color="terracotta" />
          <span className="text-xs text-gray-500">By Amazing Minds Africa</span>
          <span className="text-xs text-gray-600">·</span>
          <span className="text-xs text-gray-500">2 May 2026</span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 text-sm text-gray-300 leading-relaxed">
          <p>
            Our culture celebrates strength and resilience — but sometimes that
            means we ignore the signals our minds and bodies send us. The hustle
            culture glorified across social media tells us to grind harder, sleep
            less and achieve more. But at what cost?
          </p>
          <h2 className="text-lg font-black text-white">What is burnout?</h2>
          <p>
            Burnout is a state of chronic stress that leads to physical and
            emotional exhaustion, cynicism and feelings of ineffectiveness. It's
            not just being tired — it's a deep depletion that doesn't go away
            with a weekend of rest.
          </p>
          <h2 className="text-lg font-black text-white">Signs to watch for</h2>
          <ul className="flex flex-col gap-2 pl-4">
            {[
              "Constant exhaustion even after sleeping",
              "Feeling detached or numb from things you used to love",
              "Difficulty concentrating or making decisions",
              "Increased irritability and emotional reactions",
              "Physical symptoms — headaches, stomach issues",
            ].map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="text-terracotta-light mt-0.5">✦</span>
                {s}
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-black text-white">How to recover</h2>
          <p>
            Recovery from burnout requires more than just rest. It requires
            examining your relationship with work, productivity and self-worth.
            Start by talking to someone you trust — or reach out to Amazing AI
            for a confidential conversation anytime.
          </p>

          {/* CTA */}
          <div className="bg-terracotta/8 border border-terracotta/20 rounded-2xl p-6 mt-4">
            <p className="text-sm font-bold text-white mb-3">
              Feeling burnt out? Talk to Amazing AI — free, private and available 24/7.
            </p>
            <Link href="/chat" className="btn-primary text-xs py-2 px-5 inline-block">
              Chat with Amazing AI →
            </Link>
          </div>
        </div>

        {/* Back */}
        <div className="mt-10 pt-6 border-t border-white/8">
          <Link href="/blog" className="text-xs text-gray-500 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
