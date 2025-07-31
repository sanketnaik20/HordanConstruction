import React, { useState, useEffect, useCallback } from "react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const handleSmoothScroll = useCallback((e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setMenuOpen(false);
      const navbarHeight = 70;
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: targetElement, offsetY: navbarHeight },
        ease: "power2.inOut"
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'projects', 'contact'];
      const navbarHeight = 70;

      let currentSectionId = '';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            currentSectionId = sectionId;
            break;
          }
        }
      }

      document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('text-blue-600', 'font-semibold');
          link.classList.remove('text-gray-600');
        } else {
          link.classList.remove('text-blue-600', 'font-semibold');
          link.classList.add('text-gray-600');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="cursor-pointer"
          aria-label="Go to top of the page"
        >
          <div className="flex items-center space-x-3">
            <img src="img.png" alt="Hordan Logo" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold text-gray-800">Hordan Construction</span>
          </div>
        </a>

        <div className="space-x-6 hidden md:flex">
          <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
          {/* <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a> */}
          <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>

        <button className="md:hidden focus:outline-none" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
           <a href="#hero" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'hero')}>Home</a>
          {/* <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a> */}
          <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;