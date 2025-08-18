import React from "react";
import { FaSchool, FaCampground, FaVrCardboard } from "react-icons/fa";
import { motion } from "framer-motion";

const ProgramOffering = () => {
  const programs = [
    {
      icon: <FaSchool className="text-4xl text-[#033f70]" />,
      title: "After School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaCampground className="text-4xl text-blue-400" />,
      title: "Summer Camps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaVrCardboard className="text-4xl text-orange-400" />,
      title: "Virtual Programs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaSchool className="text-4xl text-[#033f70]" />,
      title: "After School",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaCampground className="text-4xl text-blue-400" />,
      title: "Summer Camps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      icon: <FaVrCardboard className="text-4xl text-orange-400" />,
      title: "Virtual Programs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  // Container stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  // Fun bounce card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <section className="bg-gradient-to-r from-[#173c5c] to-[#44a5f9] py-16 relative overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-[#e8792f] uppercase tracking-wider text-sm font-semibold">
          Program Offering
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          Experience the Difference Our <br /> Enrichment Programs Can Make!
        </h2>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {programs.map((program, idx) => (
          <motion.div
            key={`${program.title}-${idx}`} // ensures unique key
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              rotate: [0, 1.5, -1.5, 0], // playful wiggle
              transition: { duration: 0.4 },
            }}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <motion.div
              className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {program.icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-[#04394e] mb-3">
              {program.title}
            </h3>
            <p className="text-[#04394e] text-sm leading-relaxed mb-6">
              {program.description}
            </p>
            <button className="bg-[#f26b0c] hover:bg-orange-600 text-white border-4 border-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
              LEARN MORE
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProgramOffering;
