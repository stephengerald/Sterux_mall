import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import discounts from "../data/discounts";
import CartContext from "../context/CartContext";

function Discounts() {
  const { dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12 pt-16">
      {discounts.map((product) => (
        <div
          key={product.id}
          className="bg-gradient-to-br from-red-100 to-yellow-100 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 border-2 border-red-400 dark:border-yellow-600"
        >
          <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded-lg shadow" />
          <h2 className="text-lg font-bold mb-2 text-red-900 dark:text-yellow-300">{product.name}</h2>
          <p className="text-gray-500 dark:text-gray-400 line-through">${product.oldPrice}</p>
          <p className="text-red-600 dark:text-yellow-400 font-bold mb-2">${product.price}</p>
          <p className="mb-2 text-red-700 dark:text-yellow-200">{product.description}</p>
          <button
            className="mt-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-gray-900 transition"
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

export default Discounts;