import React, { useState } from 'react';

// Sample slides data
const slides = [
  {
    title: 'Slide 1',
    description: 'Description for Slide 1',
    image: '/path/to/image1.jpg',
  },
  {
    title: 'Slide 2',
    description: 'Description for Slide 2',
    image: '/path/to/image2.jpg',
  },
  {
    title: 'Slide 3',
    description: 'Description for Slide 3',
    image: '/path/to/image3.jpg',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(null); // null, 'left', or 'right'

  const nextSlide = () => {
    setDirection('left'); // Set direction to left
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('right'); // Set direction to right
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {/* Slide Content */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          direction === 'left' ? '-translate-x-full' : direction === 'right' ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title} className="w-full h-full object-cover" />
        <h2 className="absolute bottom-16 left-4 text-white text-2xl">{slides[currentSlide].title}</h2>
        <p className="absolute bottom-4 left-4 text-white">{slides[currentSlide].description}</p>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Prev
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded">
        Next
      </button>

      {/* New Slide Content */}
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          direction === 'left' ? 'translate-x-full' : direction === 'right' ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        <img
          src={slides[(currentSlide + 1) % slides.length].image}
          alt={slides[(currentSlide + 1) % slides.length].title}
          className="w-full h-full object-cover"
        />
        <h2 className="absolute bottom-16 left-4 text-white text-2xl">{slides[(currentSlide + 1) % slides.length].title}</h2>
        <p className="absolute bottom-4 left-4 text-white">{slides[(currentSlide + 1) % slides.length].description}</p>
      </div>
    </div>
  );
};

export default Slider;
