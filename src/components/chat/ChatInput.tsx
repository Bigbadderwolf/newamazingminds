"use client";
import { useState, KeyboardEvent } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
  loading: boolean;
}

const QUICK_PROMPTS = [
  "I'm feeling anxious",
  "Tell me about Support Circles",
  "How do I find a local club?",
  "Ninahisi huzuni (I feel sad)",
];

export default function ChatInput({ onSend, loading }: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || loading) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-white/6 bg-midnight">
      {/* Quick prompts — only shown when no messages */}
      <div className="px-4 pt-3 flex gap-2 flex-wrap">
        {QUICK_PROMPTS.map((p) => (
          <button
            key={p}
            onClick={() => onSend(p)}
            disabled={loading}
            className="text-[11px] px-3 py-1.5 rounded-full border border-white/10 text-gray-400 hover:border-terracotta hover:text-terracotta-light transition-all disabled:opacity-40"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-end gap-3 p-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          rows={1}
          disabled={loading}
          placeholder="Share what's on your mind... (English or Swahili)"
          className="flex-1 bg-white/5 border border-white/10 focus:border-terracotta rounded-2xl px-4 py-3 text-sm text-white outline-none resize-none transition-colors placeholder-gray-600 max-h-32 disabled:opacity-50"
          style={{ height: "auto" }}
          onInput={(e) => {
            const t = e.target as HTMLTextAreaElement;
            t.style.height = "auto";
            t.style.height = `${Math.min(t.scrollHeight, 128)}px`;
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="w-11 h-11 rounded-full bg-terracotta hover:bg-terracotta-light disabled:opacity-40 flex items-center justify-center transition-all flex-shrink-0"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
          )}
        </button>
      </div>

      <p className="text-center text-[10px] text-gray-700 pb-2">
        Amazing AI can make mistakes. For emergencies call Befrienders Kenya: +254 722 178 177
      </p>
    </div>
  );
}
