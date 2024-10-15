import React from 'react';

const WorkingSection = () => {
  return (
    <div className="bg-[#FDDEDE] h-screen py-16 px-10 flex flex-col items-center justify-center">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="font-comic-neue font-bold text-[32px] leading-[37px] text-black">
          How it works
        </h2>
        <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black mt-2 mb-16">
          How Mimansa Kids Makes Speech Learning Easy
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-start max-w-6xl w-full">
        {/* Left Content (4 Columns) */}
        <div className="grid grid-cols-2 gap-10 w-[65%]">
          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="font-comic-neue font-bold text-[20px] leading-[23px] text-black mb-5">
              Choose a Game
            </h3>
            <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
              Pick from a variety of fun, speech-boosting games tailored to your child’s age and development level.
            </p>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="font-comic-neue font-bold text-[20px] leading-[23px] text-black mb-5">
              Practice Sounds & Words
            </h3>
            <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
              Kids mimic words and sounds, with our engaging videos and fun characters guiding them along the way.
            </p>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="font-comic-neue font-bold text-[20px] leading-[23px] text-black mb-5">
              Instant Feedback
            </h3>
            <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
              Our proprietary AI listens and gives instant feedback, improving pronunciation and articulation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="font-comic-neue font-bold text-[20px] leading-[23px] text-black mb-5">
              Track Progress
            </h3>
            <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
              Easily monitor your child's improvement and celebrate their speech milestones!
            </p>
          </div>
        </div>

        {/* Right Content (Video Placeholder) */}
        <div className="flex justify-center items-center w-[30%]">
          <div className="w-[288px] h-[231px] bg-white border border-black flex justify-center items-center">
            <p className="text-[20px] font-inter font-bold">Video</p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-16">
        <button className="bg-[#322F29] text-white font-comic-neue font-normal text-[20px] py-4 px-8 rounded-lg">
          Try the Game
        </button>
      </div>
    </div>
  );
};

export default WorkingSection;
