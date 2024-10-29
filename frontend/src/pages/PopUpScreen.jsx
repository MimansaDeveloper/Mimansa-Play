import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { toast } from 'react-toastify'; // Import Toastify
import { sendEmail, storeEmail } from "../utils/emailUtils"; // Import the utility functions

const PopUpScreen = ({ closePopup }) => {
  const [email, setEmail] = useState(''); // State for the email input
  const [loading, setLoading] = useState(false); // State for loading
  const [signupMessage, setSignupMessage] = useState(""); // State for signup message

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

  const handleSignUp = async () => {
     // Check if email is valid
     if (!isValidEmail(email)) {
      toast.error("Please enter a valid email."); // Show error toast
      return;
  }

  setLoading(true); // Set loading to true

    try {
        // await sendEmail(email); // Send email
        await storeEmail(email); // Store email in Firestore
        setSignupMessage("Thanks for signing up! Exciting things are coming your way soon.");
        setEmail("");
        toast.success("Thank you for signing up!");
    } catch (error) {
        toast.error(error.message); // Show the error message
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className='relative w-[90%] max-w-[80%] lg:max-w-[60%] h-[90vw] lg:h-[70%] bg-white   flex flex-col rounded-xl lg:rounded-3xl justify-center items-center p-4'>
      <img src="/bgpopup.png" alt="bgpopup"  className='w-full h-full absolute opacity-[10%]'/>
        {/* Giraffe image */}
        <img 
          src="/ziraffe.png" 
          alt="Giraffe" 
          className="absolute lg:bottom-[-1.5vw] bottom-[-4vw] left-[-15vw] lg:left-[-5vw] w-[30vw] lg:w-[12vw] h-auto" 
        />

       <div className='flex justify-center flex-col items-center mt-[-10vw] lg:mt-0  h-full w-full'>
         {/* Title */}
         <h1 className="text-[6vw] mb-[3vw] lg:mb-0 lg:text-[3vw] md:text-[3vw] font-bold text-center text-[#707ACF]">
          Sign up for early access
        </h1>
        <div className='absolute  flex justify-center items-center top-0 right-0    w-[10vw] h-[10vw] lg:w-[6vw] lg:h-[6vw] rounded-tr-[1vw] rounded-bl-[1vw] z-10' onClick={closePopup}>
          {/* <img src="/cross.png" alt="close" className='w-[5vw] lg:w-[3vw]' /> */}
          <svg className="lg:hidden" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500977 0H37.3592C42.0568 0 45.865 3.80815 45.865 8.50575V45.364H9.57377C4.563 45.364 0.500977 41.302 0.500977 36.2912V0Z" fill="#F77676"/>
<line x1="16.047" y1="15.6425" x2="30.4248" y2="30.0203" stroke="white" stroke-width="2.2682"/>
<line x1="16.4017" y1="30.0202" x2="30.7794" y2="15.6425" stroke="white" stroke-width="2.2682"/>
</svg>
<svg className="lg:block hidden" width="100" height="100" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500977 0H37.3592C42.0568 0 45.865 3.80815 45.865 8.50575V45.364H9.57377C4.563 45.364 0.500977 41.302 0.500977 36.2912V0Z" fill="#F77676"/>
<line x1="16.047" y1="15.6425" x2="30.4248" y2="30.0203" stroke="white" stroke-width="2.2682"/>
<line x1="16.4017" y1="30.0202" x2="30.7794" y2="15.6425" stroke="white" stroke-width="2.2682"/>
</svg>

        </div>

        {/* Input & Button */}
        <div className="flex w-full justify-center items-center mt-[2vw] lg:px-[10vw] z-10">
          <input
            type="email"
            value={email} // Set email input value
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email to unlock the early access"
            className="w-full h-[10vw] lg:h-[4vw] lg:max-w-[21vw] p-[1vw] text-[2.5vw] lg:text-[1vw] rounded-s-lg lg:rounded-s-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleSignUp} // Handle signup click
            className={`lg:w-[10vw] whitespace-nowrap  flex justify-center items-center text-white w-full max-w-[13vw] h-[10vw] lg:h-[4vw] text-[2vw] lg:text-[1vw] active:scale-95 bg-[#DBCDF0] px-[1.5vw] py-[1vw] rounded-e-lg lg:rounded-e-xl font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button while loading
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "Sign me up!"} {/* Change button text based on loading */}
          </button>
        </div>

        {/* Disclaimer  */}
        {signupMessage && (<h3 className="w-full flex lg:justify-start mx-8 items-start mt-[1vw]  lg:px-[14vw] lg:mt-[1vw]  font-light text-[1.8vw] lg:text-[0.9vw] text-left lg:text-left">
          <span className="text-red-700">*</span> {signupMessage}
        </h3>)}
        {!signupMessage && (<h3 className="w-full flex lg:justify-start mx-8 lg:px-[13.5vw] items-start lg:mt-[1vw] mt-[2vw] font-light text-[1.8vw] lg:text-[0.9vw] text-left lg:text-left">
          <span className="text-red-700">*</span> We’ll only send what’s worth opening – no spam, guaranteed!
        </h3>)}

       </div>
        {/* Decorative balloons */}
        <div className="absolute bottom-0 right-[2vw] lg:right-[1vw]">
          <img src="/balloon1.png" alt="Balloons" className="w-[10vw] lg:w-[6vw] md:w-[4vw]" />
        </div>
        <div className="absolute bottom-0 right-[10vw] lg:right-[5vw]">
          <img src="/balloon4.png" alt="Balloons" className="w-[8vw] lg:w-[5vw] md:w-[3.5vw]" />
        </div>
      </div>
    </div>
  );
}

export default PopUpScreen;
