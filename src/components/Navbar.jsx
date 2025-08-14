import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/img/roboticslogo.png";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaComments, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/", icon: <FaHome className="inline-block mr-2" /> },
    { name: "About Us", to: "/about", icon: <FaBook className="inline-block mr-2" /> },
    { name: "Case Study", to: "/casestudy", icon: <FaProjectDiagram className="inline-block mr-2" /> },
    { name: "Testimonials", to: "/testimonials", icon: <FaComments className="inline-block mr-2" /> },
    { name: "Contact Us", to: "/contact", icon: <FaEnvelope className="inline-block mr-2" /> },
  ];

  return (
    <nav className="bg-[#04394e] text-white shadow-xl py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={logo}
            alt="Robotics School Logo"
            className="h-16 w-16 rounded-full border-4 border-[#fa8b41] shadow-lg"
          />
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={link.to}
                className="relative flex items-center text-white hover:text-[#fa8b41] transition-colors duration-300"
              >
                {link.icon} {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#fa8b41] transition-all duration-300 hover:w-full rounded-full"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Enroll Now Button (Desktop) */}
        <motion.a
          href="#"
          className="hidden md:inline-block bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-white"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.85, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 15px rgba(250,139,65,0.8)",
          }}
        >
          Enroll Now
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#fa8b41] text-3xl hover:scale-110 transition-transform duration-300"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#04394e] mt-4 rounded-lg shadow-lg"
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="block flex items-center text-white hover:text-[#fa8b41] transition-colors duration-300 text-lg"
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
            <li>
              <motion.a
                href="#"
                onClick={() => setIsOpen(false)}
                className="bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-white"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.85, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0px 0px 15px rgba(250,139,65,0.8)",
                }}
              >
                Enroll Now
              </motion.a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
