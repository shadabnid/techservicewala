"use client"; // Mark this as a client-side component

import React from "react";
import { FaUser, FaEye, FaRobot, FaPhoneAlt, FaLaptopCode, FaMobileAlt, FaCogs } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Section with background image */}
      <div
        className="bg-cover bg-center h-[45rem] flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/3.jpg')" }}
      >
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              <FaRobot className="inline-block text-pink-500 mr-2" />
              Why Choose Us?
            </h3>
            <h1 className="text-5xl font-bold mb-6">
              We Help Startups In The Early Stages.
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              We specialize in providing dedicated support for startups, helping them grow
              and scale from the early stages. Our approach focuses on creating effective solutions
              that fit your unique business needs.
            </p>
            <div className="flex space-x-4">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-600">
                Learn More
              </button>
              <a
                href="tel:+123456789"
                className="flex items-center text-pink-500 text-lg font-semibold"
              >
                <FaPhoneAlt className="mr-2" /> +Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side with Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex items-start space-x-4">
              <FaUser className="text-5xl text-pink-500" />
              <div>
                <h2 className="text-2xl font-semibold">User Oriented Approach</h2>
                <p className="text-gray-400">
                  Our focus is on the end-user experience, ensuring that the solutions we create 
                  are user-friendly, intuitive, and cater to your target audience effectively.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4">
              <FaEye className="text-5xl text-pink-500" />
              <div>
                <h2 className="text-2xl font-semibold">
                  Agile Based Decision Making
                </h2>
                <p className="text-gray-400">
                  We use agile methodologies to ensure that our development process is flexible
                  and can adapt to the changing needs of your business quickly and efficiently.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <FaRobot className="text-5xl text-pink-500" />
              <div>
                <h2 className="text-2xl font-semibold">Team Augmentation</h2>
                <p className="text-gray-400">
                  Our team augmentation services help you quickly scale your development capacity
                  by adding skilled professionals to your in-house team for any project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Service Section */}
      <div className="py-20 px-8 max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-pink-500 mb-2">Our Service</h3>
          <h1 className="text-5xl font-bold">Delivering The Right Solutions.</h1>
          <p className="text-gray-400 text-lg mt-4">
            Our expert teams provide the right solutions for your business, whether it’s development, mobile apps, or custom software. 
            We ensure that our offerings align with your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Dedicated Development Team */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <FaLaptopCode size={50} className="text-pink-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Dedicated Development Team</h2>
            <p className="text-gray-400">
              We provide a team of skilled developers who focus exclusively on your project, ensuring
              top-tier quality and timely delivery of your product.
            </p>
          </div>

          {/* Service 2: Mobile App Development */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <FaMobileAlt size={50} className="text-pink-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Mobile App Development Team</h2>
            <p className="text-gray-400">
              Our mobile app development team creates responsive and engaging mobile applications
              to enhance your business presence on iOS and Android platforms.
            </p>
          </div>

          {/* Service 3: Custom Software Development */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
            <FaCogs size={50} className="text-pink-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Custom Software Development</h2>
            <p className="text-gray-400">
              We specialize in developing custom software solutions tailored to meet the specific needs 
              of your business, providing unique features and functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
