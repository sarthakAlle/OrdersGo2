import React, { useRef, useEffect, useState } from 'react';
import Card from '../Card/Card.js';
import Footer from '../Footer/Footer.js';
import './Home.css'
function Home() {

  const [toolsItem, setToolsItem] = useState([]);
  const [toolsCat, setToolsCat] = useState([]);
  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/displayData", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      response = await response.json();
      console.log("Fetched data:", response);
      setToolsItem(response[0]);
      setToolsCat(response[1]);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log("Tool Items:", toolsItem);
  console.log("Tool Categories:", toolsCat);


  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className='custom-grid'>
      {
        toolsItem.length !== 0 ? (
          toolsItem.map((data, index) => (
            <Card key={index} prize={data.price} title={data.name} info={data.description} imageSrc={data.img} />
          ))
        ) : (
          <div></div>
        )
      }
    </div>
  );
}

export default Home;
