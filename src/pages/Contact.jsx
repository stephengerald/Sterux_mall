import React from "react";

function Contact() {
  return (
    <div className="min-h-[60vh] bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-2xl font-bold mb-4 text-blue-700 dark:text-yellow-300">Contact Us</h1>
      <p className="mb-2 text-lg">Email: <a href="mailto:support@steruxmall.com" className="underline text-blue-600 dark:text-yellow-400">support@steruxmall.com</a></p>
      <p className="mb-2 text-lg">Phone: <a href="tel:+1234567890" className="underline text-blue-600 dark:text-yellow-400">+123 456 7890</a></p>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
        We are here to help you 24/7. Reach out to us with any questions or feedback!
      </p>
    </div>
  );
}

export default Contact;