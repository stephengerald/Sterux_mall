import React, { useState } from "react";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle payment and order creation
    setOrderPlaced(true);
  };

  return (
    <div className="p-8 min-h-[60vh] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 dark:text-yellow-300">Checkout</h1>
      {orderPlaced ? (
        <div className="max-w-md mx-auto bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 p-6 rounded shadow text-center font-semibold">
          🎉 Order created successfully!
        </div>
      ) : (
        <form className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <input className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border px-3 py-2 rounded bg-gray-50 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100" required />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-gray-900 transition" type="submit">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;