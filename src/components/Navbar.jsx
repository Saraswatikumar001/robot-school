import React from 'react';
import logo from '../assets/img/roboticslogo.png'

const Navbar = () => {
    return (
        <nav className="bg-[#04394e] text-white shadow-sm py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Robotics School Logo" className="h-12 w-12" />
                    <span className="text-lg font-bold text-[#04394e] bg-white py-1 px-6" style={{ borderRadius: '34px 0px 34px 0px' }}>RoboTics School</span>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
                    <li><a href="#" className="hover:text-orange-600 text-white">Home</a></li>
                    <li><a href="#" className="hover:text-orange-600 text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-orange-600 text-white">Courses</a></li>
                    <li><a href="#" className="hover:text-orange-600 text-white">Testimonials</a></li>
                    <li><a href="#" className="hover:text-orange-600 text-white">Contact Us</a></li>
                </ul>

                {/* Mobile Menu Button (optional future) */}
                <div className="md:hidden">
                    <button className="text-orange-600">
                        {/* You can add a menu icon here */}
                        ☰
                    </button>
                </div>

                <div>
                    <a className="bg-orange-400 hover:bg-orange-600 text-white py-2 px-4 rounded font-semibold">
                        Enroll Now
                    </a>
                </div>
            </div>
        </nav>
    );
};


export default Navbar