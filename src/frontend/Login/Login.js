import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', loginEmail, loginPassword);
  };

  return (
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
      <p>dont't have an account yet? <Link to ='./SignUp'>
      Create one
      </Link>
      </p>
    </div>
  );
};

export default Login;
