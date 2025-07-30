import React, { useEffect } from "react";
import { Button } from "./ui/button"; // ShadCN UI button
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 70; // Adjust based on your layout
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: targetElement,
          offsetY: navbarHeight,
        },
        ease: "power2.inOut",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "services", "projects", "contact"];
      const navbarHeight = 70;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (section && navLink) {
          const rect = section.getBoundingClientRect();
          const isActive =
            rect.top <= navbarHeight && rect.bottom >= navbarHeight;

          if (isActive) {
            document.querySelectorAll("nav a").forEach((link) => {
              link.classList.remove("text-blue-600", "font-semibold");
              link.classList.add("text-gray-600");
            });

            navLink.classList.remove("text-gray-600");
            navLink.classList.add("text-blue-600", "font-semibold");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <img
        src="/building.jpeg"
        alt="Construction Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-3xl px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Building Dreams, One Brick at a Time.
        </h1>
        <p className="text-lg text-white mb-6">
          Hordan Construction brings your vision to life with quality,
          precision, and trust. From foundations to finishes — we deliver
          excellence.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={(e) => handleSmoothScroll(e, "contact")}>
            Contact
          </Button>
          <Button variant="outline" onClick={(e) => handleSmoothScroll(e, "projects")}>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
