
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        {/* Full Name Input */}
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            placeholder='Full Name' 
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder='Email Address' 
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            rows="5"
            placeholder='Your Message'
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="button" className="send-message-button">
            Send Message
          </button>
          <button type="button" className="clear-button">
            Clear
          </button>
        </div>
      </form>
      <div className="contact-info">
        <p>75A Kew Drive, Highlands</p>
        <p>Harare, Zimbabwe</p>
        <p>Telephone: +263 772 143 243/4/5/6</p>
        <p>Email: sales@fsg.co.zw</p>
      </div>
    </div>
  );
};

export default ContactForm;