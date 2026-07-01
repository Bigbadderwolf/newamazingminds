import AmazingAIIntro from "@/components/chat/AmazingAIIntro";
import ChatWindow from "@/components/chat/ChatWindow";
import Link from "next/link";

export const metadata = {
  title: "Chat with Amazing AI — Amazing Minds Africa",
  description: "Talk to Amazing AI, your compassionate 24/7 mental health assistant. Free, private and available in English and Swahili.",
};

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-midnight flex flex-col">
      {/* No-signup notice */}
      <div className="bg-forest/10 border-b border-forest-light/15 px-4 py-2.5 text-center text-xs text-forest-light">
        No sign-up required to chat —{" "}
        <Link href="/auth/signup" className="text-ama-sky underline font-bold">
          sign up free
        </Link>{" "}
        to save your conversations and join Support Circles
      </div>

      {/* Chat layout */}
      <div className="flex flex-col flex-1 max-w-2xl w-full mx-auto">
        {/* Chat header */}
        <div className="bg-terracotta/10 border-b border-terracotta/20 px-5 py-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-terracotta to-gold flex items-center justify-center font-black text-xs text-white flex-shrink-0">
            AI
          </div>
          <div className="flex-1">
            <div className="text-sm font-black text-white">Amazing AI</div>
            <div className="text-xs text-gray-500">
              Aware · Mindful · Affirming · Nurturing
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
              🌍 EN / SW
            </span>
            <span className="text-[10px] text-gold font-bold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full">
              🔒 Anonymous
            </span>
          </div>
        </div>

        {/* Intro section */}
        <AmazingAIIntro />

        {/* Chat window — takes remaining height */}
        <div className="flex-1 flex flex-col border border-white/8 rounded-t-2xl overflow-hidden mx-4 mb-0 bg-[#111827]" style={{ minHeight: "400px" }}>
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}
