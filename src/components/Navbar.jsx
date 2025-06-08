import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
// This is a simple Navbar component for a React application using Tailwind CSS.

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold tracking-wide mb-2 sm:mb-0">
          Sterux Mall
        </div>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-lg font-medium items-center">
          <li>
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-200 transition">
              <FaShoppingCart className="text-xl" />
          </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-200 transition">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-blue-200 transition">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
// This Navbar component includes links to Home, About, Contact, Cart, Login, and Register pages.