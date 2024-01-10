import React, { useRef, useEffect } from 'react';
import Card from '../Card/Card.js';

import './Home.css'
function Home() {
    const messages = [
        "Turn Your Projects with Precision!",
        "Measure Excellence with Our Gauges!",
        "Bolt Up Your Solutions with Strength!",
        "Drive Innovation with the Right Tools!",
        "Forge Success with Every Strike!",
        "Pinpoint Perfection in Every Detail!",
        "Nail Your Goals with Confidence!",
        "Rolling Towards Reliability and Durability!",
        "Powering Progress, One Engine at a Time!",
        "Lubricate Life's Journeys for Smooth Success!"
      ];

  
    const keywords=['Screw','Guage','Bolt','Screwdriver','Hammer','Pin','Nail','Tyre','Engine','Oil'];
    const prizes=[10,100,40,14,89,45,24,56,90,55];
    const imageLinks = [
        "https://source.unsplash.com/random/800x100/?screw",
        "https://source.unsplash.com/random/800x100/?guage",
        "https://source.unsplash.com/random/800x100/?bolt",
        "https://source.unsplash.com/random/800x100/?screwdriver",
        "https://source.unsplash.com/random/800x100/?hammer",
        "https://source.unsplash.com/random/800x100/?pin",
        "https://source.unsplash.com/random/800x100/?nail",
        "https://source.unsplash.com/random/800x100/?tyre",
        "https://source.unsplash.com/random/800x100/?engine",
        "https://source.unsplash.com/random/800x100/?oil"
      ];
return (
    <div>
    <div className='custom-grid'>
    {/*keywords.map((word, index) => (
          <Card key={index} title={word} />
    ))*/}
        {imageLinks.map((link, index) => (
          <Card key={index} prize={prizes[index]} title={keywords[index]} info={messages[index]} imageSrc={link} />
        ))}
    </div>
    </div>
 
);
}

export default Home;
