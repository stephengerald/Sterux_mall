import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../context/CartContext';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  // Calculate total items in cart
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${search}`);
    setSearch('');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-400 text-black shadow transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-4 transition-all duration-300">
        <div className="text-2xl font-bold tracking-wide mb-2 sm:mb-0 transition-colors duration-300">
          Sterux Mall
        </div>
        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xs mb-2 sm:mb-0 sm:mr-4 border border-black rounded transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-3 pr-10 py-2 rounded border-none text-black transition-colors duration-300 focus:bg-yellow-100"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </div>
        </form>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-lg font-medium items-center">
          <li>
            <Link to="/" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-200 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-200 transition-colors duration-300">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-blue-200 transition-colors duration-300">Login</Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-blue-200 transition-colors duration-300">Register</Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="hover:text-blue-200 transition-colors duration-300">
              <FaShoppingCart className="text-xl transition-transform duration-300 hover:scale-110" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;