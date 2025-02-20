import React from "react";
import Profile from "../images/profile.png";


function About() {
  return (
    <section className="about">
            <div className="about-container">
                {/* Profile Image Section */}
                <img 
          src={Profile}  
          alt="Profile" 
          className="profile-image" 
        />

             
    

                {/* Details Section */}
                <div className="about-details">
                    <h2>About Me</h2>
           
      <p>
      I'm a tech enthusiast with a strong foundation in Computer Applications, 
      holding both a Bachelor’s and Master’s degree. Skilled in HTML, CSS, JavaScript, Bootstrap, MySQL, MongoDB, React, Node.js, and GitHub, 
      I've recently completed a MERN Full Stack Development certification from Guvi Geek Network at IITM Research Park.
       With hands-on experience in web development, I am passionate about lifelong learning and eager to contribute in a collaborative, 
       forward-thinking team environment.
       Previously, I honed my attention to detail and efficiency working as a Data Entry Operator at Aravind Lifestyle Brands for over three years.
      </p>
      <div className="personal-info">
                        <div className="info-item">
                            <span className="label">Birthday:</span> <span>21 march 1999</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Phone:</span> <span>+91 9787180414</span>
                        </div>
                        <div className="info-item">
                            <span className="label">City:</span> <span>krishnagiri, Tamil Nadu, India</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Degree:</span> <span>Bachelor of Computer Application(BCA)</span>
                        </div>  
                        <div className="info-item">
                            <span className="label">Degree:</span> <span>Master of Computer Application(MCA)</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Email:</span> <span>jenitamary0321@gmail.com</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}


export default About;