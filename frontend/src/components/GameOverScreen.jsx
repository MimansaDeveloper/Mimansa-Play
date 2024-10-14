import React from 'react';

const GameOverScreen = ({ onPlayAgain, onExit }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex">
        {/* Example of giving the image size using Tailwind CSS */}
        <img
          className="w-96 h-96 object-fit" // Tailwind for width and height (200px each)
          src="./Hurray.png"
          alt="Hurray"
        />
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={onPlayAgain}
          className="bg-[#FFABC4] hover:bg-[#FF8DAA] rounded-xl w-64 hover:text-black p-6 m-2 text-2xl font-bold text-white"
        >
          Play Again
        </button>
        <button
          onClick={onExit}
          className="bg-[#FFABC4] hover:bg-[#FF8DAA] rounded-xl w-64 hover:text-black p-6 m-2 text-2xl font-bold text-white"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;
