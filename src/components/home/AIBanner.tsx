import Link from "next/link";

export default function AIBanner() {
  return (
    <section className="bg-gradient-to-r from-charcoal to-[#2D1B0E] border-t-4 border-terracotta py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-3xl font-black mb-2">
            Meet <span className="text-gold-light">Amazing AI</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-lg">
            Your compassionate, responsive and trusted AI guide for mental
            health support, site navigation and community questions — available
            24/7 in English and Swahili.
          </p>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-3 bg-terracotta/15 border border-terracotta/30 rounded-2xl px-5 py-4 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-sm text-white flex-shrink-0">
            AI
          </div>
          <div>
            <div className="text-sm font-black text-gold-light">Amazing AI</div>
            <div className="text-xs text-gray-500">Mental health + navigation</div>
          </div>
        </div>

        {/* CTA */}
        <Link href="/chat" className="btn-primary flex-shrink-0">
          Chat with Amazing AI ↗
        </Link>
      </div>
    </section>
  );
}
