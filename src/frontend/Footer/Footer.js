import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { now } from 'mongoose';

export default function footer() {
  return (
    <div>
      <footer className="custom-footer">
        <div className="footer-grid">
          <div className='footer-column'>
            <h3>Quick Links</h3>
            <ul >
              <li>Screws</li>
              <li>Guage</li>
              <li>Jack Hammer</li>
              <li>Screw driver</li>
              <li>bolts</li>
              <li>Jack</li>
            </ul>
          </div>
          <div className='footer-column'>
            <h3>Contact Us</h3>
            <p>
              You can contact us via email, phone,whatsapp or skype.
            </p>
            <ul>
              <li>Whatsapp</li>
              <li>Skype</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className='footer-column'>
            <div className='news-letter-container'>
              <h3>News Letter</h3>
              <form>
                <input placeholder='yourEmail@example.com' style={{ backgroundColor: 'white', color:'black'}}></input>
              </form>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )

}