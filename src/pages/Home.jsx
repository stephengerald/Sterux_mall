import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import NewArrivals from "../components/NewArrivals";
import Discounts from "../components/Discounts";
import CartContext from "../context/CartContext";
import Hero from "../components/Hero";

function Home() {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCartAndView = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 sm:pt-28 md:pt-32 py-10 transition-colors duration-300">
      <Hero />
      <div className="container mx-auto">
        {/* Featured Products */}
        <h1 className="text-3xl font-bold mt-8 mb-8 text-center text-blue-700 dark:text-yellow-300 transition-colors duration-300">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCartAndView={handleAddToCartAndView}
            />
          ))}
        </div>

        {/* New Arrivals */}
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700 dark:text-yellow-300 transition-colors duration-300">
          🌟 New Arrivals
        </h2>
        <NewArrivals />

        {/* Discounts */}
        <h2 className="text-2xl font-bold mb-6 text-center text-red-700 dark:text-yellow-300 transition-colors duration-300">
          🔥 Discounts
        </h2>
        <Discounts />
      </div>
    </div>
  );
}

export default Home;