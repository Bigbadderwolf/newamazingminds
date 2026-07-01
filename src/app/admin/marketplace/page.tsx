import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";

export default function AdminMarketplacePage() {
  const columns = [
    { key: "emoji", label: "", render: (v: string) => <span className="text-xl">{v}</span> },
    { key: "name", label: "Product" },
    { key: "artist", label: "Artist" },
    {
      key: "category",
      label: "Category",
      render: (v: string) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
          v === "art" ? "bg-terracotta/15 text-terracotta-light" :
          v === "accessories" ? "bg-ama-sky/15 text-ama-sky" :
          "bg-ama-purple/15 text-ama-purple"
        }`}>{v}</span>
      ),
    },
    {
      key: "price",
      label: "Price",
      render: (v: number) => <span className="font-bold text-terracotta">KES {v.toLocaleString()}</span>,
    },
    {
      key: "id",
      label: "Actions",
      render: (_: string, row: any) => (
        <div className="flex gap-2">
          <Link href={`/marketplace/${row.id}`} className="text-[10px] text-ama-sky hover:underline">View</Link>
          <span className="text-[10px] text-gray-600">·</span>
          <button className="text-[10px] text-gray-400 hover:text-terracotta-light transition-colors">Edit</button>
          <span className="text-[10px] text-gray-600">·</span>
          <button className="text-[10px] text-gray-400 hover:text-red-400 transition-colors">Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Marketplace"
        subtitle="Manage product listings. Products are visible to all site visitors."
        action={{ label: "+ Add Product", href: "/admin/marketplace/new" }}
      />
      <DataTable columns={columns} data={PRODUCTS} emptyMessage="No products yet. Add your first product." />
    </div>
  );
}
