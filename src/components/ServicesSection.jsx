import React from "react";
import { FaFlask, FaVideo, FaCampground } from "react-icons/fa";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: <FaFlask className="text-3xl text-[#04394e]" />,
    title: "Classes",
    description:
      "Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.",
  },
  {
    icon: <FaVideo className="text-3xl text-orange-500" />,
    title: "Online Course",
    description:
      "Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.",
  },
  {
    icon: <FaCampground className="text-3xl text-blue-500" />,
    title: "Camps",
    description:
      "Urna pellentesque faucibus lorem justo non vel efficitur sapien bibendum imperdiet tempor.",
  },
];

const brands = [
  {
    name: "Wipro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "BYJU'S",
    logo: "https://1000logos.net/wp-content/uploads/2021/12/Byjus-Logo.png",
  },
  {
    name: "Infosys",
    logo: "https://toppng.com/uploads/preview/infosys-limited-vector-logo-11574259008tncnrnxj7c.png",
  },
  {
    name: "Physics Wallah",
    logo: "https://www.svgrepo.com/show/504738/physics-wallah.svg",
  },
  {
    name: "HP",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeEg4OEP2A_iCehv7LBMDdn0SSuVk0qMFdgA&s",
  },
  {
    name: "IBM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoanaiyRIrEuHPACQcKoBLxgUSSWvRNJMYQ&s",
  },
  {
    name: "YouTube",
    logo: "https://i.pinimg.com/736x/7d/dc/54/7ddc545046b212d9ecc8eef83569222b.jpg",
  },
  {
    name: "Adobe",
    logo: "https://image.similarpng.com/file/similarpng/very-thumbnail/2021/09/Adobe-logo-template-on-transparent-background-PNG.png",
  },
  {
    name: "Tata",
    logo: "https://icon2.cleanpng.com/lnd/20250108/ua/7c55846e73f9d2bc49b14ab390f737.webp",
  },
];

const ServicesSection = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-gradient-to-b from-[#6d9bad] to-[#195269] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Services cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full shadow-md p-4">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <a className="bg-[#f66b08] hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                LEARN MORE
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trusted by Brands */}
        <div className="text-center">
          <h4 className="text-white text-2xl font-bold mb-6">
            Trusted by 30,000 world-class brands and organizations of all sizes
          </h4>

          <Slider {...sliderSettings}>
            {brands.map((brand, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center px-4"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain mx-auto hover:scale-110 transition-transform duration-300 rounded-full"
                />
                <span className="text-white text-sm font-medium mt-2">
                  {brand.name}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
