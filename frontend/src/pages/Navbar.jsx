import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  const handleTryGame = () =>{
    navigate("/start");
     
  }
  return (
    <div className='bg-white flex items-center justify-between w-full h-[100px] px-10  shadow-md'>
      {/* <h1 className='text-3xl font-bold text-black'>Logo</h1> */}
      <img src="/logo.png" alt="Mimansa Kids Logo" className="w-[12vw] ml-24" />
      <ul className='flex gap-8 text-lg  text-black list-none ml-32'>
        <li className='cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300'>Home</li>
        <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>About Us</li>
        <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Testimonial</li>
        <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Contact Us</li>
      </ul>
      <div className='flex gap-6'>
        <button onClick={handleTryGame} className='hover:bg-black hover:text-white font-semibold py-2 px-4 rounded-md bg-white text-black border-2 border-black transition duration-300'>
          Try the game
        </button>
        <button className='bg-[#DBCDF0]
 text-black font-semibold w-[190px] h-[54px] text-[16px]   rounded-md hover:bg-[#c09ff3] transition duration-300 mr-24'>
          Signup for early access
        </button>
      </div>
    </div>
  );
};

export default Navbar;
