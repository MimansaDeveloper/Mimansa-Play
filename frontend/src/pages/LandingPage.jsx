import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SliderSection from './SliderSection';
import WorkingSection from './WorkingSection';
import ChallengeSection from './ChallengeSection';
import ScienceSection from './ScienceSection';
import FooterSection from './FooterSection';
import DontMissSection from './DontMissSection';
import TestimonialSection2 from './TestimonialSection2';
import PopUpScreen from './PopUpScreen';
import Carousel from './Carousel';

const LandingPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State for pop-up visibility

  const openPopup = () => {
    setIsPopupVisible(true); // Function to open the pop-up
  };

  const closePopup = () => {
    setIsPopupVisible(false); // Function to close the pop-up
  };

  return (
    <div className='w-full h-full'>
      <div>
      <Navbar openPopup={openPopup} />
      {isPopupVisible && <PopUpScreen closePopup={closePopup} />} 
        <HeroSection />
        <SliderSection />
        <WorkingSection />
        {/* <Carousel/> */}
        <TestimonialSection2 />
        {/* <TestimonialSection /> */}
        <ChallengeSection />
        {isPopupVisible && <PopUpScreen closePopup={closePopup} />} 
        <ScienceSection openPopup={openPopup} />
        <DontMissSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
