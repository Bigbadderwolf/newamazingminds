import AdminPageHeader from "@/components/admin/AdminPageHeader";
import ImageUploader from "@/components/admin/ImageUploader";

export default function AdminImagesPage() {
  return (
    <div>
      <AdminPageHeader
        title="Hero Images"
        subtitle="Upload photos for the 4-slot image grid on the homepage hero section."
      />
      <ImageUploader />
    </div>
  );
}
