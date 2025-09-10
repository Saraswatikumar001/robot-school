// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/roboticslogo.png";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaProjectDiagram,
  FaBookOpen,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/", icon: <FaHome /> },
    { name: "About Us", to: "/about", icon: <FaProjectDiagram /> },
    { name: "Case Study", to: "/casestudy", icon: <FaBookOpen /> },
    { name: "Testimonials", to: "/testimonials", icon: <FaComments /> },
    { name: "Contact Us", to: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-600 py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Info */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#F78A41]" />
            <a
              href="https://maps.app.goo.gl/JRGqzZWU73UFtnFx5"
              className="hover:text-[#FA8B41] transition-colors duration-300 ease-in-out"
            >
              AB 53/1, Prafulla Kanan West, Kolkata
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#F78A41]" />
            <a
              href="tel:03348028513"
              className="hover:text-[#FA8B41] transition-colors duration-300 ease-in-out"
            >
              +(033) 48028513
            </a>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#F78A41]" />
            <span>Sun–Fri: 8.00AM - 4.00PM</span>
          </div>
          {/* Social Icons */}
          <div className="flex gap-3 text-[#04394E]">
            <a href="https://www.facebook.com/fusiontechlab" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-[#F78A41] cursor-pointer" />
            </a>
            <a href="https://x.com/fusiontechlab" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-[#F78A41] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/company/14489134/admin/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-[#F78A41] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#04394E] py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <div
            className="flex items-center gap-3"       
          >
            <img
              src={logo}
              alt="Robotics School Logo"
              className="h-20 w-20 rounded-full border-4 border-[#fa8b41] shadow-lg"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 bg-white rounded-full px-6 py-3 shadow-md">
            {navLinks.map((link, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-gray-500">{link.icon}</span>
                <Link
                  to={link.to}
                  className="text-gray-700 hover:text-[#F78A41] font-semibold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Enroll Now Button (Desktop) */}
          <motion.a
            href="/enroll"
            className="hidden md:inline-block bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-white"
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.85, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.15, boxShadow: "0px 0px 15px rgba(250,139,65,0.8)" }}
          >
            Enroll Now
          </motion.a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#04394E] px-6 py-4 space-y-4"
            >
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="block text-white hover:text-[#FA8B41] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    {link.icon}
                    {link.name}
                  </div>
                </Link>
              ))}
              <motion.a
                href="/enroll"
                onClick={() => setIsOpen(false)}
                className="block bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Enroll Now
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
