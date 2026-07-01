"use client";
import { useState } from "react";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import DataTable from "@/components/admin/DataTable";

const SAMPLE_SUBMISSIONS = [
  { id: "s1", title: "Mama Africa", creator: "AfroBeats254", category: "music", email: "afrobeats@gmail.com", youtube_url: "https://youtube.com/watch?v=abc123", status: "pending", created_at: "2026-05-01" },
  { id: "s2", title: "The Healing Journey", creator: "PoetryByNjeri", category: "poetry", email: "njeri@gmail.com", youtube_url: "https://youtube.com/watch?v=def456", status: "pending", created_at: "2026-05-02" },
  { id: "s3", title: "Lagos Comedy Night", creator: "Comedy254", category: "comedy", email: "comedy@gmail.com", youtube_url: "https://youtube.com/watch?v=ghi789", status: "approved", created_at: "2026-04-28" },
];

export default function AdminEntertainmentPage() {
  const [submissions, setSubmissions] = useState(SAMPLE_SUBMISSIONS);

  const updateStatus = (id: string, status: "approved" | "rejected") => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const columns = [
    { key: "title", label: "Title" },
    { key: "creator", label: "Creator" },
    {
      key: "category",
      label: "Category",
      render: (v: string) => (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-ama-purple/15 text-ama-purple uppercase">
          {v}
        </span>
      ),
    },
    {
      key: "youtube_url",
      label: "Video",
      render: (v: string) => (
        <a href={v} target="_blank" rel="noopener noreferrer" className="text-ama-sky hover:underline text-[10px]">
          Watch ↗
        </a>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (v: string) => (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
          v === "approved" ? "bg-forest/20 text-forest-light" :
          v === "rejected" ? "bg-terracotta/15 text-terracotta-light" :
          "bg-gold/15 text-gold-light"
        }`}>
          {v}
        </span>
      ),
    },
    { key: "created_at", label: "Submitted" },
    {
      key: "id",
      label: "Actions",
      render: (_: string, row: any) =>
        row.status === "pending" ? (
          <div className="flex gap-2">
            <button
              onClick={() => updateStatus(row.id, "approved")}
              className="text-[10px] font-bold text-forest-light hover:underline"
            >
              ✓ Approve
            </button>
            <span className="text-[10px] text-gray-600">·</span>
            <button
              onClick={() => updateStatus(row.id, "rejected")}
              className="text-[10px] font-bold text-terracotta-light hover:underline"
            >
              ✕ Reject
            </button>
          </div>
        ) : (
          <span className="text-[10px] text-gray-600">Reviewed</span>
        ),
    },
  ];

  const pending = submissions.filter((s) => s.status === "pending").length;

  return (
    <div>
      <AdminPageHeader
        title="Entertainment"
        subtitle="Review and approve video submissions from community creators."
      />

      {pending > 0 && (
        <div className="bg-gold/8 border border-gold/20 rounded-xl p-4 mb-5 flex items-center gap-3">
          <span className="text-xl">🎬</span>
          <div>
            <p className="text-xs font-bold text-gold-light">
              {pending} video{pending > 1 ? "s" : ""} pending review
            </p>
            <p className="text-[10px] text-gray-500">
              Review and approve to make them visible on Amazing Entertainment.
            </p>
          </div>
        </div>
      )}

      <DataTable
        columns={columns}
        data={submissions}
        emptyMessage="No video submissions yet."
      />
    </div>
  );
}
