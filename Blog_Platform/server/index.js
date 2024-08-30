const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


require('./Connection/connection');


app.use(express.json());
app.use(cookieParser());

// Configure CORS to allow credentials
app.use(
    cors({
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true, // Allows cookies to be sent and received
    })
);


const authenticateJWT = require('./Middleware/VerifyToken');


const router = require('./Routes/routers');
app.use(router);


app.get('/', authenticateJWT, (req, res) => {
    res.json('Hello world');
});

// Start the server
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
