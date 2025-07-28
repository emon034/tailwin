import React from "react";

const Mail = () => {
  return (
    <section className="bg-base-300 py-16 md:py-20 px-4 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">📧 Stay Updated</h2>
      <div className="mt-4 h-1 w-20 bg-accent mx-auto"></div>
      <div className="max-w-md mx-auto mt-8">
        <p className=" text-shadow-gray-700 text-center mb-6">Subscribe to our newsletter for the latest updates and exclusive content!</p>
        <form className="flex flex-col sm:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg mb-4 sm:mb-0 sm:mr-4"
          />
          <button
            type="submit"
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
export default Mail;