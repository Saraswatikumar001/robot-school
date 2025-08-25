import React, { useState } from "react";

const Schedule = () => {
    const schedule = [
        {
            date: "1st – 15th September 2025",
            title: "Application Submission",
            description:
                "Students and parents can fill out the admission form and submit required documents.",
        },
        {
            date: "20th September 2025",
            title: "Entrance Test / Interview",
            description:
                "A basic test and interview will be conducted to evaluate eligibility and interest.",
        },
        {
            date: "25th September 2025",
            title: "Result Announcement",
            description:
                "Selected candidates will be notified via email and website updates.",
        },
        {
            date: "1st – 5th October 2025",
            title: "Fee Payment & Confirmation",
            description:
                "Selected candidates must complete fee payment to confirm admission.",
        },
        {
            date: "10th October 2025",
            title: "Classes Begin 🎉",
            description:
                "Welcome to the exciting journey of robotics learning!",
        },
    ];

    return (
        <>
            <section className="py-16 bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-[#F78A41] uppercase font-semibold tracking-wide">
                            Admission Schedule
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#04394E]">
                            Plan Your Journey With Us
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Stay updated with our admission process. Here’s a step-by-step
                            schedule to help you secure your seat in our robotics programs.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative border-l-4 border-[#F78A41] pl-8 space-y-12">
                        {schedule.map((item, idx) => (
                            <div key={idx} className="relative">
                                {/* Dot */}
                                <span className="absolute -left-4 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-[#F78A41] text-white font-bold shadow-md">
                                    {idx + 1}
                                </span>

                                {/* Content */}
                                <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                                    <h3 className="text-lg font-bold text-[#04394E]">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-[#F78A41] font-semibold mb-2">
                                        {item.date}
                                    </p>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <a
                            href="/apply"
                            className="px-8 py-4 bg-[#04394E] text-white font-semibold rounded-2xl shadow-md hover:bg-[] transition"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-b from-[#f8fafc] to-white flex justify-center items-center">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

                    {/* Image with Blobs */}
                    <div className="relative">
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#F78A41]/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#04394E]/20 rounded-full blur-3xl"></div>

                        <img
                            src="https://st3.depositphotos.com/1017986/15526/i/450/depositphotos_155265992-stock-photo-happy-children-building-robots-at.jpg"
                            alt="Robotics Kids"
                            className="relative z-10 rounded-3xl shadow-2xl border-4 border-white"
                        />
                    </div>

                    {/* Admission Form */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#04394E] mb-4">Admission Form</h2>
                        <p className="text-gray-600 mb-6">
                            Fill in the details below to apply for admission 🚀
                        </p>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#F78A41] border-gray-300"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#F78A41] border-gray-300"
                            />
                            <select
                                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#F78A41] border-gray-300"
                            >
                                <option value="">Select Class</option>
                                <option>Class 1 - 3</option>
                                <option>Class 4 - 6</option>
                                <option>Class 7 - 9</option>
                                
                            </select>
                            <button
                                type="submit"
                                className="w-full bg-[#F78A41] text-white font-semibold py-3 rounded-lg hover:bg-[#ffcb87] hover:text-black transition duration-300"
                            >
                                Submit Application
                            </button>
                        </form>
                    </div>

                </div>
            </section>


        </>
    );
};

export default Schedule;
