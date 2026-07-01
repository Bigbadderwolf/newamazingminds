"use client";
import { useCartStore } from "@/store/cartStore";
import { PRODUCTS } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  if (!product) return notFound();

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      emoji: product.emoji,
      category: product.category,
      artist: product.artist,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const colorMap: Record<string, "terracotta" | "sky" | "purple"> = {
    art: "terracotta",
    accessories: "sky",
    artefacts: "purple",
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link href="/marketplace" className="text-xs text-gray-400 hover:text-terracotta transition-colors mb-8 inline-block">
          ← Back to Marketplace
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className={`bg-gradient-to-br ${product.bg} rounded-2xl aspect-square flex items-center justify-center text-8xl border border-white/20`}>
            {product.emoji}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div>
              <Badge label={product.category} color={colorMap[product.category]} />
              <h1 className="text-3xl font-black text-charcoal mt-3 mb-1">{product.name}</h1>
              <p className="text-sm text-gray-500">by {product.artist} · {product.handle}</p>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>

            <div className="text-3xl font-black text-terracotta">
              KES {product.price.toLocaleString()}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAdd}
                className={`btn-primary text-base py-4 transition-all ${added ? "bg-forest hover:bg-forest" : ""}`}
              >
                {added ? "✓ Added to Cart!" : "Add to Cart 🛒"}
              </button>
              <Link
                href="/marketplace/checkout"
                className="w-full bg-[#00A650] hover:opacity-90 text-white font-black py-4 rounded-full text-sm text-center transition-all"
              >
                Buy Now — Pay with M-Pesa →
              </Link>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-xs text-green-700 leading-relaxed">
              🔒 Secure payment via <strong>M-Pesa STK Push</strong> or <strong>Paybill</strong>. Your transaction is protected.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
