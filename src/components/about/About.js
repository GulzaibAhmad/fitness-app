import React from 'react';
import AboutImg from '../../assets/about.png';
import './about.css'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="About img" />
          </div>
        </div>

        <div className="about__content">
          <h3>Welcome To My Porfolio!</h3>
          <p>Hi there! I'm Dave Marcel, a passionate and experienced personal fitness trainer. With over 10 years of experience in the industry, I have helped numerous individuals achieve their fitness goals and transform their lives. My journey in the fitness industry started when I discovered my own love for physical training and healthy living. Since then, I've dedicated myself to helping others unlock their full potential and lead a healthier lifestyle. I believe that fitness is not just about achieving a certain physique but also about improving overall well-being. That's why I take a holistic approach to training, focusing on strength, endurance, flexibility, and nutrition. I tailor my programs to meet the unique needs and goals of each individual, providing personalized guidance and support along the way. Whether you're a beginner looking to kickstart your fitness journey or an athlete aiming for peak performance, I'm here to guide you every step of the way. Together, we'll achieve your fitness goals and create sustainable habits for a healthier life.</p>
        </div>
      </div>
    </section>
  );
}
