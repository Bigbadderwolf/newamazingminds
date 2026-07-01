import Link from "next/link";

export default function OrderConfirmedPage({
  searchParams,
}: {
  searchParams: { ref?: string };
}) {
  const ref = searchParams.ref || "AMA-00000";

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-5">✅</div>
        <h1 className="text-2xl font-black text-charcoal mb-2">
          Payment Confirmed!
        </h1>
        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          Thank you for your purchase! Your order{" "}
          <strong className="text-charcoal">{ref}</strong> has been placed
          successfully. The seller will be in touch shortly.
        </p>

        <div className="bg-white border border-orange-100 rounded-2xl p-5 mb-6 text-left">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Order Reference</span>
            <span className="font-black text-charcoal">{ref}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Payment Method</span>
            <span className="font-bold text-[#00A650]">M-Pesa ✓</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status</span>
            <span className="font-bold text-forest-light">Confirmed</span>
          </div>
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/marketplace" className="btn-primary">
            Continue Shopping →
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
