import React, { useState, useEffect } from 'react';

import './testimonial.css';

import Test1 from '../../assets/testimonials1.jpg';
import Test2 from '../../assets/testimonials2.jpg';
import Test3 from '../../assets/testimonials3.jpg';

export default function Testimonials() {
  const testimonials = [Test1, Test2, Test3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [testimonials.length]);

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      {testimonials.map((testimonial, index) => (
        <img
          key={index}
          src={testimonial}
          alt={`testimonial_${index + 1}`}
          className={index === activeIndex ? 'active' : ''}
        />
      ))}

      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}
