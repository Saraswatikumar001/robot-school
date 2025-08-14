import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      {/* Heading Section */}
      <section className="py-12 bg-gradient-to-r from-[#fce8dc] via-[#fcccae] to-[#fce8dc]">
        <motion.h1
          className="text-center text-5xl md:text-6xl font-extrabold drop-shadow-xl bg-gradient-to-r from-[#fa8b41] via-[#ff6f3c] to-[#c75218] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 25px rgba(255,255,255,0.9)",
          }}
        >
          Testimonials
        </motion.h1>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-[#fff7f3] to-[#fde7d6]">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[#04394e] text-sm font-semibold">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <span className="text-[#5d5c5b]">/</span>
            <span className="text-[#fa8b41]">Testimonials</span>
          </div>

          {/* Section Subtitle */}
          <motion.p
            className="text-center text-lg text-[#313338] max-w-2xl font-semibold mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Here’s what our amazing students and supportive parents have to say
            about their journey with us.
          </motion.p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg relative group overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#fa8b41] to-[#c75218]" />

                {/* Profile Image */}
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-[#fa8b41] shadow-md mx-auto mb-6"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Feedback */}
                <p className="text-gray-600 italic text-center mb-6 leading-relaxed">
                  "{t.feedback}"
                </p>

                {/* Name & Role */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-[#04394e]">
                    {t.name}
                  </h3>
                  <span className="text-sm text-[#fa8b41] font-medium">
                    {t.role}
                  </span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#fa8b41]/10 to-[#c75218]/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
