import React, { useState } from 'react';
import './SignUp.css';
import { Link, json } from 'react-router-dom';
import { body } from 'express-validator';


const Signup = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupLocation, setSignupLocation] = useState('');
  

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createUser", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ name: signupUsername.name, email: signupEmail.email, password: signupPassword.password, location: signupLocation.geolocation })
      });
  
      const json1 = await response.json();
      console.log(json1);
      if (!json1.success) {
        if (json1.errors) {
          // Handle validation errors
          const validationErrors = json1.errors.map(error => error.msg).join(', ');
          alert(`Validation failed: ${validationErrors}`);
        } else {
          // Handle other errors
          console.error('Signup error:', json1.errorMessage);
          alert("Error during signup. Please check the console for details.");
        }
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert("Error during signup. Please check the console for details.");
    }
  };
  
  

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

export default Signup;

