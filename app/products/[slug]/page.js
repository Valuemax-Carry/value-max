import Image from "next/image";

const PRODUCTS_BY_CATEGORY = {
  "personal-care": [
    { id: 1, name: "Shampoo - Herbal Care", price: 450, img: "/products/sample/shampoo.jpg" },
    { id: 2, name: "Soap Bar - Gentle", price: 120, img: "/products/sample/soap.jpg" },
    { id: 3, name: "Toothpaste 120g", price: 150, img: "/products/sample/toothpaste.jpg" },
  ],
  "personal-hair": [
    { id: 11, name: "Hair Oil 200ml", price: 680, img: "/products/sample/hairoil.jpg" },
    { id: 12, name: "Hair Serum", price: 1199, img: "/products/sample/serum.jpg" },
  ],
  "staples": [
    { id: 21, name: "Basmati Rice 5kg", price: 1250, img: "/products/sample/rice.jpg" },
    { id: 22, name: "Sugar 1kg", price: 180, img: "/products/sample/sugar.jpg" },
  ],
};

export default function Page({ params }) {
  const { slug } = params;
  const products = PRODUCTS_BY_CATEGORY[slug] || PRODUCTS_BY_CATEGORY["staples"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Products: {slug.replace('-', ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg overflow-hidden shadow-sm p-3 bg-white">
            {p.img ? (
              // Image files are optional; fall back to plain img if not present in public
              <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-md mb-3" />
            ) : null}
            <div className="font-semibold text-lg mb-1">{p.name}</div>
            <div className="text-gray-600">Rs. {p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
