import React from 'react';

const TestimonialSection = () => {
  return (
    <div className="h-screen bg-[#F8D9C4] flex flex-col justify-center items-center">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-comic text-black">
          Testimonials
        </h2>
        <p className="text-lg font-light font-comic text-black mt-2">
          What Parents Are Saying
        </p>
      </div>

      {/* Testimonials Wrapper */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Testimonial Card 1 */}
        <div className="w-[355px] h-[370px] bg-white border-2 border-black flex flex-col justify-center items-center text-center p-4">
          <div className="w-12 h-12 bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-bold text-black mb-4">Loreum ipsum</h3>
          <p className="text-base font-light text-black">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="w-[355px] h-[370px] bg-white border-2 border-black flex flex-col justify-center items-center text-center p-4">
          <div className="w-12 h-12 bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-bold text-black mb-4">Loreum ipsum</h3>
          <p className="text-base font-light text-black">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="w-[355px] h-[370px] bg-white border-2 border-black flex flex-col justify-center items-center text-center p-4">
          <div className="w-12 h-12 bg-gray-300 mb-4"></div>
          <h3 className="text-lg font-bold text-black mb-4">Loreum ipsum</h3>
          <p className="text-base font-light text-black">
            Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
