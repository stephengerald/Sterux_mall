import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import products from "../data/products"
import CartContext from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { dispatch } = useContext(CartContext)

  if (!product) return <div className="p-8">Product not found.</div>

  return (
    <div className="p-8 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="w-64 mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="my-2">{product.description}</p>
      <p className="font-bold mb-4">${product.price}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
            dispatch({ type: "ADD_TO_CART", product})
            alert("Added to cart (demo)");
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetails