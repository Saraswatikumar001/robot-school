import React from "react";
import CourseImage from "../assets/img/four-kid.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const courses = [
  {
    id: 1,
    category: "BASIC ROBOTICS",
    title: "Robotics 101: Building a Foundation for Young Innovators",
    rating: 4.5,
    price: "₹99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 2,
    category: "BASIC ROBOTICS",
    title: "Robotics 101: Building a Foundation for Young Innovators",
    rating: 4.5,
    price: "₹99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 3,
    category: "BASIC ROBOTICS",
    title: "Robotics 101: Building a Foundation for Young Innovators",
    rating: 4.5,
    price: "₹99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 4,
    category: "BASIC ROBOTICS",
    title: "Robotics 101: Building a Foundation for Young Innovators",
    rating: 4.5,
    price: "₹99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: 4,
    category: "BASIC ROBOTICS",
    title: "Robotics 101: Building a Foundation for Young Innovators",
    rating: 4.5,
    price: "₹99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-[#f2f4ff] py-12 px-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-[#04394e]">
          Featured Courses
        </h2>

        <div className="p-5">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            
            // pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile
              768: { slidesPerView: 2 }, // Tablet
              1024: { slidesPerView: 3 }, // Desktop
            }}
          >
            {courses.map((course, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden relative lg:me-3 h-full flex flex-col">
                  {/* Price Tag */}
                  <div className="absolute left-[-1%] top-[33%] bg-[#04394e] text-white border-4 border-white font-bold px-3 py-1 lg:rounded-full">
                    {course.price}
                  </div>

                  {/* Image */}
                  <img
                    src={CourseImage}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="lg:pt-0 pt-5 text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
                      {course.category}
                    </p>
                    <h3 className="font-semibold text-lg mb-2">
                      {course.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center text-sm mb-3">
                      <span>({course.rating})</span>
                      <span className="text-orange-500 ml-1">★★★★★</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {course.description}
                    </p>

                    {/* Button */}
                    <button className="bg-[#f26b0c] hover:bg-orange-600 text-white border-4 border-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
