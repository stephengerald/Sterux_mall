import React from "react";

function ProductCard({ product, onAddToCartAndView }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded-lg shadow" />
      <h2 className="text-lg font-bold mb-2">{product.name}</h2>
      <p className="font-semibold mb-2">${product.price}</p>
      <p className="mb-2 text-gray-700">{product.description}</p>
      {onAddToCartAndView && (
        <button
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => onAddToCartAndView(product)}
        >
          Add to Cart & View
        </button>
      )}
    </div>
  );
}

export default ProductCard;