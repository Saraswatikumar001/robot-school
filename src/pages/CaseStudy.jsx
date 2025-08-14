// src/components/CaseStudySection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Robot Coding Workshop",
    subtitle: "School Outreach Program",
    summary:
      "150+ students built line-following robots from scratch, sparking creativity and teamwork.",
    img: "https://rxiedu.com/wp-content/uploads/2024/10/Leonardo_Phoenix_A_vibrant_and_lively_robotics_class_for_kids_0.jpg",
  },
  {
    title: "AI Robotics Bootcamp",
    subtitle: "Advanced Module",
    summary:
      "Teens learned to build vision-enabled bots with object tracking in just 4 days.",
    img: "https://media.istockphoto.com/id/1206218645/photo/female-pupil-building-robotic-car-in-science-lesson.jpg?s=612x612&w=0&k=20&c=S3Vt67S2zP1kvqBGR-gveGK3_AuZ_ztVzc6rJ5SixnI=",
  },
  {
    title: "Mobile Lab Tour",
    subtitle: "Community Engagement",
    summary:
      "Our mobile robotics labs reached 10 schools across Delhi over a 2-month period.",
    img: "https://c9.shauryasoft.com/media/bny-contentPageBg_103_32.jpg",
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-gradient-to-b from-[#fce8dc] to-[#fcccae] text-[#04394e] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="list-reset flex text-gray-700">
            <li>
              <Link to="/" className="hover:text-orange-500">Home</Link>
            </li>
            <li>
              <span className="mx-2">›</span>
            </li>
            <li className="text-orange-500 font-semibold">Case Study</li>
          </ol>
        </nav>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-semibold text-[#04394e] mb-4 drop-shadow-lg">
            Case Study
          </h1>
          <p className="text-lg text-gray-800 font-medium max-w-2xl mx-auto">
            See how we ignite young minds through hands-on robotics adventures.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((caseItem, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={caseItem.img}
                alt={caseItem.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{caseItem.title}</h3>
                <h4 className="text-sm text-orange-500 mb-3">
                  {caseItem.subtitle}
                </h4>
                <p className="text-sm leading-relaxed">{caseItem.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="mt-12 inline-flex items-center bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg">
            Take to Try
          </button>
        </div>
      </div>
    </section>
  );
}
