import React from 'react';
import kidsImage from '../assets/img/robot-1.jpg';

const WhoWeAreSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20 bg-white">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0">
                <p className="text-orange-500 font-semibold uppercase mb-2">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                    Empowering the Next Generation of Innovators.
                </h2>
                <div className="text-gray-600 space-y-4 mb-8">
                    <p>
                        we believe every child holds the potential to shape the future.
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
                </div>

                {/* Founder Info */}
                <div className="flex items-center space-x-4 mt-4 border-t pt-4">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Founder"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <p className="font-semibold text-gray-900">Benjamin Mitchell</p>
                        <p className="text-orange-500 font-bold text-sm uppercase">Founder</p>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="relative md:w-1/2">
                <img
                    src={kidsImage}
                    alt="Kids with Robot"
                    className="rounded-xl shadow-xl"
                />
                <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-6 py-4 text-center transform translate-x-1/3 -translate-y-1/3 shadow-md">
                    <p className="text-3xl font-bold">47K+</p>
                    <p className="text-sm uppercase font-semibold tracking-wide">Member Active</p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
