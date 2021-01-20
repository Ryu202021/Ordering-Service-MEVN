const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dish = require('../models/dish');

let Restaurant = new Schema({
  name: String,
  address: String,
  phoneNumber: String,
  menu: [{ type: Schema.Types.ObjectId, ref: 'Dish' }],
}, {
  collection: 'restaurants'
});

module.exports = mongoose.model('Restaurant', Restaurant);