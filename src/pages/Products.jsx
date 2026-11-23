import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.jsx";
import SEO from "../components/SEO.jsx";

function Products({ addToCart }) {
  return (
    <>
      <SEO
        title="Products"
        description="Explore electronics, fashion and everyday products at Mtaa Market."
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-3">
          Our Products
        </h1>

        <p className="text-gray-500 mb-10">
          Discover our collection of everyday essentials.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;