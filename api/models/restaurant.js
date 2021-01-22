const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dish = require('../models/dish');

let Restaurant = new Schema({
  name: {type: String},
  address: {type: String, default: "85 Moatfield Drive"},
  phoneNumber: {type: String, default: "XXX-XXX-XXXX"},
  menu: [{ type: Schema.Types.ObjectId, ref: 'Dish', default: null }],
  tags: {type: [String], default: ["food"]}
}, {
  collection: 'restaurants'
});

module.exports = mongoose.model('Restaurant', Restaurant);