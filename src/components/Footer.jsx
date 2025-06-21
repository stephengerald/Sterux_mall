import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-yellow-400 text-black py-6 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-center text-sm">
        <div>
          &copy; {new Date().getFullYear()} Sterux Mall. All rights reserved.
        </div>
        <div className="mt-2 sm:mt-0">
          <a href="mailto:support@steruxmall.com" className="underline hover:text-blue-700 transition">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;