import React, { useContext } from "react"
import CartContext from "../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {
  const { cart, dispatch } = useContext(CartContext)

  if (cart.length === 0) return <div className="p-8 text-center font-bold">Your cart is empty.</div>

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4">
          <span>{item.name} (x{item.quantity})</span>
          <span>${(item.price * item.quantity).toFixed(2)}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="font-bold mt-4">Total: ${total.toFixed(2)}</div>
      <Link to="/checkout" className="bg-green-600 text-white px-4 py-2 rounded mt-4 inline-block">
        Proceed to Checkout
      </Link>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-4"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Clear Cart
      </button>
    </div>
  )
}

export default Cart