// Example for New Arrivals section in Home.jsx or NewArrivals.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import newArrivals from "../data/newArrivals";
import CartContext from "../context/CartContext";

function NewArrivals() {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 pt-16">
      {newArrivals.map((product) => (
        <div
          key={product.id}
          className="bg-gradient-to-br from-green-100 to-green-300 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 border-2 border-green-400"
        >
          <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded-lg shadow" />
          <h2 className="text-lg font-bold mb-2 text-green-900">{product.name}</h2>
          <p className="text-green-800 font-semibold mb-2">${product.price}</p>
          <p className="mb-2 text-green-700">{product.description}</p>
          <button
            className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", product });
              navigate(`/product/${product.id}`);
            }}
          >
            Add to Cart & View
          </button>
        </div>
      ))}
    </div>
  );
}

export default NewArrivals;