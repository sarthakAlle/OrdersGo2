const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, email, password,location } = req.body;
   

    if (!email) {
      return res.status(400).json({ error: 'Please provide email '});
    }else
    if (!password) {
      return res.status(400).json({ error: 'Please providepassword ' });
    }else
    if (!location) {
      return res.status(400).json({ error: 'Please provide  location' });
    }else
    if (!username) {
      return res.status(400).json({ error: 'Please provide username' });
    }

    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
      return res.status(404).json({ error: `user already exists` });
    }
    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password,
      location
    });
   console.log(newUser);
    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Validate input
    if (!username || !email) {
      return res.status(400).json({ error: 'Please provide username and email' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a user by ID
exports.deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error('Error deleting user by ID:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.signUpUser= async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    // If the user is not found, return an error
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is not valid, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If email and password are correct, you can generate a token here (e.g., using JWT) and send it in the response
    // For simplicity, let's assume you have a function to generate a JWT token
    const token = generateToken(user);

    // You can also set the token as a cookie or in the response header based on your authentication strategy

    // Send a success response with the token
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

