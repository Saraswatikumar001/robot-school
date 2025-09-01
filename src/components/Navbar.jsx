// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import logo from "../assets/img/roboticslogo.png";
// import { Link } from "react-router-dom";

// import { FaHome, FaBook, FaComments, FaEnvelope, FaProjectDiagram } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", to: "/", icon: <FaHome className="inline-block mr-2" /> },
//     { name: "About Us", to: "/about", icon: <FaBook className="inline-block mr-2" /> },
//     { name: "Case Study", to: "/casestudy", icon: <FaProjectDiagram className="inline-block mr-2" /> },
//     { name: "Testimonials", to: "/testimonials", icon: <FaComments className="inline-block mr-2" /> },
//     { name: "Contact Us", to: "/contact", icon: <FaEnvelope className="inline-block mr-2" /> },
//   ];

//   return (
//     <nav className="bg-[#04394e] text-white shadow-xl py-4 px-6 sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <motion.div
//           className="flex items-center gap-3"
//           animate={{ y: [0, -5, 0] }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <img
//             src={logo}
//             alt="Robotics School Logo"
//             className="h-16 w-16 rounded-full border-4 border-[#fa8b41] shadow-lg"
//           />
//         </motion.div>

//         {/* Desktop Links */}
//         <ul className="hidden md:flex space-x-8 font-medium">
//           {navLinks.map((link, index) => (
//             <motion.li
//               key={index}
//               whileHover={{ scale: 1.1, rotate: 3 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <Link
//                 to={link.to}
//                 className="relative flex items-center text-white hover:text-[#fa8b41] transition-colors duration-300"
//               >
//                 {link.icon} {link.name}
//                 <span className="absolute left-0 -bottom-1 w-0 h-1 bg-[#fa8b41] transition-all duration-300 hover:w-full rounded-full"></span>
//               </Link>
//             </motion.li>
//           ))}
//         </ul>

//         {/* Enroll Now Button (Desktop) */}
//         <motion.a
//           href="#"
//           className="hidden md:inline-block bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-white"
//           animate={{
//             scale: [1, 1.05, 1],
//             opacity: [1, 0.85, 1],
//           }}
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           whileHover={{
//             scale: 1.15,
//             boxShadow: "0px 0px 15px rgba(250,139,65,0.8)",
//           }}
//         >
//           Enroll Now
//         </motion.a>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-[#fa8b41] text-3xl hover:scale-110 transition-transform duration-300"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-[#04394e] mt-4 rounded-lg shadow-lg"
//         >
//           <ul className="flex flex-col items-center gap-4 py-4">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   to={link.to}
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center text-white hover:text-[#fa8b41] transition-colors duration-300 text-lg"
//                 >
//                   {link.icon} {link.name}
//                 </Link>
//               </li>
//             ))}
//             <li>
//               <motion.a
//                 href="#"
//                 onClick={() => setIsOpen(false)}
//                 className="bg-[#fa8b41] text-white py-2 px-6 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-white"
//                 animate={{
//                   scale: [1, 1.05, 1],
//                   opacity: [1, 0.85, 1],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 whileHover={{
//                   scale: 1.15,
//                   boxShadow: "0px 0px 15px rgba(250,139,65,0.8)",
//                 }}
//               >
//                 Enroll Now
//               </motion.a>
//             </li>
//           </ul>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/roboticslogo.png";
import { motion } from "framer-motion";
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
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-600 py-2 px-8 flex justify-between items-center">
        {/* Left Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#F78A41]" />
            <a href="https://maps.app.goo.gl/JRGqzZWU73UFtnFx5" className="hover:text-[#FA8B41] transition-colors duration-300 ease-in-out cursor-pointer">AB 53/1, Prafulla Kanan West, Kestopur Kolkata -700101, West Bengal, India</a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#F78A41]" />
            <a href="tel:03348028513" className="hover:text-[#FA8B41] transition-colors duration-300 ease-in-out cursor-pointer">+(033) 48028513</a>
          </div>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaClock className="text-[#F78A41]" />
            <span className="hover:text-[#FA8B41] transition-colors duration-300 ease-in-out">Sun–Fri: 8.00AM - 4.00PM | Sat: Closed</span>
          </div>
          {/* Social Icons */}
          <div className="flex lg:flex-row flex-col gap-3 text-[#04394E]">
            <a
              href="https://www.facebook.com/fusiontechlab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F78A41] cursor-pointer"
            >
              <FaFacebook />
            </a>

            <a
              href="https://x.com/fusiontechlab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F78A41] cursor-pointer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/14489134/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F78A41] cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#04394E] py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
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
          </h1>

          {/* Menu */}
          <ul className="hidden md:flex gap-6 bg-white rounded-full px-6 py-3 shadow-md">
            <li className="flex items-center gap-2">
              <FaHome className="text-[#F78A41] transition-colors duration-300 ease-in-out" />
              <Link 
                to="/"
                className="text-[#F78A41] font-semibold transition-colors duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaProjectDiagram className="text-gray-500 transition-colors duration-300 ease-in-out" />
              <Link
                to="/about"
                className="text-gray-700 hover:text-[#F78A41]  transition-colors duration-300 ease-in-out font-semibold"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaBookOpen className="text-gray-500 transition-colors duration-300 ease-in-out" />
              <Link
                to="/casestudy"
                className="text-gray-700 hover:text-[#F78A41] font-semibold transition-colors duration-300 ease-in-out"
              >
                Case Study
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaComments className="text-gray-500 transition-colors duration-300 ease-in-out" />
              <Link
                to="/testimonials"
                className="text-gray-700 hover:text-[#F78A41] font-semibold transition-colors duration-300 ease-in-out"
              >
                Testimonials
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500 transition-colors duration-300 ease-in-out" />
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#F78A41] font-semibold transition-colors duration-300 ease-in-out"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Enroll Now Button (Desktop) */}
          <motion.a
            href="/"
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


          {/* Mobile Menu (hamburger) */}
          <div className="md:hidden text-white text-2xl cursor-pointer">
            ☰
          </div>
        </div>
      </nav>
    </header>
  );
}
