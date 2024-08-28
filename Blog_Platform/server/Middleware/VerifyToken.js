const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticateJWT = (req, res, next) => {
    // Get the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (authHeader) {
        
        // Verify the token using your secret key
        jwt.verify(authHeader, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }

            // If the token is valid, attach the user info to the request object
            req.user = user;
            next(); 
        });
    } else {
        res.sendStatus(401); // Unauthorized if no token is provided
    }
};

module.exports = authenticateJWT;
