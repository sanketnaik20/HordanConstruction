import React from "react";
import { Button } from "./ui/button"; // ShadCN UI button

const Hero = () => {
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
          <Button variant="outline">Contact</Button>
          <a href="#projects">
            <Button variant="outline">View Projects</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
