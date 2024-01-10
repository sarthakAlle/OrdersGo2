import React from "react";
import Home from './frontend/Home/Home.js';
import Login from './frontend/Login/Login.js';
import Navbar from "./frontend/Navbar/Navbar.js";
import Footer from "./frontend/Footer/Footer.js";
import Corousal from "./frontend/Carousal/Carousal.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './frontend/SignUp/SignUp.js'; 
import './App.css';


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
            <div className="custom-container">
            <Router>
            <Navbar/>
            <Corousal/>
            <Routes>
            <Route path='/' element={<Home />} index />
            <Route path="/Home" element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Login/Signup' element={<SignUp/>} />
            </Routes>
            <Footer/>
           </Router>
            </div>
    </div>
  );
}

export default App;