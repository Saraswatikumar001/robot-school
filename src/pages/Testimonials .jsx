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
      <section className="py-16 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-orange-500 drop-shadow-md"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 25px rgba(255,165,0,0.8)",
            }}
          >
            Testimonials ✨
          </motion.h1>

          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Parents and students share their experience with our robotics journey.
          </p>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-[#fff7f3] to-[#fde7d6]">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-[#04394e] text-sm font-semibold">
            <Link to="/" className="cursor-pointer hover:text-[#fa8b41]">
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
                className="relative bg-gradient-to-b from-white to-[#fff3eb] rounded-3xl shadow-xl p-8 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Decorative Circle Glow */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-tr from-[#fa8b41] to-[#c75218] opacity-20 blur-2xl"></div>

                {/* Profile Image */}
                <motion.img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full border-4 border-[#fa8b41] shadow-lg mb-6 relative z-10"
                  whileHover={{ rotate: 6 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Feedback */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  “{t.feedback}”
                </p>

                {/* Name & Role */}
                <div>
                  <h3 className="text-lg font-bold text-[#04394e]">
                    {t.name}
                  </h3>
                  <span className="text-sm text-[#fa8b41] font-medium">
                    {t.role}
                  </span>
                </div>

                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#fa8b41] transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
