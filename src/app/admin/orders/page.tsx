"use client";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";

const SAMPLE_ORDERS = [
  { ref: "AMA-10234", items: "Savanna Sunset x1", total: 2500, phone: "0712***678", method: "STK Push", status: "paid", date: "2 May 2026" },
  { ref: "AMA-10235", items: "Beaded Bracelet Set x2", total: 1700, phone: "0722***901", method: "Paybill", status: "paid", date: "3 May 2026" },
  { ref: "AMA-10236", items: "Carved Mahogany Mask x1", total: 6500, phone: "0733***234", method: "STK Push", status: "pending", date: "4 May 2026" },
  { ref: "AMA-10237", items: "Ankara Earrings x3", total: 1950, phone: "0700***567", method: "Paybill", status: "paid", date: "5 May 2026" },
];

export default function AdminOrdersPage() {
  const totalRevenue = SAMPLE_ORDERS.filter((o) => o.status === "paid").reduce((s, o) => s + o.total, 0);

  const columns = [
    { key: "ref", label: "Order Ref", render: (v: string) => <span className="font-mono font-bold text-gold-light">{v}</span> },
    { key: "items", label: "Items" },
    { key: "total", label: "Amount", render: (v: number) => <span className="font-bold text-terracotta">KES {v.toLocaleString()}</span> },
    { key: "phone", label: "Phone" },
    {
      key: "method",
      label: "Method",
      render: (v: string) => (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00A650]/15 text-[#00A650]">
          M-Pesa {v}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (v: string) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          v === "paid" ? "bg-forest/20 text-forest-light" :
          v === "pending" ? "bg-gold/15 text-gold-light" :
          "bg-terracotta/15 text-terracotta-light"
        }`}>{v}</span>
      ),
    },
    { key: "date", label: "Date" },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Orders"
        subtitle="Track marketplace orders and M-Pesa payment status."
      />

      {/* Revenue summary */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Orders", value: SAMPLE_ORDERS.length, color: "text-gold-light" },
          { label: "Paid Orders", value: SAMPLE_ORDERS.filter((o) => o.status === "paid").length, color: "text-forest-light" },
          { label: "Total Revenue", value: `KES ${totalRevenue.toLocaleString()}`, color: "text-terracotta-light" },
        ].map((s) => (
          <div key={s.label} className="bg-white/4 border border-white/8 rounded-2xl p-4 text-center">
            <div className={`text-xl font-black ${s.color}`}>{s.value}</div>
            <div className="text-xs text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <DataTable columns={columns} data={SAMPLE_ORDERS} emptyMessage="No orders yet." />
    </div>
  );
}
