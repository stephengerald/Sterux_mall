import React from "react";

function About() {
  return (
    <div className="min-h-[60vh] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-12 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-yellow-300">About Us</h1>
      <p className="mb-2 max-w-2xl text-center">
        Welcome to Sterux Mall! We are dedicated to providing the best user experience and the latest products at unbeatable prices.
      </p>
      <p className="mb-2 max-w-2xl text-center">
        Our mission is to make online shopping easy, secure, and enjoyable for everyone. Thank you for choosing us!
      </p>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sterux Mall. All rights reserved.
      </p>
    </div>
  );
}

export default About;