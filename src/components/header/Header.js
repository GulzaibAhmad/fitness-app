import React, { useState } from 'react';
import './header.css';
import { Squash as Hamburger } from 'hamburger-react';

import Hero from './Hero.js';

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <header>
    <div className="nav">
      <nav>
        <h1 className="logo">Dave Marcel</h1>
        <div className="hamburger-icon" onClick={toggleNav}>
          <Hamburger toggled={isNavOpen} toggle={setNavOpen} size={25} color="#fff" />
        </div>
        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <Hero/>
    </header>
  );
}
