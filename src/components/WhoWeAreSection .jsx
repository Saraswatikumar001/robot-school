import React, { useEffect, useState } from 'react';
import kidsImage from '../assets/img/robot-1.jpg';

const WhoWeAreSection = () => {
    const [visible, setVisible] = useState(false);

    const fullText = "Empowering the Next Generation of Innovators.";
    const [typedText, setTypedText] = useState("");

   useEffect(() => {
    let index = 0;

    const typeLoop = () => {
        setTypedText(''); // Clear text before each new cycle
        index = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prev) => {
                const next = prev + fullText[index];
                index++;
                if (index === fullText.length) {
                    clearInterval(typingInterval);
                    setTimeout(typeLoop, 1000); // wait before typing again
                }
                return next;
            });
        }, 50);
    };

    typeLoop();

    return () => clearInterval(); // Cleanup
}, []);




    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(true);
        }, 200); // delay animation slightly
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-20 bg-white">
            {/* Left Content */}
            <div className="md:w-1/2 mb-10 md:mb-0 pe-25">
                <p className="text-orange-500 font-semibold uppercase mb-2">Who We Are</p>
                <p className="text-2xl md:text-2xl font-bold bg-[#04394e] p-3 rounded-lg text-white leading-tight mb-6">
                    {typedText}
                   
                </p>

                {/* 🎯 Animate this div */}
                <div className={`text-gray-600 gap-8 mb-8 transition-all duration-1000 ease-in-out
                    ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                    flex flex-col md:flex-row`}>
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
                </div>

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
                <img
                    src={kidsImage}
                    alt="Kids with Robot"
                    className="rounded-full w-96 h-96 shadow-xl"
                />                
                <div className="border-4 border-b-white absolute top-8 right-20 bg-orange-500 text-white rounded-full px-6 py-4 text-center transform translate-x-1/3 -translate-y-1/3 shadow-md">
                    <p className="text-3xl font-bold">47K+</p>
                    <p className="text-sm uppercase font-semibold tracking-wide">Member Active</p>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAreSection;
