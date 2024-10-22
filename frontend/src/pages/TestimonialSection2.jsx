import React from 'react';

const TestimonialSection2 = () => {
  return (
    <div className="bg-[#F8D9C4] flex flex-col items-center py-10">
      {/* Title Section */}
      <div className="text-center mt-4">
        <h2 className="font-comic-neue text-[8vw] md:text-[2.5vw] leading-[9vw] md:leading-[2vw] font-bold text-black mb-3 mt-8">
          Testimonials
        </h2>
        <p className="font-comic-neue text-[5vw] md:text-[1.3vw] leading-[6vw] md:leading-[3vw] text-black mb-28">
          What Parents Are Saying
        </p>
      </div>
      {/* Image Section */}
      <div className="flex justify-center w-full items-center mb-[10vw]">
        <img src="/testimonial2.png" className="w-[180vw] md:w-[70%]" alt="Testimonial image" />
      </div>
    </div>
  );
}

export default TestimonialSection2;
