const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dish = require("../models/dish");

let DishOrder = new Schema({
  dish: { type: Schema.Types.ObjectId, ref: 'Dish' },
  quantity: { type: Number, default: 1 }
});

let Order = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dishes: [DishOrder]
}, {
  collection: 'orders'
});

module.exports = mongoose.model('Order', Order);