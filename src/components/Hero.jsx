import React from "react";
import { Button } from "./ui/button";// ShadCN UI button

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gray-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Building Dreams, <br /> One Brick at a Time.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Hordan Construction brings your vision to life with quality,
            precision, and trust. From foundations to finishes — we deliver
            excellence.
          </p>
          <div className="flex gap-4">
            <Button>Get a Quote</Button>
            <a href="#projects">
              <Button variant="outline">View Projects</Button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-80 md:h-full overflow-hidden rounded-xl shadow-lg">
          <img
            src="building.jpeg"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
