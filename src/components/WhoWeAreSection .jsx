// src/components/WhoWeAreSection.jsx
import React from "react";
import { motion } from "framer-motion";
import kidsImage from "../assets/img/robot-1.jpg";

const WhoWeAreSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20 bg-white">
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 lg:px-0 px-2 sm:px-4">
        <p className="text-orange-500 font-semibold uppercase mb-2 text-sm sm:text-base">
          Who We Are
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#04394e] pb-3 leading-snug">
          Empowering the Next Generation of Innovators
        </p>
        <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">
          We believe every child holds the potential to shape the future.
          Through hands-on learning, creative thinking, and collaborative
          problem-solving, we empower kids to engineer their dreams and bring
          ideas to life with robotics.
        </p>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          Founded by passionate educators and technologists, our school is on a
          mission to make STEM education engaging, accessible, and impactful.
          From building their first robot to programming intelligent systems,
          students at our academy develop not only technical skills but also the
          confidence and curiosity to tackle real-world challenges.
        </p>

        {/* Founder Info */}
        <div className="flex items-center space-x-4 mt-6 border-t pt-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s"
            alt="Founder"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">John Doe</p>
            <p className="text-orange-500 font-bold text-xs sm:text-sm uppercase">
              Founder
            </p>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative md:w-1/2 flex justify-center">
        {/* Floating Image */}
        <motion.img
          src={kidsImage}
          alt="Kids with Robot"
          className="
            rounded-full shadow-xl 
            w-44 h-44        /* mobile */
            sm:w-60 sm:h-60  /* small tablets */
            md:w-72 md:h-72  /* medium screens */
            lg:w-96 lg:h-96  /* large screens */
          "
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Floating Badge */}
        <motion.div
          className="
            absolute 
            top-2 right-2       /* mobile */
            sm:top-4 sm:right-6
            md:top-6 md:right-10
            lg:top-10 lg:right-14
            bg-orange-500 text-white rounded-full 
            px-3 py-1 sm:px-4 sm:py-2 md:px-6 md:py-4
            text-center shadow-md
            border-2 md:border-4 border-white
          "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">
            47K+
          </p>
          <p className="text-[10px] sm:text-xs md:text-base uppercase font-semibold tracking-wide">
            Member Active
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
