import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const DontMissSection = () => {
  const [email, setEmail] = useState(""); // State for the email input
  const [loading, setLoading] = useState(false); // State for loading
  const [signupMessage, setSignupMessage] = useState(""); // State for signup message

  const handleSignUp = () => {
    // Check if email is valid
    if (!email) {
      toast.error("Please enter a valid email."); // Show error toast
      return;
    }

    setLoading(true); // Set loading to true
    // Sending email using EmailJS
    emailjs.send("service_ibnkfbb", "signup_template", { 
      email, 
      message: "New signup for early access!" 
    }, "8cu9YH3f38WXRhH9-")
    .then(() => {
      setEmail(""); // Clear email input
      setSignupMessage("Thanks for signing up! Exciting things are coming your way soon."); // Update signup message
      toast.success("Thank you for signing up!"); // Show success toast
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      toast.error("Failed to send the email. Please try again later."); // Show error toast
    })
    .finally(() => {
      setLoading(false); // Set loading to false after operation
    });
  };

  return (
    <div className="bg-[#F9E4E4] min-h-[576px] flex items-center py-10 px-4">
      <div className='flex flex-col justify-center items-center w-[50%] mt-[-0.5vw]'>
        {/* Text Section */}
        <div className="px-12 ml-16 mb-10">
          <h2 className="font-comic-neue font-bold text-[2.2vw] leading-[2.8vw] text-black mb-3">
            Don’t Miss Out on Giving Your Child the Best
          </h2>
          <p className="font-comic-neue text-[1.3vw] text-black mb-6">
            Be among the first to experience our AI-powered speech-learning app for children.
          </p>
        </div>

        {/* Input & Button */}
        <div className="flex w-full px-12 ml-[7.5rem] mt-[-1.5vw] items-center ">
          <input
            type="email"
            value={email} // Set email input value
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email to unlock the early access"
            className="w-full max-w-md p-4 rounded-s-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleSignUp} // Handle signup click
            className={`w-[10vw] whitespace-nowrap bg-[#DBCDF0] border-2 border-[#DBCDF0] active:scale-95 px-[1.5vw] py-[1vw] rounded-e-xl text-black font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button while loading
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "Sign me up!"} {/* Change button text based on loading */}
          </button>
        </div>
        {signupMessage ? <h3 className="mt-[0.5rem] font-light text-[0.9vw] w-full flex items-start px-28">
            {signupMessage}
          
        </h3>:
        <h3 className="mt-[0.5rem] font-light text-[0.9vw] w-full flex items-start px-28">
            <span className="text-red-700">*</span>
            We’ll only send what’s worth opening – no spam, guaranteed!
          
        </h3>
}
      </div>

      {/* Image Section */}
      <div className="mt-10 w-[50%]">
        <img
          src="/phoneimage.png"
          alt="Two phones displaying the app"
          className="w-full mx-auto"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default DontMissSection;
