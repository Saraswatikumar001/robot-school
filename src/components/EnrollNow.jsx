// src/pages/EnrollNow.jsx
import React from "react";

const EnrollNow = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#04394E]">
            Enroll Now
          </h2>
          <p className="mt-2 text-gray-600">
            Fill out the form below to enroll your child in our Robotics School.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter student's full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                placeholder="Enter student's age"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              />
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Parent/Guardian Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter parent's full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              />
            </div>

            {/* Course Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select Course <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
                required
              >
                <option value="">-- Select a course --</option>
                <option value="beginner">Beginner Robotics</option>
                <option value="intermediate">Intermediate Robotics</option>
                <option value="advanced">Advanced Robotics</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Message
              </label>
              <textarea
                rows="4"
                placeholder="Write any specific requests or questions..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FA8B41] outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#FA8B41] hover:bg-[#e67a2f] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Submit Enrollment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnrollNow;
