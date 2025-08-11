import React from "react";
import girlJumping from "../assets/img/girl-jump.png";
import boyWithRobot from "../assets/img/fun.jpg";
import kidsWithRobot from "../assets/img/robot-1.jpg";
import groupKids from "../assets/img/robot.jpg";

const features = [
  {
    title: "Personal & Group Classes",
    image: girlJumping,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: "animate-bounce-slow",
  },
  {
    title: "Learn with STEM kits",
    image: boyWithRobot,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: "animate-float",
  },
  {
    title: "Flexible Class timing",
    image: kidsWithRobot,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: "animate-wiggle",
  },
  {
    title: "Have fun while learning",
    image: groupKids,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: "animate-jump",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <img
              src={feature.image}
              alt={feature.title}
              className={`mx-auto h-40 mb-4 ${feature.animation}`}
            />
            <h3 className="text-xl font-bold text-blue-700">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
