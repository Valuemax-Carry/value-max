import { getProductsBySlug } from '../../../data/categories';

export default function Page({ params }) {
  const { slug } = params;
  const products = getProductsBySlug(slug);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-extrabold mb-6">Products: {slug.replace(/-/g, ' ')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg overflow-hidden shadow-sm p-3 bg-white">
            {p.img ? (
              <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-md mb-3" />
            ) : null}
            <div className="font-semibold text-lg mb-1">{p.name}</div>
            <div className="text-sm text-gray-600 mb-1">{p.company}</div>
            <div className="text-gray-600">Rs. {p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
