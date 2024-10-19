import React from "react";

const ScienceSection = ({ openPopup }) => {
  return (
    <div className="bg-[rgba(250,237,203,1)] flex flex-col justify-center items-center px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 mt-[6.5rem]">
        <h2 className="font-comic-neue text-[8vw] md:text-[2.5vw] leading-[9vw] md:leading-[2vw] font-bold text-black mb-3">
          The Science Behind Us
        </h2>
        <p className="font-comic-neue text-[5vw] md:text-[1.3vw] leading-[6vw] md:leading-[3vw] text-black">
          Developed with Experts, Backed by Research
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row  items-center justify-center gap-8 md:gap-12 mb-12">
        {/* Image Placeholder */}
        <div className="w-[90vw] md:w-[38vw] h-[40vw] flex justify-center items-center mb-4 md:mb-0">
          <img
            src="/sciencesectionimage.png"
            alt="Science Image"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text and Button */}
        <div className="text-center max-w-lg mt-2 flex flex-col items-center">
          {/* Box for mobile screens */}
          <div className="bg-[#f5ebd2] p-4 rounded-lg shadow-md w-full md:hidden">
            <p className="text-[4vw] leading-[5vw] font-comic text-gray-800 mb-8">
              Our games use methods endorsed by leading early childhood
              development experts and speech therapists to ensure your child
              gets the best learning experience possible. With AI-driven
              insights, your child receives personalized support on their
              journey to better speech.
            </p>
          </div>

          {/* Text without box for larger screens */}
          <p className="hidden text-left md:block text-[1.5vw] leading-[2.5vw] font-comic text-gray-800 mb-8">
            Our games use methods endorsed by leading early childhood
            development experts and speech therapists to ensure your child
            gets the best learning experience possible. With AI-driven
            insights, your child receives personalized support on their
            journey to better speech.
          </p>

          {/* Button */}
          <button
            onClick={openPopup}
            className="bg-purple-200 text-black px-8 py-4 lg:mr-20 rounded-lg hover:bg-purple-300  hover:text-white transition duration-300 text-[4vw] md:text-[1rem] mt-4"
          >
            Sign Up for Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScienceSection;
