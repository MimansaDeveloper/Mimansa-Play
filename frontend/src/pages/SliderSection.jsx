import React, { useState } from 'react';

const slides = [
  {
    title: 'Real-Time Speech Feedback Powered by AI',
    description:
      'Our advanced AI listens to your child’s speech and provides instant feedback, helping improve articulation and language skills on the go.',
    image: './demo1.jpeg',
  },
  {
    title: 'Engage Your Child with Fun Learning',
    description:
      'Our app uses interactive games that help improve your child’s speech and cognitive development while they play and have fun.',
    image: './demo2.jpeg',
  },
  {
    title: 'Track Progress Over Time',
    description:
      'Parents can easily track their child’s progress and get insights into their speech development with detailed reports.',
    image: './demo3.jpeg',
  },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-[#C5DEF2] w-full h-screen flex flex-col items-center justify-center relative px-10">
      {/* Header Section */}
      <h1 className="font-comic-neue font-bold text-[32px] leading-[37px] text-black mb-4">
        Why Choose Us
      </h1>
      <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black mb-44">
        Empowering Parents. Engaging Children. Proven Results.
      </p>

      {/* Slider Section */}
      <div className="relative flex justify-center items-center w-full max-w-7xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 flex justify-center items-center w-10 h-10 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Main Content Section */}
        <div className="flex justify-between items-center w-full max-w-5xl px-10 space-x-10">
          {/* Text Section */}
          <div className="flex flex-col justify-center w-[50%]">
            <h2 className="font-comic-neue font-bold text-[24px] leading-[28px] text-black mb-4">
              {slides[currentSlide].title}
            </h2>
            <p className="font-comic-neue font-normal text-[20px] leading-[23px] text-black">
              {slides[currentSlide].description}
            </p>
          </div>

          {/* Image Placeholder Section */}
          <div className="flex justify-center items-center w-[50%]">
            <div className="w-[346px] h-[211px] bg-white border border-black flex justify-center items-center">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextSlide}
          className="absolute right-0 flex justify-center items-center w-10 h-10 bg-[#FF9650] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-40 space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-[#FF9650]' : 'bg-[rgba(255,150,80,0.39)]'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderSection;
