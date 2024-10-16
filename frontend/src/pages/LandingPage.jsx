import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SliderSection from './SliderSection'
import WorkingSection from './WorkingSection'
import ChallengeSection from './ChallengeSection'
import ScienceSection from './ScienceSection'
import TestimonialSection from './TestimonialSection'
import FooterSection from './FooterSection'
import DontMissSection from './DontMissSection'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <SliderSection/>
        <WorkingSection/>
        <TestimonialSection/>
        <ChallengeSection/>
        <ScienceSection/>
        <DontMissSection/>
        <FooterSection/>
        
    </div>
  )
}

export default LandingPage