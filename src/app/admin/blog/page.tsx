import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";
import Link from "next/link";

const SAMPLE_POSTS = [
  { slug: "hustle-trap", title: "The Hustle Trap", category: "Burnout", date: "2 May 2026", status: "published" },
  { slug: "gratitude-practice", title: "Why Gratitude Changes Everything", category: "Wellness", date: "28 Apr 2026", status: "published" },
  { slug: "african-mental-health", title: "Breaking the Silence on Mental Health in Africa", category: "Culture", date: "20 Apr 2026", status: "published" },
  { slug: "art-therapy", title: "Art as Therapy — How Creativity Heals", category: "Art", date: "14 Apr 2026", status: "published" },
  { slug: "anxiety-tips", title: "5 Practical Tips for Managing Anxiety", category: "Anxiety", date: "7 Apr 2026", status: "published" },
  { slug: "amazing-ai-launch", title: "Introducing Amazing AI", category: "Platform", date: "1 Apr 2026", status: "published" },
];

export default function AdminBlogPage() {
  const columns = [
    { key: "title", label: "Title" },
    { key: "category", label: "Category" },
    { key: "date", label: "Published" },
    {
      key: "status",
      label: "Status",
      render: (v: string) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          v === "published"
            ? "bg-forest/20 text-forest-light"
            : "bg-gold/15 text-gold-light"
        }`}>
          {v}
        </span>
      ),
    },
    {
      key: "slug",
      label: "Actions",
      render: (slug: string) => (
        <div className="flex gap-2">
          <Link href={`/blog/${slug}`} className="text-[10px] text-ama-sky hover:underline">
            View ↗
          </Link>
          <span className="text-[10px] text-gray-600">·</span>
          <button className="text-[10px] text-gray-400 hover:text-terracotta-light transition-colors">
            Edit
          </button>
          <span className="text-[10px] text-gray-600">·</span>
          <button className="text-[10px] text-gray-400 hover:text-red-400 transition-colors">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title="Blog Posts"
        subtitle="Create and manage blog posts for Amazing Minds Africa."
        action={{ label: "+ New Post", href: "/admin/blog/new" }}
      />
      <DataTable columns={columns} data={SAMPLE_POSTS} emptyMessage="No blog posts yet." />
    </div>
  );
}
