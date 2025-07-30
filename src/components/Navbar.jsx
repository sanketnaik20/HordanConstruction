import React from "react";
 // Update path to your actual image

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Image + Site Name */}
        <div className="flex items-center space-x-3">
          <img src="img.png" alt="Hordan Logo" className="h-8 w-8 object-contain" />
          <span className="text-xl font-bold text-gray-800">
            Hordan Construction
          </span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </a>
          <a href="#projects" className="text-gray-600 hover:text-blue-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
