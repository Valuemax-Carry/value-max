import { CATEGORY_SLUGS } from "../data/categories";

const BASE_URL = "https://valuemax.com.pk";

export default async function sitemap() {
  const pages = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/policy`,
      lastModified: new Date(),
    },
  ];

  const productPages = CATEGORY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...productPages];
}