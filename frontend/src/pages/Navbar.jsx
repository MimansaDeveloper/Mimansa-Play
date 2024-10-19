import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PopUpScreen from './PopUpScreen'; // Import the PopUpScreen

const Navbar = ({ openPopup }) => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

    const handleTryGame = () => {
        navigate("/game");
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleMenuItemClick = () => {
        setMobileMenuOpen(false); // Close the menu when a menu item is clicked
    }

    return (
        <div className='bg-white flex items-center justify-between w-full h-[6vw] px-[8vw] shadow-md sticky top-0 z-50'>
            <img src="/logo1.png" alt="Mimansa Kids Logo" className="w-[12vw]" />

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-[2.5vw] text-[1.1vw] text-black list-none'>
                <li onClick={handleMenuItemClick} className='cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300'>Home</li>
                <li onClick={handleMenuItemClick} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Why Us</li>
                <li onClick={handleMenuItemClick} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>How it works</li>
                <li onClick={handleMenuItemClick} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Testimonial</li>
                <li onClick={handleMenuItemClick} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Contact Us</li>
            </ul>

            {/* Mobile Menu Button */}
            <div className='md:hidden'>
                <button onClick={toggleMobileMenu} className='focus:outline-none'>
                    {/* Hamburger icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu with Side Animation */}
            <div className={`fixed top-0 right-0 bg-white shadow-lg w-3/4 h-full transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex flex-col items-center p-4 h-full'>
                    <img src="/logo1.png" alt="Mimansa Kids Logo" className="w-[12vw] mb-4" />
                    
                    {/* Close Button (Cross Icon) */}
                    <button onClick={toggleMobileMenu} className='absolute top-4 right-4 focus:outline-none invert'>
                        <img src="/cross.png" alt="Close" className='w-[5vw]' />
                    </button>
                    
                    <ul className='flex flex-col gap-[1.5vw] text-[1rem] text-black'>
                        <li onClick={() => { handleMenuItemClick(); navigate('/'); }} className='cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300'>Home</li>
                        <li onClick={() => { handleMenuItemClick(); }} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Why Us</li>
                        <li onClick={() => { handleMenuItemClick(); }} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>How it works</li>
                        <li onClick={() => { handleMenuItemClick(); }} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Testimonial</li>
                        <li onClick={() => { handleMenuItemClick(); }} className='cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300'>Contact Us</li>
                    </ul>
                    <div className='flex flex-col gap-2 mt-4'>
                        <button 
                            onClick={() => { handleTryGame(); handleMenuItemClick(); }} 
                            className='py-[0.80vw] px-4 hover:bg-black hover:text-white font-semibold text-[1rem] rounded-md bg-white text-black border-2 border-black transition duration-300 whitespace-nowrap'
                        >
                            Try the game
                        </button>
                        <button 
                            onClick={() => { openPopup(); handleMenuItemClick(); }} // Update this line to open the pop-up
                            className='py-[0.85vw] px-3 bg-[#DBCDF0] text-black font-semibold text-[1rem] rounded-md hover:bg-[#c09ff3] hover:text-white transition duration-300 whitespace-nowrap'
                        >
                            Signup for early access
                        </button>
                    </div>
                </div>
            </div>

            {/* Buttons on Desktop */}
            <div className='hidden md:flex items-center justify-center gap-[1.5vw]'>
                <button 
                    onClick={handleTryGame} 
                    className='py-[0.80vw] px-4 hover:bg-black hover:text-white font-semibold text-[1rem] rounded-md bg-white text-black border-2 border-black transition duration-300 whitespace-nowrap'
                >
                    Try the game
                </button>
                <button 
                    onClick={openPopup} // Update this line to open the pop-up
                    className='py-[0.85vw] px-3 bg-[#DBCDF0] text-black font-semibold text-[1rem] rounded-md hover:bg-[#c09ff3] hover:text-white transition duration-300 whitespace-nowrap'
                >
                    Signup for early access
                </button>
            </div>
        </div>
    );
};

export default Navbar;
