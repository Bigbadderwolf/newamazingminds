interface BadgeProps {
  label: string;
  color?: "terracotta" | "gold" | "forest" | "purple" | "sky" | "pink" | "gray";
}

const colors = {
  terracotta: "bg-terracotta/15 text-terracotta-light border-terracotta/30",
  gold: "bg-gold/15 text-gold-light border-gold/30",
  forest: "bg-forest/15 text-forest-light border-forest/30",
  purple: "bg-ama-purple/15 text-ama-purple border-ama-purple/30",
  sky: "bg-ama-sky/15 text-ama-sky border-ama-sky/30",
  pink: "bg-ama-pink/15 text-ama-pink border-ama-pink/30",
  gray: "bg-white/8 text-gray-400 border-white/10",
};

export default function Badge({ label, color = "gray" }: BadgeProps) {
  return (
    <span
      className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wide ${colors[color]}`}
    >
      {label}
    </span>
  );
}
