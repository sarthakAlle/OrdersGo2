import React from 'react';
import '../Login/Login.css';
import './services.css'

export default function About() {
  return (
    <div className='custom-grid2 style'>
      <section className='service-section'>
        <h2>Tool Ordering</h2>
        <p>
          Explore our wide range of tools for retail and wholesale businesses. From everyday essentials to specialized equipment, we have everything you need to keep your business running smoothly.
        </p>
      </section>

      <section className='service-section'>
        <h2>Wholesale Solutions</h2>
        <p>
          Elevate your wholesale experience with our comprehensive solutions. Find the best deals on bulk purchases, streamline your ordering process, and enjoy exclusive discounts tailored for wholesale buyers.
        </p>
      </section>

      <section className='service-section'>
        <h2>Hire Workers</h2>
        <p>
          Need extra hands for your projects? Explore our worker hiring option to find skilled professionals for temporary or long-term positions. We connect businesses with qualified individuals to meet their staffing needs.
        </p>
      </section>
    </div>
  );
}
