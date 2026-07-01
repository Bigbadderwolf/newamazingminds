"use client";
import { useState } from "react";

interface UploadedImage {
  publicId: string;
  url: string;
  slot: string;
}

const IMAGE_SLOTS = [
  { key: "hero_youths", label: "Youths — Hero Grid", tag: "Youths", color: "bg-ama-purple" },
  { key: "hero_art", label: "Art — Hero Grid", tag: "Art", color: "bg-terracotta" },
  { key: "hero_talent", label: "Talent — Hero Grid", tag: "Talent", color: "bg-gold" },
  { key: "hero_mental", label: "Mental Health — Hero Grid", tag: "Mental Health", color: "bg-forest" },
];

export default function ImageUploader() {
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState<Record<string, UploadedImage>>({});
  const [error, setError] = useState("");

  const handleUpload = async (slot: string, file: File) => {
    setUploading(slot);
    setError("");

    try {
      // Get signed upload params from our API
      const sigRes = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot }),
      });

      if (!sigRes.ok) throw new Error("Failed to get upload signature");

      const { signature, timestamp, apiKey, cloudName, folder } = await sigRes.json();

      // Upload directly to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("api_key", apiKey);
      formData.append("folder", folder);
      formData.append("public_id", slot);

      const uploadRes = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      if (!uploadRes.ok) throw new Error("Upload to Cloudinary failed");

      const data = await uploadRes.json();

      setUploaded((prev) => ({
        ...prev,
        [slot]: { publicId: data.public_id, url: data.secure_url, slot },
      }));
    } catch (err: any) {
      setError(err.message || "Upload failed. Please try again.");
    }

    setUploading(null);
  };

  return (
    <div className="flex flex-col gap-6">
      {error && (
        <div className="bg-terracotta/10 border border-terracotta/20 rounded-xl p-3 text-xs text-terracotta-light">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {IMAGE_SLOTS.map((slot) => {
          const done = uploaded[slot.key];
          const isUploading = uploading === slot.key;

          return (
            <div key={slot.key} className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden">
              {/* Preview */}
              <div className="h-36 bg-white/3 flex items-center justify-center relative">
                {done ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={done.url}
                    alt={slot.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center px-4">
                    <span className="text-3xl opacity-30">🖼</span>
                    <span className="text-xs text-gray-600">No image uploaded yet</span>
                  </div>
                )}
                <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${slot.color}`}>
                  {slot.tag}
                </span>
                {done && (
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-forest-light text-charcoal">
                    ✓ Uploaded
                  </span>
                )}
              </div>

              {/* Upload control */}
              <div className="p-4">
                <p className="text-xs font-bold text-white mb-3">{slot.label}</p>
                <label className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all border ${
                  isUploading
                    ? "bg-white/5 border-white/10 text-gray-500 cursor-not-allowed"
                    : "bg-terracotta/10 border-terracotta/30 text-terracotta-light hover:bg-terracotta/20"
                }`}>
                  {isUploading ? (
                    <>
                      <span className="w-3 h-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>⬆ {done ? "Replace Image" : "Upload Image"}</>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={isUploading}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUpload(slot.key, file);
                    }}
                  />
                </label>
                {done && (
                  <p className="text-[10px] text-gray-600 mt-2 truncate">
                    {done.publicId}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gold/8 border border-gold/20 rounded-xl p-4 text-xs text-gray-400 leading-relaxed">
        💡 <strong className="text-gold-light">Tips:</strong> Upload JPG or PNG images. Recommended size 800×600px or larger. Images are automatically optimised by Cloudinary and will appear on the homepage hero grid immediately after upload.
      </div>
    </div>
  );
}
