import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='icon'/>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='icon'/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className='icon'/>
        </a>
      </div>
      <div className="footer">
        <p className="foot">&copy; {new Date().getFullYear()} Dave Marcel. All rights reserved.</p>
      </div>
    </footer>
  );
}
