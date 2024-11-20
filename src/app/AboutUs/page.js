"use client"; // Mark this as a client-side component

import React from "react";
import Image from "next/image";
import { FaHandshake, FaTrophy, FaRobot } from "react-icons/fa"; // Importing the icons from react-icons

const teamMembers = [
  {
    name: "Zeeshan Shiekh",
    designation: "CEO",
    //experience: "1 Year",
    imageUrl: "/11.jpg", // Use 1.png as dummy image
  },
  {
    name: "Aditi Shahi",
    designation: "COO",
    //experience: "3 Years",
    imageUrl: "/12.jpg", // Use 1.png as dummy image
  },
  {
    name: "Shadab Hussain",
    designation: "CTO",
    //experience: "2 Years",
    imageUrl: "/1.png", // Use 1.png as dummy image
  },
  // {
  //   name: "kautilya",
  //   designation: "Animation",
  //   //experience: "4 Years",
  //   imageUrl: "/1.png", // Use 1.png as dummy image
  // },
  // {
  //   name: "Suhel Ahmad",
  //   designation: "Software Developer",
  //   //experience: "1.5 Years",
  //   imageUrl: "/1.png", // Use 1.png as dummy image
  // },
  // {
  //   name: "Sophia Lee",
  //   designation: "Project Manager",
  //   experience: "5 Years",
  //   imageUrl: "/1.png", // Use 1.png as dummy image
  // },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      {/* Section with taller background image */}
      <div
        className="bg-cover bg-center h-[45rem] flex items-center justify-center mb-12"
        style={{ backgroundImage: "url('/2.jpg')" }}
      ></div>

      {/* Our Values Section with increased height */}
      <div className="py-20 px-8">
        {" "}
        {/* Increased padding for height */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-700">Our Values</h3>
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
            We prioritize building strong relationships with our clients to create websites that truly reflect their vision and goals.
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
            Excellence at work is about delivering top-tier quality, exceeding client expectations with innovative solutions, and maintaining a commitment to continuous improvement in every project. It reflects dedication, professionalism, and the pursuit of perfection in all aspects of the agency&apos;s operations.
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
            Innovation and creativity drive unique and forward-thinking solutions, setting the agency apart in a competitive landscape. They inspire groundbreaking designs and functionalities, transforming ideas into impactful digital experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center min-h-[300px]"
            >
              <Image
                src={member.imageUrl}
                alt={`${member.name}'s profile`}
                width={150} // Increased size
                height={150} // Increased size
                className="w-36 h-36 mx-auto rounded-full mb-4" // Updated sizes
              />
              <h2 className="text-xl font-semibold text-blue-500">
                {member.name}
              </h2>
              <p className="text-gray-600">{member.designation}</p>
              <p className="text-gray-500">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
