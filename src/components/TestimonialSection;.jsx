import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

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
    image: "/testimonials/testimonial1.jpg",
    text: "Kids Robotic School has revolutionized STEM education at our school. The program has inspired our students to think critically and creatively while fostering a love for technology."
  },
  {
    name: "Jane Smith",
    role: "Parent",
    image: "/testimonials/testimonial2.jpg",
    text: "My child has learned so much from the program! The instructors are amazing and really engage the students."
  },
  {
    name: "Alice Johnson",
    role: "Student",
    image: "/testimonials/testimonial3.jpg",
    text: "I loved building robots and learning new tech skills. It’s super fun!"
  },
  {
    name: "Sophia Brown",
    role: "Teacher",
    image: "/testimonials/testimonial4.jpg",
    text: "The hands-on activities really engage students. They learn by doing, which is the best way to grasp STEM concepts."
  }
];

export default function TestimonialSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto my-10 px-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 } // Desktop
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="p-6 bg-white shadow-lg rounded-lg text-center h-full flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic mb-2">"{t.text}"</p>
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
