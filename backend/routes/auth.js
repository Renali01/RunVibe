const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const User = require('../models/user');

// Load environment variables from .env file
require('dotenv').config();

// MongoDB connection string
const uri = process.env.MONGODB_URI;

// User registration
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      password: hashedPassword,
    });

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Save the user to the database
    await client.db('runvibeuser').collection('users').insertOne(user);

    // Close the MongoDB connection
    await client.close();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Connect to MongoDB
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Find the user by username
    const user = await client.db('runvibeuser').collection('users').findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    // Compare the provided password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
        console.error('Login failed. Provided password:', hashedPass);
        console.error('Hashed password stored in the database:', user.password);
        return res.status(401).json({ error: 'Invalid password' });
    }

    // Create and send a JSON Web Token (JWT) using the secret key from environment variables
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });

    // Close the MongoDB connection
    await client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
