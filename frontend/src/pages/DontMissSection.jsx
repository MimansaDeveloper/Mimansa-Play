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
    emailjs.send(
      "service_ibnkfbb",
      "signup_template",
      { email, message: "New signup for early access!" },
      "8cu9YH3f38WXRhH9-"
    )
      .then(() => {
        setEmail(""); // Clear email input
        setSignupMessage(
          "Thanks for signing up! Exciting things are coming your way soon."
        ); // Update signup message
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
    <div className="bg-[#F9E4E4] min-h-[576px] flex flex-col lg:flex-row items-center py-10 px-4">
      <div className="flex flex-col justify-center items-center w-full lg:w-[50%] mt-[-0.5vw] lg:mt-0">
        {/* Text Section */}
        <div className="px-6 lg:px-12 lg:ml-16 mb-10 text-center lg:text-left">
          <h2 className="font-comic-neue font-bold text-[6vw] lg:text-[2.2vw] leading-tight lg:leading-[2.8vw] text-black mb-3">
            Don’t Miss Out on Giving Your Child the Best
          </h2>
          <p className="font-comic-neue text-[4vw] lg:text-[1.3vw] text-black mb-6">
            Be among the first to experience our AI-powered speech-learning app
            for children.
          </p>
        </div>
         {/* Image Section */}
      <div className="w-full lg:hidden block  lg:w-[50%] mt-[-10vw] lg:mt-0">
        <img
          src="/phoneimage.png"
          alt="Two phones displaying the app"
          className="w-[70%] lg:w-full mx-auto"
        />
      </div>

        {/* Input & Button */}
        <div className="flex flex-col lg:flex-row w-full px-6 lg:px-12 lg:ml-[7.5rem] lg:mt-[-1.5vw] mt-[4vw]  lg:items-center space-y-4 lg:space-y-0">
          <input
            type="email"
            value={email} // Set email input value
            onChange={(e) => setEmail(e.target.value)} // Update email state
            placeholder="Enter your email to unlock the early access"
            className="w-full lg:max-w-md p-4 lg:rounded-s-xl lg:rounded-e-none rounded-xl border-2 border-[#DBCDF0] focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handleSignUp} // Handle signup click
            className={`w-full lg:w-[10vw] whitespace-nowrap bg-[#DBCDF0] border-2 border-[#DBCDF0] active:scale-95 px-[1.5vw] py-[1vw] rounded-xl lg:rounded-s-none lg:rounded-e-xl text-black font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`} // Disable button while loading
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "Sign me up!"} {/* Change button text based on loading */}
          </button>
        </div>
        {signupMessage ? (
          <h3 className="mt-[0.5rem] font-light text-[3vw] lg:text-[0.9vw] w-full flex items-start px-6 lg:px-28 text-center lg:text-left">
            {signupMessage}
          </h3>
        ) : (
          <h3 className="mt-[0.5rem] font-light text-[3vw] lg:text-[0.9vw] w-full flex items-start px-6 lg:px-28 text-center lg:text-left">
            <span className="text-red-700">*</span>
            We’ll only send what’s worth opening – no spam, guaranteed!
          </h3>
        )}
      </div>

      {/* Image Section */}
      <div className="w-full hidden lg:block lg:w-[50%] mt-10 lg:mt-0">
        <img
          src="/phoneimage.png"
          alt="Two phones displaying the app"
          className="w-[70%] lg:w-full mx-auto"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default DontMissSection;
