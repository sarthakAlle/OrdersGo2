import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function footer() {
  return (
    <div>
      <footer className="custom-footer">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
           <Link>order in wholesale</Link>
            </li>
            <li>
           <Link>order from retail</Link>
            </li>
            <li>
           <Link>order specific batches</Link>
            </li>
        </ul>
        </div>

        <div className="footer-section">
          <h3>Contacts</h3>
          <p>you can contact us via</p>
          <ul>
            <li>
           <Link>ordersgo@gmail.com</Link>
            </li>
            <li>
           <Link>+91-3278328323</Link>
            </li>
            <li>
           <Link>order_personal</Link>
            </li>
        </ul>
        </div>

        <div className="footer-section">
          <h3>NewsLetter</h3>
          <p>Subscribe to get in touch with the lastest news</p>
          <form>
            <input type ='email' placeholder='enter your email'></input>
          </form>
        </div>
      </footer>
    </div>
  )
}