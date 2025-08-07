import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import RoboticsSection from './components/RoboticsSection '
import ServicesSection from './components/ServicesSection'
import WhoWeAreSection from './components/WhoWeAreSection '
import FeaturesSection from './components/FeaturesSection'

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
    </>
  )
}

export default App
