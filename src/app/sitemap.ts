import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const base = "https://www.carrosserie-callian.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/mentions-legales", "/confidentialite", "/conditions", "/merci"];
  return pages.map((p) => ({
    url: base + p,
    lastModified: new Date("2026-09-13"),
    changeFrequency: p === "/" ? "weekly" : "yearly",
    priority: p === "/" ? 1 : 0.4,
  }));
}
