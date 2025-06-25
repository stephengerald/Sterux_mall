import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Welcome to Sterux Mall",
    desc: "Discover the latest arrivals, exclusive discounts, and premium products. Shop now and enjoy a seamless online shopping experience!",
    cta: { text: "Shop New Arrivals", link: "/new-arrivals", color: "bg-green-600 hover:bg-green-700" },
    bg: "from-yellow-200 to-yellow-400"
  },
  {
    title: "Big Discounts Available!",
    desc: "Save more with our special deals and limited-time offers on top products.",
    cta: { text: "View Discounts", link: "/discounts", color: "bg-red-600 hover:bg-red-700" },
    bg: "from-red-100 to-yellow-200"
  },
  {
    title: "Shop Smart, Shop Fast",
    desc: "Enjoy fast delivery and secure checkout on all your favorite items.",
    cta: { text: "Start Shopping", link: "/", color: "bg-blue-600 hover:bg-blue-700" },
    bg: "from-blue-100 to-blue-300"
  }
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds per slide
    return () => clearTimeout(timer);
  }, [current]);

  const slide = slides[current];

  return (
    <section
      className={`w-full bg-gradient-to-br ${slide.bg} py-16 px-4 flex flex-col items-center text-center transition-all duration-700`}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-blacks">
        {slide.title}
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-500 mb-8 max-w-2xl">
        {slide.desc}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to={slide.cta.link}
          className={`${slide.cta.color} text-white px-6 py-3 rounded font-semibold transition`}
        >
          {slide.cta.text}
        </Link>
      </div>
      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-gray-800 dark:bg-yellow-300" : "bg-gray-400 dark:bg-gray-600"} transition`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;