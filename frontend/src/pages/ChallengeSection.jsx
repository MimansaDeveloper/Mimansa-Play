import React from 'react';

const ChallengeSection = () => {
  return (
    <div className="bg-gray-100 py-16 px-8 text-center w-full h-screen flex flex-col">
      {/* Main heading */}
      <h2 className="text-3xl font-bold mb-6 text-black font-comic-neue">The Challenge</h2>
      <p className="text-lg mb-16 text-black font-comic-neue">
        Speech and Language Delays are on the Rise, and Parents are Seeking Help
      </p>

      {/* Content section with three columns */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 mt-auto mb-auto">
        {/* Column 1: Unhealthy Screen Time */}
        <div className="flex-1 max-w-xs">
          <h3 className="text-4xl  font-semibold text-green-600 mb-8 font-comic-neue">Unhealthy Screen Time</h3>
          <p className="text-2xl font-light text-black font-comic-neue">
            Increase in passive unhealthy screen time leading to speech delay in children.
          </p>
        </div>

        {/* Vertical dashed line divider */}
        <div className="hidden md:block border-l-2 border-dashed border-gray-400 h-[30vh] mx-8"></div>

        {/* Column 2: Speech Delay */}
        <div className="flex-1 max-w-xs">
          <h3 className="text-4xl font-bold text-green-600 mb-8 font-comic-neue">Speech Delay</h3>
          <p className="text-2xl font-light text-black font-comic-neue">
            1 in 5 children is at risk of having speech and language delay before age 5.
          </p>
        </div>

        {/* Vertical dashed line divider */}
        <div className="hidden md:block border-l-2 border-dashed border-gray-400 h-[30vh] mx-8"></div>

        {/* Column 3: Expensive Therapy */}
        <div className="flex-1 max-w-xs">
          <h3 className="text-4xl font-bold text-green-600 mb-8 font-comic-neue">Expensive Therapy</h3>
          <p className="font-light text-2xl text-black font-comic-neue">
            Good center-based speech therapy is inaccessible and expensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
