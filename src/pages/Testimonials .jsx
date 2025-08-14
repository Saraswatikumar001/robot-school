import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { section } from "framer-motion/client";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Parent",
    feedback:
      "My son absolutely loves the robotics classes! The teachers are very friendly and the lessons are fun yet educational.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Student",
    feedback:
      "Building my first robot was the best experience ever! I learned so much while having fun.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohan Mehta",
    role: "Parent",
    feedback:
      "This school has sparked my daughter's interest in technology. She’s now more curious and creative than ever!",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="py-10 rounded shadow-lg">
          <motion.h1
            className="text-center text-5xl md:text-6xl font-bold text-orange-500 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2,
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 15px rgba(255,255,255,0.8)",
            }}
          >
            Testimonials
          </motion.h1>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-[#fce8dc] to-[#fcccae] text-white">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[#04394e] text-sm font-semibold">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="text-[#ffbe93]">/</span>
            <span className="text-[#fa8b41]">Testimonials</span>
          </div>

          {/* Animated Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#04394e]"
            initial={{ opacity: 0, y: -40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ color: "#04394e" }}
              animate={{ color: "#fa8b41" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
              What Our Students & Parents Say
            </motion.span>
          </motion.h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-white text-[#04394e] p-6 rounded-2xl shadow-xl relative overflow-hidden hover:shadow-2xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Decorative Bubble */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c75218] rounded-full opacity-40"></div>

                {/* Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto border-4 border-[#fa8b41] mb-4"
                />

                {/* Feedback */}
                <p className="italic mb-4">"{t.feedback}"</p>

                {/* Name & Role */}
                <h3 className="font-bold text-lg">{t.name}</h3>
                <span className="text-sm text-gray-500">{t.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>


  );
};

export default Testimonials;
