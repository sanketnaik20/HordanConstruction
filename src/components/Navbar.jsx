import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3">
          <img src="img.png" alt="Hordan Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-gray-800">Hordan Construction</span>
        </div>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
          <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
