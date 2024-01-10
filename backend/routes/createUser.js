const express=require('express');
const router=express.Router();
const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');

router.post('/createUser',[
  body('email','incorrect email').isEmail(),
  body('name','incorrect name').isLength({min:6}),
  body('password','incorrect password').isLength({min:6})
],async (req,res)=>{

  const result = validationResult(req);
  if (result.isEmpty()) {
    return res.send(`Hello, ${req.body.User}!`);
  }

  res.send({ errors: result.array() });

    try {
        const { username, email, password,location } = req.body;
    
        // Validate input (you may want to use a validation library like 'validator')
        if (!username || !email || !password||!location) {
          return res.status(400).json({ error: 'Please provide username, email, password & location' });
        }
    
        // Create a new user instance
        const newUser = new User({
          username,
          email,
          password,
          location
        });
    
        // Save the user to the database
        await newUser.save();
    
        res.status(201).json(newUser);
      } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

module.exports=router;