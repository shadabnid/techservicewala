"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    service: "",
    phoneNumber: "",
    message: "",
  });

  const services = [
    "Ecommerce website",
    "Business website",
    "Blog website",
    "Portfolio website",
    "Event website",
    "Personal website",
    "Membership website",
    "Nonprofit website",
    "Informational website",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to a backend or an API)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="bg-pink-200 min-h-screen flex items-center justify-center px-6">
      {/* Left Content */}
      <div className="w-full max-w-md p-6 mr-6 flex flex-col justify-center">
        <p className="text-sm font-bold text-gray-700">CONTACT</p>
        <h1 className="text-5xl sm:text-6xl font-bold text-black mb-6">
          We&apos;re here to help you grow
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700">
          Feel free to reach out to us through your preferred method of contact.
          We are eager to connect with you and explore how our digital marketing
          team can contribute to your success.
        </p>
      </div>

      {/* Right Form */}
      <div className="w-full max-w-xl p-6 bg-black text-white shadow-lg rounded-md ml-auto mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 font-bold">
              What you are looking for
              <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
              style={{
                maxHeight: "12rem", // Limits height to display approximately 6 options
                overflowY: "auto", // Enables vertical scrolling
              }}
            >
              <option value="">Select Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">How can we help you?</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-600 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
              placeholder="What can we help you with?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 sm:py-3 rounded-md hover:bg-pink-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
