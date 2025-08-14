import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import heroImg1 from '../assets/img/children-making-robot.jpg';
import heroImg2 from '../assets/img/robot-1.jpg';
import heroImg3 from '../assets/img/robot-2.jpg';
import heroImg4 from '../assets/img/robot-3.jpg';
import heroImg5 from '../assets/img/robot-4.jpg';

const About = () => {

    // Slick settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        fade: true
    };

    return (
        <section className="mb-10 bg-gray-100">
            <div className="flex flex-col-reverse items-center px-12 py-20 mx-auto max-w-7xl lg:flex-row">
                
                {/* Left Text Content */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">                
                    <p className="px-4 py-3 mb-3 text-lg font-bold text-center text-black uppercase transition-transform duration-300 rounded-full w-65 bg-gradient-to-r from-[#edd1be] to-[#deab8a] animate-fadeInUp hover:scale-105">
                        Join Us
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-[#04394e]  leading-tight">
                        Robotics for <br /> Your Kids<span className="text-[#fa8b41]">.</span>
                    </h1>
                    <p className="mt-4 mb-8 text-lg text-gray-600">
                        Get your children ready for the future.
                    </p>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <button className="px-6 py-3 font-bold text-white bg-[#fa8b41] rounded-full shadow hover:bg-[#fa8b41]">
                            Our Classes
                        </button>
                       
                    </div>
                </div>

                {/* Right Image Slider */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-[90%] rounded-lg overflow-hidden shadow-lg">
                        <Slider {...settings}>
                            {[heroImg1, heroImg2, heroImg3, heroImg4, heroImg5].map((img, i) => (
                                <motion.img
                                    key={i}
                                    src={img}
                                    alt={`Robotics kids ${i}`}
                                    className="object-cover w-full h-[350px] rounded-lg"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6 }}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
