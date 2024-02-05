import React, { useState } from 'react';
import './Login.css';
import { Link ,useNavigate} from 'react-router-dom';
import '../Card/Card.css'
import '../Home/Home.css'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigate =useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginUser", {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword })
      });
  
      const json = await response.json();
  
      console.log('Server Response:', json); // Log the entire response to the console
  
      if (!json.success) {
        if (json.errors) {
          // Handle validation errors
          const validationErrors = json.errors.map(error => error.msg).join(', ');
          alert(`Validation failed: ${validationErrors}`);
        } else if (json.error) {
          // Handle other errors
          console.error('Login error:', json.error);
          alert(`Error during login: ${json.error}`);
        } else {
          // If there is no specific error message, provide a generic one
          console.error('Login error: Unknown error');
          alert("Error during login. Please check the console for details.");
        }
      } else {
        localStorage.setItem("authToken",json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate('/');
      }
    } catch (error) {
      console.error('Fetch error:', error.message);
      alert("Error during login. Please check the console for details.");
    }
  };
  

  return (
<div className='custom-grid2'>
    <div className='custom-card login-card'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            placeholder='email'
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='password'
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <button className='login-button' type="submit">
          Login
        </button>
      </form>
      <center>
      <p>dont't have an account yet? <Link to ='./SignUp'>
      Create one
      </Link>
      </p>
      </center>
 
    </div>
    </div>
  );
};

export default Login;
