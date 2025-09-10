import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import heroImg1 from '../assets/img/children-making-robot.jpg';
import heroImg2 from '../assets/img/robot-1.jpg';
import heroImg3 from '../assets/img/robot-2.jpg';
import heroImg4 from '../assets/img/robot-3.jpg';
import heroImg5 from '../assets/img/robot-5.jpg';


const About = () => {
    // Slick settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        fade: true
    };

    // Slides data (text + image together)
    const slides = [
        {
          
            title: "Robotics for Your Kids",
            desc: "Get your children ready for the future.",
            btn: "Our Classes",
            img: heroImg1
        },
        {
            title: "Innovative Learning",
            desc: "Teach kids how to create and imagine with robots.",
            btn: "Start Now",
            img: heroImg2
        },
        {
            title: "Future Tech Leaders",
            desc: "Build curiosity and creativity through robotics.",
            btn: "Join Today",
            img: heroImg3
        },
        {
            title: "Hands-On Experience",
            desc: "Kids learn by doing, building real robots with guidance.",
            btn: "Explore More",
            img: heroImg4 
        },
        {
            title: "Creative Problem Solving",
            desc: "Robotics teaches logical thinking and teamwork.",
            btn: "Enroll Now",
            img: heroImg5 
        },
        
    ];

    return (
        <section className="bg-gray-100">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col-reverse items-center px-12 py-20 mx-auto max-w-7xl lg:flex-row">
                            {/* Left Text */}
                            <div className="w-full text-center lg:w-1/2 lg:text-left"> 
                             <p className="mb-3 text-lg font-bold text-center text-black uppercase transition-transform duration-300 rounded-full w-65  animate-fadeInUp hover:scale-105">
                                    Join Us
                                </p>                              
                                <h1 className="text-4xl sm:text-5xl font-bold text-[#04394e] leading-tight">
                                    {slide.title}<span className="text-[#04394e]">.</span>
                                </h1>
                                <p className="mt-4 mb-8 text-lg text-gray-600">
                                    {slide.desc}
                                </p>
                                <div className="flex items-center justify-center gap-4 lg:justify-start">
                                    <button className="px-6 py-3 font-bold text-white bg-[#fa8b41] rounded-full shadow hover:bg-[#e0792e]">
                                        {slide.btn}
                                    </button>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="w-[90%] rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src={slide.img}
                                        alt="Robotics kids"
                                        className="object-cover w-full h-[350px] rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </section>
    );
};

export default About;
