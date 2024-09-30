import React, { useState } from 'react';
import contactVideo2 from './Contact_vid2.mp4';
import './Contact.css'; 

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="content-wrapper">
        <div className="background-video">
          <video autoPlay loop muted>
            <source src={contactVideo2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>

          {formSubmitted && <p>Form submitted successfully!</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
