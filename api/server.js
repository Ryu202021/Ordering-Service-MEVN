// server.js
require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 6000;
const cors = require('cors');
const mongoose = require('mongoose');
//const config = require('./DB.js');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dishRoutes = require('./routes/dishRoutes');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(
    () => { console.log('Database is connected'); },
    err => { console.log('Can not connect to the database: ' + err); }
  );


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/orders', orderRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/dishes', dishRoutes);
app.listen(PORT, function () {
  console.log('Server is running on Port:', PORT);
});