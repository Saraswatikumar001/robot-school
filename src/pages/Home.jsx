import React from 'react'
import About from '../components/About'
import RoboticsSection from '../components/RoboticsSection '
import ServicesSection from '../components/ServicesSection'
import WhoWeAreSection from '../components/WhoWeAreSection '
import FeaturesSection from '../components/FeaturesSection'
import ProgramOffering from '../components/ProgramOffering '
import TestimonialSection from '../components/TestimonialSection;'
import FeaturedCourses from '../components/FeaturedCourses'
import FAQContactSection from '../components/FAQContactSection'


const Home = () => {
    return (
        <>
            <About />
            <RoboticsSection />
            <ServicesSection />
            <WhoWeAreSection />
            <FeaturesSection />
            <ProgramOffering />
            <TestimonialSection />
            <FeaturedCourses />
            <FAQContactSection />
            
        </>
    )
}

export default Home