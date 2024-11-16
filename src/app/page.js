"use client"; // Make sure this is the first line in your file

import React, { useState } from "react";
import { FaHandshake, FaTrophy } from "react-icons/fa"; // Importing the icons from react-icons
import {
  FaUser,
  FaEye,
  FaRobot,
  FaPhoneAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaCogs,
} from "react-icons/fa";
import Link from "next/link"; // Import Link if you're using Next.js routing

const Home = () => {
  // State to manage the page (first 3 cards or all)
  const [page, setPage] = useState(1);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    console.log(formData);
    // Reset form
    setFormData({ name: "", email: "", inquiry: "" });
  };

  return (
    <div className="bg-gray-800">
      <section>
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden  ">
          {/* Video Element */}
          {/* Image Element */}
          <div className="absolute inset-0 w-full h-full">
            <imgage
              src="/1.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 w-full h-full bg-black opacity-35 z-10"></div>
          <div className="absolute inset-0 w-full h-full bg-black opacity-35 z-10"></div>

          {/* Text Element */}
          <div className="relative z-20 text-center px-4 py-6 lg:px-10 lg:py-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight lg:leading-snug max-w-6xl mx-auto">
              Software Development Agency
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-2xl text-white max-w-6xl mx-auto">
              &quot;Professional Web Design Without Breaking the Bank!&quot;
            </p>
            <div className="flex flex-col gap-6 justify-center items-center md:flex-row">
              <Link href="/AboutUs">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Learn More
                </button>
              </Link>
              <Link href="/ContactUs">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Values Section with increased height */}
      <div className="py-20 px-8">
        {" "}
        {/* Increased padding for height */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-white">Our Values</h3>
          <h1 className="text-4xl font-bold text-blue-500">
            We Are Leaders, Thinkers And Makers At Your Service.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {" "}
          {/* Increased gap between cards */}
          {/* Strong Relationships */}
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center">
            {" "}
            {/* Increased padding */}
            <FaHandshake size={50} className="mx-auto mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2 text-blue-500">
              Strong Relationships
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          {/* Excellence At Work */}
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center">
            {" "}
            {/* Increased padding */}
            <FaTrophy size={50} className="mx-auto mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2 text-blue-500">
              Excellence At Work
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          {/* Innovation & Creativity */}
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg text-center">
            {" "}
            {/* Increased padding */}
            <FaRobot size={50} className="mx-auto mb-4 text-blue-500" />
            <h2 className="text-xl font-semibold mb-2 text-blue-500">
              Innovation & Creativity
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-md sm:text-lg font-semibold text-gray-500 mb-2">
              <FaRobot className="inline-block text-blue-500 mr-2" />
              Why Choose Us?
            </h3>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-500">
              We Help Startups In The Early Stages.
            </h1>
            <p className="text-black text-base sm:text-lg mb-8">
              We specialize in providing dedicated support for startups, helping
              them grow and scale from the early stages. Our approach focuses on
              creating effective solutions that fit your unique business needs.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md text-md sm:text-lg font-semibold hover:bg-blue-600">
                Learn More
              </button>
              <a
                href="tel:7905955636"
                className="flex items-center text-blue-500 text-md sm:text-lg font-semibold"
              >
                <FaPhoneAlt className="mr-2" /> +Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side with Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="flex items-start space-x-4">
              <FaUser className="text-3xl sm:text-5xl text-blue-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-500">
                  Tailored Web Solutions
                </h2>
                <p className="text-black text-base sm:text-lg">
                  Every startup is unique. We provide custom web solutions
                  tailored to your business needs, ensuring that your online
                  presence reflects your vision and goals.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4">
              <FaEye className="text-3xl sm:text-5xl text-blue-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-500">
                  Agile Based Decision Making
                </h2>
                <p className="text-black text-base sm:text-lg">
                  We adopt an agile methodology that ensures your project
                  remains flexible and responsive to market changes, allowing
                  for continuous improvement and timely delivery.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4">
              <FaRobot className="text-3xl sm:text-5xl text-blue-500" />
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-500">
                  Team Augmentation
                </h2>
                <p className="text-black text-base sm:text-lg">
                  Need additional resources? Our team augmentation services
                  provide expert support to complement your in-house team,
                  helping you scale as your startup grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Service Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h3 className="text-md sm:text-lg font-semibold text-white mb-2">
            Our Service
          </h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-500">
            Delivering The Right Solutions.
          </h1>
          <p className="text-white text-base sm:text-lg mt-4">
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
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaLaptopCode size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Dedicated Development Team
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  We provide a team of skilled developers who focus exclusively
                  on your project, ensuring top-tier quality and timely delivery
                  of your product.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Mobile App Development
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Our mobile app development team creates responsive and
                  engaging mobile applications to enhance your business presence
                  on iOS and Android platforms.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Web Development
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  We create dynamic, responsive, and user-friendly websites that
                  cater to your business needs and goals.
                </p>
              </div>
            </>
          )}

          {page === 2 && (
            <>
              {/* Show remaining cards */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaMobileAlt size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Enterprise Solutions
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Our enterprise solutions are tailored to meet the unique
                  demands of large-scale businesses, providing scalable and
                  efficient systems.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaCogs size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Maintenance & Support
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  We offer ongoing maintenance and support services to ensure
                  that your applications run smoothly and effectively at all
                  times.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-left">
                <FaLaptopCode size={50} className="text-blue-500 mb-4" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-500">
                  Custom Software Development
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Our team specializes in creating custom software solutions
                  that align perfectly with your business needs and objectives.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Page Navigation Buttons */}
        <div className="mt-8">
          {page === 1 ? (
            <button
              onClick={() => handlePageChange(2)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
              View More Services
            </button>
          ) : (
            <button
              onClick={() => handlePageChange(1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
            >
              View Less Services
            </button>
          )}
        </div>
        {/* Team of Experts Section */}
        <div className="bg-white py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side (Image) */}
            <div
              className="w-full h-64 sm:h-72 lg:h-80 bg-cover bg-center rounded-md"
              style={{ backgroundImage: "url('/4.jpg')" }}
            >
              {/* Image container */}
            </div>

            {/* Right Side (Text Content) */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl font-bold text-blue-500">
                We are committed to your strategy
              </h1>
              <p className="text-gray-700 text-lg">
                We are committed to providing business solutions that deliver
                value in the digital economy. At Renaissance, we seamlessly
                implement the most effective business and digital marketing
                solutions, including website and app development. Every day, we
                help brands think big, execute smart, and achieve growth. Our
                intelligent digital marketing strategy consistently unlocks
                value from digital investments in a rapidly advancing world,
                from simple to infinitely complex solutions.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                MORE ABOUT OUR COMPANY
              </a>
            </div>
          </div>
        </div>
        <div className="py-12 sm:py-16 lg:py-20 px-6 sm:px-8 max-w-7xl mx-auto flex items-center">
          <div className="w-1/2">
            <image
              src="/7.png"
              alt="Image"
              className="w-8/9 h-96 object-cover" // Adjusted width and height
            />
          </div>
          <div className="w-1/2 ml-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-500">
              Get In Touch
            </h1>
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 mb-2" htmlFor="inquiry">
                  Your Inquiry
                </label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="Type your inquiry here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
