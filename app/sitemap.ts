import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ayoubsabi.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://ayoubsabi.com/en",
          fr: "https://ayoubsabi.com/fr",
          "x-default": "https://ayoubsabi.com/en",
        },
      },
    },
    {
      url: "https://ayoubsabi.com/fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://ayoubsabi.com/en",
          fr: "https://ayoubsabi.com/fr",
          "x-default": "https://ayoubsabi.com/en",
        },
      },
    },
  ];
}
