const express = require('express');
const app = express();
const db = require('./Connection/connection')

app.get('/', (req, res) => { 
    if (db.readyState === 1) {
        res.json('Database connection is successful');
    } else {
        res.json('Database connection is not established');
    }
    res.json('hello world');
});


app.listen(8080, () => {
    console.log('Server is running on port 8080');
});