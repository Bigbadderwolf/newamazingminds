"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import ProductCard from "@/components/marketplace/ProductCard";
import CartButton from "@/components/marketplace/CartButton";
import CartDrawer from "@/components/marketplace/CartDrawer";
import CategoryTabs from "@/components/marketplace/CategoryTabs";
import { PRODUCTS } from "@/lib/products";

export default function MarketplacePage() {
  const [category, setCategory] = useState("all");
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = category === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader
        eyebrow="Buy & sell African creativity"
        title="Amazing"
        highlight="Marketplace"
        subtitle="Discover and support African artists, creators and artisans. Pay securely via M-Pesa."
      />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <CategoryTabs active={category} onChange={setCategory} />
          <CartButton onClick={() => setCartOpen(true)} />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Sell your art CTA */}
        <div className="bg-gradient-to-r from-charcoal to-[#2D1B0E] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-gold/20">
          <div>
            <h3 className="text-lg font-black text-white mb-1">
              Are you an African artist or artisan?
            </h3>
            <p className="text-sm text-gray-400">
              List your art, accessories or artefacts and reach our growing community. Payments via M-Pesa.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button className="btn-gold">✦ Sell Your Art</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* M-Pesa badge */}
        <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#00A650] text-white font-black text-xs px-3 py-1.5 rounded-lg">
              M-PESA
            </span>
            <span className="text-sm text-gray-600">
              All payments secured via M-Pesa STK Push or Paybill
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-xs bg-white border border-green-200 text-green-700 font-bold px-3 py-1.5 rounded-full">
              📱 STK Push
            </span>
            <span className="text-xs bg-white border border-green-200 text-green-700 font-bold px-3 py-1.5 rounded-full">
              🏦 Paybill
            </span>
          </div>
        </div>
      </div>

      {/* Cart drawer */}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
