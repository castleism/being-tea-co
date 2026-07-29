import type { MetadataRoute } from "next";
import { blogs } from "./content/blogs";
import { brewMethods, teaFamilies } from "./content/library";
import { absoluteUrl } from "./lib/site";

const UPDATED = new Date("2026-07-29T12:00:00Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/learn", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/brew", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/journal", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/shop", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
    { path: "/standards", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/disclosures", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: UPDATED,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...teaFamilies.map((tea) => ({
      url: absoluteUrl(`/tea/${tea.slug}`),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(`/images/tea/${tea.slug}.webp`)],
    })),
    ...brewMethods.map((method) => ({
      url: absoluteUrl(`/brew/${method.slug}`),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(`/images/brew/${method.slug}.webp`)],
    })),
    ...blogs.map((post) => ({
      url: absoluteUrl(`/journal/${post.slug}`),
      lastModified: UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.75,
      images: [
        absoluteUrl(`/images/journal/${post.id.toLowerCase()}.webp`),
      ],
    })),
  ];
}
