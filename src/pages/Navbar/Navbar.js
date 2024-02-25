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

/*
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ResponsiveNavbar() {
  return (
    <Container >
       <Navbar  bg="light" expand="sm" className='navbar'>  

        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default ResponsiveNavbar;
*/
