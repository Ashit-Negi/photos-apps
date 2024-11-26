import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md z-50">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white hover:text-yellow-500 transition-all duration-300">
          <Link to="/" className="transform hover:scale-105">
            Ashit Negi
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
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
                to="/"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="text-lg font-medium text-gray-800 hover:text-yellow-500 transition duration-300 transform hover:scale-110"
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
