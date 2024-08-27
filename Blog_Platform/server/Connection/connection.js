const mongoose = require('mongoose');
require('dotenv').config();

const { URL } = process.env;

// Establish the connection
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Successfully connected to the database'))
  .catch((e) => console.error('Error connecting to the database', e));



module.exports = mongoose;
