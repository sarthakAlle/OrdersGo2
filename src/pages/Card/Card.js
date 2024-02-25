import React, { useState } from 'react';
import './Card.css';

export default function Card({prize, imageSrc, title, info }) {
  const [selectedOption, setSelectedOption] = useState('half'); // Initial state for the selected option
  const [quantity, setQuantity] = useState(1); // Initial state for the quantity

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Perform a function based on the selected value
    handleFunction(selectedValue);
  };

  const handleQuantityChange = (event) => {
    const selectedQuantity = parseInt(event.target.value, 10);
    setQuantity(selectedQuantity);
  };

  const handleFunction = (selectedValue) => {
    // Your logic based on the selected value
    if (selectedValue === 'full') {
      // Update the multiplier for full option
      setQuantity((prevQuantity) => prevQuantity * 2);
    }else {
      setQuantity((prevQuantity) => prevQuantity / 2); 
    }
  };

  return (
    <div className='custom-card'>
      <img className="card-img-top" src={imageSrc} alt="Card image cap" />
      <div>
        <h5>{title}</h5>
        <center>
        {info}
        </center>
        
        <select id='select' className='quantity' onChange={handleChange} value={selectedOption}>
          <option value="half">Half</option>
          <option value="full">Full</option>
        </select>
        <select className='quantity' onChange={handleQuantityChange}>
          {Array.from(Array(6), (e, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <div className="price-button">Total prize {(quantity * prize).toFixed(2)}</div>
      </div>
    </div>
  );
}
