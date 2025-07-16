import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AuroraBackground from './components/AuroraBackground';
import './index.css'

function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const ExperienceRef =  useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) =>{
    ref.current?.scrollIntoView({ behavior: 'smooth'});
  }
  return (

    <div className="relative min-h-screen font-sans">
      {/* <AuroraBackground/> */}
      <Header
        onNavigate = {{
          home: () => scrollToSection(homeRef),
          about: () => scrollToSection(aboutRef),
          skill: () => scrollToSection(skillRef),
          project: () => scrollToSection(projectRef),
          experience: () => scrollToSection(ExperienceRef),
          contact: () => scrollToSection(contactRef)
        }}
      />
  
      <div ref={homeRef}><Home/></div>
      <div ref={aboutRef}><About/></div>
      <div ref={skillRef}><Skill/></div>
      <div ref={projectRef}><Project/></div>
      <div ref={ExperienceRef}><Experience/></div>
      <div ref={contactRef}><Contact/></div>
      
      
      
      
      
    </div>
  );
}

export default App;
