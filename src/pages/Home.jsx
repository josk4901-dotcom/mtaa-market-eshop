import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.jsx";
import SEO from "../components/SEO.jsx";

function Home({ addToCart }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Home"
        description="Discover electronics, fashion, accessories and everyday essentials at Mtaa Market."
      />

      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-orange-600 font-semibold uppercase tracking-wider mb-4">
              Welcome to Mtaa Market
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Everyday shopping, made simple.
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              Discover quality products at affordable prices.
              Find what you need, all in one place.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="bg-black text-white px-7 py-3 rounded-md hover:bg-orange-600 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/contact"
                className="border border-gray-400 text-gray-800 px-7 py-3 rounded-md hover:bg-white transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Explore our products
            </h2>
            <p className="text-gray-500 mt-2">
              Find something you will love.
            </p>
          </div>

          <Link
            to="/products"
            className="text-orange-600 font-semibold hover:underline"
          >
            View all products
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search for a product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-md border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-orange-500"
        />

        <div className="flex flex-wrap gap-3 mt-6 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-md border transition ${
                selectedCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:border-orange-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 py-10">
            No products found. Try another search.
          </p>
        )}
      </section>

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold">
            Find what you need at Mtaa Market
          </h2>

          <p className="text-gray-300 mt-4">
            Explore our collection and discover great everyday finds.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-orange-600 text-white px-7 py-3 rounded-md hover:bg-orange-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;