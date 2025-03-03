import React from 'react';
import Link from "next/link";
import './App.css';

const ContactInfo = () => {
  return (
    <div className="section section1">
      <h3> <Link href="/contact" className="about-lin"> Contact Details </Link> </h3>
      <p> <Link href="/contact" className="about-lin">0799963300</Link></p>
      <p> <Link href="/contact" className="about-lin">0708364240</Link></p>
      <p className="pp">Prime Guest Lodge</p>
      <p className="oo">Maua basin, Meru</p>
    </div>
  );
};

export default ContactInfo;