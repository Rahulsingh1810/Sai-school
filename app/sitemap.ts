import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.heritageschoolblr.org";

  const routes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/academics", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/facilities", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/gallery", changeFrequency: "weekly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
