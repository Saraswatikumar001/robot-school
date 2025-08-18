import React, { useState } from "react";

const FAQContactSection = () => {
    const faqs = [
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years."
        },
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years."
        },
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years."
        },
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years."
        },
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-2 gap-8 bg-gray-100 rounded-lg my-10">
            {/* FAQ Section */}
            <div>
                <p className="text-lg font-bold text-yellow-600 uppercase">FAQ</p>
                <h2 className="text-4xl font-bold text-orange-700 mt-2">
                    Want to Know More?
                </h2>
                <p className="text-gray-800 mt-4 font-semibold">
                    Feel free to contact us to get any details or book a free lesson for
                    your child!
                </p>

                <div className="mt-6 space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border-b pb-2 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg text-black">
                                    {faq.question}
                                </h3>
                                <span className="text-xl text-gray-600">
                                    {openIndex === idx ? "−" : "+"}
                                </span>
                            </div>
                            {openIndex === idx && (
                                <p className="text-gray-500 mt-2">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow p-6">
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter your full name*"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="text"
                        placeholder="Enter your phone number*"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="email"
                        placeholder="Enter your e-mail*"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <textarea
                        placeholder="Type your message"
                        rows="4"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#f66b08] hover:bg-orange-600 text-white border-6 border-white  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 w-full">
                        Send
                    </button>
                </form>
            </div>
        </div>

    );
};

export default FAQContactSection;
