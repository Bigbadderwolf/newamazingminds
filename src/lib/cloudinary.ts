export function getCloudinaryUrl(
  publicId: string,
  options?: { width?: number; height?: number }
) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName || !publicId) return null;
  const transforms = options
    ? `w_${options.width || 800},h_${options.height || 600},c_fill/`
    : "";
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms}${publicId}`;
}
