import { CATEGORY_SLUGS } from "../data/categories";

export default async function sitemap() {
  const pages = [
    { url: "/", lastModified: new Date() },
    { url: "/policy", lastModified: new Date() },
  ];

  const productPages = CATEGORY_SLUGS.map((slug) => ({
    url: `/products/${slug}`,
    lastModified: new Date(),
  }));

  return [...pages, ...productPages];
}
