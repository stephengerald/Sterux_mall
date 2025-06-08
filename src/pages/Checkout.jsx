import React from "react"

function Checkout() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
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
    </div>
  )
}

export default Checkout