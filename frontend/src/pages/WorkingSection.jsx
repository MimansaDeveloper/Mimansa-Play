import React from 'react';

// Array holding the content for the working section
const workingItems = [
  {
    img: '/game.png',
    title: 'Choose a Game',
    text: 'Pick from a variety of fun, speech-boosting games tailored to your child’s age and development level.',
    bgColor: 'bg-[#B3C7FD66]',
  },
  {
    img: '/headphoneimage.png',
    title: 'Practice Sounds & Words',
    text: 'Kids mimic words and sounds, with our engaging videos and fun characters guiding them along the way.',
    bgColor: 'bg-[#FECB6066]',
  },
  {
    img: '/likeimage.png',
    title: 'Instant Feedback',
    text: 'Our proprietary AI listens and gives instant feedback, improving pronunciation and articulation.',
    bgColor: 'bg-[#8CD5C066]',
  },
  {
    img: '/progressimage.png',
    title: 'Track Progress',
    text: 'Easily monitor your child\'s improvement and celebrate their speech milestones!',
    bgColor: 'bg-[#FCCDD166]',
  },
];

const WorkingSection = () => {
  return (
    <div className="bg-[rgba(215,255,234,0.54)] py-10 px-6 lg:px-10 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center mb-12 lg:mb-28 mt-4">
        <h2 className="font-comic-neue font-bold text-[8vw] lg:text-[2.5vw] leading-[9vw] lg:leading-[2vw] text-black mb-3 mt-8">
          How it works
        </h2>
        <p className="font-comic-neue font-normal text-[5vw] lg:text-[1.3vw] leading-[6vw] lg:leading-[3vw] text-black">
          How Mimansa Kids Makes Speech Learning Easy
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        {/* Right Content (Image Placeholder on top for mobile) */}
        <div className="flex justify-center lg:hidden items-center max-w-full lg:max-w-[28.5vw] mb-10 lg:mb-0 lg:ml-12">
          <img
            src="/worksectionimage.png"
            alt="Work Section"
            className="w-[80vw] lg:w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Left Content (Boxes in single column for mobile) */}
        <div className="flex flex-wrap justify-center gap-8 w-full lg:w-[50%]">
          {workingItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col w-[80vw] h-auto lg:w-[20vw] lg:h-[20vw] mb-1 p-5 rounded-lg ${item.bgColor}`}
            >
              <img src={item.img} alt={item.title} className="w-[5vw] self-center mb-6" />
              <h3 className="font-comic-neue font-bold text-[6vw] lg:text-[1.5vw] leading-[7vw] lg:leading-[1.75vw] text-black text-center mb-6">
                {item.title}
              </h3>
              <p className="font-comic-neue font-normal text-[4.5vw] lg:text-[1.2vw] leading-[6vw] lg:leading-[1.5vw] text-[#454545] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Content (Image Placeholder on right for laptop, hidden on mobile) */}
        <div className="hidden lg:flex justify-center items-center max-w-full lg:max-w-[28.5vw] mb-10 lg:mb-0 lg:ml-12">
          <img
            src="/worksectionimage.png"
            alt="Work Section"
            className="w-[80vw] lg:w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-16 lg:mt-36 mb-8 lg:mb-16">
        <button className="bg-[#322F29] text-white font-comic-neue font-bold text-[5vw] lg:text-[1.5rem] py-4 px-8 rounded-lg">
          Try the Game
        </button>
      </div>
    </div>
  );
};

export default WorkingSection;
