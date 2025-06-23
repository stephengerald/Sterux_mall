import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import CartContext from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const { dispatch } = useContext(CartContext);

  if (!product)
    return (
      <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[60vh] flex items-center justify-center">
        Product not found.
      </div>
    );

  return (
    <div className="p-8 flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[60vh] transition-colors duration-300">
      <img src={product.image} alt={product.name} className="w-64 mb-4 rounded-lg shadow" />
      <h1 className="text-2xl font-bold mb-2 text-blue-700 dark:text-yellow-300">{product.name}</h1>
      <p className="my-2 text-gray-700 dark:text-gray-200 text-center">{product.description}</p>
      <p className="font-bold mb-4 text-green-700 dark:text-yellow-400">${product.price}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-gray-900 transition"
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", product });
          alert("Added to cart (demo)");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;