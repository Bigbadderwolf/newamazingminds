"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import type { Product } from "@/lib/products";

const categoryBadge: Record<string, string> = {
  art: "bg-terracotta text-white",
  accessories: "bg-ama-sky text-white",
  artefacts: "bg-ama-purple text-white",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="bg-white rounded-2xl border border-orange-100 overflow-hidden hover:-translate-y-1 transition-all shadow-sm group">
      {/* Image area */}
      <Link href={`/marketplace/${product.id}`}>
        <div className={`h-40 bg-gradient-to-br ${product.bg} flex items-center justify-center text-5xl relative`}>
          {product.emoji}
          <span className={`absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full ${categoryBadge[product.category]}`}>
            {product.category}
          </span>
          <span className="absolute bottom-2 left-2 text-[10px] text-white/60 bg-black/30 px-2 py-0.5 rounded-full">
            {product.handle}
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/marketplace/${product.id}`}>
          <h3 className="text-sm font-black text-charcoal mb-0.5 hover:text-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-gray-400 mb-3">by {product.artist}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-base font-black text-terracotta">
              KES {product.price.toLocaleString()}
            </span>
          </div>
          <button
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                emoji: product.emoji,
                category: product.category,
                artist: product.artist,
              })
            }
            className="w-8 h-8 rounded-full bg-terracotta hover:bg-terracotta-light text-white flex items-center justify-center text-lg font-bold transition-all active:scale-90"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
