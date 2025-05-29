import './App.css';
import React from 'react';

function ContactForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch('https://formspree.io/f/manovarg', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Thank you for your message!');
          form.reset();
          onClose(); // Close the modal after submission
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Hannah</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;