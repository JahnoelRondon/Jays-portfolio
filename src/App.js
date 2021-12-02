import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import React from "react";
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>    
    </BrowserRouter>


  );
}

export default App;
