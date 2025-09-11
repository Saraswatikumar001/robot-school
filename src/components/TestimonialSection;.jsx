


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto my-13 px-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <p className="text-orange-500 uppercase font-semibold">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#04394e]">
              Authentic Testimonials from Parents
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <p className="text-lg font-medium text-gray-900">Excellent</p>
            <div className="flex items-center justify-end gap-1 text-orange-400">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
              <span className="ml-2 text-gray-900 font-bold">4.5 out of 5</span>
            </div>
            <p className="text-sm text-gray-500">
              Based on <span className="text-orange-500 font-semibold">10,098</span> reviews
            </p>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        autoplay={{ delay: 3000, disableOnInteraction: false }}

        // pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 } // Desktop
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="px-6 py-10 my-8 bg-white shadow-lg rounded-lg text-center flex flex-col items-center h-full min-h-[350px]">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic mb-2 flex-grow">"{t.text}"</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <div className="flex justify-center mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
