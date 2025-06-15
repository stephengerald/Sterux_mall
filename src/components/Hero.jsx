import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-yellow-200 to-yellow-400 py-16 px-4 flex flex-col items-center text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900">
        Welcome to Sterux Mall
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
        Discover the latest arrivals, exclusive discounts, and premium products. Shop now and enjoy a seamless online shopping experience!
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/new-arrivals"
          className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition"
        >
          Shop New Arrivals
        </Link>
        <Link
          to="/discounts"
          className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition"
        >
          View Discounts
        </Link>
      </div>
    </section>
  );
}

export default Hero;