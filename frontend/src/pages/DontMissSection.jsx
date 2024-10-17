import React from 'react';

const DontMissSection = () => {
  return (
    <div className="bg-[#F9E4E4] min-h-[576px] flex items-center py-10 px-4">
      <div className='flex flex-col justify-center items-center w-[50%] mt-[-0.5vw]'>
        {/* Text Section */}
        <div className="px-12 ml-16 mb-10">
          <h2 className="font-comic-neue font-bold text-[2.2vw] leading-[2.8vw] text-black mb-3">
            Don’t Miss Out on Giving Your Child the Best
          </h2>
          <p className="font-comic-neue text-[1.3vw] text-black mb-6"> {/* Changed from text-[18px] to text-[2vw] */}
            Be among the first to experience our AI-powered speech-learning  app for children.
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex w-full px-12 ml-[7.5rem] mt-[-1.5vw] items-center ">
          <input
            type="email"
            placeholder="Enter your email to unlock the early access"
            className="w-full max-w-md p-4 rounded-s-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
          />
          <button className="w-fit h-[3.92vw] text-md  bg-[#DBCDF0] px-10 py-[0.3rem] rounded-e-xl text-black font-semibold ">
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
