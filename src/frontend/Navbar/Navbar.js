import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function BasicExample() {
  const [isActive, setIsActive] = useState(false);

  const toggleHamburger = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 650) {
        setIsActive(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
    
      <div className="brand">Orders Go</div>
      <ul className={isActive ? 'show' : ''}>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Services">Services</Link></li>
      </ul>

      <div className="hamburger" onClick={toggleHamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default BasicExample;
