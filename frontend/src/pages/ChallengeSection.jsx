import React from 'react';

const ChallengeSection = () => {
  return (
    <div className="bg-teal-100 py-16 px-8 text-center w-full h-screen flex flex-col ">
      <h2 className="text-4xl font-bold mb-4 text-black">The Challenge</h2>
      <p className="text-xl mb-40 text-black">
        Speech and Language Delays are on the Rise, and Parents are Seeking Help
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-28">
        <div className="flex-1 max-w-xs">
          <p className="text-2xl font-light text-black text-center">
            1 in 5 children is at risk of having speech and language delay before age 5.
          </p>
        </div>
        <div className="flex-1 max-w-xs border-l-2 border-black px-8">
          <p className="text-2xl font-light text-black text-center">
            75% of parents report screen time concerns, but the right tech can be a solution.
          </p>
        </div>
        <div className="flex-1 max-w-xs border-l-2 border-black px-8">
          <p className="text-2xl font-light text-black text-center">
            Mimansa Kids offers a fun, affordable alternative to costly, in-person speech therapy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
