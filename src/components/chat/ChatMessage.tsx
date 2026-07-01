import type { ChatMessage as ChatMessageType } from "@/store/chatStore";

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.role === "assistant";

  return (
    <div className={`flex gap-3 ${isAI ? "items-start" : "items-start flex-row-reverse"}`}>
      {/* Avatar */}
      {isAI && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-[10px] text-white flex-shrink-0 mt-0.5">
          AI
        </div>
      )}

      {/* Bubble */}
      <div
        className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
          isAI
            ? "bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm text-gray-200"
            : "bg-terracotta rounded-2xl rounded-tr-sm text-white"
        }`}
      >
        {/* Render line breaks */}
        {message.content.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < message.content.split("\n").length - 1 && <br />}
          </span>
        ))}

        {/* Timestamp */}
        <div className={`text-[10px] mt-1.5 ${isAI ? "text-gray-600" : "text-white/60"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  );
}
