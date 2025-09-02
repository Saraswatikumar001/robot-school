import React, { useState, useEffect } from "react";
import CourseImage from "../assets/img/four-kid.jpg";

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
    title: "Introduction to Circuits & Sensors",
    rating: 4.8,
    price: "₹149",
    description:
      "Learn about circuits, sensors and their applications in simple robotics projects.",
  },
  {
    id: 3,
    category: "ADVANCED ROBOTICS",
    title: "AI for Robotics",
    rating: 5.0,
    price: "₹299",
    description:
      "Dive into Artificial Intelligence and Machine Learning basics for robotics.",
  },
  {
    id: 4,
    category: "INTERMEDIATE ROBOTICS",
    title: "Arduino Robotics Projects",
    rating: 4.7,
    price: "₹199",
    description:
      "Step-by-step guide to build exciting projects with Arduino and sensors.",
  },
];

const FeaturedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // start at 1 because of cloned slide
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Auto-slide every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite loop reset
  useEffect(() => {
    if (currentIndex === courses.length + 1) {
      setTimeout(() => setCurrentIndex(1), 300); // jump to real first
    } else if (currentIndex === 0) {
      setTimeout(() => setCurrentIndex(courses.length), 300); // jump to real last
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  // Add cloned slides
  const slides = [
    courses[courses.length - 1], // clone last at start
    ...courses,
    courses[0], // clone first at end
  ];

  return (
    <section className="bg-[#f2f4ff] py-12 px-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10 text-[#04394e]">
          Featured Courses
        </h2>

        <div className="relative overflow-hidden">
          {/* Slider wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
              width: `${((slides.length) * 100) / slidesToShow}%`,
            }}
          >
            {slides.map((course, idx) => (
              <div
                key={idx}
                className="px-3"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
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
                  <div className="p-5">
                    <p className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2">
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

                    <p className="text-gray-600 text-sm mb-4">
                      {course.description}
                    </p>

                    {/* Button */}
                    <button className="bg-[#f26b0c] hover:bg-orange-600 text-white border-4 border-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
