import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpScreen from './PopUpScreen'; // Import the PopUpScreen

const Navbar = ({ openPopup }) => {
    const navigate = useNavigate();

    const handleTryGame = () => {
        navigate("/start");
    }

   

    return (
        <div className='bg-white flex items-center justify-between w-full h-[6vw] px-[8vw] shadow-md sticky top-0 z-50'>
            <img src="/logo1.png" alt="Mimansa Kids Logo" className="w-[12vw]" />
            
            <ul className='flex gap-[2.5vw] text-[1.1rem] text-black list-none'>
                <li className='cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300'>Home</li>
                <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Why Us</li>
                <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>How it works</li>
                <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Testimonial</li>
                <li className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Contact Us</li>
            </ul>

            <div className='flex items-center justify-center gap-[1.5vw] '>
                <button 
                    onClick={handleTryGame} 
                    className='py-[0.80rem] px-4 hover:bg-black hover:text-white font-semibold text-[1rem] rounded-md bg-white text-black border-2 border-black transition duration-300 whitespace-nowrap'
                >
                    Try the game
                </button>
                <button 
                    onClick={openPopup} // Update this line to open the pop-up
                    className='py-[0.85rem] px-3 bg-[#DBCDF0] text-black font-semibold text-[1rem] rounded-md hover:bg-[#c09ff3] hover:text-white transition duration-300 whitespace-nowrap'
                >
                    Signup for early access
                </button>
            </div>
        </div>
    );
};

export default Navbar;
