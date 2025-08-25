// src/pages/Pricing.jsx
import React from "react";

const plans = [
  {
    price: "₹120",
    period: "per month",
    title: "For 1st and 2nd graders",
    details: ["1 class per week", "A lot of practice"],
    buttonText: "Select Plan",
    bg: "bg-white",
    text: "text-gray-800",
    btn: "bg-[#F78A41] text-white hover:bg-[#fa9e57]",
    icon: "🤖", // You can replace with real images/icons
  },
  {
    price: "₹150",
    period: "per month",
    title: "For 6th to 8th graders",
    details: ["2 classes per week", "Theory and practice"],
    buttonText: "Select Plan",
    bg: "bg-[#F78A41]",
    text: "text-white",
    btn: "bg-[#04394E] text-white hover:bg-[#2d4954]",
    icon: "📘",
  },
  {
    price: "₹200",
    period: "per month",
    title: "For teenagers",
    details: ["2 classes per week", "Own graduation project"],
    buttonText: "Select Plan",
    bg: "bg-white",
    text: "text-gray-800",
    btn: "bg-[#F78A41] text-white hover:bg-[#fa9e57]",
    icon: "🤖",
  },
];

export default function Pricing() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <p className="text-sm uppercase text-[#F78A41] font-semibold">Price</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#F78A41]">Pricing.</span>
          </h2>
          <p className="text-gray-500 mt-2">
            We have different pricing plans based on the age of our students.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.bg} ${plan.text} shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105`}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{plan.icon}</div>

              {/* Price */}
              <h3 className="text-4xl font-bold">{plan.price}</h3>
              <p className="text-sm font-medium mb-6">— {plan.period} —</p>

              {/* Title */}
              <p className="font-semibold mb-4">{plan.title}</p>

              {/* Details */}
              <ul className="space-y-2 mb-6">
                {plan.details.map((d, i) => (
                  <li key={i} className="text-sm">
                    {d}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`px-6 py-2 rounded-lg font-semibold shadow-md ${plan.btn}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1106494753/thumb/1.jpg?ip=x480"
              alt="Kids learning robotics"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-white text-black rounded-2xl p-10 shadow-lg flex flex-col justify-center h-full">
            <p className="text-sm uppercase font-semibold text-[#F78A41] mb-2 tracking-wide">
              How We Teach
            </p>

            <h2 className="text-4xl md:text-4xl font-bold mb-6 leading-snug">
              Each Lesson Brings <br />

              Exciting <span className="text-[#F78A41]">Discoveries.</span>
            </h2>

            <p className="text-black/90 mb-4 font-medium text-lg">
              Our programs are designed for all age categories and engage every
              child in the group.
            </p>
            <p className="text-black/80 mb-6 leading-relaxed font-normal text-sm">
              Our children have seen them in movies, played with them as toys, and
              read about them in books. Now it’s time to learn how to develop and
              program robots themselves! Our robotics courses will teach your kids
              valuable concepts in engineering and physics and help them create
              their own cool robots.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F78A41] text-[#04394E] font-bold">
                  ✓
                </span>
                <span className="font-medium">Develop problem-solving skills</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F78A41] text-[#04394E] font-bold">
                  ✓
                </span>
                <span className="font-medium">Build self-confidence, hard and soft skills</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F78A41] text-[#04394E] font-bold">
                  ✓
                </span>
                <span className="font-medium">Vast options for employment in the future</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>


  );
}
