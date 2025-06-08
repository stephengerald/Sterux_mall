import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-blue-600 text-white shadow">
      {/* Logo or Title */}
      <div className="text-2xl font-bold tracking-wide">
        Sterux Mall
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-8 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-blue-200 transition">Home</Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-blue-200 transition">Register</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-blue-200 transition">Login</Link>
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
      </ul>
    </nav>
  );
}

export default Navbar;