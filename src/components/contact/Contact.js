import React, { useState } from 'react';

import './contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');

    setEmail('');
    setProgram('');
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="program">Program:</label>
          <select
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option value="">Select a Program</option>
            <option value="One-On-One Training">One-On-One Training</option>
            <option value="Semi-Private Training">Semi-Private Training</option>
            <option value="Online Training">Online Training</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
