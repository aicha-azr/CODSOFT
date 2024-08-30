const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateJWT = (req, res, next) => {
    console.log('Cookies:', req.cookies); 

    const token = req.cookies?.token; 

    if (token) {
       
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }

            
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized if no token is provided
    }
};

module.exports = authenticateJWT;
