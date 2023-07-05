import React from 'react'
import Header from './components/header/Header';
import About from './components/about/About';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <>
    <Header />
    <About />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}
