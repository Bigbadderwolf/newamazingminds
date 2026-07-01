import Link from "next/link";

const stats = [
  { label: "Community Members", value: "500+", icon: "👥", color: "text-terracotta-light", href: "/admin/circles" },
  { label: "Marketplace Products", value: "8", icon: "🛍", color: "text-gold-light", href: "/admin/marketplace" },
  { label: "Pending Videos", value: "—", icon: "🎬", color: "text-ama-purple", href: "/admin/entertainment" },
  { label: "Blog Posts", value: "6", icon: "✍️", color: "text-forest-light", href: "/admin/blog" },
  { label: "Upcoming Events", value: "6", icon: "📅", color: "text-ama-sky", href: "/admin/events" },
  { label: "Total Orders", value: "—", icon: "💳", color: "text-ama-pink", href: "/admin/orders" },
];

const quickActions = [
  { label: "Upload Hero Images", href: "/admin/images", icon: "🖼", color: "bg-terracotta" },
  { label: "Add Product", href: "/admin/marketplace/new", icon: "➕", color: "bg-gold" },
  { label: "Write Blog Post", href: "/admin/blog/new", icon: "✍️", color: "bg-forest" },
  { label: "Create Event", href: "/admin/events/new", icon: "📅", color: "bg-ama-purple" },
  { label: "Review Videos", href: "/admin/entertainment", icon: "🎬", color: "bg-ama-sky" },
  { label: "View Orders", href: "/admin/orders", icon: "💳", color: "bg-ama-pink" },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-white mb-1">Dashboard</h1>
        <p className="text-sm text-gray-400">Welcome back. Here's what's happening on newamazingminds.org</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-all hover:-translate-y-0.5"
          >
            <div className="text-2xl mb-3">{s.icon}</div>
            <div className={`text-2xl font-black mb-1 ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500">{s.label}</div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-sm font-black text-gray-300 uppercase tracking-wider mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickActions.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="flex flex-col items-center gap-2 bg-white/4 border border-white/8 rounded-2xl p-4 hover:border-white/15 transition-all hover:-translate-y-0.5 text-center"
            >
              <div className={`w-10 h-10 rounded-xl ${a.color} flex items-center justify-center text-lg`}>
                {a.icon}
              </div>
              <span className="text-[11px] text-gray-300 leading-tight">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Site status */}
      <div className="bg-forest/8 border border-forest-light/15 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-forest-light animate-pulse" />
          <span className="text-xs font-bold text-forest-light uppercase tracking-wider">Site Status</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          {[
            { label: "Homepage", status: "Live ✓" },
            { label: "Marketplace", status: "Live ✓" },
            { label: "Amazing AI", status: "Live ✓" },
            { label: "Entertainment", status: "Live ✓" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-gray-500 mb-0.5">{item.label}</div>
              <div className="text-forest-light font-bold">{item.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
