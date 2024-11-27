import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-cover bg-center shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link to="/" className="hover:text-yellow-500">
            Ashit
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-black mb-1 text-black"></div>
          <div className="w-6 h-0.5 bg-black mb-1 text-black"></div>
          <div className="w-6 h-0.5 bg-black text-black"></div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-60 z-40"
            onClick={() => setIsOpen(false)} // Closes menu on overlay click
          ></div>
        )}

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 right-0 w-64 h-full bg-cover bg-center shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:relative lg:w-auto lg:h-auto lg:translate-x-0 lg:flex z-50`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 mt-16 lg:mt-0 p-6 lg:p-0 justify-end lg:justify-end font-montserrat">
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
