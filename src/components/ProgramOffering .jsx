import React from "react";
import { FaSchool, FaCampground, FaVrCardboard } from "react-icons/fa";

const ProgramOffering = () => {
    const programs = [
        {
            icon: <FaSchool className="text-4xl text-green-500" />,
            title: "After School",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            icon: <FaCampground className="text-4xl text-blue-400" />,
            title: "Summer Camps",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            icon: <FaVrCardboard className="text-4xl text-orange-400" />,
            title: "Virtual Programs",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
            {
            icon: <FaSchool className="text-4xl text-green-500" />,
            title: "After School",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            icon: <FaCampground className="text-4xl text-blue-400" />,
            title: "Summer Camps",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
            icon: <FaVrCardboard className="text-4xl text-orange-400" />,
            title: "Virtual Programs",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
    ];

    return (
        <section className="bg-gradient-to-r from-[#173c5c] to-[#44a5f9] py-16 relative overflow-hidden">
            {/* Background decorative icons could be added here if needed */}
            <div className="text-center mb-12">
                <p className="text-yellow-300 uppercase tracking-wider text-sm font-semibold">
                    Program Offering
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                    Experience the Difference Our <br /> Enrichment Programs Can Make!
                </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {programs.map((program, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-b from-cyan-400 to-blue-500 rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
                    >
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                            {program.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            {program.title}
                        </h3>
                        <p className="text-white text-sm leading-relaxed mb-6">
                            {program.description}
                        </p>
                        <button className="bg-[#f26b0c] hover:bg-orange-600 text-white border-4 border-white  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                            LEARN MORE
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProgramOffering;
