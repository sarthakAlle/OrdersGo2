import React from 'react';
import '../Login/Login.css';
import './About.css';
export default function About() {
  return (
    <div className='custom-grid2 style'>
      <section className='custom-section'>
        <h2>About Us</h2>
        <p>
          Welcome to OrdersGo, where we are dedicated to providing exceptional services for your business needs. With a focus on quality, innovation, and customer satisfaction, we aim to be your go-to platform for various services.
        </p>
      </section>

      <section className='custom-section'>
        <h2>Our Mission</h2>
        <p>
          At OrdeersGo, our mission is to empower businesses by offering efficient and reliable solutions. We strive to enhance your operational capabilities, whether through our tool ordering services, wholesale solutions, or worker hiring options.
        </p>
      </section>

      <section className='custom-section'>
        <h2>Our Vision</h2>
        <p>
          We envision a future where businesses thrive with the support of cutting-edge tools, seamless wholesale experiences, and a flexible workforce. Our commitment to excellence drives us to continually evolve and adapt to the changing needs of the business landscape.
        </p>
      </section>
    </div>
  );
}
