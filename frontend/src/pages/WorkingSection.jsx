import React from 'react';

const WorkingSection = () => {
  return (
    <div className="bg-[#FDDEDE]  py-16 px-10 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center mb-16 mt-4">
        <h2 className="font-comic-neue font-bold text-[32px] leading-[37px] text-black">
          How it works
        </h2>
        <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black mt-2">
          How Mimansa Kids Makes Speech Learning Easy
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-start max-w-6xl w-full">
        {/* Left Content (4 Columns) */}
        <div className="grid grid-cols-2 gap-8 w-[65%]">
          {[
            {
              img: '/game.png',
              title: 'Choose a Game',
              text: 'Pick from a variety of fun, speech-boosting games tailored to your child’s age and development level.',
            },
            {
              img: '/headphoneimage.png',
              title: 'Practice Sounds & Words',
              text: 'Kids mimic words and sounds, with our engaging videos and fun characters guiding them along the way.',
            },
            {
              img: '/likeimage.png',
              title: 'Instant Feedback',
              text: 'Our proprietary AI listens and gives instant feedback, improving pronunciation and articulation.',
            },
            {
              img: '/progressimage.png',
              title: 'Track Progress',
              text: 'Easily monitor your child\'s improvement and celebrate their speech milestones!',
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.img} alt={item.title} className='w-[4vw]' />
              <h3 className="font-comic-neue font-bold text-[20px] leading-[23px] text-black mb-3 mt-5">
                {item.title}
              </h3>
              <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Content (Image Placeholder) */}
        <div className="flex justify-center items-center w-[30%]">
          <img src="/worksectionimage.png" alt="Work Section" className="max-w-full" />
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-12">
        <button className="bg-[#322F29] text-white font-comic-neue font-normal text-[20px] py-4 px-8 rounded-lg">
          Try the Game
        </button>
      </div>
    </div>
  );
};

export default WorkingSection;
