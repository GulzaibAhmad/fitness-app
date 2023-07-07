import React from 'react';
import One from '../../assets/One_on_one.jpg';
import Semi from '../../assets/Semi_training.jpg';
import Online from '../../assets/Online_training.jpg';
import './programs.css'; // Import the CSS file for styling

export default function Programs() {
  return (
    <section id='programs'>
      <h5>What I Offer</h5>
      <h2>Programs</h2>

      <div className="container Program__container">
        <article className="program">
          <div className="program__head">
            <h3>One-on-one Training</h3>
          </div>

          <ul className="program__list">
            <li>
              <img src={One} alt="One-on-one training" />
            </li>
            <li>
              <p>Personalized coaching provides individualized instruction on correct lifting techniques, acquaints you with exercises tailored to your specific objectives, and empowers you to unlock your maximum potential.</p>
            </li>
          </ul>
        </article>    
        
        <article className="program">
          <div className="program__head">
            <h3>Semi-Private Training</h3>
          </div>

          <ul className="program__list">
            <li>
              <img src={Semi} alt="Semi training" />
            </li>
            <li>
              <p>Group training, with its customized approach, offers an affordable opportunity to collaborate with fellow individuals to achieve shared goals, providing an added dose of motivation and support.</p>
            </li>
          </ul>
        </article>      

        <article className="program">
          <div className="program__head">
            <h3>Online Training</h3>
          </div>

          <ul className="program__list">
            <li>
              <img src={Online} alt="Online training" />
            </li>
            <li>
              <p>Virtual training serves as an excellent option for individuals who possess a fundamental understanding of and have access to a gym but seek an additional level of responsibility and assistance to stay on track.</p>
            </li>
          </ul>
        </article>    
      </div>
    </section>
  );
}
