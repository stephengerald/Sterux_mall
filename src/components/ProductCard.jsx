import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;