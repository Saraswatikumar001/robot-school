import React from 'react';
import { FaFlask, FaVideo, FaCampground } from 'react-icons/fa';

const services = [
  {
    icon: <FaFlask className="text-3xl text-green-500" />,
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
          <div className="flex flex-wrap justify-center items-center gap-6 text-white opacity-80">
            {Array(10)
              .fill('Logoipsum')
              .map((logo, i) => (
                <span
                  key={i}
                  className="text-sm md:text-base font-semibold tracking-wide"
                >
                  {logo}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
