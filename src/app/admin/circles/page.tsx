import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";

const SAMPLE_CIRCLES = [
  { id: "1", name: "Anxiety & Stress Relief", topic: "Anxiety", location: "Nairobi", members: 34, status: "active" },
  { id: "2", name: "Youth Burnout Recovery", topic: "Burnout", location: "Lagos", members: 28, status: "active" },
  { id: "3", name: "Grief & Loss Support", topic: "Grief", location: "Accra", members: 19, status: "active" },
  { id: "4", name: "Depression Awareness", topic: "Depression", location: "Kampala", members: 41, status: "active" },
  { id: "5", name: "Student Mental Health", topic: "Students", location: "Dar es Salaam", members: 55, status: "active" },
  { id: "6", name: "Relationships & Family", topic: "Relationships", location: "Kigali", members: 23, status: "active" },
];

export default function AdminCirclesPage() {
  const columns = [
    { key: "name", label: "Circle Name" },
    { key: "topic", label: "Topic" },
    { key: "location", label: "Location" },
    {
      key: "members",
      label: "Members",
      render: (v: number) => <span className="font-bold text-gold-light">{v}</span>,
    },
    {
      key: "status",
      label: "Status",
      render: (v: string) => (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest/20 text-forest-light">
          {v}
        </span>
      ),
    },
    {
      key: "id",
      label: "Actions",
      render: () => (
        <div className="flex gap-2">
          <button className="text-[10px] text-gray-400 hover:text-terracotta-light transition-colors">Edit</button>
          <span className="text-[10px] text-gray-600">·</span>
          <button className="text-[10px] text-gray-400 hover:text-red-400 transition-colors">Archive</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Support Circles"
        subtitle="Manage peer support circles. Members join from the public site."
      />
      <DataTable columns={columns} data={SAMPLE_CIRCLES} emptyMessage="No circles yet." />
    </div>
  );
}
