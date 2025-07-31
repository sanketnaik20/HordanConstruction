import React, { useState, useEffect, useCallback } from "react";
import { animate } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 70;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      const scrollElement = document.scrollingElement || document.documentElement;
      animate(scrollElement.scrollTop, targetPosition, {
        duration: 0,
        ease: "easeInOut",
        onUpdate: (latest) => {
          scrollElement.scrollTop = latest;
        },
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "services", "projects", "contact"];
      const navbarHeight = 70;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            setActiveSection(sectionId);
            break; 
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClasses = useCallback(
    (sectionId) => {
      const baseClasses =
        "transition-colors duration-300 hover:text-blue-600 relative";
      const isActive = activeSection === sectionId;

      return `${baseClasses} ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-600"
      }`;
    },
    [activeSection]
  );

  const getMobileLinkClasses = useCallback(
    (sectionId) => {
      const baseClasses =
        "block transition-colors duration-300 hover:text-blue-600 py-2";
      const isActive = activeSection === sectionId;

      return `${baseClasses} ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
      }`;
    },
    [activeSection]
  );

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, "hero")}
          className="cursor-pointer group"
          aria-label="Go to top of the page"
        >
          <div className="flex items-center space-x-3">
            <img
              src="img.png"
              alt="Hordan Logo"
              className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
              Hordan Construction
            </span>
          </div>
        </a>

        <div className="space-x-8 hidden md:flex">
          <a
            href="#hero"
            className={getLinkClasses("hero")}
            onClick={(e) => handleSmoothScroll(e, "hero")}
          >
            Home
            {activeSection === "hero" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </a>
          <a
            href="#projects"
            className={getLinkClasses("projects")}
            onClick={(e) => handleSmoothScroll(e, "projects")}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </a>
          <a
            href="#services"
            className={getLinkClasses("services")}
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
            {activeSection === "services" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </a>
          <a
            href="#contact"
            className={getLinkClasses("contact")}
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
            )}
          </a>
        </div>

        <button
          className="md:hidden focus:outline-none transition-transform duration-200 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          <a
            href="#hero"
            className={getMobileLinkClasses("hero")}
            onClick={(e) => handleSmoothScroll(e, "hero")}
          >
            Home
          </a>
          <a
            href="#services"
            className={getMobileLinkClasses("services")}
            onClick={(e) => handleSmoothScroll(e, "services")}
          >
            Services
          </a>
          <a
            href="#projects"
            className={getMobileLinkClasses("projects")}
            onClick={(e) => handleSmoothScroll(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={getMobileLinkClasses("contact")}
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;