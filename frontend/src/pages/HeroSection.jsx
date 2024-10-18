import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import emailjs from "@emailjs/browser"; // Import EmailJS
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

const HeroSection = () => {
  const [signupMessage, setSignupMessage] = useState(""); // State for the signup message
  const [email, setEmail] = useState(""); // State for the email input
  const [loading, setLoading] = useState(false); // State for loading

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

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
      // Set the signup message and clear the email input
      setSignupMessage("Thanks for signing up! Exciting things are coming your way soon.");
      setEmail("");
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
    <div
      className="flex flex-col lg:flex-row items-center justify-between bg-[#FAEDCB] w-full h-[100vh] px-[2rem] lg:px-[4rem]"
      data-aos="fade-in" // Adding AOS animation for the entire section
    >
      {/* Left Section */}
      <div
        className="flex flex-col w-full lg:w-[50%] h-full lg:ml-[3rem] mt-[2rem] lg:mt-[18rem]"
        data-aos="fade-up" // Animation for text and input
      >
        <h1 className="font-comic-neue font-bold text-[2.2vw] lg:text-[2.5vw] leading-[1.5vw] lg:leading-[3vw] text-black mt-[1rem] lg:mt-10">
          Unlock Your Child’s Speech with Fun, AI-Powered Games
        </h1>
        <p className="font-comic-neue font-normal text-[1.1vw] lg:text-[1.5vw] leading-[1.5vw] lg:leading-[2vw] text-black mt-[1rem] lg:mt-5">
          Designed by experts from{" "}
          <span className="text-[rgba(38,65,149,1)] font-bold">
            IIT & Harvard University
          </span>
          , loved by kids, and trusted by parents. Speed up your child's
          speech-language development from home with interactive, engaging
          activities.
        </p>

        {/* Input & Button */}
        <div className="flex w-full mt-[2vw]">
          <input
            type="email"
            value={email} // Set email input value
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email to unlock the early access"
            className="w-full max-w-[28vw] p-[1vw] rounded-s-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
            data-aos="fade-right"
          />
          <button
            onClick={handleSignUp} // Handle signup click
            className={`w-[10vw] bg-[#DBCDF0] px-[1.5vw] py-[1vw] rounded-e-xl text-black font-semibold ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable button while loading
            disabled={loading} // Disable button while loading
            data-aos="fade-left"
          >
            {loading ? "Loading..." : "Sign me up!"} {/* Change button text based on loading */}
          </button>
        </div>
        {signupMessage ? (
          <h3 className="mt-[0.5rem] font-light text-[0.9vw]">
            {signupMessage}
          </h3>
        ) : (
          <h3 className="mt-[0.5rem] font-light text-[0.9vw]">
            <span className="text-red-700">*</span>We’ll only send what’s worth
            opening – no spam, guaranteed!
          </h3>
        )}
      </div>

      {/* Right Section (Image) */}
      <div
        className="flex justify-center mr-12 items-center w-full lg:w-[50%] mt-[-3rem] lg:mt-[-1rem]"
        data-aos="zoom-in" // Animation for the image
      >
        <img
          src="/herosection.png"
          alt="Hero Section"
          className="w-[80%] lg:w-[100%] p-[1.5rem] lg:p-[2rem]"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default HeroSection;
