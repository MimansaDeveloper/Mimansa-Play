import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import background from '/backgroun.png';  // Background image for the whole screen
import buttonImage from '/imagebg.png';   // Image to be used as Play Now button

const BalloonStartScreen = () => {
  const navigate = useNavigate(); // Create navigate function

  const handlePlayNow = () => {
    console.log("helllo")
    navigate('/game'); // Navigate to the game screen
  };

  return (
    <div
      className="flex justify-center items-center w-full h-screen"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain' }}
    >
      {/* Inner div styled with Tailwind */}
      <div className="absolute w-[1200px] h-[650px] bg-[#FFEBDA] rounded-[100px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-xl p-10">
        
        {/* Header with specified styles */}
        <h1 className=" w-[285px] h-[72px] mb-12  font-poppins font-bold text-[48px] leading-[72px] text-[#264195]">
          How to Play
        </h1>
        
        {/* Instructions */}
        <ul className="w-[600px] text-black list-disc list-inside mb-12 font-bold text-3xl" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
          <li className='mb-4'>Every time you say <span className="font-bold text-pink-600">POP</span>, one balloon on the screen will burst.</li>
          <li className='mb-4'>Get your kid to say <span className="font-bold text-pink-600">POP</span> with you and try to burst as many balloons as possible.</li>
        </ul>

        {/* Play Now Button (using image) */}
        <div className="relative " onClick={handlePlayNow}>
          <img 
            src={buttonImage} 
            alt="Play Now" 
            className="w-[300px] h-[100px] object-contain cursor-pointer" // Add cursor pointer
             // Add onClick to navigate
          />
          <span className="absolute inset-0 flex justify-center items-center text-4xl text-white font-bold" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
            Play Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default BalloonStartScreen;
