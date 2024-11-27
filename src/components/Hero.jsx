import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2022-02-professional-camera-blurred.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          <span className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-white">
            Ashit Negi
          </span>
          <br />
          <span className="text-lg sm:text-xl lg:text-2xl text-gray-200">
            Photography Portfolio
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl">
          Experience photography like never before with stunning visuals that
          tell your story.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link
            to="/portfolio"
            className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-300"
          >
            View Portfolio
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
