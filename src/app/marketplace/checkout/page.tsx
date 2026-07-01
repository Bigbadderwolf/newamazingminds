"use client";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import CheckoutModal from "@/components/marketplace/CheckoutModal";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, total, removeItem } = useCartStore();
  const [modalOpen, setModalOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🛒</div>
          <h2 className="text-xl font-black text-charcoal mb-2">Your cart is empty</h2>
          <p className="text-sm text-gray-400 mb-6">Add some items before checking out.</p>
          <Link href="/marketplace" className="btn-primary">Browse Marketplace →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/marketplace" className="text-xs text-gray-400 hover:text-terracotta mb-6 inline-block">
          ← Back to Marketplace
        </Link>
        <h1 className="text-2xl font-black text-charcoal mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-orange-100 p-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-3xl flex-shrink-0">
                  {item.emoji}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-charcoal">{item.name}</p>
                  <p className="text-xs text-gray-400">by {item.artist} · qty: {item.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-terracotta">KES {(item.price * item.qty).toLocaleString()}</p>
                  <button onClick={() => removeItem(item.id)} className="text-[10px] text-gray-300 hover:text-red-400 transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl border border-orange-100 p-5">
              <h3 className="text-sm font-black text-charcoal mb-4">Order Summary</h3>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-charcoal">KES {total().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-gray-500">Delivery</span>
                <span className="font-bold text-forest-light">TBD</span>
              </div>
              <div className="border-t border-gray-100 pt-4 flex justify-between">
                <span className="font-black text-charcoal">Total</span>
                <span className="text-xl font-black text-terracotta">KES {total().toLocaleString()}</span>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full mt-5 bg-[#00A650] hover:opacity-90 text-white font-black py-3 rounded-xl text-sm transition-all"
              >
                Pay with M-Pesa →
              </button>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-xs text-green-700">
              🔒 Payments are secured via Safaricom M-Pesa. STK Push or Paybill available.
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
