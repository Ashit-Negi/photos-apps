import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')", // Replace with your image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Capturing Life's <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
            Beautiful Moments
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl">
          Experience photography like never before with stunning visuals that
          tell your story.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            to="/portfolio"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            View Portfolio
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
