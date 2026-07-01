"use client";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQty, total, clearCart } = useCartStore();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-black text-charcoal">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-3">🛒</div>
              <p className="text-sm text-gray-400">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 text-xs text-terracotta font-bold hover:underline"
              >
                Continue Shopping →
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-start">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-charcoal truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mb-1">by {item.artist}</p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-6 h-6 rounded-full border border-gray-200 text-xs hover:bg-gray-50 flex items-center justify-center"
                      >
                        −
                      </button>
                      <span className="text-xs font-bold text-charcoal w-4 text-center">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-6 h-6 rounded-full border border-gray-200 text-xs hover:bg-gray-50 flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-sm font-black text-terracotta">
                      KES {(item.price * item.qty).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[10px] text-gray-300 hover:text-red-400 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-charcoal">Total</span>
              <span className="text-lg font-black text-charcoal">
                KES {total().toLocaleString()}
              </span>
            </div>
            <Link
              href="/marketplace/checkout"
              onClick={onClose}
              className="w-full bg-[#00A650] hover:opacity-90 text-white font-black text-sm py-3 rounded-xl text-center transition-all"
            >
              Pay with M-Pesa →
            </Link>
            <button
              onClick={clearCart}
              className="text-xs text-gray-400 hover:text-gray-600 text-center transition-colors"
            >
              Clear cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
