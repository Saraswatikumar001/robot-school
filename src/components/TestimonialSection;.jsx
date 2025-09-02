import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    role: "Teacher",
    image: "https://via.placeholder.com/150",
    text: "Kids Robotic School has revolutionized STEM education..."
  },
  {
    name: "Jane Smith",
    role: "Parent",
    image: "https://via.placeholder.com/150",
    text: "The program inspired creativity and critical thinking."
  },
  {
    name: "Michael Brown",
    role: "Student",
    image: "https://via.placeholder.com/150",
    text: "I love learning robotics and coding in a fun way!"
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 3, // default for desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // <= 1280px
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1024, // <= 1024px
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768, // <= 768px
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480, // <= 480px
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 mb-4">{t.text}</p>
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-orange-500 uppercase text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
