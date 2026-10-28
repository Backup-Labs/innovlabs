import { MetadataRoute } from "next";
import { opportunities } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://afriyouth.org";

  const staticPages = [
    "",
    "/about",
    "/services",
    "/programs",
    "/opportunities",
    "/impact",
    "/resources",
    "/partner-with-us",
    "/contact",
    "/privacy",
    "/terms",
    "/safeguarding",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const opportunityPages = opportunities.map((opp) => ({
    url: `${baseUrl}/opportunities/${opp.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...opportunityPages];
}

