import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import SingleImg from "../assets/img/robot-single.png";

export default function Footer() {
    return (
        <footer className="bg-[#04394e] text-white relative">
            <div>                
                <motion.img
                    src={SingleImg}
                    className="absolute left-[75%] top-[-20%] w-[220px] h-[180px] z-10"
                    animate={{
                        y: [0, -15, 0],       // Floating up and down
                        rotate: [0, 5, -5, 0], // Gentle rotation
                        scale: [1, 1.05, 1]    // Slight pulsing
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Wave Shape Top */}
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                    <svg
                        className="relative block w-full h-30"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        viewBox="0 0 1200 120"
                    >
                        <path
                            d="M0,0V46.29c47.35,22.24,104.71,29,158,17.39C230.06,51,284.21,25.1,339,17.2c54.64-7.88,108.79,1.89,163,9.77,58.26,8.46,115.64,13.72,173,2.64,57.28-11.06,113.77-35.65,171-41.57,55.12-5.68,110.23,7.48,165,20.48V0Z"
                            fill="#edc039"
                        ></path>
                    </svg>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
                    {/* Top Row - Icons + Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left mb-10 pt-5">
                        {/* Social Icons */}
                        <div className="flex justify-center md:justify-start gap-4 text-2xl">
                            <a href="#" className="hover:text-yellow-400">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="hover:text-yellow-400">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-yellow-400">
                                <FaYoutube />
                            </a>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="font-bold">Phone Number.</p>
                            <a href="tel:+91 (933) 093 99 27" className="text-yellow-300">+91 (933) 093 99 27</a>
                        </div>

                        {/* Email */}
                        <div>
                            <p className="font-bold">Email Address</p>
                            <a href="mailto:ceo@fusiontechlab.com" className="text-yellow-300">ceo@fusiontechlab.com</a>
                        </div>

                        {/* Address */}
                        <div>
                            <p className="font-bold">Our Address</p>
                            <p className="text-yellow-300">
                                201-05 50th Ave, Flushing, NY
                            </p>
                        </div>
                    </div>

                    <hr className="border-blue-400 mb-8" />

                    {/* Bottom Row - Logo, Navigation, Quick Links, Subscribe */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Logo + About */}
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                🤖 RoboTech
                            </h2>
                            <p className="mt-3 text-sm text-blue-100">
                                We offer structured and interesting robotics courses for
                                children of any age. Our courses are designed by IIT-IIM and PhD
                                professors.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <p className="font-bold relative">
                                Navigation.
                                <span className="block w-8 h-1 bg-yellow-400 mt-1"></span>
                            </p>
                            <ul className="mt-3 space-y-1 text-blue-100">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Programs</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <p className="font-bold relative">
                                Quick Links.
                                <span className="block w-8 h-1 bg-yellow-400 mt-1"></span>
                            </p>
                            <ul className="mt-3 space-y-1 text-blue-100">
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Schedule</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>

                        {/* Subscribe */}
                        <div>
                            <p className="font-bold relative">
                                Subscribe.
                                <span className="block w-8 h-1 bg-yellow-400 mt-1"></span>
                            </p>
                            <div className="mt-3 flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="px-3 py-2 rounded bg-white text-black placeholder-blue-400 focus:outline-none"
                                />
                                <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-2 rounded">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <hr className="border-blue-400 mb-4" />

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-between text-sm text-blue-100 text-center md:text-left">
                        <p>© Created by</p>
                        <p>All rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
