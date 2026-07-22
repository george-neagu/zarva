import type { MetadataRoute } from "next";

const siteUrl = "https://zar-va.ro";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/assets/social-2.png`],
    },
  ];
}
