const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Models/UserSchema');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Controllers = {
    Signup: async (req, res) => {
        try {
            
            if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            const { name, email, password } = req.body;
            
            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user with the hashed password
            const newUser = await User.create({ name, email, password: hashedPassword });

           
            if (newUser) {
                return res.status(200).json({ message: 'Your account is successfully created', user: newUser });
            } else {
                return res.status(400).json({ message: 'Your account could not be created, please try again' });
            }
        } catch (error) {
           
            console.error('Error during signup:', error);
            return res.status(500).json({ message: 'An error occurred during signup', error: error.message });
        }
    },
    Login: async (req, res) => {
        try {
            // Check if the body contains email/username and password
            if (!req.body || (!req.body.email && !req.body.name) || !req.body.password) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const { email, name, password } = req.body;

            // Find the user by email or name
            const user = await User.findOne(email ? { email } : { name });

            // If user is not found
            if (!user) {
                return res.status(404).json({ message: "You don't have an account" });
            }

            // Check if the password is correct
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Incorrect password' });
            }

            // Generate JWT
            const token = jwt.sign(
                { userId: user._id, email: user.email }, // payload
                process.env.SECRET_KEY, // secret key 
                { expiresIn: '1h' } // token expiration time
            );
            res.cookie("token", token, {
                withCredentials: true,
                httpOnly: false,
              });
            // Respond with the token
            return res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error('Error during login:', error);
            return res.status(500).json({ message: 'An error occurred during login', error: error.message });
        }
    }

    
};

module.exports = Controllers;
