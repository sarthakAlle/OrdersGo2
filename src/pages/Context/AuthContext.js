// AuthContext.js

import { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  
  const login = async (username, password) => {

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();

      // Save the token in a cookie
      Cookies.set('authToken', token);

      // Set isLoggedIn to true
      setLoggedIn(true);

      //console.log('Login successful!', token);
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
    }
  };

  const logout = () => {
    // Remove the token cookie
    Cookies.remove('authToken');

    // Set isLoggedIn to false
    setLoggedIn(false);
    
  };
  useEffect(() => {
    // Check for the existence of a token on application load
    const authToken = Cookies.get('authToken');
    if (authToken) {
      // Set isLoggedIn to true if a token exists
      setLoggedIn(true);

    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};