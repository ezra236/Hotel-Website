import React from 'react';
import Link from "next/link";
import './App.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        © 2024 Prime Guest Lodge | Made by E-WADM Technologies
      </div>
      <div className="stp">
      <Link href="/site">Site map</Link>
      <Link href="/terms">Terms of use</Link>
      <Link href="/privacy">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;