'use strict';

const express = require('express');

// Constants
const PORT = 8044;


// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Arpita..................\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
cvx
