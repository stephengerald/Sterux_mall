import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="p-8 text-center font-bold bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[60vh]">
        Your cart is empty.
      </div>
    );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-[60vh]">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 dark:text-yellow-300">Your Cart</h1>
      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 border-b border-gray-200 dark:border-gray-700 pb-2"
        >
          <span className="font-medium">{item.name} <span className="text-sm text-gray-500 dark:text-gray-400">(x{item.quantity})</span></span>
          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: item.id })}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="font-bold mt-4 text-lg">
        Total: <span className="text-green-700 dark:text-yellow-400">${total.toFixed(2)}</span>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-6 gap-4">
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-gray-900 transition"
        >
          Proceed to Checkout
        </Link>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          onClick={() => dispatch({ type: "CLEAR_CART" })}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;