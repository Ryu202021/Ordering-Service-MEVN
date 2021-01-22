const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Dish = require("../models/dish");

let DishOrder = new Schema({
  dish: { type: Schema.Types.ObjectId, ref: 'Dish' },
  quantity: { type: Number, default: 1 }
});

let Order = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  delivered: { type: Boolean, default: false },
  dateOrdered: { type: Date, default: Date.now() },
  dishes: { type: [DishOrder], default: [] }
}, {
  collection: 'orders'
});

module.exports = {
  Order: mongoose.model('Order', Order),
  DishOrder: mongoose.model('DishOrder', DishOrder)
};