import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#FAEDCB] w-full h-screen px-5 lg:px-10">
      {/* Left Section */}
      <div className="flex flex-col w-full lg:w-[50%] h-full ml-0 lg:ml-20">
        <h1 className="font-comic-neue font-bold text-[1.94vw] lg:text-[2.50vw] leading-[2.22vw] lg:leading-[3.00vw] text-black mt-[1.85vh] lg:mt-44">
          Unlock Your Child’s Speech with Fun, AI-Powered Games
        </h1>
        <p className="font-comic-neue font-normal text-[1.25vw] lg:text-[1.60vw] leading-[2.5vw] lg:leading-[2.00vw] text-black mt-6 lg:mt-10">
          Designed by experts from <span className='text-[rgba(38,65,149,1)] font-bold '>IIT & Havard University</span> , loved by kids, and trusted by parents. Give your child the speech tools they need with interactive, engaging activities.
        </p>
        <button className="bg-[#DBCDF0] w-fit p-4 lg:p-6 mt-6 lg:mt-10 text-black font-semibold rounded-md hover:bg-[#f4c300] transition duration-300">
          Join the Waitlist for Early Access
        </button>
      </div>
      {/* Right Section (Image) */}
      <div className="flex justify-center items-center w-full lg:w-[50%] mt-10 lg:mt-0">
        <img src="/herosection.png" alt="Hero Section" className='w-full h-auto max-w-md lg:max-w-full p-0 lg:p-20' />
      </div>
    </div>
  );
};

export default HeroSection;
