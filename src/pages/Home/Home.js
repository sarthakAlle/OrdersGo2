/*import React, { useEffect, useState } from 'react';
import Card from '../Card/Card.js';
import './Home.css'
function Home() {

  const [toolsItem, setToolsItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

      const res_json = await response.json();

      console.log("Fetched data:", res_json);
      setToolsItem(res_json);
    
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  useEffect(() => {
    //loadData().then(() => setIsLoading(false));
    loadData()
  }, [toolsItem]);
  
  console.log("Tool Items:", toolsItem);

  return (
    <div className="custom-grid">
     {toolsItem?.length > 0 && (
        toolsItem.map((data, index) => (
          <Card
            key={index}
            prize={data.price}
            title={data.name}
            info={data.description}
            imageSrc={data.img}
          />
        ))
      )}

 
    </div>
  );
  
}

export default Home;
*/

/*
import React, { useRef, useEffect, useState } from 'react';
import Card from '../Card/Card.js';

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
    alert('use effect chl ra h ');
    loadData();
  }, []);

  console.log("Tool Items:", toolsItem);
  console.log("Tool Categories:", toolsCat);


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
*/

/*

import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.js';
import './Home.css';

function Home() {
  const [toolsData, setToolsData] = useState({ items: [], categories: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/displayData');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        setToolsData({ items: data[0], categories: data[1] });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    alert('loading');
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='custom-grid'>
      {toolsData.items.map((data, index) => (
        <Card
          key={data._id.$oid} // Use unique key from "_id"
          prize={data.price}
          title={data.name}
          info={data.description}
          imageSrc={data.img}
        />
      ))}
    </div>
  );
}

export default Home;
*/
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card.js';
import './Home.css';

function Home() {
  const [toolsData, setToolsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/displayData');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        console.log("yaha tak chl raha h ");
        const data = await response.json();
        setToolsData(data); // Use the actual structure received from your backend
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Ensure toolsData.items is an array before using map
  if (Array.isArray(toolsData)) {
    return (
      <div className='custom-grid'>
        {toolsData.map((data, index) => (
          <Card
            key={data._id.$oid} // Use a unique key
            prize={data.price}
            title={data.name}
            info={data.description}
            imageSrc={data.img}
          />
        ))}
      </div>
    );
  } else {
    // Handle the case where items is not an array
    return <div>No tools data available</div>;
  }
}

export default Home;
