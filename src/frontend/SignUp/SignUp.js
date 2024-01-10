import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Signup:', signupUsername, signupEmail, signupPassword);
  };

  return (
    <div className='custom-card signUp-card'>
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
        <div>
          <input
            placeholder='email'
            type="email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='password'
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <button className='login-button' type="submit">
          Sign Up
        </button>
        <p>Already have an account? 
            <Link to='/Login'> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

