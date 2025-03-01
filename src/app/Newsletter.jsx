// Newsletter.jsx
import React, { useEffect } from 'react';
import './App.css';
import { setupNewsletterForm } from './guestHelpers';

const Newsletter = () => {
  useEffect(() => {
    // Initialize the form event listener when the component mounts
    setupNewsletterForm();
  }, []);

  return (
    <div className="section section3">
      <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
      <form id="newsletterForm">
        <div className="input-button-container">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
          <button type="submit" className="su">
            &#8594;
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
