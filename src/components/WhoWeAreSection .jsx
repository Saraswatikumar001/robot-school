import React from 'react';
import { motion } from 'framer-motion';
import kidsImage from '../assets/img/robot-1.jpg';

const WhoWeAreSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20 bg-white">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-orange-500 font-semibold uppercase mb-2">Who We Are</p>
                <p className="text-2xl font-bold rounded-lg text-[#04394e] pb-3">
                    Empowering the Next Generation of Innovators
                </p>
                <p>
                    We believe every child holds the potential to shape the future.
                    Through hands-on learning, creative thinking, and collaborative
                    problem-solving, we empower kids to engineer their dreams and bring
                    ideas to life with robotics.
                </p>
                <p>
                    Founded by passionate educators and technologists,
                    our school is on a mission to make STEM education engaging,
                    accessible, and impactful. From building their first robot to
                    programming intelligent systems, students at our academy develop
                    not only technical skills but also the confidence and curiosity
                    to tackle real-world challenges.
                </p>

                {/* Founder Info */}
                <div className="flex items-center space-x-4 mt-4 border-t pt-4">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMHCDMtqM_45FAek0yHA1bNk79rzvO1C1Pg&s"
                        alt="Founder"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-gray-900">John Doe</p>
                        <p className="text-orange-500 font-bold text-sm uppercase">Founder</p>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="relative md:w-1/2 ps-30">
                <motion.img
                    src={kidsImage}
                    alt="Kids with Robot"
                    className="rounded-full w-96 h-96 shadow-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: [0, -10, 0], // floating effect
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
                <motion.div
                    className="border-4 border-b-white absolute top-8 right-20 bg-orange-500 text-white rounded-full px-6 py-4 text-center transform translate-x-1/3 -translate-y-1/3 shadow-md"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <p className="text-3xl font-bold">47K+</p>
                    <p className="text-sm uppercase font-semibold tracking-wide">Member Active</p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
