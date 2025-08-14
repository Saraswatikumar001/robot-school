import React from 'react';
import { FaFlask, FaVideo, FaCampground } from 'react-icons/fa';

const services = [
  {
    icon: <FaFlask className="text-3xl text-[#04394e]" />,
    title: 'Classes',
    description:
      'Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.',
  },
  {
    icon: <FaVideo className="text-3xl text-orange-500" />,
    title: 'Online Course',
    description:
      'Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.',
  },
  {
    icon: <FaCampground className="text-3xl text-blue-500" />,
    title: 'Camps',
    description:
      'Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#6d9bad] to-[#195269] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full shadow-md p-4">{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <button className="bg-[#f66b08] hover:bg-orange-600 text-white border-6 border-white  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          ))}
        </div>

        {/* Logos section */}
        <div className="text-center">
          <h4 className="text-white text-lg md:text-xl font-semibold mb-6">
            Trusted by 30,000 world-class brands and organizations of all sizes.
          </h4>

          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            {[
              "https://static.vecteezy.com/system/resources/previews/004/348/833/non_2x/abstract-robotics-logo-kids-development-center-sign-template-child-learning-center-vector.jpg",
              "https://static.vecteezy.com/system/resources/previews/049/079/999/non_2x/robotics-innovation-a-friendly-robot-mascot-symbolizing-advanced-technology-and-automation-in-a-modern-world-vector.jpg",
              "https://static.vecteezy.com/system/resources/previews/049/079/999/non_2x/robotics-innovation-a-friendly-robot-mascot-symbolizing-advanced-technology-and-automation-in-a-modern-world-vector.jpg",
              "https://static.vecteezy.com/system/resources/previews/049/079/999/non_2x/robotics-innovation-a-friendly-robot-mascot-symbolizing-advanced-technology-and-automation-in-a-modern-world-vector.jpg",
              "https://static.vecteezy.com/system/resources/previews/049/079/999/non_2x/robotics-innovation-a-friendly-robot-mascot-symbolizing-advanced-technology-and-automation-in-a-modern-world-vector.jpg",
              "https://upload.wikimedia.org/wikipedia/commons/0/02/HP_logo_2012.svg",
              "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/0d/YouTube_full-color_icon_%282017%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/0/09/Adobe_Corporate_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_with_text.svg"
            ].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Brand Logo ${i + 1}`}
                className="h-8 md:h-10 object-contain"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
