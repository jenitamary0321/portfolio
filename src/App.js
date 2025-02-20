import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'; // Ensure this matches the filename
import Resume from './components/Resume';
import Contact from './components/Contact';
 
import './App.css';
 

function App() {
  return (
    <Router> 
      <Navbar />  
       
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}



export default App;
