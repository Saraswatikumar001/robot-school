import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import CaseStudy from "./pages/CaseStudy";
import Testimonials from "./pages/Testimonials ";
import ContactPage from "./pages/ContactPage";
import Pricing from "./pages/Pricing";
import Schedule from "./pages/Schedule";
import FAQContactSection from "./components/FAQContactSection";
import EnrollNow from "./components/EnrollNow";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/schedule" element={<Schedule />} />  
          <Route path="/faq" element={<FAQContactSection />} />  
          <Route path="/enroll" element={<EnrollNow />} />                    
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
