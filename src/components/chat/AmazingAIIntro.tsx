const ACRONYM = [
  { letter: "A", word: "Aware", color: "text-terracotta-light" },
  { letter: "M", word: "Mindful", color: "text-gold-light" },
  { letter: "A", word: "Affirming", color: "text-ama-sky" },
  { letter: "Z", word: "Zealous", color: "text-forest-light" },
  { letter: "I", word: "Insightful", color: "text-ama-purple" },
  { letter: "N", word: "Nurturing", color: "text-ama-pink" },
  { letter: "G", word: "Grounded", color: "text-gold-light" },
];

export default function AmazingAIIntro() {
  return (
    <div className="text-center max-w-xl mx-auto px-4 pt-10 pb-6">
      {/* Orb */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-xl text-white mx-auto mb-5 shadow-lg shadow-terracotta/20">
        AI
      </div>

      {/* Title */}
      <h1 className="text-2xl font-black mb-1">
        Meet <span className="text-gold-light">Amazing AI</span>
      </h1>

      {/* Acronym */}
      <div className="flex justify-center gap-4 flex-wrap my-4">
        {ACRONYM.map((a, i) => (
          <div key={i} className="text-center">
            <span className={`text-lg font-black block ${a.color}`}>{a.letter}</span>
            <span className="text-[9px] text-gray-600 uppercase tracking-wide">{a.word}</span>
          </div>
        ))}
      </div>

      {/* Privacy badges */}
      <div className="flex justify-center gap-2 flex-wrap mb-4">
        <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-gold/10 text-gold-light border border-gold/25">
          🔒 Anonymous by default
        </span>
        <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-ama-pink/10 text-ama-pink border border-ama-pink/20">
          💬 Private conversations
        </span>
        <span className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-ama-sky/10 text-ama-sky border border-ama-sky/20">
          ✦ You're in control
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed">
        Your compassionate mental wellness guide — available 24/7 in{" "}
        <strong className="text-white">English</strong> and{" "}
        <strong className="text-white">Swahili</strong>. No sign-up required.
      </p>
    </div>
  );
}
