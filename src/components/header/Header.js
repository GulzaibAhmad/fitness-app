import React, { useState } from 'react';
import './header.css';
import { Squash as Hamburger } from 'hamburger-react';

import Hero from './Hero.js';

export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };


  const closeNav = () => {
    setNavOpen(false);
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
              <li><a href="/" onClick={closeNav}>Home</a></li>
              <li><a href="#about" onClick={closeNav}>About Us</a></li>
              <li><a href="#programs" onClick={closeNav}>Programs</a></li>
              <li><a href="#testimonials" onClick={closeNav}>Testimonials</a></li>
              <li><a href="#contact" onClick={closeNav}>Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <Hero/>
    </header>
  );
}
