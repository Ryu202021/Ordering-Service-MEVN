const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dish = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    tags: [String]
}, {
    collection: 'dishes'
});

module.exports = mongoose.model('Dish', Dish);