import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.baseUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.baseUrl}${SITE.legal.imprintPath}`, priority: 0.2 },
    { url: `${SITE.baseUrl}${SITE.legal.privacyPath}`, priority: 0.2 },
  ];
}
