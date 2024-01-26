const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

router.post('/createUser', [
  body('email', 'incorrect email').isEmail(),
  body('name', 'incorrect name').isLength({ min: 6 }),
  body('password', 'incorrect password').isLength({ min: 6 })
], async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array(), success: false, errorMessage: 'Validation failed.' });
  }

  try {
    let { name, email, password, location } = req.body;
    if (!name || !email || !password || !location) {
      return res.status(400).json({ error: 'Please provide name, email, password & location', success: false, errorMessage: 'Bad request.' });
    }

    var salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user instance and save it to the database
    await User.create({
      username: req.body.name,
      email: req.body.email,
      password: secPassword,
      location: req.body.location
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error', success: false, errorMessage: 'An error occurred during user creation.' });
  }
});

module.exports = router;
