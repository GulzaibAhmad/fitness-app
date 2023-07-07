import React, { useState } from 'react';

import './contact.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission, such as sending an email or saving the data to a database
    // Once the submission is successful, you can set the "submitted" state to true
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <br />
      <h5>Get In Touch</h5>
      <h2>Contact Form</h2>

      {submitted ? (
        <div>
          <p>Thank you for reaching out! We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}