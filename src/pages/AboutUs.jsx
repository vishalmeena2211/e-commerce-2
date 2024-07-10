// AboutUs.js

import React from 'react';
import TeamSection from '../components/comman/TeamSection';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 relative">
            <img
              src="https://placekitten.com/800/500" // Replace with your image URL
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <button className="bg-white text-gray-800 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700">
              Welcome to <span className="font-bold text-indigo-600">Your Company Name</span>, where style meets functionality. We are dedicated to providing a curated selection of high-quality products tailored to your tastes.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Our team is committed to delivering a seamless shopping experience. From the latest trends to timeless classics, discover a world of possibilities with <span className="font-bold text-indigo-600">Your Company Name</span>.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Have questions or need assistance? Our customer support team is here to help. Thank you for choosing <span className="font-bold text-indigo-600">Your Company Name</span> for your online shopping journey!
            </p>
          </div>
        </div>
      </div>
      <TeamSection/>
    </div>
  );
};

export default AboutUs;
