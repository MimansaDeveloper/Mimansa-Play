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
      <img src="/logo.png" alt="Mimansa Kids Logo" className="w-[12vw]" />
      <ul className='flex gap-8 text-lg text-black list-none ml-32'>
        <li className='cursor-pointer hover:text-gray-600 transition duration-300'>Home</li>
        <li className='cursor-pointer hover:text-gray-600 transition duration-300'>About Us</li>
        <li className='cursor-pointer hover:text-gray-600 transition duration-300'>Testimonial</li>
        <li className='cursor-pointer hover:text-gray-600 transition duration-300'>Contact Us</li>
      </ul>
      <div className='flex gap-4'>
        <button onClick={handleTryGame} className='bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-[#1f3a7a] transition duration-300'>
          Try The Game
        </button>
        <button className='bg-[#DBCDF0]
 text-black font-semibold py-2 px-4 rounded-md hover:bg-[#f4c300] transition duration-300'>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Navbar;
