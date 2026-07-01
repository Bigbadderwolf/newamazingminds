import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";

const SAMPLE_EVENTS = [
  { id: "1", title: "The Hustle Trap — Burnout Webinar", date: "15 May 2026", type: "Online", topic: "Burnout", status: "upcoming" },
  { id: "2", title: "Amazing Minds Art Showcase", date: "22 May 2026", type: "In-Person", topic: "Art", status: "upcoming" },
  { id: "3", title: "Spoken Word & Healing Night", date: "1 Jun 2026", type: "Hybrid", topic: "Wellness", status: "upcoming" },
  { id: "4", title: "Anxiety Management Masterclass", date: "8 Jun 2026", type: "Online", topic: "Anxiety", status: "upcoming" },
  { id: "5", title: "Youth Talent Showcase 2026", date: "20 Jun 2026", type: "In-Person", topic: "Talent", status: "upcoming" },
  { id: "6", title: "Gratitude & Mindfulness Workshop", date: "28 Jun 2026", type: "Online", topic: "Mindfulness", status: "upcoming" },
];

export default function AdminEventsPage() {
  const columns = [
    { key: "title", label: "Event" },
    { key: "date", label: "Date" },
    {
      key: "type",
      label: "Type",
      render: (v: string) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          v === "Online" ? "bg-forest/20 text-forest-light" :
          v === "In-Person" ? "bg-terracotta/15 text-terracotta-light" :
          "bg-gold/15 text-gold-light"
        }`}>{v}</span>
      ),
    },
    { key: "topic", label: "Topic" },
    {
      key: "status",
      label: "Status",
      render: (v: string) => (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ama-sky/15 text-ama-sky">
          {v}
        </span>
      ),
    },
    {
      key: "id",
      label: "Actions",
      render: (_: string, row: any) => (
        <div className="flex gap-2">
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
        title="Events"
        subtitle="Create and manage upcoming events and sessions."
        action={{ label: "+ New Event", href: "/admin/events/new" }}
      />
      <DataTable columns={columns} data={SAMPLE_EVENTS} emptyMessage="No events yet." />
    </div>
  );
}
