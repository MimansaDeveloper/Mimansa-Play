import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between bg-[#FAEDCB] w-full h-screen px-5 lg:px-10"
      data-aos="fade-in" // Adding AOS animation for the entire section
    >
      {/* Left Section */}
      <div
        className="flex flex-col w-[50%] h-full ml-20 mt-4"
        data-aos="fade-up" // Animation for text and input
      >
        <h1 className="font-comic-neue ml-1 font-bold text-[1.94vw] lg:text-[2.50vw] leading-[2.22vw] lg:leading-[3.00vw] text-black mt-[1.85vh] lg:mt-44">
          Unlock Your Child’s Speech with Fun,<br/> AI-Powered Games
        </h1>
        <p className="font-comic-neue font-normal ml-1 text-2xl leading-[2vw] text-black mt-5">
          Designed by experts from{" "}
          <span className="text-[rgba(38,65,149,1)] font-bold">
            IIT & Havard University
          </span>
          , loved by kids, and trusted by parents. Give your child the speech
          tools they need with interactive, engaging activities.
        </p>

        {/* Input & Button */}
        <div className="flex w-full mt-10">
          <input
            type="email"
            placeholder="Enter your email to unlock the early access"
            className="w-full max-w-md p-4 rounded-s-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
            data-aos="fade-right"
          />
          <button
            className="w-[170px] bg-[#DBCDF0] px-6 py-4 rounded-e-xl text-black font-semibold"
            data-aos="fade-left"
          >
            Sign me up!
          </button>
        </div>
        <h3 className="ml-1 mt-2 font-light text-md">
          <span className="text-red-700">*</span>We’ll only send what’s worth
          opening – no spam, guaranteed!
        </h3>
      </div>

      {/* Right Section (Image) */}
      <div
        className="flex justify-center items-center w-[50%] mt-[-60px]"
        data-aos="zoom-in" // Animation for the image
      >
        <img
          src="/herosection.png"
          alt="Hero Section"
          className="w-full p-12 mr-20"
        />
      </div>
    </div>
  );
};

export default HeroSection;
