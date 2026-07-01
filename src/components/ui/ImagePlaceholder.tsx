import Image from "next/image";

interface ImagePlaceholderProps {
  cloudinaryUrl?: string | null;
  label: string;
  tag: string;
  tagColor: "purple" | "terracotta" | "gold" | "forest";
  emoji: string;
}

const tagStyles = {
  purple: "bg-ama-purple text-white",
  terracotta: "bg-terracotta text-white",
  gold: "bg-gold text-charcoal",
  forest: "bg-forest text-white",
};

export default function ImagePlaceholder({
  cloudinaryUrl,
  label,
  tag,
  tagColor,
  emoji,
}: ImagePlaceholderProps) {
  return (
    <div className="relative w-full h-full min-h-[130px] border border-dashed border-white/12 flex flex-col items-center justify-center gap-2 overflow-hidden bg-white/3 hover:bg-white/6 transition-all">
      {cloudinaryUrl ? (
        <Image
          src={cloudinaryUrl}
          alt={label}
          fill
          className="object-cover"
        />
      ) : (
        <>
          <span className="text-3xl opacity-60">{emoji}</span>
          <span className="text-xs text-gray-600 text-center px-2">{label}</span>
        </>
      )}
      <span
        className={`absolute bottom-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagStyles[tagColor]}`}
      >
        {tag}
      </span>
    </div>
  );
}
