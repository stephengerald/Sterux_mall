import React, { useState } from "react"

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle payment and order creation
    setOrderPlaced(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {orderPlaced ? (
        <div className="max-w-md mx-auto bg-green-100 text-green-800 p-6 rounded shadow text-center font-semibold">
          🎉 Order created successfully!
        </div>
      ) : (
        <form className="max-w-md mx-auto bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address</label>
            <input className="w-full border px-3 py-2 rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border px-3 py-2 rounded" required />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
            Place Order
          </button>
        </form>
      )}
    </div>
  )
}

export default Checkout