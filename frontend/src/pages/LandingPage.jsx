import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import SliderSection from './SliderSection'
import WorkingSection from './WorkingSection'
import ChallengeSection from './ChallengeSection'
import ScienceSection from './ScienceSection'
import TestimonialSection from './TestimonialSection'

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
        
    </div>
  )
}

export default LandingPage