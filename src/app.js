const express = require('express');
require('dotenv').config();
const db = require('../config/database');

const app = express();

app.get('/', (req, res) => {
  db.query('SELECT * from comments', (err, res) => {
    console.log(res.rows)
    db.end()
  });
  //console.log(res);
  res.send('Hello team');
});
 
module.exports = app;