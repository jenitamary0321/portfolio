import React from "react";
import AutoType from './AutoType';

function Home() {
  return (
    <section id="home">
      <h1>Jenita Mary P</h1>
      <div className="auto-type" aria-live="polite">
      <AutoType />
</div>
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
    </section>
  );
}

export default Home;
