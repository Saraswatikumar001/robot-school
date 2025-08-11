import React from "react";
import bgImage from "../assets/img/girls-female.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-start">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Overlay (optional for darkening effect) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-xl px-8 text-white">
        <h1 className="text-4xl font-bold leading-snug">          
          Empowering Young Minds with Robotics Excellence
        </h1>
        <p className="mt-4 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="bg-[#2d26f5] hover:bg-blue-800 text-white border-5 border-white mt-5  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
