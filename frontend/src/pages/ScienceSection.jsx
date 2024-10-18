import React from "react";

const ScienceSection = ({ openPopup }) => {
  return (
    <div className="bg-[rgba(250,237,203,1)]  flex flex-col justify-center items-center px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center  mb-12 mt-[6.5rem]">
        <h2 className="font-comic-neue text-[2.5vw] leading-[2vw] font-bold font-comic text-black mb-3">
          The Science Behind Us
        </h2>
        <p className="font-comic-neue text-[1.3vw] leading-[3vw] font-comic text-black ">
          Developed with Experts, Backed by Research
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-[-3vw] flex flex-col md:flex-row  items-center justify-center gap-12 md:gap-24 mb-12">
        {/* Image Placeholder */}
        <div className="w-[38vw] h-[38vw] flex justify-center items-center">
          <img
            src="/sciencesectionimage.png"
            alt="Science Image"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text and Button */}
        <div className="text-left max-w-lg mt-2">
          <p className="text-[1.5vw] leading-[2.5vw]   font-comic text-gray-800  mb-8">
            Our games use methods endorsed by leading early childhood
            development experts and speech therapists to ensure your child gets
            the best learning experience possible. With AI-driven insights, your
            child receives personalized support on their journey to better
            speech.
          </p>
          {/* Button */}
          <button
            onClick={openPopup}
            className="bg-purple-200 text-black px-8 py-4 rounded-lg hover:bg-purple-300 transition duration-300"
          >
            Sign Up for Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScienceSection;
