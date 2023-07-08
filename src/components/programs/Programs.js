import React from 'react';
import One from '../../assets/One_on_one.jpg';
import Semi from '../../assets/Semi_training.jpg';
import Online from '../../assets/Online_training.jpg';
import './programs.css'; // Import the CSS file for styling

const programsData = [
  {
    title: 'One-On-One Training',
    image: One,
    description: 'Personalized coaching provides individualized instruction on correct lifting techniques, acquaints you with exercises tailored to your specific objectives, and empowers you to unlock your maximum potential.',
  },
  {
    title: 'Semi-Private Training',
    image: Semi,
    description: 'Group training, with its customized approach, offers an affordable opportunity to collaborate with fellow individuals to achieve shared goals, providing an added dose of motivation and support.',
  },
  {
    title: 'Online Training',
    image: Online,
    description: 'Virtual training serves as an excellent option for individuals who possess a fundamental understanding of and have access to a gym but seek an additional level of responsibility and assistance to stay on track.',
  },
];

export default function Programs() {
  return (
    <section id='programs'>
      <h5>What I Offer</h5>
      <h2>Programs</h2>

      <div className="Program__container">
        {programsData.map((program, index) => (
          <article className="program" key={index}>
            <div className="program__head">
              <h3>{program.title}</h3>
            </div>

            <ul className="program__list">
              <li>
                <img src={program.image} alt={program.title} />
              </li>
              <li>
                <p>{program.description}</p>
              </li>
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
