import React, { useState } from 'react';
import profileImage from './images/header/hannah_gillespie.jpg';
import linkIcon from './icons/link.svg';
import CVLink from './docs/CV.pdf';
import './App.css';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import Carousel from './Carousel';

function Button({ icon, text, link, onClick }) {
  return (
    <a
      href={link || '#'}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
      className="button-link"
      onClick={onClick}
    >
      <button className="button">
        {icon && <img src={icon} alt="button icon" className="button-icon" />}
        {text}
      </button>
    </a>
  );
}

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
        </div>
        <div className="header-divider"></div>
      </header>
      
      <main>
        <div className="profile-section">
          <img src={profileImage} className="profile-image" alt="Hannah Gillespie" />
          <div className="profile-text">
            <h2>Hannah Gillespie</h2>
            <p>Autonomous Systems Engineer with expertise in robotics, automation, 
              and design thinking. Passionate about creating intuitive and efficient solutions 
              to complex problems. Living in the UK, originally from Johnsburg, Illinois.</p>
          </div>
        </div>

        <Carousel />

        <Portfolio />

        <section className="spotify-section">
          <h2>What I'm Listening To</h2>
          <div className="spotify-container">
            <iframe 
              title="Spotify Playlist"
              style={{borderRadius: "12px"}} 
              src="https://open.spotify.com/embed/playlist/15uaOjPbmgBRnhpIUgm0AA?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            />
          </div>
        </section>

        {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
      </main>
      <footer className="App-footer">
        <div className="footer-divider"></div>
        <nav className="button-panel">
          <Button icon={linkIcon} text="LinkedIn" link="https://www.linkedin.com/in/hannahgillespie/" />
          <Button icon={linkIcon} text="CV / Resume" link={CVLink} />
          <Button icon={linkIcon} text="GitHub" link="https://github.com/hgillesp12" />
          <Button
            icon={linkIcon}
            text="Contact"
            onClick={() => setShowContactForm(true)}
          />
        </nav>
      </footer>
    </div>
  );
}

export default App;
