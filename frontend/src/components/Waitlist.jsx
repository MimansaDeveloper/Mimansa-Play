import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import background from '/backgroun.png';  // Background image for the whole screen
import buttonImage from '/imagebg.png';   // Image to be used as Play Now button

const Waitlist = () => { 
  const navigate = useNavigate(); // Create navigate function

  const handleSignUp = () => {
    console.log("hello");
    navigate('/signup'); // Navigate to the game screen
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div
      className="flex justify-center items-center w-full h-screen"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain' }}
    >
      {/* Inner div styled with Tailwind */}
      <div className="absolute w-[1200px] h-[600px] bg-[#FFEBDA] rounded-[100px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-xl p-10">
        
        {/* Header with updated content */}
        <h1 className="w-[285px] h-[72px] mb-12 font-poppins font-bold text-[44px] leading-[72px] text-[#264195]">
          That was fun!
        </h1>
        <button className="w-16 absolute right-16 top-10 active:scale-75" onClick={goToHome}>
            <img src="/home.png" alt="Home" />
          </button>
        
        {/* Updated instructions */}
        <ul className="w-[800px] text-black list-disc list-inside mb-12 font-bold text-3xl" style={{ fontFamily: "'Comic Neue', sans-serif" }}>
          <li className='mb-4'>Simple sounds like <span className="font-bold text-pink-600">POP</span> are building blocks for toddlers, helping them connect actions to words and strengthening their speech skills, one joyful sound at a time.</li>
          <li className='mb-4'>We are building the best games based on the science of speech to help our children speak on time. Join our waitlist now for early access to many more such fun games!</li>
        </ul>

        {/* Buttons for "Play Again" and "Sign Up" */}
        <div className="flex mt-8 gap-4 w-full px-48">
          <button 
            onClick={() => navigate('/game')} 
            className=" w-full border-2 border-pink-300 text-pink-300 hover:text-white hover:bg-pink-300 text-2xl font-bold py-4 px-8 rounded-xl shadow-md"
            style={{ fontFamily: "'Comic Neue', sans-serif" }}
          >
            Play Again
          </button>
          <button 
            onClick={handleSignUp} 
            className="w-full bg-pink-400 hover:bg-pink-500 text-2xl text-white font-bold py-4 px-8 rounded-xl shadow-md"
            style={{ fontFamily: "'Comic Neue', sans-serif" }}
          >
            Signup for early access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
