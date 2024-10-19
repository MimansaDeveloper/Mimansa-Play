import React, { useState } from "react";

const slides = [
  {
    title: "Real-Time Speech Feedback Powered by AI",
    description:
      "Our advanced AI listens to your child’s speech and provides instant feedback, helping improve articulation and language skills on the go.",
    image: "/aiimage2.png",
  },
  {
    title: "Fun, Interactive Learning",
    description:
      "No more boring exercises! Our games are designed to capture attention and make speech practice fun and rewarding for kids.",
    image: "/kidsimage1.png",
  },
  {
    title: "Healthy Screen Time Design",
    description:
      "Crafted to reduce passive screen time, our app encourages active engagement and meaningful parent-child interaction.",
    image: "/kidsimage2.png",
  },
  {
    title: "Built by Experts, Loved by Parents",
    description:
      "Developed by speech therapists and early childhood experts, our methods are proven to help children improve speech at their own pace.",
    image: "/kidsimage3.png",
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [direction, setDirection] = useState(null);

  // Function to go to the next slide
  const handleNextSlide = () => {
    setIsFading(true);
    setDirection("right");
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setIsFading(false);
      setDirection(null);
    }, 500);
  };

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setIsFading(true);
    setDirection("left");
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
      setDirection(null);
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="bg-[#C5DEF2] w-full h-auto lg:h-[120vh] flex flex-col items-center justify-center relative px-6 py-10 lg:px-10 lg:py-0">
      {/* Header Section */}
      <h1 className="font-comic-neue font-bold text-[7vw] lg:text-[2.5vw] leading-[8vw] lg:leading-[2vw] text-black mb-4 lg:mb-3 mt-4 lg:mt-8 text-center">
        Why Choose Us
      </h1>
      <p className="font-comic-neue font-normal text-[4vw] lg:text-[1.3vw] leading-[5vw] lg:leading-[3vw] text-black mb-12 lg:mb-36 text-center">
        Empowering Parents. Engaging Children. Proven Results.
      </p>

      {/* Slider Section */}
      <div className="relative flex flex-col items-center lg:flex-row justify-center w-full max-w-7xl space-y-10 lg:space-y-0">
        {/* Left Arrow (Desktop Only) */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 lg:flex hidden justify-center items-center w-10 h-10 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Main Content Section */}
        <div className={`flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-5xl lg:space-x-10 transition-transform duration-500 ${isFading && direction === "right" ? "translate-x-full" : "translate-x-0"} ${isFading && direction === "left" ? "-translate-x-full" : "translate-x-0"}`}>
          {/* Text Section */}
          <div
            className={`flex flex-col justify-center w-full lg:w-[60%] text-center lg:text-left transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
          >
            <h2 className="font-comic-neue text-[#6A7FBF] font-bold text-[6vw] lg:text-[40px] leading-[7vw] lg:leading-[45px] mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="font-comic-neue font-normal text-[4vw] lg:text-[1.5vw] leading-[5vw] lg:leading-[1.9vw] text-black">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Image Section */}
          <div
            className={`flex justify-center items-center w-full lg:w-[50%] transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
          >
            <div className="w-[80vw] h-[60vw] lg:w-[26vw] lg:h-[20vw] flex justify-center items-center rounded-xl">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Arrow (Desktop Only) */}
        <button
          onClick={handleNextSlide}
          className="absolute right-0 lg:flex hidden justify-center items-center w-10 h-10 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>


    <div className="flex justify-center items-center mt-10 lg:mt-32 space-x-2 gap-[15vw]">
      {/* Left Button (Mobile Only) */}
    <button
          onClick={handlePrevSlide}
          className="flex  lg:hidden justify-center items-center w-6 h-6 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      {/* Pagination Dots and Mobile Buttons */}
      <div className="flex justify-center items-center space-x-2">
        {/* Pagination Dots */}
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => {
              setIsFading(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsFading(false);
              }, 500);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-[#FF9650]" : "bg-white opacity-60"
            }`}
          ></span>
        ))}

        
      </div>
      {/* Right Button (Mobile Only) */}
      <button
          onClick={handleNextSlide}
          className="flex  lg:hidden justify-center items-center w-6 h-6 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
    </div>
    </div>
  );
};

export default SliderSection;
