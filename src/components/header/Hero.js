import React from 'react'

import './hero.css'

import Main from '../../assets/main.png';

export default function Hero() {
  return (
    <div className="hero-container">
        <div className="details">
            <h2>Hi, I'm Dave <span>Marcel</span></h2>
            <p>Personal Fitness Trainer</p>
            <div className="cta">
                <a href="#about" className="btn">Learn More...</a>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>

        <div className="images">
          <img src={Main} alt='Main Img' />
        </div>

    </div>
  )
}

