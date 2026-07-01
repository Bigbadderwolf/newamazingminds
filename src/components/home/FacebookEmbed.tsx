export default function FacebookEmbed() {
  return (
    <section className="bg-midnight py-16 px-6">
      <p className="section-eyebrow">Community feed</p>
      <h2 className="section-title">
        Latest from Our{" "}
        <span className="text-terracotta-light">Facebook Community</span>
      </h2>
      <p className="section-sub">
        Stay updated with the latest posts, stories and discussions from
        Amazing Minds Africa.
      </p>

      <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden border border-gray-200">
        {/* FB Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-lg bg-terracotta flex items-center justify-center font-black text-xs text-white flex-shrink-0">
            AMA
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-gray-900">Amazing Minds Africa</div>
            <div className="text-xs text-gray-500">1,244 followers</div>
          </div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Follow Page
          </a>
        </div>

        {/* Post */}
        <div className="p-4">
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Our culture celebrates strength and resilience, but sometimes that
            means we ignore the signals our minds and bodies send. Our new blog
            post, <strong>"The Hustle Trap,"</strong> explores what burnout is
            and practical ways to refuel your mental and physical energy.
          </p>
          <div className="w-full h-32 bg-gradient-to-br from-charcoal to-[#3D2B1F] rounded-xl flex items-center justify-center text-gray-600 text-xs mb-3">
            📷 Community photo
          </div>
          <div className="flex gap-4 text-xs text-gray-500">
            <span className="cursor-pointer hover:text-blue-600">👍 Like</span>
            <span className="cursor-pointer hover:text-blue-600">💬 Comment</span>
            <span className="cursor-pointer hover:text-blue-600">↗ Share</span>
          </div>
        </div>

        <a
          href="https://facebook.com/amazingmindsafrica"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-xs text-blue-600 font-semibold py-3 border-t border-gray-100 bg-gray-50 hover:bg-gray-100 transition-colors"
        >
          View more on Facebook →
        </a>
      </div>
    </section>
  );
}
