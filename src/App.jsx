import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/projects';
import ServicesSection from './components/services';
import Contact from './components/contacts';
import Footer from './components/Footer';
import AboutSection from './components/About';

const App = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <ServicesSection />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>

  );
};

export default App;