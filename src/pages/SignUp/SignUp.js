/*import React, { useState } from 'react';
import './SignUp.css';
import { Link, json } from 'react-router-dom';
import { body } from 'express-validator';


const Signup = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupLocation, setSignupLocation] = useState('');
  
  async function handleSignup(e) {
    e.preventDefault();
  
    try {
      // Build the request body with correct state values
      const body = JSON.stringify({
        name: signupUsername,
        email: signupEmail,
        password: signupPassword,
        location: signupLocation,
      });
  
      // Send the POST request to the server
      const response = await fetch("http://localhost:5000/api/createUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      });
  
      // Handle the response
      if (!response.ok) {
        // Check for server-side validation errors
        if (response.status === 400 && await response.json().then(json => json.errors)) {
          const validationErrors = json.errors.map(error => error.msg).join(', ');
          alert(`Validation failed: ${validationErrors}`);
        } else {
          // Handle other server errors
          const errorMessage = await response.text();
          console.error('Signup error:', errorMessage);
          alert(`Error during signup: ${errorMessage}`);
        }
      } else {
        // Successful signup (handle accordingly)
        console.log('Signup successful!');
        // Redirect to success page, show confirmation message, etc.
      }
    } catch (error) {
      // Handle network or general fetch errors
      console.error('Fetch error:', error.message);
      alert("Error during signup. Please check the browser console for details.");
    }
  }
  

  return (
  <div className='custom-grid3'>
  <div className='signUp-card'>
    <h2>Sign Up</h2>
    <form onSubmit={handleSignup}>
      <div>
        <input
          placeholder='Username'
          type="text"
          value={signupUsername.name}
          onChange={(e) => setSignupUsername({ name: e.target.value })}
        />
      </div>
      {json.errors && json.errors.find(error => error.param === 'name') && (
        <p className="error-message">{json.errors.find(error => error.param === 'name').msg}</p>
      )}

      <div>
        <input
          placeholder='Email'
          type="email"
          value={signupEmail.email}
          onChange={(e) => setSignupEmail({ email: e.target.value })}
        />
      </div>
      {json.errors && json.errors.find(error => error.param === 'email') && (
        <p className="error-message">{json.errors.find(error => error.param === 'email').msg}</p>
      )}

      <div>
        <input
          placeholder='Password'
          type="password"
          value={signupPassword.password}
          onChange={(e) => setSignupPassword({ password: e.target.value })}
        />
      </div>
      {json.errors && json.errors.find(error => error.param === 'password') && (
        <p className="error-message">{json.errors.find(error => error.param === 'password').msg}</p>
      )}

      <div>
        <input
          placeholder='Location'
          type="location"
          value={signupLocation.geolocation}
          onChange={(e) => setSignupLocation({ geolocation: e.target.value })}
        />
      </div>
      {json.errors && json.errors.find(error => error.param === 'location') && (
        <p className="error-message">{json.errors.find(error => error.param === 'location').msg}</p>
      )}

      <button className='login-button' type="submit">
        Sign Up
      </button>
      <center>
      <p>Already have an account?
        <Link to='/Login'> Login</Link>
      </p>
      </center>

    </form>
  </div>
</div>
);
};

export default Signup;*/
import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupLocation, setSignupLocation] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  async function handleSignup(e) {
    e.preventDefault();

    try {
      // Build the request body with correct state values
      const requestBody = {
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
        location: signupLocation,
      };

      // Send the POST request to the server using Axios
      const response = await axios.post("http://localhost:5000/api/createUser", requestBody);

      // Handle the response
      console.log(response.data); // You can customize this based on your server response

      // Successful signup (handle accordingly)
      console.log('Signup successful!');
      // Redirect to success page, show confirmation message, etc.
    } catch (error) {
      // Handle network or general fetch errors
      console.error('Axios error:', error);

      // Check for server-side validation errors
      if (error.response && error.response.status === 400 && error.response.data.errors) {
        const validationErrors = error.response.data.errors.map(error => error.msg);
        setErrorMessages(validationErrors);
      } else {
        // Handle other server errors
        console.error('Signup error:', error.message);
        alert(`Error during signup: ${error.message}`);
      }
    }
  }

  return (
    <div className='custom-grid3'>
      <div className='signUp-card'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div>
            <input
              placeholder='Username'
              type="text"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
          </div>
          {errorMessages.includes('name') && (
            <p className="error-message">{errorMessages.find(error => error === 'name')}</p>
          )}

          <div>
            <input
              placeholder='Email'
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </div>
          {errorMessages.includes('email') && (
            <p className="error-message">{errorMessages.find(error => error === 'email')}</p>
          )}

          <div>
            <input
              placeholder='Password'
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </div>
          {errorMessages.includes('password') && (
            <p className="error-message">{errorMessages.find(error => error === 'password')}</p>
          )}

          <div>
            <input
              placeholder='Location'
              type="location"
              value={signupLocation}
              onChange={(e) => setSignupLocation(e.target.value)}
            />
          </div>
          {errorMessages.includes('location') && (
            <p className="error-message">{errorMessages.find(error => error === 'location')}</p>
          )}

          <button className='login-button' type="submit">
            Sign Up
          </button>
          <center>
            <p>Already have an account?
              <Link to='/Login'> Login</Link>
            </p>
          </center>

        </form>
      </div>
    </div>
  );
};

export default Signup;


