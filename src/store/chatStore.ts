import { create } from "zustand";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatStore {
  messages: ChatMessage[];
  loading: boolean;
  addMessage: (msg: Omit<ChatMessage, "id" | "timestamp">) => void;
  appendToLast: (text: string) => void;
  setLoading: (v: boolean) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  loading: false,

  addMessage: (msg) =>
    set((s) => ({
      messages: [
        ...s.messages,
        { ...msg, id: crypto.randomUUID(), timestamp: new Date() },
      ],
    })),

  appendToLast: (text) =>
    set((s) => {
      const msgs = [...s.messages];
      if (msgs.length === 0) return s;
      msgs[msgs.length - 1] = {
        ...msgs[msgs.length - 1],
        content: msgs[msgs.length - 1].content + text,
      };
      return { messages: msgs };
    }),

  setLoading: (v) => set({ loading: v }),

  clearChat: () => set({ messages: [] }),
}));
