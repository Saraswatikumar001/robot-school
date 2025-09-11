import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Alice",
    role: "Student",
    text: "RoboKids classes are fun and interactive. I learned so much!",
    image:
      "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob",
    role: "Parent",
    text: "My child enjoys every session. Great teachers!",
    image:
      "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Charlie",
    role: "Student",
    text: "Robotics made simple and exciting!",
    image:
      "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Daisy",
    role: "Parent",
    text: "Creative approach, my kid loves it!",
    image:
      "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 2, // multiple rows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, rows: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, rows: 1 } },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-[#04394e] mb-10">
        What Our Students & Parents Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="p-4"> {/* ✅ adds horizontal & vertical gap */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center h-full flex flex-col justify-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-[#04394e]">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <p className="mt-3 text-gray-700">{t.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
