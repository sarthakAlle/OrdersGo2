import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousal.css';

export default function CustomCarousel() {
  return (
    <Carousel>
   
      <Carousel.Item>
        <img className="d-block  carousel-custom" src="https://source.unsplash.com/random/800x100/?machines" alt="First slide" />
        <Carousel.Caption>
      <div className='custom-form'>
      <input type='text' placeholder='search for the tools'>
      </input>
      <button >
      search
      </button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-custom " src="https://source.unsplash.com/random/800x100/?tools" alt="Second slide" />
        <Carousel.Caption>
          <div className='my-custom-caption'>
          <h1>Fastest Delivery</h1>
          <p>we promise , we deliver</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carousel-custom " src="https://source.unsplash.com/random/800x100/?transport" alt="Third slide" />
        <Carousel.Caption>
        <div className='my-custom-caption'>
       <h1>Highest Standards</h1>
       <p>where quality meets budget</p>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
