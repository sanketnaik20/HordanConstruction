import React from "react";
import { motion, animate } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 70;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      const scrollElement = document.scrollingElement || document.documentElement;
      animate(scrollElement.scrollTop, targetPosition, {
        duration: 0.0,
        ease: "easeInOut",
        onUpdate: (latest) => {
          scrollElement.scrollTop = latest;
        },
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src="/building.jpeg"
          alt="Construction Background"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="relative z-20 max-w-3xl">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Building Dreams, One Brick at a Time.
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Hordan Construction brings your vision to life with quality,
          precision, and trust. From foundations to finishes — we deliver
          excellence.
        </motion.p>
       <motion.div
  className="flex flex-col sm:flex-row justify-center gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }} // Reduced delay
>
  <Button
    variant="outline"
    onClick={(e) => handleSmoothScroll(e, "contact")}
    className="text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-500 transition-all duration-300 shadow-md hover:shadow-lg touch-manipulation"
  >
    Contact
  </Button>

  <Button
    variant="outline"
    onClick={(e) => handleSmoothScroll(e, "projects")}
    className="text-black w-fit sm:w-auto px-8 py-3 rounded-full font-semibold hover:bg-gray-500 transition-all duration-300 shadow-md hover:shadow-lg touch-manipulation"
  >
    View Projects
  </Button>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
