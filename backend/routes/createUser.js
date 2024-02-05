const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/createUser', [
  body('email', 'Invalid email format').isEmail(),
  body('name', 'Name must be at least 6 characters long').isLength({ min: 6 }),
  body('password', 'Password must be at least 6 characters long').isLength({ min: 6 })
], async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array(), success: false, errorMessage: 'Validation failed.' });
    }
    if (!name || !email || !password || !location) {
      return res.status(400).json({ error: 'Please provide name, email, password & location', success: false, errorMessage: 'Bad request.' });
    }
    const {name, email, password, location } = req.body;


    console.log("idhar tak chl ra h ");
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`idhar tak chl ra h aur pwd: ${hashedPassword}`);
    const newUser = new User({
      username: name,
      email:email,
      password: hashedPassword,
      location:location,
    });
    console.log(newUser);
    await newUser.save();
    console.log(`user ban gao and : ${newUser.username}, ${newUser.password},${newUser.email},${newUser.location}`);
    console.log('User created successfully:', newUser);
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error', success: false, errorMessage: 'An error occurred during user creation.' });
  }
});

module.exports = router;
