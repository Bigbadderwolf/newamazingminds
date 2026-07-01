"use client";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

interface CheckoutModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ open, onClose }: CheckoutModalProps) {
  const [tab, setTab] = useState<"stk" | "paybill">("stk");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { total, clearCart } = useCartStore();
  const router = useRouter();
  const orderRef = `AMA-${Math.floor(10000 + Math.random() * 90000)}`;

  if (!open) return null;

  const handleSTK = async () => {
    if (!phone.trim()) { setError("Please enter your M-Pesa number"); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/mpesa/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount: total(), orderRef }),
      });
      const data = await res.json();
      if (data.ResponseCode === "0" || data.success) {
        clearCart();
        onClose();
        router.push(`/marketplace/order-confirmed?ref=${orderRef}`);
      } else {
        setError(data.errorMessage || "STK Push failed. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  const handlePaybillConfirm = () => {
    clearCart();
    onClose();
    router.push(`/marketplace/order-confirmed?ref=${orderRef}`);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-[#00A650] px-5 py-4 flex items-center gap-3">
          <span className="bg-white text-[#00A650] font-black text-xs px-3 py-1 rounded-lg">
            M-PESA
          </span>
          <h2 className="text-white font-black text-base">Complete Payment</h2>
        </div>

        <div className="p-5">
          {/* Amount */}
          <div className="text-center mb-5">
            <div className="text-3xl font-black text-charcoal">
              KES {total().toLocaleString()}
            </div>
            <div className="text-xs text-gray-400 mt-1">Amazing Marketplace</div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            <button
              onClick={() => setTab("stk")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                tab === "stk"
                  ? "bg-[#00A650] text-white border-[#00A650]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#00A650]"
              }`}
            >
              📱 STK Push
            </button>
            <button
              onClick={() => setTab("paybill")}
              className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                tab === "paybill"
                  ? "bg-[#00A650] text-white border-[#00A650]"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#00A650]"
              }`}
            >
              🏦 Paybill
            </button>
          </div>

          {/* STK Panel */}
          {tab === "stk" && (
            <div className="flex flex-col gap-3">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1">
                  M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 0712 345 678"
                  className="w-full border border-gray-200 focus:border-[#00A650] rounded-xl px-4 py-2.5 text-sm text-charcoal outline-none transition-colors"
                />
              </div>
              {error && (
                <p className="text-xs text-red-500">{error}</p>
              )}
              <p className="text-xs text-gray-400 leading-relaxed">
                You will receive a prompt on your phone to enter your M-Pesa PIN and confirm the payment.
              </p>
              <button
                onClick={handleSTK}
                disabled={loading}
                className="w-full bg-[#00A650] hover:opacity-90 text-white font-black py-3 rounded-xl text-sm transition-all disabled:opacity-50"
              >
                {loading ? "Sending prompt..." : "Send Payment Request →"}
              </button>
            </div>
          )}

          {/* Paybill Panel */}
          {tab === "paybill" && (
            <div className="flex flex-col gap-3">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex flex-col gap-2">
                {[
                  { label: "Paybill Number", value: process.env.NEXT_PUBLIC_MPESA_SHORTCODE || "247247" },
                  { label: "Account Number", value: orderRef },
                  { label: "Amount", value: `KES ${total().toLocaleString()}` },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{row.label}</span>
                    <span className="font-black text-charcoal">{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Go to <strong>M-Pesa → Lipa na M-Pesa → Pay Bill</strong> and enter the details above.
              </p>
              <button
                onClick={handlePaybillConfirm}
                className="w-full bg-[#00A650] hover:opacity-90 text-white font-black py-3 rounded-xl text-sm transition-all"
              >
                I've Made the Payment ✓
              </button>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full mt-3 border border-gray-200 text-gray-400 hover:text-gray-600 py-2.5 rounded-xl text-xs font-semibold transition-all"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
