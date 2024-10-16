import React from 'react';

const DontMissSection = () => {
  return (
    <div className="bg-[#F9E4E4] min-h-[576px] flex items-center py-10 px-4">
      <div className='flex flex-col justify-center items-center w-[50%]'>
        {/* Text Section */}
        <div className="px-12 mb-10">
          <h2 className="font-comic-neue font-bold text-[2vw] text-black mb-4">
            Don’t Miss Out on Giving Your Child the Best
          </h2>
          <p className="font-comic-neue text-[1.5vw] text-black mb-6"> {/* Changed from text-[18px] to text-[2vw] */}
            Be among the first to experience our AI-powered speech-learning app for children.
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex w-full px-12 items-center ">
          <input
            type="email"
            placeholder="Enter your email to unlock the early access"
            className="w-full max-w-md p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
          />
          <button className="w-[40%] bg-[#D6BAE6] px-6 py-4 rounded-lg text-black font-semibold hover:bg-purple-600 transition duration-300">
            Sign me up!
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-10 w-[50%]">
        <img
          src="/phoneimage.png"
          alt="Two phones displaying the app"
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default DontMissSection;
