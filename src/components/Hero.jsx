import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 70;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
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

      <div className="relative z-20 text-center max-w-3xl px-6">
        <motion.h1
          className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Building Dreams, One Brick at a Time.
        </motion.h1>
        <motion.p
          className="text-lg text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          Hordan Construction brings your vision to life with quality,
          precision, and trust. From foundations to finishes — we deliver
          excellence.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <Button
            variant="outline"
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </Button>
          <Button
            variant="outline"
            onClick={(e) => handleSmoothScroll(e, "projects")}
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
