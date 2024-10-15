import React from 'react';

const ScienceSection = () => {
  return (
    <div className="bg-[rgba(250,237,203,1)] h-screen flex flex-col justify-center items-center px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-28">
        <h2 className="text-2xl font-bold font-comic text-black">
          The Science Behind Us
        </h2>
        <p className="text-lg font-comic text-black mt-2">
          Developed with Experts, Backed by Research
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Image Placeholder */}
        <div className="w-96 h-96 bg-white border-2 border-black flex justify-center items-center">
          <img
            src="/path-to-image"
            alt="Science Image"
            className="object-contain"
          />
        </div>

        {/* Text and Button */}
        <div className="text-left max-w-lg">
          <p className="text-lg font-comic text-black leading-8 mb-8">
            Our games use methods endorsed by leading early childhood development experts and speech therapists to ensure your child gets the best learning experience possible. With AI-driven insights, your child receives personalized support on their journey to better speech.
          </p>
          {/* Button */}
          <button className="bg-purple-200 text-black px-8 py-4 rounded-lg hover:bg-purple-300 transition duration-300">
            Sign Up for Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScienceSection;
