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
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
