import React from 'react';
import heroImg from '../assets/img/children-making-robot.jpg';

const About = () => {
    return (
        <section className="my-10 bg-gray-100">
            <div className="flex flex-col-reverse items-center px-12 py-20 mx-auto max-w-7xl lg:flex-row">
                {/* Left Text Content */}
                <div className="w-full text-center lg:w-1/2 lg:text-left">                
                    <p className="px-4 py-4 mb-3 text-lg font-bold text-center text-white uppercase transition-transform duration-300 rounded-full w-75 bg-gradient-to-r from-orange-500 to-pink-500 animate-fadeInUp hover:scale-105">
                        Join Us
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-[#04394e] leading-tight">
                        Robotics for <br /> Your Kids<span className="text-orange-600">.</span>
                    </h1>
                    <p className="mt-4 mb-8 text-lg text-gray-600">
                        Get your children ready for the future.
                    </p>
                    <div className="flex items-center justify-center gap-4 lg:justify-start">
                        <button className="px-6 py-3 font-bold text-white bg-orange-400 rounded-full shadow hover:bg-orange-700">
                            Our Classes
                        </button>
                        <button className="flex items-center font-semibold text-blue-700">
                            <span className="flex items-center justify-center w-8 h-8 mr-2 text-sm text-white bg-red-500 rounded-full">
                                ▶
                            </span>
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2">
                    <img src={heroImg} alt="Robotics kids" className="object-cover w-full rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default About;
