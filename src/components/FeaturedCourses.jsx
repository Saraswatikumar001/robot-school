import React from "react";
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
        id: 1,
        category: "BASIC ROBOTICS",
        title: "Robotics 101: Building a Foundation for Young Innovators",
        rating: 4.5,
        price: "₹99",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
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
        id: 1,
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
                <h2 className="text-5xl font-bold text-center mb-10 text-[#04394e]">Featured Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden relative"
                        >
                            {/* Price Tag */}
                            <div className="absolute left-[-1%] top-[33%] bg-[#04394e] text-white  border-4 border-white font-bold px-3 py-1 lg:rounded-full">
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
                                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

                                {/* Rating */}
                                <div className="flex items-center text-sm mb-3">
                                    <span>({course.rating})</span>
                                    <span className="text-orange-500 ml-1">★★★★★</span>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                                {/* Button */}
                                <button className="bg-[#f26b0c] hover:bg-orange-600 text-white border-4 border-white  font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300">
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;
