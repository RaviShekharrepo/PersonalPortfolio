import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import { Link, Element } from 'react-scroll';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MouseTrail from './components/MouseTrail';

// Data
import { skillsData, projectsData, experienceData } from './data/portfolioData';

function App() {

  return (
    <div className="App">
      <Helmet>
        <title>Ravi Shekhar - Software Developer & ML Enthusiast</title>
        <meta name="description" content="Computer Science student passionate about web development, machine learning, and creating impactful projects." />
        <meta name="keywords" content="Ravi Shekhar, Software Developer, ML Enthusiast, React, Python, Machine Learning" />
        <meta name="author" content="Ravi Shekhar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ravi Shekhar - Software Developer & ML Enthusiast" />
        <meta property="og:description" content="Computer Science student passionate about web development, machine learning, and creating impactful projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ravishekhar.dev" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ravi Shekhar - Software Developer & ML Enthusiast" />
        <meta name="twitter:description" content="Computer Science student passionate about web development, machine learning, and creating impactful projects." />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>

      {/* Animated Background */}
      <div className="animated-background">
        {/* Animated Gradient Background */}
        <div className="gradient-bg">
          <div className="gradient-layer gradient-1"></div>
          <div className="gradient-layer gradient-2"></div>
          <div className="gradient-layer gradient-3"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.6,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{
              y: [0, 40, 0],
              rotate: [0, -180, -360],
              scale: [1, 0.9, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            whileHover={{
              scale: 1.4,
              opacity: 0.5,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{
              x: [0, 50, 0],
              rotate: [0, 90, 180],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            whileHover={{
              scale: 1.6,
              opacity: 0.4,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="shape shape-4"
            animate={{
              y: [0, -60, 0],
              x: [0, -30, 0],
              rotate: [0, -90, -180],
              scale: [1, 0.8, 1],
              opacity: [0.1, 0.35, 0.1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            whileHover={{
              scale: 1.3,
              opacity: 0.7,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="shape shape-5"
            animate={{
              y: [0, 80, 0],
              x: [0, 40, 0],
              rotate: [0, 270, 360],
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            whileHover={{
              scale: 1.7,
              opacity: 0.6,
              transition: { duration: 0.3 }
            }}
          />
          <motion.div 
            className="shape shape-6"
            animate={{
              y: [0, -50, 0],
              x: [0, -60, 0],
              rotate: [0, 180, 360],
              scale: [1, 0.7, 1],
              opacity: [0.1, 0.25, 0.1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            whileHover={{
              scale: 1.2,
              opacity: 0.5,
              transition: { duration: 0.3 }
            }}
          />
        </div>

        {/* Animated Grid Pattern */}
        <div className="grid-pattern">
          <div className="grid-line grid-line-1"></div>
          <div className="grid-line grid-line-2"></div>
          <div className="grid-line grid-line-3"></div>
          <div className="grid-line grid-line-4"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="glowing-orbs">
          <motion.div 
            className="orb orb-1"
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="orb orb-2"
            animate={{
              y: [0, 120, 0],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="orb orb-3"
            animate={{
              y: [0, -80, 0],
              opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Element name="home" className="element">
          <Hero />
        </Element>

        {/* Skills Section */}
        <Element name="skills" className="element">
          <Skills skills={skillsData} />
        </Element>

        {/* Projects Section */}
        <Element name="projects" className="element">
          <Projects projects={projectsData} />
        </Element>

        {/* Experience Section */}
        <Element name="experience" className="element">
          <Experience experience={experienceData} />
        </Element>

        {/* Contact Section */}
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Smooth Scrolling Links */}
      <div className="hidden">
        <Link to="home" smooth={true} duration={500} />
        <Link to="skills" smooth={true} duration={500} />
        <Link to="projects" smooth={true} duration={500} />
        <Link to="experience" smooth={true} duration={500} />
        <Link to="contact" smooth={true} duration={500} />
      </div>
    </div>
  );
}

export default App;
