import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import CartContext from '../context/CartContext';

function Navbar() {
  const [search, setSearch] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${search}`);
    setSearch('');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-400 text-black dark:bg-gray-900 dark:text-gray-100 shadow transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition-all duration-300">
          {/* Top row for small screens, full row for large */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <div className="text-2xl font-bold tracking-wide transition-colors duration-300">
              Sterux Mall
            </div>
            {/* Hamburger only on small screens */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-2xl focus:outline-none sm:hidden ml-4"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
            {/* Main nav for large screens */}
            <div className="hidden sm:flex items-center space-x-6 ml-8">
              <Link to="/" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Home</Link>
              <Link to="/about" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">About</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Contact</Link>
              <Link to="/register" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Register</Link>
              <Link to="/login" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Login</Link>
              <div className="relative">
                <Link to="/cart" className="hover:text-blue-200 transition-colors duration-300">
                  <FaShoppingCart className="text-xl transition-transform duration-300 hover:scale-110" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
            </div>
            {/* Home, Cart, and Dark Mode for small screens */}
            <div className="flex items-center space-x-4 sm:hidden">
              <Link to="/" className="hover:text-blue-200 transition-colors duration-300 text-lg font-medium">Home</Link>
              <div className="relative">
                <Link to="/cart" className="hover:text-blue-200 transition-colors duration-300">
                  <FaShoppingCart className="text-xl transition-transform duration-300 hover:scale-110" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 transition"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
          {/* Search bar: below on mobile, inline on sm+ */}
          <form
            onSubmit={handleSearch}
            className="mt-3 sm:mt-0 w-full max-w-xs sm:max-w-md border border-black dark:border-gray-700 rounded transition-shadow duration-300 hover:shadow-lg sm:ml-8 sm:w-80"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-3 pr-10 py-2 rounded border-none text-black dark:text-gray-100 dark:bg-gray-800 transition-colors duration-300 focus:bg-yellow-100 dark:focus:bg-gray-700"
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
        </div>
      </nav>
      {/* Sidebar for small screens */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div className="w-64 bg-white dark:bg-gray-900 h-full shadow-lg p-6 flex flex-col">
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end text-2xl mb-6"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <Link to="/about" className="mb-4 text-lg font-medium hover:text-blue-600" onClick={() => setSidebarOpen(false)}>About</Link>
            <Link to="/contact" className="mb-4 text-lg font-medium hover:text-blue-600" onClick={() => setSidebarOpen(false)}>Contact</Link>
            <Link to="/login" className="mb-4 text-lg font-medium hover:text-blue-600" onClick={() => setSidebarOpen(false)}>Login</Link>
            <Link to="/register" className="mb-4 text-lg font-medium hover:text-blue-600" onClick={() => setSidebarOpen(false)}>Register</Link>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </>
  );
}

export default Navbar;