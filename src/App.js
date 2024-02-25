import React from "react";
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Navbar from "./pages/Navbar/Navbar.js";
import Footer from "./pages/Footer/Footer.js";
import Corousal from "./pages/Carousal/Carousal.js";
import Services from "./pages/Services/Services.js";
import  About from "./pages/About/About.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp/SignUp.js'; 
import './App.css';
import Profile from './pages/Profile/Profile.js'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div className="App">    
            <Router>
            <Navbar/>
            <Corousal/>
            <Routes>
            <Route path='/' element={<Home />} index />
            <Route path="/Home" element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path="/Services" element={<Services />} />
            <Route path='/About' element={<About />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path='/Login/Signup' element={<SignUp/>} />
            </Routes>
            <Footer/>
           </Router>
            </div>
   
  );
}

export default App;