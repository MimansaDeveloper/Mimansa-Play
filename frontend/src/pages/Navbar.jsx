import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUpScreen from "./PopUpScreen"; // Import the PopUpScreen

const Navbar = ({ openPopup }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const handleTryGame = () => {
    navigate("/start");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <div className="bg-white flex items-center justify-between w-full h-[14vw] lg:h-[6vw] px-[8vw] shadow-md sticky top-0 z-50">
      <img
        src="/logo1.png"
        alt="Mimansa Kids Logo"
        className="w-[30vw] lg:w-[12vw]"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-[2.5vw] text-[1.1vw] text-black list-none">
        <li
          onClick={handleMenuItemClick}
          className="cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300"
        >
          Home
        </li>
        <li
          onClick={handleMenuItemClick}
          className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
        >
          Why Us
        </li>
        <li
          onClick={handleMenuItemClick}
          className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
        >
          How it works
        </li>
        <li
          onClick={handleMenuItemClick}
          className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
        >
          Testimonial
        </li>
        <li
          onClick={handleMenuItemClick}
          className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
        >
          Contact Us
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {/* Hamburger icon */}
          <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <mask
    id="mask0_727_364"
    style={{ maskType: "alpha" }} // Corrected style prop
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="24"
    height="24"
  >
    <rect width="24" height="24" fill="#D9D9D9" />
  </mask>
  <g mask="url(#mask0_727_364)">
    <path
      d="M3 7V5H21V7H3ZM3 19V17H21V19H3ZM3 13V11H21V13H3Z"
      fill="#1C1B1F"
    />
  </g>
</svg>

        </button>
      </div>

      {/* Mobile Menu with Side Animation */}
      <div
        className={`fixed top-0 right-0 bg-white shadow-lg w-3/4 h-full transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center p-4 h-full">
          <img
            src="/logo1.png"
            alt="Mimansa Kids Logo"
            className="w-[12vw] mb-4"
          />

          {/* Close Button (Cross Icon) */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 focus:outline-none invert"
          >
            <img src="/cross.png" alt="Close" className="w-[5vw]" />
          </button>

          <ul className="flex flex-col gap-[1.5vw] text-[1rem] text-black">
            <li
              onClick={() => {
                handleMenuItemClick();
                navigate("/");
              }}
              className="cursor-pointer hover:text-gray-600 font-semibold text-[#A964FF] transition duration-300"
            >
              Home
            </li>
            <li
              onClick={() => {
                handleMenuItemClick();
              }}
              className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
            >
              Why Us
            </li>
            <li
              onClick={() => {
                handleMenuItemClick();
              }}
              className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
            >
              How it works
            </li>
            <li
              onClick={() => {
                handleMenuItemClick();
              }}
              className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
            >
              Testimonial
            </li>
            <li
              onClick={() => {
                handleMenuItemClick();
              }}
              className="cursor-pointer hover:text-[#A964FF] font-semibold transition duration-300"
            >
              Contact Us
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => {
                handleTryGame();
                handleMenuItemClick();
              }}
              className="py-[0.80vw] px-4 hover:bg-black hover:text-white font-semibold text-[1rem] rounded-md bg-white text-black border-2 border-black transition duration-300 whitespace-nowrap"
            >
              Try the game
            </button>
            <button
              onClick={() => {
                openPopup();
                handleMenuItemClick();
              }} // Update this line to open the pop-up
              className="py-[0.85vw] px-3 bg-[#DBCDF0] text-black font-semibold text-[1rem] rounded-md hover:bg-[#c09ff3] hover:text-white transition duration-300 whitespace-nowrap"
            >
              Signup for early access
            </button>
          </div>
        </div>
      </div>

      {/* Buttons on Desktop */}
      <div className="hidden md:flex items-center justify-center gap-[1.5vw]">
        <button
          onClick={handleTryGame}
          className="py-[0.80vw] px-4 hover:bg-black hover:text-white font-semibold text-[1rem] rounded-md bg-white text-black border-2 border-black transition duration-300 whitespace-nowrap"
        >
          Try the game
        </button>
        <button
          onClick={openPopup} // Update this line to open the pop-up
          className="py-[0.85vw] px-3 bg-[#DBCDF0] text-black font-semibold text-[1rem] rounded-md hover:bg-[#c09ff3] hover:text-white transition duration-300 whitespace-nowrap"
        >
          Signup for early access
        </button>
      </div>
    </div>
  );
};

export default Navbar;
