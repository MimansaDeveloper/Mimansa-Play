import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between bg-[#FAEDCB] w-full h-screen px-10">
      {/* Left Section */}
      <div className="flex flex-col w-[50%] h-full">
        <h1 className="font-comic-neue font-bold text-[36px] leading-[41px] text-black mb-4 mt-40">
          Unlock Your Child’s Speech with Fun, AI-Powered Games
        </h1>
        <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black mb-6 mt-10">
          Designed by experts from IIT & HARVARD, loved by kids, and trusted by parents. Give your child the speech tools they need with interactive, engaging activities.
        </p>
        <button className="bg-[#DBCDF0] w-fit p-6 mt-10 text-black font-semibold rounded-md hover:bg-[#f4c300] transition duration-300">
          Join the Waitlist for Early Access
        </button>
      </div>
      {/* Right Section (Image) */}
      <div className="flex justify-center items-center w-[50%]">
        <div className="w-[400px] h-[587px] bg-white border-black border-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
