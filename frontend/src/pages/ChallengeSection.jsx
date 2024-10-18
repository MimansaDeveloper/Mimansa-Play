import React from 'react';

const ChallengeSection = () => {
  return (
    <div className="bg-[#E9FFF3] py-16 px-8 text-center w-full flex flex-col">
      {/* Main heading */}
      <h2 className="font-comic-neue font-bold mt-12 text-[2.5vw] leading-[2vw] text-black mb-4">
        The Challenge
      </h2>
      <p className="font-comic-neue text-[1.3vw] leading-[3vw] text-black mb-16">
        Speech and Language Delays are on the Rise, and Parents are Seeking Help
      </p>

      {/* Content section with three columns */}
      <div className="flex flex-col mb-20 md:flex-row justify-center items-start gap-8 mx-auto">
        {/* Column 1: Unhealthy Screen Time */}
        <div className="flex-1  bg-[#D4E9F7] rounded-[1.2rem] p-8 w-[25vw] h-[65vh]">
          <h3 className="font-comic-neue mt-5 font-semibold text-[2.3vw] text-[#6782AE] mb-6 text-center">
          Passive Screen
          </h3>
          <div className="flex justify-center items-center">
            {/* Vertical dashed line divider */}
            <div className="border-t-[3px] border-dashed opacity-80 border-white w-[20vw] h-[2vw] mx-[2vw]"></div>
          </div>
          <p className="font-comic-neue mt-5 font-light text-[1.9vw] text-[#454545] text-center">
            Increase in passive unhealthy screen time leading to speech delay in
            children.
          </p>
        </div>

        
        {/* Column 2: Speech Delay */}
        <div className="flex-1 bg-[#D4E9F7] rounded-[1.2rem] p-8 w-[25vw] h-[65vh]">
          <h3 className="font-comic-neue mt-5 font-semibold text-[2.3vw] text-[#6782AE] mb-6 text-center">
            Speech Delay
          </h3>
          <div className="flex justify-center items-center">
            {/* Vertical dashed line divider */}
            <div className="border-t-[3px] border-dashed opacity-80 border-white w-[20vw] h-[2vw] mx-[2vw]"></div>
          </div>
          <p className="font-comic-neue mt-5 font-light text-[1.9vw] text-[#454545] text-center">
            1 in 5 children is at risk of having speech and language delay before age 5.
          </p>
        </div>

       
        {/* Column 3: Expensive Therapy */}
        <div className="flex-1 bg-[#D4E9F7] rounded-[1.2rem] p-8 w-[25vw] h-[65vh]">
          <h3 className="font-comic-neue mt-5 font-semibold text-[2.3vw] text-[#6782AE] mb-6 text-center">
            Expensive Therapy
          </h3>
          <div className="flex justify-center items-center">
            {/* Vertical dashed line divider */}
            <div className="border-t-[3px] border-dashed opacity-80 border-white w-[20vw] h-[2vw] mx-[2vw]"></div>
          </div>
          <p className="font-comic-neue mt-5 font-light text-[1.9vw] text-[#454545] text-center">
            Good center-based speech therapy is inaccessible and expensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
