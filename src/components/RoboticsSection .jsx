import React from 'react';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import robot from '../assets/img/robot.jpg';

const RoboticsSection = () => {
    return (
        <section className="flex flex-col items-center gap-10 px-6 py-12 bg-white md:px-16 md:flex-row">

            {/* Left: Image with Play Button */}
            <motion.div
                className="relative w-full h-full p-4 bg-white md:w-1/2 rounded-3xl me-5"
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 8 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.img
                    src={robot}
                    alt="Kids working on robotics"
                    className="object-cover w-full rounded-2xl"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Animated Play Button */}
                <motion.a
                    className="
                    absolute 
                    left-1/2 top-1/2 
                    -translate-x-1/2 -translate-y-1/2
                    sm:left-[70%] sm:top-[50%] 
                    md:left-[80%] md:top-[45%] 
                    lg:left-[101%] lg:top-[50%] 
                    flex items-center justify-center
                "
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="border-white rounded-full shadow-lg bg-gradient-to-r from-orange-400 to-pink-500 p-6 sm:p-7 md:p-8 lg:p-9 border-4">
                        <FaPlay className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white" />
                    </div>
                </motion.a>

            </motion.div>

            {/* Right: Content */}
            <motion.div
                className="w-full md:w-1/2 px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    className="text-2xl md:text-4xl font-bold text-[#04394e] leading-tight mb-4"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 8 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Lorem ipsum dolor sit amet, <br /> consectetur adipisicing <br /> Innovators.
                </motion.h2>

                <motion.p
                    className="mb-6 text-gray-600"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum, alias! Perferendis eos illo debitis nisi repellat,
                    magni necessitatibus fuga quod nesciunt ea, obcaecati quasi eius
                    excepturi laudantium! Corrupti nemo, aspernatur in atque adipisci deleniti, dolorem odio quibusdam natus nostrum nihil?
                </motion.p>

                <ul className="mb-6 space-y-3 text-gray-700">
                    {[
                        'Non letius diam sapien',
                        'Mauris inceptos dis penatibus',
                        'Tellus iaculis massa sociosqu egestas',
                        'Convallis in neque primis',
                        'Natoque nulla dictum pretium',
                    ].map((item, idx) => (
                        <motion.li
                            key={idx}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: idx * 0.15 + 0.5,
                                type: "spring",
                                stiffness: 150,
                                damping: 8
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <FaCheckCircle className="mt-1 text-green-500" />
                            {item}
                        </motion.li>
                    ))}
                </ul>

                <motion.button
                    className="bg-[#f66b08] hover:bg-orange-600 text-white border-6 border-white font-semibold px-6 py-2 rounded-full shadow-md"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200, damping: 5 }}
                >
                    LEARN MORE
                </motion.button>
            </motion.div>
        </section>
    );
};

export default RoboticsSection;
