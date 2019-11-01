const express = require('express');
require('dotenv').config();
// Routes import
const auth = require('./routes/auth');

const app = express();

app.use(express.json());

// For testing purpose
app.get('/', (req, res) => {
  res.send('Hello team');
});
app.use('/auth', auth);
module.exports = app;
