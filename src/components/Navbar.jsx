import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-yellow-500">Ashit Negi</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 lg:relative lg:w-auto lg:h-auto lg:translate-x-0 lg:flex`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 mt-16 lg:mt-0">
            <li>
              <Link
                to="/" // Home route
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about" // About route
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services" // Services route
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio" // Portfolio route
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact" // Contact route
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300"
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
