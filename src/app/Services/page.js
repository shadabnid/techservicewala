"use client"; // Mark this as a client-side component

import React, { useState } from "react";
import {
  FaUser,
  FaEye,
  FaRobot,
  FaPhoneAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
} from "react-icons/fa";

const Services = () => {
  // State to manage the page (first 3 cards or all)
  const [page, setPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Section with background image */}
      <div className="bg-pink-200 min-h-screen text-black">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
          {/* Left Side (Text Content) */}
          <div className="space-y-6 sm:space-y-8 w-full lg:w-1/2">
            <h3 className="text-md sm:text-lg font-semibold text-gray-700 mb-2">
              BUSINESS SOLUTIONS
            </h3>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Solutions for business growth strategies
            </h1>
            <p className="text-gray-800 text-base sm:text-lg mb-8">
              We offer versatile marketing strategies, cutting-edge business
              solutions, and innovative IT services. Our approach blends
              creative expertise with data-driven paid media campaigns to ensure
              maximum results for your business. Whether you&apos;re looking to
              enhance your digital presence, develop your brand, or improve IT
              infrastructure, we&apos;re here to help you achieve sustainable growth
              and long-term success. Let&apos;s collaborate to take your business to
              the next level!
            </p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-md sm:text-lg font-semibold hover:bg-gray-800">
                GET A FREE AUDIT
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div
            className="w-full lg:w-1/2 h-64 sm:h-72 md:h-80 bg-cover bg-center rounded-md shadow-2xl shadow-black mt-8 lg:mt-0 transform translate-x-4 lg:ml-10"
            style={{ backgroundImage: "url('/3.jpg')" }}
          >
            {/* Image container */}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-md sm:text-lg font-semibold text-gray-500 mb-2">
              <FaRobot className="inline-block text-pink-500 mr-2" />
              Why Choose Us?
            </h3>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              We Help Startups In The Early Stages.
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-8">
              We specialize in providing dedicated support for startups,
              helping them grow and scale from the early stages. Our approach
              focuses on creating effective solutions that fit your unique
              business needs.
            </p>
            <div className="flex space-x-4">
              <button className="bg-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-md sm:text-lg font-semibold hover:bg-pink-600">
                Learn More
              </button>
              <a
                href="tel:7905955636"
                className="flex items-center text-pink-500 text-md sm:text-lg font-semibold"
              >
                <FaPhoneAlt className="mr-2" /> +Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side with Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex items-start space-x-4">
              <FaUser className="text-3xl sm:text-5xl text-pink-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  User Oriented Approach
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Our focus is on the end-user experience, ensuring that the
                  solutions we create are user-friendly, intuitive, and cater to
                  your target audience effectively.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4">
              <FaEye className="text-3xl sm:text-5xl text-pink-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Agile Based Decision Making
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  We use agile methodologies to ensure that our development
                  process is flexible and can adapt to the changing needs of
                  your business quickly and efficiently.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <FaRobot className="text-3xl sm:text-5xl text-pink-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold">
                  Team Augmentation
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Our team augmentation services help you quickly scale your
                  development capacity by adding skilled professionals to your
                  in-house team for any project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Service Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h3 className="text-md sm:text-lg font-semibold text-pink-500 mb-2">
            Our Service
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Delivering The Right Solutions.
          </h1>
          <p className="text-gray-400 text-base sm:text-lg mt-4">
            Our expert teams provide the right solutions for your business,
            whether it’s development, mobile apps, or custom software. We ensure
            that our offerings align with your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {page === 1 && (
            <>
              {/* Show first 3 cards */}
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaLaptopCode size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Dedicated Development Team
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  We provide a team of skilled developers who focus exclusively
                  on your project, ensuring top-tier quality and timely delivery
                  of your product.
                </p>
              </div>

              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Mobile App Development
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Our mobile app development team creates responsive and
                  engaging mobile applications to enhance your business presence
                  on iOS and Android platforms.
                </p>
              </div>

              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Web Development
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  We create dynamic, responsive, and user-friendly websites that
                  cater to your business needs and goals.
                </p>
              </div>
            </>
          )}

          {page === 2 && (
            <>
              {/* Show remaining cards */}
              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Ecommerce Website
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Our ecommerce solutions offer secure, scalable, and
                  user-friendly platforms for online businesses.
                </p>
              </div>

              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Search Engine Optimization
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Our SEO services ensure your website ranks higher, attracting
                  more traffic and conversions.
                </p>
              </div>

              <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaCogs size={50} className="text-pink-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Custom Software Development
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  We specialize in developing custom software solutions tailored
                  to meet the specific needs of your business.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(1)}
            className={`w-3 h-3 rounded-full mx-2 ${
              page === 1 ? "bg-pink-500" : "bg-gray-400"
            }`}
          ></button>
          <button
            onClick={() => handlePageChange(2)}
            className={`w-3 h-3 rounded-full mx-2 ${
              page === 2 ? "bg-pink-500" : "bg-gray-400"
            }`}
          ></button>
        </div>
      </div>

      {/* Team of Experts Section */}
      <div className="bg-pink-200 py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side (Image) */}
          <div className="w-full h-64 sm:h-72 lg:h-80 bg-cover bg-center rounded-md" style={{ backgroundImage: "url('/4.jpg')" }}>
            {/* Image container */}
          </div>

          {/* Right Side (Text Content) */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">We are committed to your strategy</h1>
            <p className="text-gray-700 text-lg">
              We are committed to providing business solutions that deliver value in the digital economy.
              At Renaissance, we seamlessly implement the most effective business and digital marketing solutions,
              including website and app development. Every day, we help brands think big, execute smart, and achieve growth.
              Our intelligent digital marketing strategy consistently unlocks value from digital investments in a rapidly advancing world,
              from simple to infinitely complex solutions.
            </p>
            <a href="#" className="text-purple-700 font-semibold hover:underline">
              MORE ABOUT OUR COMPANY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
