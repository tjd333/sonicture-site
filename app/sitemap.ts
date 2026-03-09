import type { MetadataRoute } from "next";
import { galleryItems } from "@/content/gallery";

const siteUrl = "https://sonicture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const galleryRoutes = galleryItems.map((item) => ({
    url: `${siteUrl}/gallery/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...galleryRoutes,
  ];
}
