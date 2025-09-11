import React, { useState } from "react";

const FAQContactSection = () => {
    const faqs = [
        {
            question: "What is the right age to join the courses?",
            answer: "Our courses are designed for kids aged 6 to 16 years.",
        },
        {
            question: "Do you provide online classes?",
            answer: "Yes, we provide both online and offline sessions.",
        },
        {
            question: "What skills will my child gain?",
            answer: "Your child will learn robotics, coding, and problem-solving.",
        },
        {
            question: "Are trial classes available?",
            answer: "Yes, we offer one free trial class for new students.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        // clear error for that field on change
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Full name is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log("Form Data Submitted: ", formData);
        alert("Form Submitted Successfully!");

        // reset form after submit
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
    };



    return (
        <div className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-2 gap-8 bg-gray-100 rounded-lg my-10">
            {/* FAQ Section */}
            <div>
                <p className="text-lg font-bold text-yellow-600 uppercase">FAQ</p>
                <h2 className="text-4xl font-bold text-orange-500 mt-2">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name*"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.name
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-yellow-400"
                                }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number*"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.phone
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-yellow-400"
                                }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your e-mail*"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${errors.email
                                    ? "border-red-500 focus:ring-red-400"
                                    : "border-gray-300 focus:ring-yellow-400"
                                }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Type your message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="bg-[#f66b08] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 w-full"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FAQContactSection;
