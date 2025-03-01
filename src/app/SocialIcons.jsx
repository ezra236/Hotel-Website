import React from 'react';
import Link from "next/link";
import './App.css';

const SocialIcons = () => {
  return (
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com/" target="_blank" rel="noopener noreferrer">
      <img src="images/f.jpeg" alt="Facebook Share" className="social-icon" />
    </a>
  );
};

export default SocialIcons;