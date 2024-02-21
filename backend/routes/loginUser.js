const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken");


router.post('/loginUser', async (req, res) => {
    let email=req.body.email;
    try {
     let userData=await User.findOne({email});
     if(!userData){
      return res.status(400).json({error:"try logging with correct email"});
     }
     let passCompare=await bcrypt.compare(req.body.password,userData.password);
     if(!(passCompare)){
      return res.status(400).json({error:"enter correct password"});
     }
     const data={
      user:{
        id:userData.id
      }
     }
     const authToken=jwt.sign(data,process.env.JWT_SECRET);
   return res.json({success:true,authToken:authToken});
    } catch (error) {
     console.log(error);
     return res.json({success:false});
    }
  });
  
  module.exports = router;