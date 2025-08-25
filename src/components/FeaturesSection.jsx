import React from "react";
import { motion } from "framer-motion";
import girlJumping from "../assets/img/img.png";
import boyWithRobot from "../assets/img/img1.png";
import kidsWithRobot from "../assets/img/img3.png";
import groupKids from "../assets/img/img4.png";

const features = [
  {
    title: "Personal & Group Classes",
    image: girlJumping,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: {
      animate: { y: [0, -20, 0] },
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  },
  {
    title: "Learn with STEM kits",
    image: boyWithRobot,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: {
      animate: { rotate: [0, 5, -5, 0] },
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
    }
  },
  {
    title: "Flexible Class timing",
    image: kidsWithRobot,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: {
      animate: { scale: [1, 1.1, 1] },
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  },
  {
    title: "Have fun while learning",
    image: groupKids,
    desc: "Pellentesque per porttitor montes sollicitudin ante condimentum pede nulla laoreet",
    animation: {
      animate: { x: [0, 15, -15, 0] },
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
    }
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-purple-100 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <motion.img
              src={feature.image}
              alt={feature.title}
              className="mx-auto h-40 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}              
              viewport={{ once: true, amount: 0.2 }}
              animate={feature.animation.animate}
              transition={feature.animation.transition}
            />
            <h3 className="text-xl font-bold text-orange-500">
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
