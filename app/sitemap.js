const BASE_URL = "https://valuemax.com.pk";

const CATEGORY_SLUGS = [
  "baby-care",
  "snacks",
  "tea-coffee",
  "pulses",
  "rice",
  "dairy",
  "flour",
  "oil-ghee",
  "sugar",
  "detergents",
  "frozen",
  "icecream",
  "drinks-beverages",
];

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