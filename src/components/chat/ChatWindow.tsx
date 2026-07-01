"use client";
import { useEffect, useRef, useState } from "react";
import { useChatStore } from "@/store/chatStore";
import ChatMessageComponent from "./ChatMessage";
import ChatInput from "./ChatInput";
import CrisisAlert from "./CrisisAlert";

const CRISIS_KEYWORDS = [
  "suicide", "kill myself", "end my life", "want to die", "self harm",
  "hurt myself", "no reason to live", "kujiua", "kujidhuru",
];

function detectCrisis(text: string): boolean {
  const lower = text.toLowerCase();
  return CRISIS_KEYWORDS.some((k) => lower.includes(k));
}

export default function ChatWindow() {
  const { messages, loading, addMessage, appendToLast, setLoading } = useChatStore();
  const [showCrisis, setShowCrisis] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (loading) return;

    // Check for crisis keywords
    if (detectCrisis(content)) setShowCrisis(true);

    // Add user message
    addMessage({ role: "user", content });
    setLoading(true);

    // Add empty assistant message to stream into
    addMessage({ role: "assistant", content: "" });

    try {
      const allMessages = [
        ...messages,
        { role: "user" as const, content },
      ];

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: allMessages }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No reader");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) appendToLast(parsed.text);
            } catch {}
          }
        }
      }
    } catch (err) {
      appendToLast("I'm sorry, I'm having trouble responding right now. Please try again in a moment. If you need immediate support, please call Befrienders Kenya: +254 722 178 177 💚");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-4">
        {/* Welcome message */}
        {messages.length === 0 && (
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-[10px] text-white flex-shrink-0">
              AI
            </div>
            <div className="bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm text-gray-200 leading-relaxed">
                Hello! I'm Amazing AI, your compassionate mental wellness guide from Amazing Minds Africa. 🌍
                <br /><br />
                I'm here to listen, support and help you navigate your wellness journey — completely privately and anonymously.
                <br /><br />
                <strong className="text-gold-light">How are you feeling today?</strong>
              </p>
              <p className="text-xs text-gray-500 mt-2 italic">
                Habari! Unaweza kuzungumza nami kwa Kiingereza au Kiswahili.
              </p>
            </div>
          </div>
        )}

        {/* Rendered messages */}
        {messages.map((msg) => (
          <ChatMessageComponent key={msg.id} message={msg} />
        ))}

        {/* Loading dots */}
        {loading && messages[messages.length - 1]?.content === "" && (
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-[10px] text-white flex-shrink-0">
              AI
            </div>
            <div className="bg-white/5 border border-white/8 rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-5">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Crisis alert */}
      <CrisisAlert show={showCrisis} />

      {/* Input */}
      <ChatInput onSend={sendMessage} loading={loading} />
    </div>
  );
}
