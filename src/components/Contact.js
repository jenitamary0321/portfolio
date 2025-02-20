import React from "react";
 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-details">
        <h2>My Address</h2>

        <p>
          <strong>📍 Location: </strong>
          <a 
            href="https://www.google.com/maps/place/2%2F229,+Sesuraja+Puram,+Anchetty,+Krishnagiri,+Tamil+Nadu+635102" 
            target="_blank" 
            rel="noopener noreferrer"
            className="location-link"
          >
            Door No: 2/229, Sesuraja Puram, Anchetty (T.K), Krishnagiri(Dist), Tamil Nadu, 635102
          </a>
        </p>

        
        {/* <p> Door No: 2/229, Sesuraja Puram (V&P) Anchetty (TK), Krishnagiri (DT), Tamil Nadu, 635102
         
          </p> */}
      </div>
      <div className="social-profiles">
        <h2>Social Profiles</h2>
        <div className="social-links">
        <a href="mailto:jenitamary0321@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Gmail" className="social-icon" />
        </a> 
        
        <a href="https://instagram.com/jenima0321" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" className="social-icon" />
        </a>

        <a href="https://github.com/jenitamary0321" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZUryY6dtEoXjG9Ad9UHg7btgl2L7D0JfuvQ&s" alt="GitHub" className="social-icon" />
        </a>

        <a href="https://www.linkedin.com/in/jenita-mary-p-8a82a530b/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="social-icon" />
        </a>
      </div>
        <p> <strong>Email Me:</strong> <a href="mailto:jenitamary0321@gmail.com">jenitamary0321@gmail.com</a></p>
        <p>  <strong>Call Me:</strong> <a href="tel:+91 9787180414">+91 9787180414 , 967773546
           </a></p>
        
      </div>
    </div>
  );
};

export default Contact;
