import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Projects from './components/projects';
import ServicesSection from './components/services';
import Contact from './components/contacts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Hero/>
    <Projects></Projects>
    <ServicesSection/>
    <Contact/>
    <Footer/>
    </div>
  )
}

  export default App