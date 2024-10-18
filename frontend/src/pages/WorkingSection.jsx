import React from 'react';

// Array holding the content for the working section
const workingItems = [
  {
    img: '/game.png',
    title: 'Choose a Game',
    text: 'Pick from a variety of fun, speech-boosting games tailored to your child’s age and development level.',
    bgColor: 'bg-[#B3C7FD]',
  },
  {
    img: '/headphoneimage.png',
    title: 'Practice Sounds & Words',
    text: 'Kids mimic words and sounds, with our engaging videos and fun characters guiding them along the way.',
    bgColor: 'bg-[#FBC261]',
  },
  {
    img: '/likeimage.png',
    title: 'Instant Feedback',
    text: 'Our proprietary AI listens and gives instant feedback, improving pronunciation and articulation.',
    bgColor: 'bg-[#8CD5C0]',
  },
  {
    img: '/progressimage.png',
    title: 'Track Progress',
    text: 'Easily monitor your child\'s improvement and celebrate their speech milestones!',
    bgColor: 'bg-[#FCD9D1]',
  },
];

const WorkingSection = () => {
  return (
    <div className="bg-[rgba(215,255,234,0.54)] py-10 px-10 flex flex-col items-center">
      {/* Section Title */}
      <div className="text-center mb-28 mt-4">
        <h2 className="font-comic-neue font-bold text-[2.5vw] leading-[2vw] text-black mb-3 mt-8">
          How it works
        </h2>
        <p className="font-comic-neue font-normal text-[1.3vw] leading-[3vw] text-black">
          How Mimansa Kids Makes Speech Learning Easy
        </p>
      </div>

      {/* Main Content */}
      <div className="flex justify-center  items-center w-full">
        {/* Left Content (4 Columns) */}
        <div className="flex flex-wrap justify-center gap-8 w-[50%]">
          {workingItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col w-[20vw] h-[20vw]  mb-1 p-5 rounded-lg ${item.bgColor}`} // Adjust width and margin
            >
              <img src={item.img} alt={item.title} className='w-[5rem] self-center mb-4' />
              <h3 className="font-comic-neue font-bold text-[1.5rem] leading-[1.75rem] text-black text-center mb-3">
                {item.title}
              </h3>
              <p className="font-comic-neue font-normal text-[1.2rem] leading-[1.5rem] text-[#454545] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right Content (Image Placeholder) */}
        <div className="flex justify-center items-center  max-w-[28.5vw] ml-12">
          <img src="/worksectionimage.png" alt="Work Section" className="max-w-full rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-36">
        <button className="bg-[#322F29] text-white font-comic-neue font-bold text-[1.5rem] py-4 px-8 rounded-lg">
          Try the Game
        </button>
      </div>
    </div>
  );
};

export default WorkingSection;
