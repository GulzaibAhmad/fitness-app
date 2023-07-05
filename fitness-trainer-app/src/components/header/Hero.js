import React from 'react'

import './hero.css'

import Main from '../../assets/main.png';
import Bg from '../../assets/bg.png';

export default function Hero() {
  return (
    <div className="hero">
        <div className="details">
            <h2>Hi, I'm Dave <span>Marcel</span></h2>
            <p>Personal Fitness Trainer</p>
            <div className="cta">
                <a href="#about" className="btn">Learn More...</a>
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>



    </div>
  )
}