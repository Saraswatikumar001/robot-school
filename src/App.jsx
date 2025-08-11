import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import RoboticsSection from './components/RoboticsSection '
import ServicesSection from './components/ServicesSection'
import WhoWeAreSection from './components/WhoWeAreSection '
import FeaturesSection from './components/FeaturesSection'
import ProgramOffering from './components/ProgramOffering '
import TestimonialSection from './components/TestimonialSection;'
import FeaturedCourses from './components/FeaturedCourses'
import HeroSection from './components/HeroSection'
import FAQContactSection from './components/FAQContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar /> 
       <About />  
       <RoboticsSection />
       <ServicesSection />
       <WhoWeAreSection />
       <FeaturesSection />
       <ProgramOffering />
       <TestimonialSection />
       <FeaturedCourses />
       <HeroSection />
       <FAQContactSection />
    </>
  )
}

export default App
