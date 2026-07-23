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
    {
      url: `${siteUrl}/termeni-si-conditii`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/politica-de-cookies`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
