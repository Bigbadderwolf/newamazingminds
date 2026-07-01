const stats = [
  { num: "24/7", label: "Amazing AI always available", color: "text-terracotta-light" },
  { num: "12+", label: "Amazing Minds clubs across Africa", color: "text-gold-light" },
  { num: "500+", label: "Community members", color: "text-forest-light" },
  { num: "100%", label: "Free to join", color: "text-ama-purple" },
];

export default function StatsBar() {
  return (
    <div className="bg-charcoal border-t border-white/6 grid grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`text-center py-6 px-4 ${i < stats.length - 1 ? "border-r border-white/5" : ""}`}
        >
          <div className={`text-3xl font-black ${s.color}`}>{s.num}</div>
          <div className="text-xs text-gray-500 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
