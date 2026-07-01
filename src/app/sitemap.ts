import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://newamazingminds.org";

  const staticRoutes = [
    "",
    "/art",
    "/marketplace",
    "/entertainment",
    "/circles",
    "/clubs",
    "/events",
    "/blog",
    "/gratitude",
    "/research",
    "/contact",
    "/chat",
    "/auth/signin",
    "/auth/signup",
  ];

  return staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/chat" ? 0.9 : 0.8,
  }));
}
