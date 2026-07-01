"use client";
import { useCartStore } from "@/store/cartStore";

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const count = useCartStore((s) => s.count());

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-charcoal text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-gray-700 transition-all relative"
    >
      🛒 Cart
      {count > 0 && (
        <span className="w-5 h-5 bg-terracotta rounded-full text-[10px] font-black flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
