import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
 
      </div>
       
      <div className="navbar-right">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link> {/* Use Link instead of anchor */}
        
         
       
        
      </div>
    </nav>
  );
}

export default Navbar;
