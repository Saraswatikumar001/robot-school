// src/pages/ContactPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-6">
        <nav className="text-sm text-gray-700">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-[#fa8b41]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#04394e] font-medium">Contact Us</li>
          </ol>
        </nav>
      </div>
      
      <div className="flex flex-col items-center mb-8">        
        <h1 className="text-5xl font-bold text-[#04394e]">
          Get in <span className="text-[#fa8b41]">Touch</span> With Us
        </h1>
        <p className="text-gray-600 mt-2 text-center max-w-lg">
          We’d love to hear from you! Fill out the form below and our friendly
          team will get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border-t-4 border-[#fa8b41]">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#fa8b41]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-[#fa8b41]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:border-[#fa8b41]"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              className="w-full bg-[#f7b78d] text-black py-3 rounded-full font-semibold text-2xl shadow-lg hover:bg-[#e07a36] transition"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
